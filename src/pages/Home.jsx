import React from 'react';
import SiteNav from '@/components/SiteNav';
import FloatingChat from '@/components/FloatingChat';
import FamilyTree from '@/components/FamilyTree';
import EcosystemHero from '@/components/sections/EcosystemHero';
import LiveNow from '@/components/sections/LiveNow';
import LbcAi from '@/components/sections/LbcAi';
import ProtocolToken from '@/components/sections/ProtocolToken';
import Outcomes from '@/components/sections/Outcomes';
import Services from '@/components/sections/Services';
import Partners from '@/components/sections/Partners';
import FinalCta from '@/components/sections/FinalCta';
import { SOCIAL } from '@/data/ecosystem';
import { Github, Send, X } from 'lucide-react';

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:bg-white focus:text-black focus:px-4 focus:py-2 focus:rounded-lg focus:text-sm focus:font-semibold"
      >
        Skip to content
      </a>

      <SiteNav />
      <FloatingChat />

      {/* subtle ambient motif */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-[-15%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/8 blur-3xl" />
        <div className="absolute bottom-[-15%] left-[-10%] w-[400px] h-[400px] rounded-full bg-blue-600/6 blur-3xl" />
      </div>

      <main id="main" className="relative z-10">
        <EcosystemHero />
        <LiveNow />
        <LbcAi />
        <ProtocolToken />
        <FamilyTree />
        <Outcomes />
        <Services />
        <Partners />
        <FinalCta />
      </main>

      <footer className="relative z-10 border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-left">
            <p className="text-white/40 text-sm font-semibold">LBC Network Inc.</p>
            <p className="text-white/30 text-xs">Ottawa, Canada</p>
            <p className="text-white/25 text-xs">&copy; {new Date().getFullYear()} LBC Network Inc.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={SOCIAL.x}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LBC Network on X"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <X className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL.telegram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LBC Network on Telegram"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <Send className="w-4 h-4" />
            </a>
            <a
              href={SOCIAL.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LBC Network on GitHub"
              className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
            >
              <Github className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}