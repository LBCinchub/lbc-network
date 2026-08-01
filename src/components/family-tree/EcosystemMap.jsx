import React, { useRef, useState, useLayoutEffect, useMemo } from 'react';
import { nodes, getAncestors, getDescendants } from './nodes';
import { usePrefersReducedMotion } from './hooks';

const PLATFORM_IDS = nodes.filter((n) => n.level === 3).map((n) => n.id);
const EMERGING_IDS = nodes.filter((n) => n.level === 4).map((n) => n.id);

function tierFor(n) {
  if (n.level === 1)
    return {
      cls: 'w-52 md:w-64 lg:w-72 min-h-[124px] px-3 py-4',
      icon: 'w-7 h-7',
      title: 'text-lg',
      border: 'border-violet-400/50',
      grad: 'from-violet-600/25 to-blue-600/25',
    };
  if (n.level === 2)
    return {
      cls: 'w-44 md:w-52 lg:w-60 min-h-[108px] px-3 py-4',
      icon: 'w-6 h-6',
      title: 'text-base',
      border: 'border-blue-400/50',
      grad: 'from-blue-600/25 to-cyan-600/25',
    };
  if (n.level === 3)
    return {
      cls: 'w-28 md:w-32 lg:w-44 min-h-[98px] px-2 py-3',
      icon: 'w-5 h-5',
      title: 'text-sm',
      border: 'border-white/10',
      grad: 'from-white/[0.06] to-transparent',
    };
  return {
    cls: 'w-28 md:w-32 lg:w-40 min-h-[86px] px-2 py-3',
    icon: 'w-4 h-4',
    title: 'text-xs',
    border: 'border-white/10',
    grad: 'from-white/[0.04] to-transparent',
  };
}

