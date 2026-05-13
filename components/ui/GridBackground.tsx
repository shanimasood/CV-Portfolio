'use client';

import { cn } from '@/lib/utils';

interface GridBackgroundProps {
  className?: string;
  withGlow?: boolean;
}

export default function GridBackground({
  className,
  withGlow = true,
}: GridBackgroundProps) {
  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <div className="absolute inset-0 grid-bg mask-radial opacity-60" />
      {withGlow && (
        <>
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-flame-500/10 blur-[120px] animate-glow" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-flame-400/5 blur-[100px]" />
        </>
      )}
      <div className="absolute inset-0 noise-bg" />
    </div>
  );
}
