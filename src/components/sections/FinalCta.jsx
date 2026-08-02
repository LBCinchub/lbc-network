import React from 'react';
import { Mail, Phone, Globe, ArrowRight } from 'lucide-react';
import Reveal from './Reveal';
import { CONTACT } from '@/data/ecosystem';

export default function FinalCta() {
  return (
    <section id="contact" className="relative z-10 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <div className="relative rounded-3xl border border-white/10 bg-white/[0.02] p-8 lg:p-14 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none opacity-60" aria-hidden="true">
              <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-violet-600/10 blur-3xl" />
              <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl" />
            </div>
            <div className="relative flex flex-col lg:flex-row lg:items-center gap-10">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Work With LBC</p>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                  Let's build together.
                </h2>
                <p className="text-white/55 max-w-xl">
                  Reach out through any official channel below to explore partnerships, product
                  builds, or working with LBC Network.
                </p>
              </div>

              <div className="lg:w-80 flex flex-col gap-3">
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="inline-flex items-center gap-3 px-5 h-12 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] text-white/85 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  <Mail className="w-4 h-4 text-violet-300" />
                  {CONTACT.email}
                </a>
                <a
                  href={CONTACT.phoneHref}
                  className="inline-flex items-center gap-3 px-5 h-12 rounded-xl border border-white/15 bg-white/[0.03] hover:bg-white/[0.06] text-white/85 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  <Phone className="w-4 h-4 text-violet-300" />
                  {CONTACT.phone}
                </a>
                <a
                  href={CONTACT.services}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 px-5 h-12 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                >
                  <span className="inline-flex items-center gap-3">
                    <Globe className="w-4 h-4" /> Official portal
                  </span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}