export default function EcosystemMap({ selectedId, onSelect, hoveredId, onHover, filter }) {
  const containerRef = useRef(null);
  const nodeRefs = useRef({});
  const [geom, setGeom] = useState(null);
  const reduced = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const measure = () => {
      const container = containerRef.current;
      if (!container) return;
      const cRect = container.getBoundingClientRect();
      const centers = {};
      nodes.forEach((n) => {
        const el = nodeRefs.current[n.id];
        if (!el) return;
        const r = el.getBoundingClientRect();
        centers[n.id] = {
          x: r.left - cRect.left + r.width / 2,
          y: r.top - cRect.top + r.height / 2,
          top: r.top - cRect.top,
          bottom: r.top - cRect.top + r.height,
        };
      });
      setGeom({ centers });
    };
    measure();
    const t = setTimeout(measure, 280);
    let ro;
    if (typeof ResizeObserver !== 'undefined' && containerRef.current) {
      ro = new ResizeObserver(measure);
      ro.observe(containerRef.current);
    }
    window.addEventListener?.('load', measure);
    return () => {
      clearTimeout(t);
      ro?.disconnect();
      window.removeEventListener?.('load', measure);
    };
  }, []);

  const focusId = hoveredId ?? selectedId;
  const related = useMemo(() => {
    if (!focusId) return null;
    return new Set([
      focusId,
      ...getAncestors(focusId).map((a) => a.id),
      ...getDescendants(focusId).map((d) => d.id),
    ]);
  }, [focusId]);

  const anyEmergingRelated = related
    ? EMERGING_IDS.some((id) => related.has(id))
    : false;

  const connectors = useMemo(() => {
    if (!geom?.centers) return [];
    const c = geom.centers;
    const f = c['lbc-network'];
    const p = c['lbc-protocol'];
    const plats = PLATFORM_IDS.map((id) => ({ id, c: c[id] }))
      .filter((x) => x.c)
      .sort((a, b) => a.c.x - b.c.x);
    const emer = EMERGING_IDS.map((id) => ({ id, c: c[id] }))
      .filter((x) => x.c)
      .sort((a, b) => a.c.x - b.c.x);
    const out = [];
    if (f && p)
      out.push({
        id: 'spine1',
        type: 'spine1',
        childId: 'lbc-protocol',
        d: `M ${f.x} ${f.bottom} L ${p.x} ${p.top}`,
      });
    if (p && plats.length) {
      const busY = Math.min(...plats.map((x) => x.c.top)) - 18;
      out.push({
        id: 'spine2',
        type: 'spine2',
        childId: 'lbc-protocol',
        d: `M ${p.x} ${p.bottom} L ${p.x} ${busY}`,
      });
      if (plats.length > 1)
        out.push({
          id: 'pbus',
          type: 'pbus',
          childId: 'lbc-protocol',
          d: `M ${plats[0].c.x} ${busY} L ${plats[plats.length - 1].c.x} ${busY}`,
        });
      plats.forEach((x) =>
        out.push({
          id: `ptick-${x.id}`,
          type: 'ptick',
          childId: x.id,
          d: `M ${x.c.x} ${busY} L ${x.c.x} ${x.c.top}`,
        })
      );
      if (emer.length) {
        const ebusY = Math.min(...emer.map((x) => x.c.top)) - 18;
        const mid = Math.floor(plats.length / 2);
        const gapX = (plats[mid - 1].c.x + plats[mid].c.x) / 2;
        out.push({
          id: 'spine3',
          type: 'spine3',
          childId: 'lbc-protocol',
          d: `M ${gapX} ${busY} L ${gapX} ${ebusY}`,
        });
        if (emer.length > 1)
          out.push({
            id: 'ebus',
            type: 'ebus',
            childId: 'lbc-protocol',
            d: `M ${emer[0].c.x} ${ebusY} L ${emer[emer.length - 1].c.x} ${ebusY}`,
          });
        emer.forEach((x) =>
          out.push({
            id: `etick-${x.id}`,
            type: 'etick',
            childId: x.id,
            d: `M ${x.c.x} ${ebusY} L ${x.c.x} ${x.c.top}`,
          })
        );
      }
    }
    return out;
  }, [geom]);

  const nodeMismatch = (n) =>
    (filter === 'Live' && n.status !== 'LIVE') ||
    (filter === 'Building' && n.status !== 'BUILDING');

  const connStyle = (conn) => {
    const child = nodes.find((n) => n.id === conn.childId);
    const childMis = child && nodeMismatch(child);
    if (conn.type === 'pbus' || conn.type === 'ebus')
      return { stroke: 'rgba(255,255,255,0.22)', width: 1 };
    let active = false;
    if (related) {
      if (conn.type === 'spine1' || conn.type === 'spine2') active = true;
      else if (conn.type === 'ptick' || conn.type === 'etick')
        active = related.has(conn.childId);
      else if (conn.type === 'spine3') active = anyEmergingRelated;
    }
    if (childMis) return { stroke: 'rgba(255,255,255,0.08)', width: 1 };
    if (active) return { stroke: '#A78BFA', width: 2 };
    if (related) return { stroke: 'rgba(255,255,255,0.1)', width: 1 };
    return { stroke: 'rgba(255,255,255,0.28)', width: 1 };
  };

  const pulseable = (conn) =>
    ['spine1', 'spine2', 'spine3', 'ptick', 'etick'].includes(conn.type);

  const renderNode = (n) => {
    const tier = tierFor(n);
    const Icon = n.icon;
    const selected = selectedId === n.id;
    const mis = nodeMismatch(n);
    const dim = mis || (related && !related.has(n.id));
    return (
      <button
        key={n.id}
        ref={(el) => {
          nodeRefs.current[n.id] = el;
        }}
        type="button"
        onClick={() => onSelect(n.id)}
        onMouseEnter={() => onHover(n.id)}
        onMouseLeave={() => onHover(null)}
        onFocus={() => onHover(n.id)}
        onBlur={() => onHover(null)}
        aria-pressed={selected}
        aria-label={`${n.publicName}, ${n.role}, ${n.status}. ${n.description}`}
        style={{
          opacity: dim ? 0.3 : 1,
          transition: 'opacity 0.3s, transform 0.3s, border-color 0.3s',
        }}
        className={`group relative ${tier.cls} rounded-2xl border ${
          selected ? 'border-violet-400 ring-2 ring-violet-400/40' : tier.border
        } bg-gradient-to-br ${tier.grad} hover:border-violet-400/60 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 flex flex-col items-center justify-center text-center cursor-pointer`}
      >
        <span
          className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full"
          style={{ background: n.status === 'LIVE' ? '#4ADE80' : '#60A5FA' }}
          aria-hidden="true"
        />
        <Icon className={`${tier.icon} text-white/70 mb-2`} />
        <span className={`${tier.title} font-semibold text-white`}>
          {n.publicName}
        </span>
        <span className="text-[10px] text-white/40 mt-1 font-mono">{n.domain}</span>
        <span className="text-[9px] uppercase tracking-[0.15em] text-white/30 mt-1">
          {n.role}
        </span>
      </button>
    );
  };

  return (
    <div ref={containerRef} className="relative w-full select-none">
      {geom && (
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          style={{ overflow: 'visible' }}
          aria-hidden="true"
        >
          {connectors.map((conn) => {
            const s = connStyle(conn);
            return (
              <path
                key={conn.id}
                id={`p-${conn.id}`}
                d={conn.d}
                fill="none"
                stroke={s.stroke}
                strokeWidth={s.width}
                strokeLinecap="round"
                style={{ transition: 'stroke 0.3s, stroke-width 0.3s' }}
              />
            );
          })}
          {!reduced &&
            connectors
              .filter(pulseable)
              .map((conn, i) => {
                const child = nodes.find((n) => n.id === conn.childId);
                if (child && nodeMismatch(child)) return null;
                return (
                  <circle
                    key={`dot-${conn.id}`}
                    r={2.6}
                    fill="#C4B5FD"
                    opacity={0.85}
                  >
                    <animateMotion
                      dur="2.8s"
                      begin={`${(i % 6) * 0.35}s`}
                      repeatCount="indefinite"
                    >
                      <mpath xlinkHref={`#p-${conn.id}`} />
                    </animateMotion>
                  </circle>
                );
              })}
        </svg>
      )}
      <div className="relative z-10 flex flex-col items-center">
        {renderNode(nodes[0])}
        <div className="h-12 md:h-16" aria-hidden="true" />
        {renderNode(nodes[1])}
        <div className="h-16 md:h-24" aria-hidden="true" />
        <div className="flex justify-between w-full items-start gap-2 md:gap-3 lg:gap-4">
          {PLATFORM_IDS.map((id) => renderNode(nodes.find((n) => n.id === id)))}
        </div>
        <div className="h-16 md:h-24" aria-hidden="true" />
        <div className="flex justify-between w-full items-start gap-2 md:gap-3 lg:gap-4">
          {EMERGING_IDS.map((id) => renderNode(nodes.find((n) => n.id === id)))}
        </div>
      </div>
    </div>
  );
}