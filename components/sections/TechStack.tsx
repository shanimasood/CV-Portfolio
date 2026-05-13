'use client';

import { motion } from 'framer-motion';
import { TECH_STACK } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';

export default function TechStack() {
  const categories = Array.from(new Set(TECH_STACK.map((t) => t.category)));

  return (
    <section id="stack" className="relative py-32 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              06
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Tech Stack
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>
          <AnimatedText
            text="My toolbox."
            as="h2"
            className="font-serif text-5xl md:text-7xl tracking-tight text-gradient"
          />
          <p className="text-ink-300 text-lg max-w-2xl mt-6">
            The languages, frameworks, and platforms I reach for daily.
          </p>
        </Reveal>

        <div className="space-y-12">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 0.06}>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
                <div className="md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400 mb-1">
                    Category 0{ci + 1}
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-ink-50">
                    {cat}
                  </h3>
                </div>
                <div className="md:col-span-9 flex flex-wrap gap-2 md:gap-3">
                  {TECH_STACK.filter((t) => t.category === cat).map((tech, i) => (
                    <motion.div
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.04 }}
                      whileHover={{
                        scale: 1.05,
                        y: -3,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative px-4 py-2.5 md:px-5 md:py-3 glass rounded-full cursor-default"
                    >
                      <div className="absolute inset-0 rounded-full bg-flame-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative text-sm font-medium text-ink-100 group-hover:text-flame-400 transition-colors">
                        {tech.name}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
