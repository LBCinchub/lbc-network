import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Store, Car, Globe, ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

export default function Home() {
  const services = [
    {
      icon: Wallet,
      title: "Wallet",
      description: "Secure digital transactions",
      href: "#wallet"
    },
    {
      icon: Store,
      title: "Marketplace",
      description: "Global commerce platform",
      href: "#marketplace"
    },
    {
      icon: Car,
      title: "Driver Portal",
      description: "Logistics & delivery network",
      href: "#driver"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      {/* Subtle gradient orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-violet-600/10 to-transparent blur-3xl" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-blue-600/8 to-transparent blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-8">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center">
                <Globe className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-semibold tracking-tight">LBC Network</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <a href="https://lbchub.support" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                >
                  Contact
                </Button>
              </a>
            </motion.div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 lg:pt-32 pb-24 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight">
              <span className="text-white">LBC Network</span>
              <span className="block mt-2 bg-gradient-to-r from-violet-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
                —Connecting Innovation
              </span>
              <span className="block text-white/90">from Canada to the World.</span>
            </h1>
          </motion.div>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-16 max-w-2xl text-lg lg:text-xl text-white/50 leading-relaxed font-light"
          >
            Building the infrastructure for tomorrow's digital economy. 
            We connect businesses, communities, and individuals through 
            seamless technology solutions that transcend borders.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 lg:mt-16"
          >
            <a href="https://lbchub.io" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="group relative bg-gradient-to-r from-violet-600 to-blue-600 hover:from-violet-500 hover:to-blue-500 text-white border-0 px-8 py-6 text-base font-medium rounded-full transition-all duration-300 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/30 hover:scale-[1.02]"
              >
                Explore Platforms
                <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Divider line */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      {/* Services Grid */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-12 lg:mb-16">
              Core Services
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <motion.a
                  key={service.title}
                  href={service.href}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  className="group relative p-8 lg:p-10 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 cursor-pointer"
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-600/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-gradient-to-br group-hover:from-violet-600/20 group-hover:to-blue-600/20 transition-all duration-500">
                      <service.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors duration-500" />
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-2 flex items-center gap-2">
                      {service.title}
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    
                    <p className="text-white/40 font-light">
                      {service.description}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/30 text-sm">
              © 2026 LBC Network. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-white/30 text-sm">
              <span>Built in</span>
              <span className="text-white/50">Canada</span>
              <span className="ml-1">🍁</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}