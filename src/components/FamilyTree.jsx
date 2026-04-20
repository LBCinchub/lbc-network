import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Brain } from 'lucide-react';

export default function FamilyTree() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section className="relative z-10 py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
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
            {/* Parent - LBC AI */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <a href="https://lbc.network" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-violet-600/30 to-blue-600/30 border border-violet-400/50 flex items-center justify-center mb-4 group-hover:border-violet-300/80 group-hover:bg-gradient-to-br group-hover:from-violet-600/40 group-hover:to-blue-600/40 transition-all duration-300">
                  <div className="text-center">
                    <Brain className="w-12 h-12 text-violet-300 mx-auto mb-2 group-hover:text-violet-200 transition-colors" />
                    <p className="text-xs text-violet-200">Parent AI</p>
                    <p className="text-sm font-semibold text-white">LBC Network</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">lbc.network</p>
              </a>
              {/* Connector line */}
              <div className="w-1 h-12 bg-gradient-to-b from-violet-400/50 to-transparent mt-4" />
            </motion.div>

            {/* Son */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <a href="https://lbchub.io" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                <div className="w-40 h-32 rounded-2xl bg-gradient-to-br from-blue-600/30 to-cyan-600/30 border border-blue-400/50 flex items-center justify-center mb-4 group-hover:border-blue-300/80 group-hover:bg-gradient-to-br group-hover:from-blue-600/40 group-hover:to-cyan-600/40 transition-all duration-300">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-blue-300 mx-auto mb-2 group-hover:text-blue-200 transition-colors" />
                    <p className="text-xs text-blue-200">Big Son</p>
                    <p className="text-sm font-semibold text-white">lbchub.io</p>
                    <p className="text-xs text-blue-200 mt-1">LBC Protocol</p>
                  </div>
                </div>
                <p className="text-white/40 text-sm group-hover:text-white/60 transition-colors">Main Hub</p>
              </a>
              {/* Connector line */}
              <div className="w-1 h-12 bg-gradient-to-b from-blue-400/50 to-transparent mt-4" />
            </motion.div>

            {/* Twins */}
            <motion.div variants={itemVariants} className="flex flex-col items-center">
              <p className="text-white/30 text-sm mb-6">Twins</p>
              <div className="flex gap-8 justify-center flex-wrap">
                <a href="https://lbc-hub.com" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                  <div className="w-40 h-32 rounded-2xl bg-gradient-to-br from-pink-600/30 to-purple-600/30 border border-pink-400/50 flex items-center justify-center group-hover:border-pink-300/80 group-hover:bg-gradient-to-br group-hover:from-pink-600/40 group-hover:to-purple-600/40 transition-all duration-300">
                    <div className="text-center">
                      <Globe className="w-10 h-10 text-pink-300 mx-auto mb-2 group-hover:text-pink-200 transition-colors" />
                      <p className="text-sm font-semibold text-white">lbc-hub.com</p>
                      <p className="text-xs text-pink-200 mt-1">Twin</p>
                    </div>
                  </div>
                </a>
                <a href="https://lbchub.site" target="_blank" rel="noopener noreferrer" className="group cursor-pointer">
                  <div className="w-40 h-32 rounded-2xl bg-gradient-to-br from-orange-600/30 to-red-600/30 border border-orange-400/50 flex items-center justify-center group-hover:border-orange-300/80 group-hover:bg-gradient-to-br group-hover:from-orange-600/40 group-hover:to-red-600/40 transition-all duration-300">
                    <div className="text-center">
                      <Globe className="w-10 h-10 text-orange-300 mx-auto mb-2 group-hover:text-orange-200 transition-colors" />
                      <p className="text-sm font-semibold text-white">lbchub.site</p>
                      <p className="text-xs text-orange-200 mt-1">Twin</p>
                    </div>
                  </div>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}