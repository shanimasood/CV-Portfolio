'use client';

import { motion, useInView, type Variants } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const wordVariants: Variants = {
  hidden: { opacity: 0, y: 40, filter: 'blur(8px)' },
  visible: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function AnimatedText({
  text,
  className,
  delay = 0,
  stagger = 0.06,
  as: Tag = 'h2',
}: AnimatedTextProps) {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.3 });
  const words = text.split(' ');

  return (
    <Tag
      ref={ref as React.Ref<HTMLHeadingElement>}
      className={cn('inline-block', className)}
    >
      <motion.span
        className="inline"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ staggerChildren: stagger, delayChildren: delay }}
      >
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden pb-[0.15em] -mb-[0.15em] align-bottom"
          >
            <motion.span variants={wordVariants} className="inline-block">
              {word}
              {i < words.length - 1 && '\u00A0'}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}
