'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Sparkles, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL, SOCIALS } from '@/lib/data';
import MagneticButton from '@/components/ui/MagneticButton';
import TypingEffect from '@/components/ui/TypingEffect';
import GridBackground from '@/components/ui/GridBackground';

const FLOATING_TECH = [
  { name: 'Vue', top: '20%', left: '8%', delay: 0 },
  { name: 'Node', top: '70%', left: '5%', delay: 0.4 },
  { name: 'Java', top: '15%', right: '10%', delay: 0.2 },
  { name: 'Quarkus', top: '65%', right: '8%', delay: 0.6 },
  { name: 'PostgreSQL', top: '85%', left: '15%', delay: 0.8 },
  { name: 'Camunda', top: '30%', right: '15%', delay: 1.0 },
  { name: 'React Native', top: '78%', right: '18%', delay: 1.2 },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24"
    >
      <GridBackground />

      {/* Floating tech pills (decorative, desktop only) */}
      <div className="absolute inset-0 hidden lg:block pointer-events-none">
        {FLOATING_TECH.map((tech) => (
          <motion.div
            key={tech.name}
            className="absolute glass px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.16em] text-ink-200 font-mono"
            style={{
              top: tech.top,
              left: tech.left,
              right: tech.right,
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -10, 0],
            }}
            transition={{
              opacity: { delay: 1.5 + tech.delay, duration: 0.6 },
              scale: { delay: 1.5 + tech.delay, duration: 0.6 },
              y: {
                delay: 2 + tech.delay,
                duration: 6 + tech.delay,
                repeat: Infinity,
                ease: 'easeInOut',
              },
            }}
          >
            {tech.name}
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full mb-10"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-flame-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-flame-500" />
            </span>
            <span className="text-[11px] uppercase tracking-[0.2em] text-ink-200 font-mono">
              {PERSONAL.available ? 'Open to new opportunities' : 'Currently engaged'}
            </span>
          </motion.div>

          <h1 className="font-sans font-medium text-[clamp(3rem,10vw,9rem)] leading-[0.92] tracking-[-0.04em] mb-6">
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="block text-gradient"
            >
              Muhammad
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 40, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 1, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="block font-serif italic text-gradient-flame"
            >
              Zeeshan Masood.
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="flex items-center justify-center gap-3 text-ink-200 text-lg md:text-xl mb-6"
          >
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-300">
              I am a
            </span>
            <span className="font-serif italic text-flame-400 text-2xl md:text-3xl min-w-[160px] text-left">
              <TypingEffect words={[...PERSONAL.rotatingTitles]} />
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3 }}
            className="text-ink-200 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-10"
          >
            {PERSONAL.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <MagneticButton href="#projects" variant="primary">
              <Sparkles className="w-4 h-4" />
              View Selected Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="glass">
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="flex items-center justify-center gap-2"
          >
            {SOCIALS.map((s) => {
              const Icon =
                s.label === 'LinkedIn'
                  ? Linkedin
                  : s.label === 'Email'
                  ? Mail
                  : Github;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="w-11 h-11 rounded-full glass hover:bg-flame-500/10 hover:border-flame-500/30 transition-all flex items-center justify-center text-ink-200 hover:text-flame-400 group"
                  aria-label={s.label}
                >
                  <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                </a>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-ink-400"
        >
          <span className="text-[10px] uppercase tracking-[0.2em] font-mono">
            Scroll
          </span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <ArrowDown className="w-3 h-3" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
