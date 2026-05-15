import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain } from 'lucide-react';

export default function FamilyTree() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const extended = [
    {
      href: "https://lbc-hub.com", domain: "lbc-hub.com", label: "Twin A · Lumina AI",
      definition: "Twin A — Community Hub, Social Feed, Marketplace & Travel",
      cardClass: "border-pink-400/50 bg-gradient-to-br from-pink-600/20 to-transparent hover:border-pink-300/80",
      iconClass: "text-pink-300", subClass: "text-pink-300"
    },
    {
      href: "https://lbchub.site", domain: "lbchub.site", label: "Twin B · Lumina Ultra",
      definition: "Twin B — Builder Engine · Powers 3 products",
      badge: "Powers 3 products ↓",
      cardClass: "border-orange-400/50 bg-gradient-to-br from-orange-600/20 to-transparent hover:border-orange-300/80",
      iconClass: "text-orange-300", subClass: "text-orange-300"
    },
    {
      href: "https://lbchub.live", domain: "lbchub.live", label: "Live Hub · Creator Economy",
      definition: "Live Hub — Creator Economy, NFT Tickets & Streaming",
      cardClass: "border-cyan-400/50 bg-gradient-to-br from-cyan-600/20 to-transparent hover:border-cyan-300/80",
      iconClass: "text-cyan-300", subClass: "text-cyan-300"
    },
    {
      href: "https://lumina-blockchain.com", domain: "lumina-blockchain.com", label: "LBC Wallet · $LBC Token",
      definition: "LBC Wallet — Solana-native payments, $LBC token, and frictionless finance layer",
      badge: "BUILDING",
      cardClass: "border-yellow-400/50 bg-gradient-to-br from-yellow-600/20 to-transparent hover:border-yellow-300/80",
      iconClass: "text-yellow-300", subClass: "text-yellow-300",
      goldBadge: true
    },
  ];

  const siteChildren = [
    {
      href: "https://lumina-blockchain.com",
      domain: "lumina-blockchain.com",
      description: "LBC Wallet — $LBC payments & Solana wallet",
      cardClass: "border-yellow-400/40 bg-gradient-to-br from-yellow-600/10 to-transparent hover:border-yellow-300/60",
      iconClass: "text-yellow-300", subClass: "text-yellow-400"
    },
    {
      href: "https://alradihome.ca",
      domain: "alradihome.ca",
      description: "Alradi Home — Luxury Furniture & Home Lifestyle",
      cardClass: "border-rose-400/40 bg-gradient-to-br from-rose-600/10 to-transparent hover:border-rose-300/60",
      iconClass: "text-rose-300", subClass: "text-rose-400"
    },
    {
      href: "https://terryfoxauto.ca",
      domain: "terryfoxauto.ca",
      description: "Terry Fox Auto Center — powered by lbchub.blog",
      sublabel: null,
      cardClass: "border-amber-400/40 bg-gradient-to-br from-amber-600/10 to-transparent hover:border-amber-300/60",
      iconClass: "text-amber-300", subClass: "text-amber-400"
    },
  ];

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-12 lg:mb-16">
            LBC Network Family Tree
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {/* Parent - LBC Network */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <a href="https://lbc.network" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-400/50 flex items-center justify-center mb-3 group-hover:border-violet-300/80 transition-all duration-300">
                  <div className="text-center">
                    <Brain className="w-12 h-12 text-violet-300 mx-auto mb-2 group-hover:text-violet-200 transition-colors" />
                    <p className="text-xs text-violet-200">Parent AI</p>
                    <p className="text-sm font-semibold text-white">LBC Network</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">lbc.network</p>
                <p className="text-white/25 text-xs mt-1 text-center max-w-[160px]">Parent AI — Ecosystem Foundation & Governance</p>
              </a>
              <div className="w-1 h-12 bg-gradient-to-b from-violet-400/50 to-transparent mt-4" />
            </motion.div>

            {/* Son - lbchub.io */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <a href="https://lbchub.io" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center">
                <div className="w-40 h-32 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-400/50 flex items-center justify-center mb-3 group-hover:border-blue-300/80 transition-all duration-300">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-300 mx-auto mb-2 group-hover:text-blue-200 transition-colors" />
                    <p className="text-xs text-blue-200">Big Son</p>
                    <p className="text-sm font-semibold text-white">lbchub.io</p>
                    <p className="text-xs text-blue-200 mt-1">LBC Protocol</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">Main Hub</p>
                <p className="text-white/25 text-xs mt-1 text-center max-w-[200px]">Big Son — DeFi Protocol, $LBC Token & Liquidity Layer</p>
              </a>
              <div className="w-1 h-12 bg-gradient-to-b from-blue-400/50 to-transparent mt-4" />
            </motion.div>

            {/* Extended Network */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <p className="text-white/30 text-sm mb-6">Extended Network</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {extended.map(({ href, domain, label, definition, badge, goldBadge, cardClass, iconClass, subClass }) => (
                  <div key={domain} className="flex flex-col items-center">
                    <a href={href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center">
                      <div className={`w-36 h-28 rounded-2xl border flex items-center justify-center transition-all duration-300 ${cardClass}`}>
                        <div className="text-center px-2">
                          <Globe className={`w-8 h-8 mx-auto mb-2 transition-colors ${iconClass}`} />
                          <p className="text-xs font-semibold text-white">{domain}</p>
                          <p className={`text-xs mt-1 ${subClass}`}>{label}</p>
                        </div>
                      </div>
                      <p className="text-white/25 text-xs mt-2 text-center max-w-[140px] leading-relaxed">{definition}</p>
                      {badge && (
                        <span
                          className="mt-2 px-2 py-0.5 rounded-full border text-[10px] tracking-wide font-bold"
                          style={goldBadge
                            ? { borderColor: '#FBBF24', color: '#FBBF24' }
                            : { borderColor: '#00FFA3', color: '#00FFA3' }
                          }
                        >
                          {badge}
                        </span>
                      )}
                    </a>

                    {/* lbchub.site child products */}
                    {domain === 'lbchub.site' && (
                      <div className="flex flex-col items-center mt-2 w-full">
                        {/* dashed connector down */}
                        <div className="w-px h-8 border-l-2 border-dashed border-orange-400/30" />
                        <p className="text-white/20 text-[10px] uppercase tracking-widest mb-4">Built by lbchub.site</p>
                        <div className="flex flex-row gap-4 items-start justify-center flex-wrap">
                          {siteChildren.map(({ href: chHref, domain: chDomain, description, cardClass: cc, iconClass: ic }) => (
                            <a key={chDomain} href={chHref} target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center">
                              <div className={`w-28 h-20 rounded-xl border flex items-center justify-center transition-all duration-300 ${cc}`}>
                                <div className="text-center px-2">
                                  <Globe className={`w-5 h-5 mx-auto mb-1 ${ic}`} />
                                  <p className="text-[10px] font-semibold text-white leading-tight">{chDomain}</p>
                                </div>
                              </div>
                              <p className="text-white/25 text-[10px] mt-1 text-center max-w-[110px] leading-snug">{description}</p>
                            </a>
                          ))}

                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}