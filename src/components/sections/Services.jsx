import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Reveal from './Reveal';
import { services, PORTAL, CONTACT } from '@/data/ecosystem';

export default function Services() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Capabilities</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            Services delivered through LBC Hub
          </h2>
          <p className="text-white/45 max-w-2xl mb-10">
            LBC offers a range of capabilities across commerce, operations, AI, and creative
            work. Engagements are scoped per project — connect with us to discuss scope and
            availability rather than fixed public pricing.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.title}
                  className="p-5 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/20 transition-colors flex flex-col"
                >
                  <span className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-4">
                    <Icon className="w-5 h-5 text-white/65" />
                  </span>
                  <h3 className="text-sm font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-xs text-white/45 leading-relaxed">{s.description}</p>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href={PORTAL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-white/5 border border-white/15 text-white/85 hover:bg-white/10 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
          >
            Explore services <ArrowUpRight className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center justify-center gap-2 px-5 h-11 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
          >
            Discuss a project
          </a>
        </Reveal>
      </div>
    </section>
  );
}