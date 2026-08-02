import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Github, ArrowUpRight } from 'lucide-react';
import { usePrefersReducedMotion } from '@/components/family-tree/hooks';
import { GITHUB_URL, SOCIAL } from '@/data/ecosystem';

const LINKS = [
  { label: 'Ecosystem', href: '#ecosystem' },
  { label: 'LBC AI', href: '#lbc-ai' },
  { label: 'Protocol', href: '#protocol' },
  { label: 'Partners', href: '#partners' },
  { label: 'Contact', href: '#contact' },
];

export default function SiteNav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reduced = usePrefersReducedMotion();
  const btnRef = useRef(null);
  const panelRef = useRef(null);
  const firstLinkRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (open) {
      firstLinkRef.current?.focus();
      const onKey = (e) => {
        if (e.key === 'Escape') {
          setOpen(false);
          btnRef.current?.focus();
        }
      };
      document.addEventListener('keydown', onKey);
      return () => document.removeEventListener('keydown', onKey);
    }
  }, [open]);

  const handleNav = () => setOpen(false);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-[#0a0a0a]/80 backdrop-blur border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between"
        aria-label="Primary"
      >
        <a href="#top" className="flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded-lg px-1">
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center" aria-hidden="true">
            <span className="w-2 h-2 rounded-full bg-white" />
          </span>
          <span className="text-base font-semibold tracking-tight text-white">LBC Network</span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="px-3 py-2 text-sm text-white/60 hover:text-white transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View LBC Network on GitHub"
            className="w-9 h-9 inline-flex items-center justify-center rounded-lg text-white/60 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 h-9 rounded-lg bg-white/5 border border-white/10 text-sm text-white/80 hover:bg-white/10 hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
          >
            Work With LBC <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        <button
          ref={btnRef}
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="md:hidden w-11 h-11 inline-flex items-center justify-center rounded-lg text-white/80 hover:text-white hover:bg-white/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div
          ref={panelRef}
          id="mobile-menu"
          className="md:hidden bg-[#0a0a0a]/95 backdrop-blur border-b border-white/10"
        >
          <ul className="px-6 py-3 flex flex-col">
            {LINKS.map((l, i) => (
              <li key={l.href}>
                <a
                  ref={i === 0 ? firstLinkRef : undefined}
                  href={l.href}
                  onClick={handleNav}
                  className="block min-h-[44px] py-3 text-base text-white/80 hover:text-white border-b border-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-400/60 rounded-md"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="px-6 pb-5 flex gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleNav}
              className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] rounded-lg border border-white/10 text-white/80 text-sm"
            >
              <Github className="w-4 h-4" /> GitHub
            </a>
            <a
              href="#contact"
              onClick={handleNav}
              className="flex-1 inline-flex items-center justify-center gap-2 min-h-[44px] rounded-lg bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold"
            >
              Work With LBC
            </a>
          </div>
        </div>
      )}
    </header>
  );
}