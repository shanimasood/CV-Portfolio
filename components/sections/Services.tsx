'use client';

import {
  Code, Smartphone, Banknote, Workflow, Database, Users,
  LucideIcon, ArrowRight,
} from 'lucide-react';
import { motion } from 'framer-motion';
import { SERVICES } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';

const iconMap: Record<string, LucideIcon> = {
  code: Code,
  smartphone: Smartphone,
  banknote: Banknote,
  workflow: Workflow,
  database: Database,
  users: Users,
};

export default function Services() {
  return (
    <section id="services" className="relative py-32 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              04
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Services
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>
          <AnimatedText
            text="How I can help."
            as="h2"
            className="font-serif text-5xl md:text-7xl tracking-tight text-gradient"
          />
          <p className="text-ink-300 text-lg max-w-2xl mt-6">
            From single feature builds to full product engineering — I take on work where craft and clean architecture matter.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-glass-border rounded-2xl overflow-hidden">
          {SERVICES.map((service, i) => {
            const Icon = iconMap[service.icon] || Code;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-ink-900/60 backdrop-blur p-8 md:p-10 hover:bg-ink-800/60 transition-colors duration-500"
              >
                {/* Subtle hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-flame-500/0 via-transparent to-flame-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-flame-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="relative w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-flame-500/40 transition-colors">
                        <Icon className="w-5 h-5 text-flame-400" />
                      </div>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                      0{i + 1}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl md:text-3xl text-ink-50 mb-3 leading-tight">
                    {service.title}
                  </h3>
                  <p className="text-ink-300 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-1.5 mb-6">
                    {service.bullets.map((b) => (
                      <li
                        key={b}
                        className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.1em] text-ink-300"
                      >
                        <span className="w-1 h-1 rounded-full bg-flame-500/50" />
                        {b}
                      </li>
                    ))}
                  </ul>

                  <div className="inline-flex items-center gap-2 text-xs text-ink-400 group-hover:text-flame-400 transition-colors">
                    <span className="uppercase tracking-[0.16em] font-mono">
                      Discuss
                    </span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
