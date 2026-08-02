import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { partners, activeClientCount } from '@/data/ecosystem';

const TAG_STYLES = {
  'Active Client': 'border-green-400/30 text-green-400',
  'Active Profile': 'border-violet-400/30 text-violet-400',
};

const COLOR_DOT = { green: '#4ADE80', violet: '#A78BFA', blue: '#60A5FA' };

export default function Partners() {
  return (
    <section id="partners" className="relative z-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Partners & Clients</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Who LBC works with
          </h2>
          <p className="text-white/45 max-w-2xl mb-10">
            A focused roster of active clients and profiles across the LBC Network. These are
            client relationships — not LBC-owned products — and appear only here.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <ul
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
            aria-label={`LBC Network partners and clients (${activeClientCount} active clients)`}
          >
            {partners.map((p) => (
              <li
                key={p.name}
                className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors flex flex-col"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ background: COLOR_DOT[p.color] || '#60A5FA' }}
                    aria-hidden="true"
                  />
                  <span
                    className={`inline-flex items-center px-2 py-0.5 rounded-full border text-[10px] font-bold ${
                      TAG_STYLES[p.tag] || 'border-white/20 text-white/60'
                    }`}
                  >
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-white">{p.name}</h3>
                <p className="text-sm text-white/55 mt-2 leading-relaxed flex-1">{p.description}</p>
                {p.href ? (
                  <a
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold text-violet-300 hover:text-violet-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded self-start"
                  >
                    Visit site <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <span className="mt-4 text-xs text-white/30">Client of LBC Network</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}