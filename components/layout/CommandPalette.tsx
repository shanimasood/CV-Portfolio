'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ArrowRight, Mail, Linkedin, Phone, X } from 'lucide-react';
import { NAV_LINKS, PERSONAL, PROJECTS } from '@/lib/data';
import { cn } from '@/lib/utils';

interface Item {
  id: string;
  label: string;
  hint: string;
  href: string;
  icon?: React.ReactNode;
  group: string;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);

  const items: Item[] = [
    ...NAV_LINKS.map((l) => ({
      id: l.href,
      label: l.label,
      hint: 'Navigate',
      href: l.href,
      icon: <ArrowRight className="w-4 h-4" />,
      group: 'Sections',
    })),
    ...PROJECTS.map((p) => ({
      id: p.id,
      label: p.title,
      hint: p.subtitle,
      href: `#projects`,
      icon: <ArrowRight className="w-4 h-4" />,
      group: 'Projects',
    })),
    {
      id: 'email',
      label: 'Send email',
      hint: PERSONAL.email,
      href: `mailto:${PERSONAL.email}`,
      icon: <Mail className="w-4 h-4" />,
      group: 'Contact',
    },
    {
      id: 'linkedin',
      label: 'LinkedIn',
      hint: 'Connect on LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-zeeshan-masood-abb6871b8/',
      icon: <Linkedin className="w-4 h-4" />,
      group: 'Contact',
    },
    {
      id: 'phone',
      label: 'Call',
      hint: PERSONAL.phone,
      href: `tel:${PERSONAL.phone.replace(/\s/g, '')}`,
      icon: <Phone className="w-4 h-4" />,
      group: 'Contact',
    },
  ];

  const filtered = items.filter(
    (item) =>
      !query ||
      item.label.toLowerCase().includes(query.toLowerCase()) ||
      item.hint.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    const onOpen = () => setOpen(true);
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((p) => !p);
      }
      if (e.key === 'Escape') setOpen(false);
    };

    window.addEventListener('open-command-palette', onOpen as EventListener);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('open-command-palette', onOpen as EventListener);
      window.removeEventListener('keydown', onKey);
    };
  }, []);

  useEffect(() => {
    if (open) setQuery('');
    setActive(0);
  }, [open]);

  const handleSelect = (item: Item) => {
    setOpen(false);
    if (item.href.startsWith('#')) {
      const el = document.querySelector(item.href);
      el?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.open(item.href, item.href.startsWith('http') ? '_blank' : '_self');
    }
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((p) => Math.min(p + 1, filtered.length - 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((p) => Math.max(p - 1, 0));
    }
    if (e.key === 'Enter' && filtered[active]) {
      handleSelect(filtered[active]);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4"
        >
          <div
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-ink-900/70 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -10 }}
            transition={{ duration: 0.18 }}
            className="relative w-full max-w-xl glass-strong rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="flex items-center gap-3 px-5 border-b border-glass-border">
              <Search className="w-4 h-4 text-ink-300" />
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={onKeyDown}
                autoFocus
                placeholder="Search sections, projects, contact…"
                className="flex-1 bg-transparent outline-none py-4 text-ink-50 placeholder:text-ink-400 text-sm"
              />
              <kbd className="hidden sm:inline-block text-[10px] font-mono px-1.5 py-0.5 rounded border border-glass-border text-ink-300">
                ESC
              </kbd>
              <button
                onClick={() => setOpen(false)}
                className="sm:hidden text-ink-300 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="max-h-[50vh] overflow-y-auto py-2">
              {filtered.length === 0 && (
                <div className="px-5 py-8 text-center text-sm text-ink-400">
                  No results for &ldquo;{query}&rdquo;
                </div>
              )}
              {Array.from(new Set(filtered.map((i) => i.group))).map((group) => (
                <div key={group}>
                  <div className="px-5 pt-3 pb-1 text-[10px] uppercase tracking-[0.15em] text-ink-400 font-mono">
                    {group}
                  </div>
                  {filtered
                    .filter((i) => i.group === group)
                    .map((item) => {
                      const itemIndex = filtered.indexOf(item);
                      return (
                        <button
                          key={item.id}
                          onClick={() => handleSelect(item)}
                          onMouseEnter={() => setActive(itemIndex)}
                          className={cn(
                            'w-full flex items-center gap-3 px-5 py-2.5 text-left transition-colors',
                            active === itemIndex
                              ? 'bg-glass-strong text-ink-50'
                              : 'text-ink-300 hover:bg-glass',
                          )}
                        >
                          <span className="text-ink-400">{item.icon}</span>
                          <span className="flex-1">
                            <span className="block text-sm">{item.label}</span>
                            <span className="block text-xs text-ink-400">
                              {item.hint}
                            </span>
                          </span>
                          {active === itemIndex && (
                            <kbd className="text-[10px] font-mono text-ink-400">
                              ↵
                            </kbd>
                          )}
                        </button>
                      );
                    })}
                </div>
              ))}
            </div>

            <div className="px-5 py-3 border-t border-glass-border flex items-center justify-between text-[10px] font-mono text-ink-400">
              <span className="flex items-center gap-3">
                <span>↑↓ navigate</span>
                <span>↵ select</span>
              </span>
              <span>command palette</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
