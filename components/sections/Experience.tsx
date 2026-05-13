'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { EXPERIENCES } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';
import type { Experience as ExperienceType } from '@/types';

function TimelineItem({ exp, index }: { exp: ExperienceType; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative pl-12 md:pl-20"
    >
      {/* Dot */}
      <div className="absolute left-4 md:left-8 top-1.5 -translate-x-1/2">
        <div className="relative">
          <span className="absolute inset-0 rounded-full bg-flame-500/40 animate-ping" />
          <span className="relative block w-3 h-3 rounded-full bg-flame-500 ring-4 ring-ink-900" />
        </div>
      </div>

      {/* Period */}
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-mono text-ink-400 mb-3">
        <Calendar className="w-3 h-3" />
        <span>
          {exp.start} — {exp.end}
        </span>
        {exp.current && <span className="text-flame-400">· Now</span>}
      </div>

      {/* Company */}
      <h3 className="font-serif italic text-3xl md:text-4xl text-flame-400 leading-tight mb-1">
        {exp.company}
      </h3>

      {/* Role */}
      <h4 className="font-serif text-2xl md:text-3xl text-ink-50 leading-tight mb-2">
        {exp.role}
      </h4>

      {/* Location */}
      <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.18em] font-mono text-ink-400 mb-5">
        <MapPin className="w-3 h-3" />
        {exp.location}
      </div>

      {/* Description */}
      <div className="space-y-3 mb-6 max-w-2xl">
        {exp.description.map((d, j) => (
          <p key={j} className="text-ink-300 text-sm md:text-base leading-relaxed">
            {d}
          </p>
        ))}
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-1.5">
        {exp.tags.map((t) => (
          <span
            key={t}
            className="text-[10px] font-mono uppercase tracking-[0.08em] px-2 py-1 border border-glass-border rounded-md text-ink-300 hover:text-flame-400 hover:border-flame-500/40 transition-colors"
          >
            {t}
          </span>
        ))}
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 40%', 'end 70%'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="experience" className="relative py-32 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              03
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Experience
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>
          <AnimatedText
            text="The path so far."
            as="h2"
            className="font-serif text-5xl md:text-7xl tracking-tight text-gradient"
          />
        </Reveal>

        <div ref={containerRef} className="relative max-w-4xl">
          {/* Static line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-glass-border" />
          {/* Animated line on scroll */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-4 md:left-8 top-0 w-px bg-gradient-to-b from-flame-500 via-flame-400 to-flame-500/0"
          />

          <div className="space-y-20">
            {EXPERIENCES.map((exp, i) => (
              <TimelineItem key={exp.id} exp={exp} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
