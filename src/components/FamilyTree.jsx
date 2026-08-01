import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import EcosystemMap from './family-tree/EcosystemMap';
import MobileTimeline from './family-tree/MobileTimeline';
import { getNode, getChildren, LEVELS } from './family-tree/nodes';
import { useMediaQuery, usePrefersReducedMotion } from './family-tree/hooks';

const FILTERS = [
  { key: 'All', label: 'All' },
  { key: 'Live', label: 'Live' },
  { key: 'Building', label: 'Building' },
];

export default function FamilyTree() {
  const [selectedId, setSelectedId] = useState('lbc-network');
  const [hoveredId, setHoveredId] = useState(null);
  const [filter, setFilter] = useState('All');
  const isDesktop = useMediaQuery('(min-width: 768px)');
  const reduced = usePrefersReducedMotion();

  const selected = getNode(selectedId);
  const parent = selected?.parentId ? getNode(selected.parentId) : null;
  const children = selected ? getChildren(selected.id) : [];
  const isHttp = selected?.href.startsWith('http');

  return (
    <section id="ecosystem" className="relative z-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-20" />
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-3">
            LBC ECOSYSTEM
          </p>
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            One network. Every layer connected.
          </h2>
          <p className="text-white/45 max-w-2xl leading-relaxed mb-10">
            Explore how LBC Network connects protocol, intelligence, community,
            operations, and emerging products into one digital ecosystem.
          </p>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-10">
            <div
              role="group"
              aria-label="Filter ecosystem nodes"
              className="inline-flex p-1 rounded-xl border border-white/10 bg-white/[0.02]"
            >
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  aria-pressed={filter === f.key}
                  className={`px-4 py-2 rounded-lg text-xs font-semibold transition-colors min-h-[36px] ${
                    filter === f.key
                      ? 'bg-violet-500/20 text-violet-200 border border-violet-400/30'
                      : 'text-white/50 hover:text-white/80 border border-transparent'
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-4 text-[11px] flex-wrap">
              <span className="flex items-center gap-1.5 text-white/50">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#4ADE80' }}
                />{' '}
                LIVE
              </span>
              <span className="flex items-center gap-1.5 text-white/50">
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ background: '#60A5FA' }}
                />{' '}
                BUILDING
              </span>
              <span className="hidden sm:inline text-white/30">
                L1 Foundation → L4 Emerging
              </span>
            </div>
          </div>

          {/* Map (desktop) / Timeline (mobile) */}
          {isDesktop ? (
            <EcosystemMap
              selectedId={selectedId}
              onSelect={setSelectedId}
              hoveredId={hoveredId}
              onHover={setHoveredId}
              filter={filter}
            />
          ) : (
            <MobileTimeline filter={filter} />
          )}

          {/* Detail panel (desktop only) */}
          {isDesktop && selected && (
            <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.03] p-6 lg:p-8">
              <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span
                      className="w-2.5 h-2.5 rounded-full"
                      style={{
                        background:
                          selected.status === 'LIVE' ? '#4ADE80' : '#60A5FA',
                      }}
                    />
                    <span className="text-[10px] uppercase tracking-[0.2em] text-white/40">
                      {selected.role}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {selected.publicName}
                  </h3>
                  <p className="text-sm text-white/40 font-mono mb-4">
                    {selected.domain}
                  </p>
                  <p className="text-white/60 leading-relaxed mb-5 max-w-xl">
                    {selected.description}
                  </p>
                  <div className="flex flex-col gap-2 text-xs">
                    <div className="flex items-start gap-2 text-white/55">
                      <span className="text-white/30 w-24 shrink-0">Layer</span>
                      <span>
                        L{selected.level} · {selected.role}
                      </span>
                    </div>
                    <div className="flex items-start gap-2 text-white/55">
                      <span className="text-white/30 w-24 shrink-0">
                        Connected to
                      </span>
                      <span>
                        {parent ? parent.publicName : 'Root foundation'}
                        {children.length > 0 &&
                          ` · powers ${children.map((c) => c.publicName).join(', ')}`}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-64 shrink-0 flex flex-col">
                  <span
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-[11px] font-bold mb-4 self-start"
                    style={{
                      borderColor: selected.status === 'LIVE' ? '#4ADE80' : '#60A5FA',
                      color: selected.status === 'LIVE' ? '#4ADE80' : '#60A5FA',
                    }}
                  >
                    {selected.status}
                  </span>
                  {isHttp ? (
                    <a
                      href={selected.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold transition-all min-h-[44px]"
                    >
                      Visit Site <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <div className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-xl border border-white/10 text-white/40 text-sm min-h-[44px]">
                      In development
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* Level legend (desktop) */}
          {isDesktop && (
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[10px] uppercase tracking-widest text-white/30">
              {LEVELS.map((l) => (
                <span key={l.level}>
                  L{l.level} — {l.label}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}