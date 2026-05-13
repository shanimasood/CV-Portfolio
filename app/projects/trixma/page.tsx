import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';

export const metadata: Metadata = {
  title: 'Trixma — Full-stack invoicing case study',
  description:
    'Solo-built invoicing platform: Expo/React Native + NestJS + PostgreSQL. Biometric auth, recurring invoices, native PDF export, refresh-token rotation, and a client portal.',
};

const stats = [
  { value: '34', label: 'Screens' },
  { value: '114', label: 'TS files (FE)' },
  { value: '14', label: 'Prisma models' },
  { value: '11', label: 'Typed data hooks' },
];

const frontendStack = [
  'Expo 55 (managed)',
  'React Native 0.83',
  'Expo Router',
  'TypeScript',
  'Zustand',
  'TanStack Query',
  'React Hook Form + Zod',
  'React Native Paper',
  'expo-local-authentication',
  'expo-secure-store',
  'expo-file-system',
];

const backendStack = [
  'NestJS 10',
  'Prisma 5',
  'PostgreSQL',
  'JWT + Passport',
  'bcrypt',
  'PDFKit',
  'Nodemailer',
  '@nestjs/schedule',
  'HMAC webhooks',
];

const features = [
  {
    title: 'Biometric authentication',
    body:
      'Face ID and Fingerprint login wired through expo-local-authentication with platform-aware fallback — the web build returns null instead of crashing the auth flow. Tokens live in expo-secure-store, not AsyncStorage.',
  },
  {
    title: 'Refresh-token rotation per device',
    body:
      'Every /auth/refresh call rotates the token and persists the hash only — never the raw value. Single-use semantics; a stolen, already-redeemed token cannot be replayed.',
  },
  {
    title: 'Recurring invoices',
    body:
      'Weekly, monthly, quarterly, and yearly cadences. The recurring record stores the line items as a JSON snapshot; a @nestjs/schedule cron fires it on cadence and creates a real invoice on the date, attributed to a system actor in the audit log.',
  },
  {
    title: 'Native PDF + CSV export',
    body:
      'The backend renders with PDFKit; the client downloads the artifact to cache via expo-file-system and opens the OS share sheet. No in-memory base64 round-trips, no third-party PDF service in the data path.',
  },
  {
    title: 'Client portal with audit-traceable events',
    body:
      'Clients receive an invite token with an expiry. The portal uses a separate password hash, and every action emits an InvoiceEvent (created / sent / viewed / payment_recorded) — the issuer sees when their invoice was actually opened.',
  },
  {
    title: 'Signed webhooks',
    body:
      'Per-user webhook subscriptions with HMAC-SHA256 signatures and best-effort delivery. Recipients verify payloads against a shared secret before processing.',
  },
];

const decisions = [
  {
    title: 'Why Expo over bare React Native',
    body:
      'Expo managed gives me OTA updates, prebuilt native modules for biometrics / secure-store / file-system, and EAS builds without maintaining iOS and Android toolchains. The trade-off is no custom native code — for an invoicing app, that ceiling sits well above the requirement.',
  },
  {
    title: 'Zustand for client state, TanStack Query for server state',
    body:
      'Zustand owns auth, theme, drawer, snackbar — everything the server does not know about. TanStack Query owns the rest. The rule is simple: if it lives in Postgres, do not put it in Zustand.',
  },
  {
    title: 'Zod schemas as the single source of truth',
    body:
      'Six schemas — auth, client, invoice, product, recurring, me — generate both compile-time types and runtime validation. React Hook Form picks up the inferred resolver types automatically.',
  },
  {
    title: 'A real backend, not a BaaS',
    body:
      'This could have been Firebase or Supabase. NestJS keeps the domain logic in TypeScript I control: audit events, webhook signing, refresh-token rotation, scheduled jobs. None of those felt right glued together as cloud functions.',
  },
];

export default function TrixmaCaseStudy() {
  return (
    <div className="relative">
      <section className="container mx-auto px-6 pt-32 md:pt-40 pb-16">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-300 hover:text-flame-500 transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>

          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-500">
              Case study · 01
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
              Personal · Solo build
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>

          <AnimatedText
            text="Trixma."
            as="h1"
            className="font-serif text-6xl md:text-8xl tracking-tight text-gradient mb-6"
          />
          <p className="font-serif italic text-2xl md:text-3xl text-ink-200 max-w-3xl mb-10">
            Full-stack invoicing for freelancers — every product decision, every
            line of code, every native module wired by hand.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full text-flame-500 border border-flame-500/30 bg-flame-500/10">
              <Sparkles className="w-3 h-3" />
              Solo build
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full text-ink-200 border border-glass-border bg-glass">
              Mobile + Backend
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full text-ink-200 border border-glass-border bg-glass">
              100% TypeScript
            </span>
          </div>
        </Reveal>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <Reveal key={s.label}>
              <div className="border-t border-glass-border pt-6">
                <div className="font-serif text-5xl md:text-6xl text-gradient-flame tracking-tight">
                  {s.value}
                </div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-ink-300 mt-2">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-500 mb-3">
              01 · Overview
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="space-y-6 text-ink-200 text-lg leading-relaxed">
              <p>
                Trixma is the invoicing app I wanted for myself — and could not
                find. Freelancer-grade tooling tends to split between
                spreadsheet-with-extras and SaaS bloat. I wanted the in-between:
                native mobile speed, real audit trails, recurring billing that
                does not require a desktop, and zero vendor lock-in.
              </p>
              <p>
                The product spans two codebases. The client is an Expo /
                React-Native app shipping to iOS and Android with biometric
                login. The backend is a NestJS service backed by PostgreSQL,
                handling auth, scheduling, PDF rendering, webhooks, and a
                separate client portal where invoice recipients can view and
                pay. Both are 100% TypeScript.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-500 mb-3">
              02 · Stack
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              Two apps, one language. Picked for ergonomics and ceiling, not
              novelty.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-ink-300 mb-4">
                  Frontend
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {frontendStack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-[0.08em] px-2 py-1 border border-glass-border rounded-md text-ink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-ink-300 mb-4">
                  Backend
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {backendStack.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono uppercase tracking-[0.08em] px-2 py-1 border border-glass-border rounded-md text-ink-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-500 mb-3">
              03 · Features
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              The six pieces that took the most thought to build — not the most
              code.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="divide-y divide-glass-border">
              {features.map((f) => (
                <div key={f.title} className="py-7 first:pt-0">
                  <h3 className="font-serif italic text-2xl md:text-3xl text-ink-100 mb-3">
                    {f.title}
                  </h3>
                  <p className="text-ink-200 leading-relaxed">{f.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-500 mb-3">
              04 · Decisions
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              The choices a senior reviewer is most likely to ask about.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {decisions.map((d) => (
                <div
                  key={d.title}
                  className="glass rounded-2xl p-7 hover:bg-flame-500/[0.04] hover:border-flame-500/30 transition-colors"
                >
                  <h3 className="font-serif text-xl text-ink-100 mb-3 leading-snug">
                    {d.title}
                  </h3>
                  <p className="text-sm text-ink-200 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24 md:py-32">
        <Reveal>
          <div className="border-t border-glass-border pt-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300 mb-2">
                Next
              </div>
              <p className="font-serif italic text-2xl md:text-3xl text-ink-100">
                See the Credit Management System →
              </p>
            </div>
            <Link
              href="/projects/cms"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-mono px-5 py-3 rounded-full border border-flame-500/40 text-flame-500 bg-flame-500/10 hover:bg-flame-500/20 hover:border-flame-500/60 transition-colors"
            >
              CMS case study
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
