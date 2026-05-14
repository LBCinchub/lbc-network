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

  const twins = [
    {
      href: "https://lbc-hub.com", domain: "lbc-hub.com", label: "Lumina AI",
      cardClass: "border-pink-400/50 bg-gradient-to-br from-pink-600/20 to-transparent hover:border-pink-300/80 hover:from-pink-600/30",
      iconClass: "text-pink-300", subClass: "text-pink-300"
    },
    {
      href: "https://lbchub.site", domain: "lbchub.site", label: "Lumina Ultra",
      cardClass: "border-orange-400/50 bg-gradient-to-br from-orange-600/20 to-transparent hover:border-orange-300/80 hover:from-orange-600/30",
      iconClass: "text-orange-300", subClass: "text-orange-300"
    },
    {
      href: "https://lbchub.live", domain: "lbchub.live", label: "Live Hub",
      cardClass: "border-cyan-400/50 bg-gradient-to-br from-cyan-600/20 to-transparent hover:border-cyan-300/80 hover:from-cyan-600/30",
      iconClass: "text-cyan-300", subClass: "text-cyan-300"
    },
    {
      href: "https://lbchub.tech", domain: "lbchub.tech", label: "Tech Hub",
      cardClass: "border-emerald-400/50 bg-gradient-to-br from-emerald-600/20 to-transparent hover:border-emerald-300/80 hover:from-emerald-600/30",
      iconClass: "text-emerald-300", subClass: "text-emerald-300"
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
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-400/50 flex items-center justify-center mb-4 group-hover:border-violet-300/80 transition-all duration-300">
                  <div className="text-center">
                    <Brain className="w-12 h-12 text-violet-300 mx-auto mb-2 group-hover:text-violet-200 transition-colors" />
                    <p className="text-xs text-violet-200">Parent AI</p>
                    <p className="text-sm font-semibold text-white">LBC Network</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">lbc.network</p>
              </a>
              <div className="w-1 h-12 bg-gradient-to-b from-violet-400/50 to-transparent mt-4" />
            </motion.div>

            {/* Son - lbchub.io */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <a href="https://lbchub.io" target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center">
                <div className="w-40 h-32 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-400/50 flex items-center justify-center mb-4 group-hover:border-blue-300/80 transition-all duration-300">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-300 mx-auto mb-2 group-hover:text-blue-200 transition-colors" />
                    <p className="text-xs text-blue-200">Big Son</p>
                    <p className="text-sm font-semibold text-white">lbchub.io</p>
                    <p className="text-xs text-blue-200 mt-1">LBC Protocol</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">Main Hub</p>
              </a>
              <div className="w-1 h-12 bg-gradient-to-b from-blue-400/50 to-transparent mt-4" />
            </motion.div>

            {/* Extended Family */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <p className="text-white/30 text-sm mb-6">Extended Network</p>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
                {twins.map(({ href, domain, label, cardClass, iconClass, subClass }) => (
                  <a key={domain} href={href} target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex flex-col items-center">
                    <div className={`w-36 h-28 rounded-2xl border flex items-center justify-center transition-all duration-300 ${cardClass}`}>
                      <div className="text-center px-2">
                        <Globe className={`w-8 h-8 mx-auto mb-2 transition-colors ${iconClass}`} />
                        <p className="text-xs font-semibold text-white">{domain}</p>
                        <p className={`text-xs mt-1 ${subClass}`}>{label}</p>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}