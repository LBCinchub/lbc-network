import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ExternalLink } from 'lucide-react';
import { nodes, LEVELS } from './nodes';
import { usePrefersReducedMotion } from './hooks';

export default function MobileTimeline({ filter }) {
  const [open, setOpen] = useState(null);
  const reduced = usePrefersReducedMotion();

  const nodeMismatch = (n) =>
    (filter === 'Live' && n.status !== 'LIVE') ||
    (filter === 'Building' && n.status !== 'BUILDING');

  return (
    <div className="relative pl-8">
      <div
        className="absolute left-[10px] top-2 bottom-2 w-px bg-gradient-to-b from-violet-400/30 via-white/10 to-transparent"
        aria-hidden="true"
      />
      <div className="space-y-8">
        {LEVELS.map(({ level, label }) => {
          const lvlNodes = nodes.filter((n) => n.level === level);
          return (
            <div key={level} className="relative">
              <div
                className="absolute -left-[22px] top-1 w-3 h-3 rounded-full border-2 border-violet-400 bg-[#0a0a0a]"
                aria-hidden="true"
              />
              <p className="text-[10px] uppercase tracking-[0.2em] text-white/40 mb-3">
                {`0${level} — ${label}`}
              </p>
              <div className="space-y-3">
                {lvlNodes.map((n) => {
                  const Icon = n.icon;
                  const isOpen = open === n.id;
                  const mismatch = nodeMismatch(n);
                  const isHttp = n.href.startsWith('http');
                  return (
                    <div
                      key={n.id}
                      className={`rounded-2xl border ${
                        isOpen ? 'border-violet-400/50' : 'border-white/10'
                      } bg-white/[0.03] overflow-hidden`}
                      style={{ opacity: mismatch ? 0.45 : 1 }}
                    >
                      <button
                        type="button"
                        onClick={() => setOpen(isOpen ? null : n.id)}
                        aria-expanded={isOpen}
                        aria-controls={`m-${n.id}`}
                        className="w-full min-h-[56px] flex items-center gap-3 p-4 text-left"
                      >
                        <span className="w-9 h-9 rounded-xl bg-white/5 flex items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-white/70" />
                        </span>
                        <span className="flex-1 min-w-0">
                          <span className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white truncate">
                              {n.publicName}
                            </span>
                            <span
                              className="w-1.5 h-1.5 rounded-full shrink-0"
                              style={{
                                background: n.status === 'LIVE' ? '#4ADE80' : '#60A5FA',
                              }}
                            />
                          </span>
                          <span className="text-[11px] text-white/40 font-mono truncate block">
                            {n.domain}
                          </span>
                        </span>
                        <ChevronDown
                          className={`w-4 h-4 text-white/40 shrink-0 transition-transform ${
                            isOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`m-${n.id}`}
                            initial={reduced ? false : { height: 0, opacity: 0 }}
                            animate={
                              reduced ? { opacity: 1 } : { height: 'auto', opacity: 1 }
                            }
                            exit={reduced ? { opacity: 0 } : { height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <div className="px-4 pb-4 pt-1 space-y-3">
                              <p className="text-xs text-white/55 leading-relaxed">
                                {n.description}
                              </p>
                              <div className="flex flex-wrap gap-2 text-[10px]">
                                <span className="px-2 py-1 rounded-full border border-white/10 text-white/50 uppercase tracking-wide">
                                  {n.role}
                                </span>
                                <span
                                  className="px-2 py-1 rounded-full border font-bold"
                                  style={{
                                    borderColor:
                                      n.status === 'LIVE' ? '#4ADE80' : '#60A5FA',
                                    color: n.status === 'LIVE' ? '#4ADE80' : '#60A5FA',
                                  }}
                                >
                                  {n.status}
                                </span>
                              </div>
                              {isHttp ? (
                                <a
                                  href={n.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 text-xs font-semibold text-violet-300 hover:text-violet-200 min-h-[44px] py-2"
                                >
                                  Visit Site <ExternalLink className="w-3 h-3" />
                                </a>
                              ) : (
                                <span className="inline-flex items-center text-xs text-white/30 min-h-[44px] py-2">
                                  In development
                                </span>
                              )}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}