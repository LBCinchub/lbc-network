import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Wallet, Store, Car, Globe, ChevronRight, Cpu, Smartphone, Sparkles, Plane, Wrench, Copy, Check, X, Send, Github, Brain, Heart } from 'lucide-react';
import { Button } from "@/components/ui/button";
import FamilyTree from '@/components/FamilyTree';
import FloatingChat from '@/components/FloatingChat';

const MINT_ADDRESS = '2UoettzUUevYNNMhLYACqxjbvkpS4dnCZhbV6xFkuKkT';

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(MINT_ADDRESS);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const services = [
    {
      icon: Heart,
      title: "LBC Charity",
      description: "Zero fees, zero middleman — on-chain $LBC donations direct to recipient wallets.",
      href: "https://lbchub.org",
      badge: "LIVE",
      greenBadge: true
    },
    {
      icon: Store,
      title: "Hub Marketplace",
      description: "lbc-hub.com — Social Feed, Marketplace & Travel AI",
      href: "https://lbc-hub.com",
      badge: "LIVE"
    },
    {
      icon: Brain,
      title: "LBC AI",
      description: "Lumina Ultra — The builder engine powering product development and intelligent automation across the LBC ecosystem.",
      href: "https://lbchub.site",
      badge: "LIVE",
      greenBadge: true
    },
    {
      icon: Wrench,
      title: "LBC Auto Smart Management",
      description: "Intelligence-driven automotive management powering Terry Fox & beyond",
      href: "https://lbchub.blog",
      badge: "LIVE",
      builtBy: "lbchub.site"
    },
    {
      icon: Sparkles,
      title: "$LBC Token",
      description: "Native utility token on Solana — powering the LBC Digital City economy",
      href: "#lbc-token",
      badge: "LIVE",
      greenBadge: true
    },
    {
      icon: Wallet,
      title: "LBC Wallet",
      description: "Solana-native wallet and payment layer. $LBC token, USDC, and frictionless finance across the entire LBC ecosystem.",
      href: "https://lumina-blockchain.com",
      badge: "BUILDING"
    },
    {
      icon: Car,
      title: "LBC Driver Portal",
      description: "Industry's first driver earnings model — baseline 60% commission, scaling up to 80% based on customer satisfaction.",
      href: "#driver",
      badge: "BUILDING"
    },
    {
      icon: Cpu,
      title: "LBCOS",
      description: "The core OS being engineered from the ground up — once live, it unlocks LBC's own hardware era.",
      href: "#lbcos",
      badge: "BUILDING"
    },
    {
      icon: Plane,
      title: "LBC HUB TRAVEL",
      description: "Full-service travel booking — flights, hotels, and experiences — integrated natively into the LBC ecosystem.",
      href: "#hub-travel",
      badge: "NEXT"
    },
    {
      icon: Smartphone,
      title: "LBC Hardware",
      description: "When LBCOS goes live, the hardware chapter begins — LBC-native devices built for the Digital City.",
      href: "#hardware",
      badge: "NEXT"
    }
  ];

  const partners = [
    {
      name: "Kulipa",
      tag: "NDA Signed",
      description: "Strategic partnership formalised. Fintech integration aligned with LBC's frictionless finance mandate.",
      color: "violet"
    },
    {
      name: "Colosseum",
      tag: "Ecosystem Partner",
      description: "Recognised within the Solana Colosseum ecosystem. Accelerating $LBC's on-chain infrastructure.",
      color: "blue"
    },
    {
      name: "Superteam Canada",
      tag: "Community",
      description: "Active member of Superteam Canada — bridging Canadian innovation with the global Solana network.",
      color: "green"
    }
  ];

  const socialLinks = [
    { icon: X, href: "https://x.com/LBC_FOUNDER", label: "X" },
    { icon: Send, href: "https://t.me/LBCHUBofficial", label: "Telegram" },
    { icon: Github, href: "https://github.com/LBCinchub", label: "GitHub" },
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
              className="flex items-center gap-2"
            >
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="text-white/50 hover:text-white hover:bg-white/5 transition-colors w-9 h-9">
                    <Icon className="w-4 h-4" />
                  </Button>
                </a>
              ))}
              <a href="https://lbchub.support" target="_blank" rel="noopener noreferrer">
                <Button 
                  variant="ghost" 
                  className="text-white/70 hover:text-white hover:bg-white/5 transition-colors ml-2"
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
                —Building the Digital City
              </span>
              <span className="block text-white/90">from Ottawa to the World.</span>
            </h1>
          </motion.div>

          {/* Mission Statement */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-12 lg:mt-16 max-w-2xl text-lg lg:text-xl text-white/50 leading-relaxed font-light"
          >
            Building the infrastructure for tomorrow's digital economy — a unified Digital City powered by Solana, rooted in Ottawa, and built for the world. We connect businesses, communities, and individuals through intelligence-driven technology that transcends borders.
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
                      {service.badge && (
                        <span 
                          className="text-[10px] font-bold px-2 py-0.5 rounded-full border" 
                          style={{
                            borderColor: service.badge === 'LIVE' ? '#4ADE80' : service.badge === 'BUILDING' ? '#3B82F6' : '#EF4444',
                            color: service.badge === 'LIVE' ? '#4ADE80' : service.badge === 'BUILDING' ? '#3B82F6' : '#EF4444'
                          }}
                        >
                          {service.badge}
                        </span>
                      )}
                      <ChevronRight className="w-4 h-4 text-white/30 group-hover:text-violet-400 group-hover:translate-x-1 transition-all duration-300" />
                    </h3>
                    
                    {service.builtBy && (
                      <p className="text-white/30 text-xs mb-2">Built by {service.builtBy}</p>
                    )}
                    
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

      {/* $LBC Token Section */}
      <section id="lbc-token" className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-4">On-Chain</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">$LBC Token</h2>
            <p className="text-white/30 text-sm mb-12 max-w-xl">Native utility token powering the LBC Digital City — built on Solana.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-widest text-white/20 mb-2">Network</p>
                <p className="text-white font-semibold text-lg">Solana</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-widest text-white/20 mb-2">Total Supply</p>
                <p className="text-white font-semibold text-lg">1,000,000,000</p>
              </div>
              <div className="p-6 rounded-2xl border border-white/5 bg-white/[0.02]">
                <p className="text-xs uppercase tracking-widest text-white/20 mb-2">Ticker</p>
                <p className="text-white font-semibold text-lg">$LBC</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl border border-violet-500/20 bg-gradient-to-r from-violet-600/5 to-transparent flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex-1">
                <p className="text-xs uppercase tracking-widest text-white/20 mb-2">Mint Address</p>
                <p className="text-white/70 text-sm font-mono break-all">{MINT_ADDRESS}</p>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white/60 hover:text-white transition-all duration-200 text-sm shrink-0"
              >
                {copied ? <Check className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                {copied ? 'Copied' : 'Copy'}
              </button>
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
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">LBC Brain — Dual-Intelligence Framework</h2>
            <p className="text-white/30 text-sm mb-12 max-w-xl">Intelligence and Flow — the mandate of the unified digital city.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Lumina AI */}
              <div className="p-8 rounded-2xl border border-violet-500/20 bg-gradient-to-br from-violet-600/5 to-transparent hover:border-violet-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.15em] text-violet-400">LBC Brain — Lumina AI · lbc-hub.com</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Personal Intelligence</h3>
                <p className="text-white/50 text-sm leading-relaxed">The resident personal intelligent companion and digital mirror. Lumina AI reflects, augments, and evolves with each individual within the LBC ecosystem.</p>
              </div>

              {/* Lumina Ultra */}
              <div className="p-8 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent hover:border-blue-500/40 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-400">LBC Brain — Lumina Ultra · lbchub.site</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2">Community Intelligence</h3>
                <p className="text-white/50 text-sm leading-relaxed">The twin sister focused on community, social lifestyle, and engagement. Lumina Ultra bridges individuals to the collective pulse of the LBC network.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Portfolio */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-12 lg:mb-16">
              Portfolio
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Terry Fox */}
              <a href="https://terryfoxauto.ca" target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 cursor-pointer group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400" />
                  <span className="text-xs uppercase tracking-[0.15em] text-violet-400">Project 01</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">Terry Fox Auto Center</h3>
                <div className="flex flex-col gap-1 mb-6">
                  <a href="https://maps.google.com/?q=124+Rue+Principale,+Gatineau,+QC" target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm hover:text-orange-300 transition-colors">📍 124 Rue Principale, Gatineau, QC</a>
                  <a href="https://wa.me/18194363007" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">📞 +1 819-436-3007</a>
                  <a href="https://wa.me/18194363007" target="_blank" rel="noopener noreferrer" className="text-violet-400 text-sm font-medium hover:text-violet-300 transition-colors">🌐 TerryFoxAuto.ca</a>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-2">Overview</p>
                    <p className="text-white/60 text-sm leading-relaxed">We built and now manage their entire digital operation. Terry Fox Auto doesn't touch the software — we run it for them.</p>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-2">What We Built</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>• Full fleet & repair management system</li>
                      <li>• Customer CRM with vehicle history</li>
                      <li>• Live repair orders, estimates & invoicing</li>
                      <li>• AI-powered billing & professional invoice portal</li>
                      <li>• Digital storefront with booking flow</li>
                      <li>• AI-generated marketing & social media</li>
                      <li>• Live website with appointment scheduling</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-2">The LBC Network Model</p>
                    <p className="text-white/50 text-xs leading-relaxed italic">We don't sell software and disappear. We embed into your business, build your infrastructure, and manage it — so you focus on the work, we handle the digital city behind it.</p>
                  </div>
                  
                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>Infrastructure built for you</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>AI running 24/7</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>Marketing handled</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>Data owned by you, managed by us</span>
                    </div>
                  </div>
                </div>
              </a>

              {/* Alradi Home */}
              <a href="https://alradihome.ca" target="_blank" rel="noopener noreferrer" className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-500 cursor-pointer group">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 rounded-full bg-blue-400" />
                  <span className="text-xs uppercase tracking-[0.15em] text-blue-400">Project 02</span>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-1">Alradi Home</h3>
                <p className="text-white/30 text-sm">Home Services · Ottawa, ON</p>
                <div className="flex flex-col gap-1 mb-6 mt-1">
                  <a href="https://maps.google.com/?q=1530+Merivale+Road,+Ottawa,+ON" target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm hover:text-orange-300 transition-colors">📍 1530 Merivale Road, Ottawa, ON</a>
                  <a href="https://wa.me/16137692166" target="_blank" rel="noopener noreferrer" className="text-green-400 text-sm font-medium hover:text-green-300 transition-colors">📞 +1 613-769-2166</a>
                  <p className="text-white/40 text-xs">TikTok: @alradi.home.inc · Facebook: Alradi Home</p>
                  <a href="https://alradihome.ca" target="_blank" rel="noopener noreferrer" className="text-blue-400 text-sm font-medium hover:text-blue-300 transition-colors">🌐 AlRadiHome.ca</a>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-2">The Challenge</p>
                    <p className="text-white/60 text-sm leading-relaxed">No CRM, no invoicing system, no digital presence. Every customer interaction was manual, every invoice was handwritten, and marketing was inconsistent.</p>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-2">What We Built</p>
                    <ul className="text-white/60 text-sm space-y-1">
                      <li>• Customer CRM — full client database with project history</li>
                      <li>• Project Management — live job tracking, quote to completion</li>
                      <li>• Professional Invoicing — branded invoices with tax calculations</li>
                      <li>• Client Portal — customers view estimates & invoices online</li>
                      <li>• Social Media Marketing — AI content for Facebook & TikTok</li>
                      <li>• Digital Storefront — service catalog with online booking</li>
                      <li>• Brand Identity — unified visual presence across all platforms</li>
                    </ul>
                  </div>

                  <div>
                    <p className="text-xs uppercase tracking-widest text-white/20 mb-2">The Result</p>
                    <p className="text-white/50 text-xs leading-relaxed italic">Alradi Home now runs a fully digital operation from a single dashboard. The owner focuses on delivering great home services — LBC Network handles everything behind the scenes.</p>
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>Live & Active</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>LBC Network AI-Powered Platform</span>
                    </div>
                    <div className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="text-green-400">✅</span>
                      <span>Managed by Lumina AI + Mokhtar Tarek Samara</span>
                    </div>
                  </div>
                </div>
              </a>
            </div>

            <p className="mt-10 text-white/25 text-sm italic">
              These updates represent the latest push in the frictionless finance and intelligence-driven ecosystem.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partners & Milestones */}
      <section className="relative z-10 py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-24" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-sm uppercase tracking-[0.2em] text-white/30 mb-4">Traction</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12">Partners & Milestones</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {partners.map((p) => (
                <div key={p.name} className={`p-8 rounded-2xl border transition-all duration-500 ${
                  p.color === 'violet' ? 'border-violet-500/20 bg-gradient-to-br from-violet-600/5 to-transparent hover:border-violet-500/40' :
                  p.color === 'blue' ? 'border-blue-500/20 bg-gradient-to-br from-blue-600/5 to-transparent hover:border-blue-500/40' :
                  'border-green-500/20 bg-gradient-to-br from-green-600/5 to-transparent hover:border-green-500/40'
                }`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-2 h-2 rounded-full ${
                      p.color === 'violet' ? 'bg-violet-400' : p.color === 'blue' ? 'bg-blue-400' : 'bg-green-400'
                    }`} />
                    <span className={`text-xs uppercase tracking-[0.15em] ${
                      p.color === 'violet' ? 'text-violet-400' : p.color === 'blue' ? 'text-blue-400' : 'text-green-400'
                    }`}>{p.tag}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{p.name}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{p.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Family Tree */}
      <FamilyTree />

      {/* Footer */}
      <footer className="relative z-10 py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center md:items-start gap-1">
              <p className="text-white/30 text-sm">© 2026 LBC Network. All rights reserved.</p>
              <a href="mailto:tarek-samara@lbc-hub.com" className="text-white/20 hover:text-white/40 text-xs transition-colors">
                tarek-samara@lbc-hub.com
              </a>
              <p className="text-white/20 text-xs">Ottawa, Canada 🍁</p>
            </div>
            <div className="flex items-center gap-3">
              {[
                { icon: X, href: "https://x.com/LBC_FOUNDER", label: "X" },
                { icon: Send, href: "https://t.me/LBCHUBofficial", label: "Telegram" },
                { icon: Github, href: "https://github.com/LBCinchub", label: "GitHub" },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className="text-white/30 hover:text-white/60 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}