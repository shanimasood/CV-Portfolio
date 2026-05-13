'use client';

import { useEffect, useState } from 'react';

interface TypingEffectProps {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export default function TypingEffect({
  words,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1800,
  className,
}: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !deleting) {
      const t = setTimeout(() => setDeleting(true), pauseTime);
      return () => clearTimeout(t);
    }

    if (subIndex === 0 && deleting) {
      setDeleting(false);
      setIndex((p) => (p + 1) % words.length);
      return;
    }

    const t = setTimeout(
      () => setSubIndex((p) => p + (deleting ? -1 : 1)),
      deleting ? deletingSpeed : typingSpeed,
    );
    return () => clearTimeout(t);
  }, [subIndex, index, deleting, words, typingSpeed, deletingSpeed, pauseTime]);

  useEffect(() => {
    const t = setInterval(() => setBlink((p) => !p), 500);
    return () => clearInterval(t);
  }, []);

  return (
    <span className={className}>
      {words[index].substring(0, subIndex)}
      <span
        className="inline-block w-[2px] h-[0.9em] bg-flame-500 ml-1 align-middle"
        style={{ opacity: blink ? 1 : 0 }}
      />
    </span>
  );
}
