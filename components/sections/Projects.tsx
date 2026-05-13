'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ExternalLink, Github as GithubIcon, FileText, ImageIcon } from 'lucide-react';
import { PROJECTS } from '@/lib/data';
import type { Project } from '@/types';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';
import GlassCard from '@/components/ui/GlassCard';
import { cn } from '@/lib/utils';

const FILTERS: { label: string; value: Project['category'] | 'all' }[] = [
  { label: 'All', value: 'all' },
  { label: 'Products', value: 'product' },
  { label: 'Enterprise', value: 'enterprise' },
  { label: 'Workflow', value: 'workflow' },
  { label: 'Mobile', value: 'mobile' },
];

const statusLabels: Record<Project['status'], string> = {
  shipping: 'Currently Shipping',
  live: 'Live',
  personal: 'Personal',
};

function ProjectCard({ project, featured }: { project: Project; featured?: boolean }) {
  return (
    <GlassCard
      tilt={!featured}
      glow={featured}
      className={cn(
        'h-full',
        featured ? 'p-8 md:p-12 col-span-full lg:col-span-2' : 'p-7',
      )}
    >
      <div className="flex items-start justify-between gap-4 mb-6">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={cn(
              'inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full',
              project.status === 'shipping' &&
                'text-flame-400 border border-flame-500/30 bg-flame-500/10',
              project.status === 'live' &&
                'text-ink-200 border border-glass-border bg-glass',
              project.status === 'personal' &&
                'text-violet-300 border border-violet-500/30 bg-violet-500/10',
            )}
          >
            {project.status === 'shipping' && (
              <span className="w-1.5 h-1.5 rounded-full bg-flame-500 animate-pulse" />
            )}
            {statusLabels[project.status]}
          </span>
          {project.featured && (
            <span className="inline-flex items-center gap-1 text-[10px] uppercase tracking-[0.16em] font-mono text-ink-300">
              <Sparkles className="w-3 h-3 text-flame-400" />
              Featured
            </span>
          )}
        </div>
        <ArrowUpRight className="w-5 h-5 text-ink-400 group-hover:text-flame-400 group-hover:rotate-45 transition-all duration-500" />
      </div>

      <ProjectMedia project={project} featured={featured} />

      <h3
        className={cn(
          'font-serif tracking-tight leading-[1.05] mb-2',
          featured ? 'text-4xl md:text-6xl' : 'text-2xl md:text-3xl',
        )}
      >
        <span className="text-ink-50">{project.title}</span>
      </h3>
      <p className="text-flame-400 font-serif italic text-base md:text-lg mb-5">
        {project.subtitle}
      </p>
      <p className={cn('text-ink-300 leading-relaxed mb-6', featured ? 'text-base md:text-lg max-w-2xl' : 'text-sm')}>
        {project.description}
      </p>

      {featured && project.highlights && (
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-8 max-w-2xl">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm text-ink-200"
            >
              <span className="text-flame-400 mt-1.5">→</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="flex flex-wrap gap-1.5">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-[10px] font-mono uppercase tracking-[0.08em] px-2 py-1 border border-glass-border rounded-md text-ink-300 hover:text-flame-400 hover:border-flame-500/40 transition-colors"
          >
            {tag}
          </span>
        ))}
      </div>

      {project.links && (project.links.live || project.links.github || project.links.case) && (
        <div className="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-glass-border">
          {project.links.live && (
            <ProjectLink href={project.links.live} icon={ExternalLink} label="Live" primary />
          )}
          {project.links.github && (
            <ProjectLink href={project.links.github} icon={GithubIcon} label="Code" />
          )}
          {project.links.case && (
            <ProjectLink href={project.links.case} icon={FileText} label="Case study" />
          )}
        </div>
      )}
    </GlassCard>
  );
}

function ProjectMedia({ project, featured }: { project: Project; featured?: boolean }) {
  const aspect = featured ? 'aspect-[16/9]' : 'aspect-[4/3]';
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-xl mb-6 border border-glass-border bg-ink-900',
        aspect,
      )}
    >
      {project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} — preview`}
          fill
          sizes={featured ? '(min-width: 1024px) 66vw, 100vw' : '(min-width: 1024px) 33vw, 100vw'}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-flame-500/5 via-transparent to-violet-500/5">
          <div className="flex flex-col items-center gap-2 text-ink-500">
            <ImageIcon className="w-8 h-8" strokeWidth={1.5} />
            <span className="text-[10px] uppercase tracking-[0.18em] font-mono">
              Preview soon
            </span>
          </div>
        </div>
      )}
    </div>
  );
}

function ProjectLink({
  href,
  icon: Icon,
  label,
  primary,
}: {
  href: string;
  icon: typeof ExternalLink;
  label: string;
  primary?: boolean;
}) {
  const external = href.startsWith('http');
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      onClick={(e) => e.stopPropagation()}
      className={cn(
        'inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.14em] font-mono px-3 py-1.5 rounded-full border transition-colors',
        primary
          ? 'border-flame-500/40 text-flame-300 bg-flame-500/10 hover:bg-flame-500/20 hover:border-flame-500/60'
          : 'border-glass-border text-ink-200 hover:text-flame-400 hover:border-flame-500/40',
      )}
    >
      <Icon className="w-3.5 h-3.5" />
      {label}
    </a>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Project['category'] | 'all'>('all');

  const filtered =
    filter === 'all'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  const featured = filtered.find((p) => p.featured && filter === 'all');
  const rest = filtered.filter((p) => p.id !== featured?.id);

  return (
    <section id="projects" className="relative py-32 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal className="mb-16">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              02
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Selected Work
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>
          <AnimatedText
            text="Things I've shipped."
            as="h2"
            className="font-serif text-5xl md:text-7xl tracking-tight text-gradient"
          />
          <p className="text-ink-300 text-lg max-w-2xl mt-6">
            A flagship enterprise product, a few critical workstreams powering a major Pakistani bank, and one personal project I built for myself.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mb-10">
          <div className="flex flex-wrap gap-2">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={cn(
                  'relative px-4 py-2 text-xs uppercase tracking-[0.15em] font-mono rounded-full transition-colors',
                  filter === f.value
                    ? 'text-ink-50'
                    : 'text-ink-300 hover:text-ink-50',
                )}
              >
                {filter === f.value && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 rounded-full glass-strong"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative">{f.label}</span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {featured && (
              <motion.div
                key={featured.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-2 group"
              >
                <ProjectCard project={featured} featured />
              </motion.div>
            )}
            {rest.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group"
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
