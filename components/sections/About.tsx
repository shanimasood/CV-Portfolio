'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { PERSONAL, STATS, SKILLS } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';
import Counter from '@/components/ui/Counter';
import AnimatedText from '@/components/ui/AnimatedText';

function SkillBar({ skill, index }: { skill: typeof SKILLS[number]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <div ref={ref} className="group">
      <div className="flex items-baseline justify-between mb-2">
        <h4 className="text-sm font-medium text-ink-50">{skill.category}</h4>
        <span className="text-[10px] font-mono text-ink-400">
          {skill.proficiency}%
        </span>
      </div>
      <div className="relative h-[2px] bg-glass-border overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: inView ? `${skill.proficiency}%` : 0 }}
          transition={{
            duration: 1.4,
            delay: 0.2 + index * 0.08,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-flame-500 to-flame-300 rounded-full"
        />
      </div>
      <div className="mt-2 flex flex-wrap gap-1">
        {skill.items.map((item) => (
          <span
            key={item}
            className="text-[10px] uppercase tracking-[0.1em] text-ink-400 font-mono"
          >
            {item}
            <span className="text-ink-600 mx-1.5">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="relative py-32 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              01
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              About
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>
          <AnimatedText
            text="The person behind the code."
            as="h2"
            className="font-serif text-5xl md:text-7xl tracking-tight text-gradient"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-7 space-y-8">
            <Reveal delay={0.1}>
              <p className="font-serif italic text-2xl md:text-3xl leading-[1.4] text-ink-100">
                Senior engineer with{' '}
                <span className="text-flame-400">five years in FinTech</span>{' '}
                — building across the full stack: Vue.js and React Native front-ends, Node.js and Java Quarkus services, and PostgreSQL data layers.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="text-ink-300 text-base md:text-lg leading-relaxed max-w-2xl">
                Currently leading front-end and full-stack work for enterprise digital banking at a leading Pakistani bank, designing Camunda BPMN flows for new business processes, and helping ship Teresol&apos;s flagship Credit Management System from the ground up.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="text-ink-300 text-base md:text-lg leading-relaxed max-w-2xl">
                I care about clean architecture, scalable patterns, and writing the kind of code my future self will thank me for.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="grid grid-cols-2 gap-px bg-glass-border rounded-2xl overflow-hidden mt-12">
                {STATS.map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-ink-900/40 backdrop-blur p-6 md:p-8"
                  >
                    <div className="font-serif italic text-5xl md:text-6xl text-flame-400 leading-none">
                      <Counter end={stat.value} suffix={stat.suffix} />
                    </div>
                    <div className="text-[10px] uppercase tracking-[0.18em] text-ink-300 font-mono mt-3">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.2} direction="left">
              <div className="sticky top-32 space-y-7">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-400">
                    Skill Stack
                  </span>
                  <h3 className="font-serif text-3xl md:text-4xl mt-2 mb-1">
                    What I build with.
                  </h3>
                </div>
                <div className="space-y-7">
                  {SKILLS.map((skill, i) => (
                    <SkillBar key={skill.category} skill={skill} index={i} />
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
