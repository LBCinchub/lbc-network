import React from 'react';
import { ArrowUpRight, Circle } from 'lucide-react';
import Reveal from './Reveal';
import { liveProducts, buildingProducts, nextProducts } from '@/data/ecosystem';

const STATUS = {
  LIVE: { dot: '#4ADE80', text: 'text-green-400', border: 'border-green-400/30' },
  BUILDING: { dot: '#60A5FA', text: 'text-blue-400', border: 'border-blue-400/30' },
  NEXT: { dot: '#A78BFA', text: 'text-violet-400', border: 'border-violet-400/30' },
};

function Card({ p }) {
  const Icon = p.icon;
  const s = STATUS[p.status];
  const external = p.href.startsWith('http');
  return (
    <div className="group relative p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
          <Icon className="w-5 h-5 text-white/70" />
        </span>
        <span
          className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border text-[10px] font-bold ${s.border} ${s.text}`}
        >
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: s.dot }} />
          {p.status}
        </span>
      </div>
      <h3 className="text-base font-semibold text-white">{p.name}</h3>
      <p className="text-[11px] text-white/40 font-mono mt-0.5">{p.domain}</p>
      <p className="text-sm text-white/55 mt-3 leading-relaxed flex-1">{p.description}</p>
      <div className="mt-4 pt-3 border-t border-white/5">
        {external ? (
          <a
            href={p.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded"
          >
            Visit <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        ) : (
          <span className="inline-flex items-center gap-1.5 text-xs text-white/35">
            <Circle className="w-3 h-3" /> {p.role}
          </span>
        )}
      </div>
    </div>
  );
}

export default function LiveNow() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Status</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">What is live now</h2>
          <p className="text-white/45 max-w-2xl mb-10">
            Shipped products are separate from the roadmap. Here is the honest split of what
            is live today versus what is building or planned.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-xs uppercase tracking-widest text-green-400/80 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-400" /> Live today
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
            {liveProducts.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p className="text-xs uppercase tracking-widest text-blue-400/80 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" /> Building
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
            {buildingProducts.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-xs uppercase tracking-widest text-violet-400/80 mb-4 flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-400" /> Planned (next)
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {nextProducts.map((p) => (
              <Card key={p.name} p={p} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}