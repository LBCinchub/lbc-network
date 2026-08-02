import React from 'react';
import { Sparkles, Store, Globe, Coins, Cpu } from 'lucide-react';
import Reveal from './Reveal';

const ROLES = [
  { icon: Store, name: 'LBC Hub', role: 'Concierge', detail: 'Marketplace and travel guidance for the LBC community.', href: 'https://LBC-HUB.COM' },
  { icon: Globe, name: 'LBC Network', role: 'Navigator', detail: 'Orients visitors across the ecosystem and its products.', href: '#ecosystem' },
  { icon: Coins, name: 'LBC Protocol', role: 'Guide', detail: 'Answers token and protocol questions on Solana.', href: '#protocol' },
  { icon: Cpu, name: 'LBC AI', role: 'Builder & research workspace', detail: 'AI-assisted building and research for the ecosystem.', href: 'https://lbchub.site' },
];

export default function LbcAi() {
  return (
    <section id="lbc-ai" className="relative z-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> LBC AI
          </p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            One intelligence layer. Specialized across the ecosystem.
          </h2>
          <p className="text-white/45 max-w-2xl mb-10">
            LBC AI powers property-specific assistance across LBC products — concierge,
            navigator, protocol guide, and a builder workspace — without exposing private
            systems or internal engine details.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {ROLES.map((r) => {
              const Icon = r.icon;
              const external = r.href.startsWith('http');
              const Body = (
                <>
                  <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white/70" />
                  </span>
                  <h3 className="text-base font-semibold text-white">{r.name}</h3>
                  <p className="text-xs uppercase tracking-widest text-violet-300/80 mt-1">{r.role}</p>
                  <p className="text-sm text-white/55 mt-3 leading-relaxed">{r.detail}</p>
                </>
              );
              return external ? (
                <a
                  key={r.name}
                  href={r.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  {Body}
                </a>
              ) : (
                <a
                  key={r.name}
                  href={r.href}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  {Body}
                </a>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}