import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Store, Car, Globe, ChevronRight, Cpu, Smartphone, Sparkles, Plane, Code } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FamilyTree from '@/components/FamilyTree';
import FloatingChat from '@/components/FloatingChat';

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
      description: "Terry Fox automotive & Alradi Home lifestyle — unified commerce hub",
      href: "#marketplace"
    },
    {
      icon: Car,
      title: "Driver Portal",
      description: "Industry's first driver earnings model — baseline 60% commission, scaling up to 80% based on customer satisfaction.",
      href: "#driver"
    },
    {
      icon: Cpu,
      title: "LBCOS",
      description: "Advanced phone operating system",
      href: "#lbcos"
    },
    {
      icon: Smartphone,
      title: "Hardware",
      description: "Next-generation connected devices",
      href: "#hardware"
    },
    {
      icon: Plane,
      title: "Hub Travel",
      description: "Complete travel booking service",
      href: "#hub-travel"
    },
    {
      icon: Code,
      title: "App Builder",
      description: "Intelligence-driven builder powering Terry Fox, Alradi Home & beyond",
      href: "#app-builder"
    },
    {
      icon: Sparkles,
      title: "Lumina AI",
      description: "Personal Intelligence Layer and Digital Mirror for the LBC Ecosystem",
      href: "#lumina"
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden">
      <FloatingChat />
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
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

      {/* Intelligence Layer */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-4">
              Intelligence Layer
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Dual-Intelligence Framework</h2>
            <p className="text-white/30 text-sm mb-12 max-w-xl">Intelligence and Flow — the mandate of the unified digital city.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lumina AI */}
              <div className="p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/5 to-transparent hover:border-violet-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.15em] text-violet-400">Lumina AI · lbc-hub.com</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Personal Intelligence</h3>
                <p className="text-white/50 text-sm leading-relaxed">The resident personal intelligent companion and digital mirror. Lumina AI reflects, augments, and evolves with each individual within the LBC ecosystem.</p>
              </div>

              {/* Lumina Ultra */}
              <div className="p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent hover:border-blue-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-400">Lumina Ultra · lbchub.site</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Community Intelligence</h3>
                <p className="text-white/50 text-sm leading-relaxed">The twin sister focused on community, social lifestyle, and engagement. Lumina Ultra bridges individuals to the collective pulse of the LBC network.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Business Protocol Update */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-12 lg:mb-16">
              Business Protocol Update
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Terry Fox */}
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-xs uppercase tracking-[0.15em] text-violet-400">Project 01</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">Terry Fox</h3>
                <p className="text-white/30 text-sm mb-6">Transitioned from Belal Auto Service</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-1">Context</p>
                    <p className="text-white/60 text-sm leading-relaxed">Evolution of automotive software and shop management.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-1">Strategy</p>
                    <p className="text-white/60 text-sm leading-relaxed">Deployment of a unified intelligence system to streamline shop flow and digital integration.</p>
                  </div>
                </div>
              </div>

              {/* Alradi Home */}
              <div className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-400">Project 02</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">Alradi Home</h3>
                <p className="text-white/30 text-sm mb-6">Lifestyle & Aesthetic Curation</p>
                <div className="space-y-3">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-1">Context</p>
                    <p className="text-white/60 text-sm leading-relaxed">Lifestyle and aesthetic curation within the LBC ecosystem.</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-1">Strategy</p>
                    <p className="text-white/60 text-sm leading-relaxed">Visual storytelling and product placement within the LBC network architecture.</p>
                  </div>
                </div>
              </div>
            </div>

            <p className="mt-10 text-white/25 text-sm italic">
              These updates represent the latest push in the frictionless finance and intelligence-driven ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Family Tree */}
      <FamilyTree />

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