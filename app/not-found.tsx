import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center px-6 py-32">
      <div className="text-center max-w-xl">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400 mb-6">
          404 · Lost in transit
        </div>
        <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-gradient mb-6">
          Page not found.
        </h1>
        <p className="text-ink-300 text-base md:text-lg leading-relaxed mb-10">
          The URL you followed doesn&apos;t exist — or it moved. Head back to the
          home page and pick up where you left off.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-3 rounded-full border border-flame-500/40 text-flame-300 bg-flame-500/10 hover:bg-flame-500/20 hover:border-flame-500/60 transition-colors text-sm uppercase tracking-[0.16em] font-mono"
        >
          <ArrowLeft className="w-4 h-4" />
          Back home
        </Link>
      </div>
    </section>
  );
}
