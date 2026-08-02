import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import Reveal from './Reveal';
import { activeClientCount, liveProductCount, GITHUB_URL } from '@/data/ecosystem';

export default function EcosystemHero() {
  const stats = [
    { value: String(activeClientCount), label: 'Active clients' },
    { value: String(liveProductCount), label: 'Live products' },
    { value: 'GitHub', label: 'Open-source footprint', href: GITHUB_URL, external: true },
    { value: 'Solana', label: 'Built on' },
  ];

  return (
    <section className="relative pt-28 lg:pt-40 pb-20 lg:pb-28" id="top">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal y={32}>
          <p className="text-xs sm:text-sm uppercase tracking-[0.25em] text-white/40 mb-5">
            LBC NETWORK INC. · OTTAWA, CANADA
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight text-white max-w-4xl">
            Infrastructure for a connected digital economy.
          </h1>
          <p className="mt-7 max-w-2xl text-base lg:text-lg text-white/55 leading-relaxed">
            LBC Network connects community, commerce, operations, AI, and Solana-based
            infrastructure across a set of specialized products — rooted in Ottawa and
            built to serve businesses, communities, and builders worldwide.
          </p>

          <div className="mt-9 flex flex-col sm:flex-row gap-3 sm:items-center">
            <a
              href="#ecosystem"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              Explore the Ecosystem
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 h-12 rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              Work With LBC
            </a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2 h-12 text-sm text-white/50 hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded-md"
            >
              View on GitHub <Github className="w-4 h-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-14 lg:mt-20">
          <dl className="grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-white/10 pt-8">
            {stats.map((s) => {
              const content = (
                <>
                  <dt className="sr-only">{s.label}</dt>
                  <dd className="flex flex-col gap-1">
                    <span className="text-2xl lg:text-3xl font-bold text-white">
                      {s.value}
                    </span>
                    <span className="text-[11px] uppercase tracking-widest text-white/35">
                      {s.label}
                    </span>
                  </dd>
                </>
              );
              return s.href ? (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded"
                >
                  {content}
                </a>
              ) : (
                <div key={s.label}>{content}</div>
              );
            })}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}