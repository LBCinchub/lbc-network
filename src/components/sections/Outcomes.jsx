import React from 'react';
import { Building2, Users, Terminal } from 'lucide-react';
import Reveal from './Reveal';

const OUTCOMES = [
  {
    icon: Building2,
    title: 'For businesses',
    body: 'Operations software, storefronts, AI tooling, and build services — including LBC Auto for automotive shops.',
    points: ['LBC Auto shop management', 'Storefronts via LBC Hub', 'Custom product builds'],
  },
  {
    icon: Users,
    title: 'For communities',
    body: 'A marketplace, social feed, direct-donation charity, and emerging creator tools that bring people together.',
    points: ['LBC Hub marketplace & feed', 'LBC Charity donations', 'LBC Live (in development)'],
  },
  {
    icon: Terminal,
    title: 'For builders',
    body: 'Open-source footprint on GitHub, an AI builder workspace, and Solana-based infrastructure to build on.',
    points: ['GitHub: LBCinchub', 'LBC AI workspace', 'Solana-based $LBC'],
  },
];

export default function Outcomes() {
  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Who LBC serves</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-10">
            Built for businesses, communities, and builders.
          </h2>
        </Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {OUTCOMES.map((o, i) => {
            const Icon = o.icon;
            return (
              <Reveal key={o.title} delay={i * 0.08}>
                <div className="p-6 rounded-2xl border border-white/10 bg-white/[0.02] h-full flex flex-col">
                  <span className="w-11 h-11 rounded-xl bg-white/5 flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-white/70" />
                  </span>
                  <h3 className="text-lg font-semibold text-white mb-2">{o.title}</h3>
                  <p className="text-sm text-white/55 leading-relaxed mb-5">{o.body}</p>
                  <ul className="mt-auto space-y-2">
                    {o.points.map((p) => (
                      <li key={p} className="flex items-center gap-2 text-xs text-white/45">
                        <span className="w-1 h-1 rounded-full bg-violet-400" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}