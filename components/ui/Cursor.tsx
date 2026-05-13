'use client';

import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovering, setHovering] = useState(false);
  const [visible, setVisible] = useState(false);

  const springX = useSpring(cursorX, { stiffness: 500, damping: 35 });
  const springY = useSpring(cursorY, { stiffness: 500, damping: 35 });

  useEffect(() => {
    // Disable on touch devices or when the user prefers reduced motion
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || reducedMotion) return;

    setVisible(true);

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const over = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const interactive = target.closest('a, button, [data-cursor="pointer"]');
      setHovering(!!interactive);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', over);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', over);
    };
  }, [cursorX, cursorY]);

  if (!visible) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[200] mix-blend-difference"
        style={{ x: springX, y: springY }}
      >
        <motion.div
          className="rounded-full bg-white"
          animate={{
            width: hovering ? 36 : 10,
            height: hovering ? 36 : 10,
            x: hovering ? -18 : -5,
            y: hovering ? -18 : -5,
          }}
          transition={{ duration: 0.2 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[199]"
        style={{ x: cursorX, y: cursorY }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-flame-500 -translate-x-[3px] -translate-y-[3px]" />
      </motion.div>
    </>
  );
}
