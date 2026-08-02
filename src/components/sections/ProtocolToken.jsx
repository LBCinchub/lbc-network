import React, { useState } from 'react';
import { Copy, Check, ExternalLink } from 'lucide-react';
import Reveal from './Reveal';
import { MINT_ADDRESS, SOLSCAN_URL } from '@/data/ecosystem';

export default function ProtocolToken() {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(MINT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="protocol" className="relative z-10 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.2em] text-white/40 mb-3">Protocol</p>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">$LBC on Solana</h2>
          <p className="text-white/45 max-w-2xl mb-10">
            $LBC is the native utility token on Solana for the LBC ecosystem. Token issuance
            is separate from wallet, liquidity, and product readiness — several of which are
            still in development. Always verify on-chain data via an official explorer.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-2">Network</p>
              <p className="text-white font-semibold text-lg">Solana</p>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-2">Ticker</p>
              <p className="text-white font-semibold text-lg">$LBC</p>
            </div>
            <div className="p-5 rounded-2xl border border-white/10 bg-white/[0.02]">
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-2">Type</p>
              <p className="text-white font-semibold text-lg">Utility token</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="p-5 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-600/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="flex-1 min-w-0">
              <p className="text-[11px] uppercase tracking-widest text-white/35 mb-2">Mint address</p>
              <p className="text-white/75 text-sm font-mono break-all">{MINT_ADDRESS}</p>
            </div>
            <div className="flex gap-2 shrink-0">
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
                aria-label="Copy mint address"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
              <a
                href={SOLSCAN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 h-10 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
              >
                View on Solscan <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
          <p className="text-[11px] text-white/30 mt-3">
            Data source: Solscan public explorer. No price, liquidity, or balance figures are
            shown here to avoid unverified claims.
          </p>
        </Reveal>
      </div>
    </section>
  );
}