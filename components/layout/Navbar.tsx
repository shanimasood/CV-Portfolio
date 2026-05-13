'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Command } from 'lucide-react';
import { NAV_LINKS, PERSONAL } from '@/lib/data';
import { cn } from '@/lib/utils';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_LINKS.map((l) =>
      document.querySelector(l.href),
    ).filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0.01 },
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const openCommand = () => {
    window.dispatchEvent(new CustomEvent('open-command-palette'));
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          scrolled ? 'py-3' : 'py-5',
        )}
      >
        <div className="container mx-auto px-6">
          <div
            className={cn(
              'flex items-center justify-between rounded-full transition-all duration-500',
              scrolled
                ? 'glass-strong px-5 py-3'
                : 'px-2 py-2',
            )}
          >
            <a href="#hero" className="flex items-center gap-2 group">
              <div className="relative h-9 w-9 rounded-full glass flex items-center justify-center overflow-hidden">
                <span className="font-serif italic text-flame-400 text-lg leading-none">
                  {PERSONAL.initials.charAt(0)}
                </span>
                <div className="absolute inset-0 bg-gradient-to-tr from-flame-500/20 to-transparent" />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className="text-sm font-medium text-ink-50">
                  {PERSONAL.shortName}
                </span>
                <span className="text-[10px] uppercase tracking-[0.18em] text-ink-300 mt-0.5">
                  {PERSONAL.title.split('·')[0].trim()}
                </span>
              </div>
            </a>

            <nav className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-4 py-2 text-sm transition-colors duration-300 rounded-full',
                    active === link.href
                      ? 'text-ink-50'
                      : 'text-ink-300 hover:text-ink-50',
                  )}
                >
                  {active === link.href && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 rounded-full bg-glass-strong"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <button
                onClick={openCommand}
                className="hidden md:flex items-center gap-2 px-3 py-2 rounded-full text-xs text-ink-300 hover:text-ink-50 glass hover:bg-glass-strong transition-colors"
                aria-label="Open command palette"
              >
                <Command className="w-3.5 h-3.5" />
                <span className="font-mono">⌘K</span>
              </button>
              <button
                className="lg:hidden p-2 text-ink-50"
                onClick={() => setOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] lg:hidden"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-ink-900/80 backdrop-blur-xl"
              onClick={() => setOpen(false)}
            />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 280 }}
              className="absolute top-0 right-0 bottom-0 w-[85%] max-w-sm bg-ink-800/95 backdrop-blur-2xl border-l border-glass-border p-8"
            >
              <div className="flex items-center justify-between mb-12">
                <span className="text-xs uppercase tracking-[0.2em] text-ink-300">
                  Navigate
                </span>
                <button onClick={() => setOpen(false)} className="text-ink-50 p-1">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i + 0.1, duration: 0.4 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-3 py-4 border-b border-glass-border text-2xl font-serif text-ink-50 hover:text-flame-400 transition-colors"
                    >
                      <span className="font-mono text-[11px] text-ink-300">
                        0{i + 1}
                      </span>
                      <span>{link.label}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-12 pt-8 border-t border-glass-border">
                <p className="text-xs uppercase tracking-[0.2em] text-ink-300 mb-4">
                  Reach out
                </p>
                <a
                  href={`mailto:${PERSONAL.email}`}
                  className="text-ink-50 hover:text-flame-400 transition-colors block py-1 font-mono text-sm"
                >
                  {PERSONAL.email}
                </a>
                <a
                  href={`tel:${PERSONAL.phone.replace(/\s/g, '')}`}
                  className="text-ink-50 hover:text-flame-400 transition-colors block py-1 font-mono text-sm"
                >
                  {PERSONAL.phone}
                </a>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
