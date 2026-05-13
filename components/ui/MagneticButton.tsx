'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost' | 'glass';

interface CommonProps {
  children: React.ReactNode;
  variant?: Variant;
  strength?: number;
  className?: string;
}

interface ButtonProps extends CommonProps,
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps> {
  href?: undefined;
}

interface AnchorProps extends CommonProps,
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> {
  href: string;
}

type MagneticButtonProps = ButtonProps | AnchorProps;

function variantStyles(variant: Variant) {
  if (variant === 'primary') {
    return 'bg-flame-500 hover:bg-flame-400 text-white shadow-glow';
  }
  if (variant === 'glass') {
    return 'glass-strong hover:bg-glass-strong text-ink-50';
  }
  return 'border border-glass-border text-ink-50 hover:bg-glass';
}

export default function MagneticButton({
  children,
  className,
  variant = 'primary',
  strength = 0.35,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 18 });
  const springY = useSpring(y, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;
    x.set(offsetX * strength);
    y.set(offsetY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const sharedClasses = cn(
    'relative px-7 py-3.5 rounded-full text-sm font-medium',
    'transition-colors duration-300 inline-flex items-center gap-2',
    variantStyles(variant),
    className,
  );

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {'href' in rest && rest.href ? (
        <a {...(rest as AnchorProps)} className={sharedClasses}>
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </a>
      ) : (
        <button {...(rest as ButtonProps)} className={sharedClasses}>
          <span className="relative z-10 flex items-center gap-2">{children}</span>
        </button>
      )}
    </motion.div>
  );
}
