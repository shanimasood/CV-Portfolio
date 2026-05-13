'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

const variants = (direction: Direction, distance = 40): Variants => {
  const offsets: Record<Direction, { x: number; y: number }> = {
    up: { x: 0, y: distance },
    down: { x: 0, y: -distance },
    left: { x: distance, y: 0 },
    right: { x: -distance, y: 0 },
    none: { x: 0, y: 0 },
  };
  const { x, y } = offsets[direction];
  return {
    hidden: { opacity: 0, x, y, filter: 'blur(8px)' },
    visible: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
  };
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.8,
  className,
  once = true,
  amount = 0.2,
}: RevealProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      variants={variants(direction)}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
