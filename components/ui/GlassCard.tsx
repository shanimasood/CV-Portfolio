'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  tilt?: boolean;
  glow?: boolean;
}

export default function GlassCard({
  children,
  className,
  tilt = true,
  glow = false,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || !tilt) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformStyle: 'preserve-3d' } : undefined}
      className={cn(
        'group relative rounded-2xl glass overflow-hidden',
        'shadow-inner-glow',
        glow && 'shadow-glow',
        className,
      )}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-flame-500/[0.06] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div style={tilt ? { transform: 'translateZ(40px)' } : undefined} className="relative h-full">
        {children}
      </div>
    </motion.div>
  );
}
