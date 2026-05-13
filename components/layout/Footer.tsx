'use client';

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { PERSONAL, SOCIALS, NAV_LINKS } from '@/lib/data';

export default function Footer() {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-glass-border mt-32">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-flame-500/40 to-transparent" />
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <h3 className="font-serif italic text-5xl md:text-6xl text-gradient leading-none mb-4">
              Let&rsquo;s build.
            </h3>
            <p className="text-ink-300 text-sm max-w-sm mt-6">
              Available for full-stack engineering, technical leadership, and
              FinTech engagements. Based in {PERSONAL.location.split(',')[0]}, working with teams worldwide.
            </p>
            <motion.button
              whileHover={{ y: -4 }}
              onClick={scrollTop}
              className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-ink-300 hover:text-flame-400 transition-colors group"
            >
              <span className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-flame-500/10 transition-colors">
                <ArrowUp className="w-4 h-4" />
              </span>
              Back to top
            </motion.button>
          </div>

          <div className="md:col-span-3">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-5 font-mono">
              Navigate
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-ink-200 hover:text-flame-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <h4 className="text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-5 font-mono">
              Connect
            </h4>
            <ul className="space-y-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="group inline-flex items-center justify-between w-full"
                  >
                    <span className="text-[10px] uppercase tracking-[0.18em] text-ink-400">
                      {social.label}
                    </span>
                    <span className="text-sm font-serif italic text-ink-100 group-hover:text-flame-400 transition-colors">
                      {social.handle} →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-glass-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400 font-mono">
            © {new Date().getFullYear()} {PERSONAL.name}. All rights reserved.
          </p>
          <p className="text-[11px] uppercase tracking-[0.18em] text-ink-400 font-mono">
            Designed &amp; built with intent
          </p>
        </div>
      </div>
    </footer>
  );
}
