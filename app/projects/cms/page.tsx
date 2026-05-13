import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';

export const metadata: Metadata = {
  title: 'Credit Management System — Case study',
  description:
    'Enterprise loan-origination-to-recovery platform for a major Pakistani bank: 78 Vue components, 60+ pre-wired routes, Camunda BPMN-traceable workflows, and one generic verifier workstation that renders eight verification flows.',
};

const stats = [
  { value: '5', label: 'Modules' },
  { value: '60+', label: 'Pre-wired routes' },
  { value: '78', label: 'Vue components' },
  { value: '~58k', label: 'Lines of code' },
];

const stack = [
  'Vue 3.5',
  'Pinia',
  'Vue Router',
  'PrimeVue',
  'Tailwind v4',
  'Vite',
  'Java Quarkus (backend)',
  'PostgreSQL',
  'Camunda BPMN',
];

const modules = [
  {
    name: 'Origination',
    body:
      '18-step wizard from loan type selection through eligibility and undertaking. Each step maps to a Camunda Form_ID and process key — every screen is audit-traceable to the BPMN diagram, not just visually consistent with it.',
  },
  {
    name: 'Approval',
    body:
      'Eight verification types — telephonic, physical, asset valuation (EAMU), eCIB / NADRA, FIU / Debarred, bank statement, data check, KYC / CPW — rendered by a single VerifierWorkstation.vue (4,060 LOC). Route meta tells it which form to mount. CCC (Rs 2–5M) and CBD-CC (>10M) committee routing on top, with a four-tier authorizer trail.',
  },
  {
    name: 'Disbursement',
    body:
      '16 sub-steps: CAD checklist, vehicle registration, legal docs, limit feeding, insurance, disbursement authorization, limit-account creation, cheque info, tenure change, balloon payment, delivery order, limit cancel, insurance claim, reversal. One DisbursementStep wrapper for all of them.',
  },
  {
    name: 'Recovery',
    body:
      '17 workflows around the DPD ladder — installment due, DPD-1/2/3, provisioning, rescheduling, restructuring, settlement, recovery authorization. Dedicated dashboards for collectors, repossession, lawyer, and insurance-claim subflows.',
  },
  {
    name: 'Securities / NPL',
    body:
      'SBP classification grid (substandard 90–180 DPD, doubtful 181–360, loss >360) with per-bucket provision %. Eight-stage path through markup suspension, provision outstanding, rescheduling, restructuring, settlement, charge-off, and write-off.',
  },
];

const decisions = [
  {
    title: 'Generic wrappers over component explosion',
    body:
      'VerifierWorkstation, DisbursementStep, and RecoveryStep are each one component serving 8, 16, and 17 sub-flows respectively. Each reads route.meta to mount the right form. The alternative — 41 near-duplicate pages — would have made maintenance proportionally worse.',
  },
  {
    title: 'BPMN-traceable routes',
    body:
      'Every route declares its Camunda Form_ID and process key in route.meta. When BAs change a BPMN diagram, engineers can grep for the affected Form_ID instead of cross-referencing a spreadsheet. Designed for audit, not for cleverness.',
  },
  {
    title: 'Pinia as a step-completion state machine',
    body:
      'The origination store exposes fillState (per-step completion) and isStepAccessible(stepKey) (gating). The router consults the store, not vice versa — the wizard cannot skip ahead because the URL says so.',
  },
  {
    title: 'Shared FormField wrapper, not a UI fork',
    body:
      'One FormField.vue gives every input consistent label, required marker, and error states. Form parity across 60+ routes without freezing the design system in JIRA tickets.',
  },
  {
    title: 'Composition designed for parallel teams',
    body:
      'Folder structure splits cleanly by module — /approval, /disbursement, /recovery, /securities — so feature teams can ship in parallel without merging on the shell. The router was the only file with broad ownership; everything else stays in its lane.',
  },
];

export default function CmsCaseStudy() {
  return (
    <div className="relative">
      <section className="container mx-auto px-6 pt-32 md:pt-40 pb-16">
        <Reveal>
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-300 hover:text-flame-400 transition-colors mb-12"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to work
          </Link>

          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              Case study · 02
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-300">
              Senior Engineer · Team Lead
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>

          <AnimatedText
            text="Credit Management System."
            as="h1"
            className="font-serif text-5xl md:text-7xl tracking-tight text-gradient mb-6"
          />
          <p className="font-serif italic text-2xl md:text-3xl text-ink-200 max-w-3xl mb-10">
            Origination, approval, disbursement, recovery, and securities — for
            a major Pakistani bank, wired to Camunda BPMN end to end.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full text-flame-400 border border-flame-500/30 bg-flame-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-flame-500 animate-pulse" />
              Currently shipping
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full text-ink-200 border border-glass-border bg-glass">
              FinTech · Enterprise
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-[0.16em] font-mono px-2.5 py-1 rounded-full text-ink-200 border border-glass-border bg-glass">
              Bank-confidential code
            </span>
          </div>

          <p className="text-xs text-ink-300 max-w-2xl mt-8 leading-relaxed">
            <span className="font-mono uppercase tracking-[0.16em] text-flame-400">Note · </span>
            The production CMS source is bank-confidential. The figures and
            patterns below come from the public-shareable mock-flows repository
            built alongside it, which mirrors the real product&rsquo;s scope and
            architecture.
          </p>
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
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400 mb-3">
              01 · The product
            </div>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="space-y-6 text-ink-200 text-lg leading-relaxed">
              <p>
                The Credit Management System is Teresol&rsquo;s flagship
                enterprise lending platform. It covers the entire loan
                lifecycle — origination, approval, disbursement, recovery, and
                NPL/securities — across every category a bank lends in:
                Consumer, SME, Agri, Corporate, Commercial, and Leasing.
              </p>
              <p>
                I lead the front-end for this product. The visible surface is
                large — 60+ pre-wired routes, 78 Vue components, roughly 58,000
                lines of code — but the more interesting engineering lives in
                the abstractions that keep it from being 60 hand-written pages.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400 mb-3">
              02 · Stack
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              Vue 3 front-end on a Java Quarkus / PostgreSQL backend, with
              Camunda as the orchestration spine.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="flex flex-wrap gap-1.5">
              {stack.map((t) => (
                <span
                  key={t}
                  className="text-[10px] font-mono uppercase tracking-[0.08em] px-2 py-1 border border-glass-border rounded-md text-ink-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400 mb-3">
              03 · Modules
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              Five lifecycle stages. The fun part is what they share.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <div className="divide-y divide-glass-border">
              {modules.map((m) => (
                <div key={m.name} className="py-7 first:pt-0">
                  <h3 className="font-serif italic text-2xl md:text-3xl text-ink-100 mb-3">
                    {m.name}
                  </h3>
                  <p className="text-ink-200 leading-relaxed">{m.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="container mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400 mb-3">
              04 · Decisions
            </div>
            <p className="text-ink-300 text-sm leading-relaxed max-w-xs">
              The architecture choices that earned the team-lead title, not the
              feature checklist.
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
                See the Trixma case study →
              </p>
            </div>
            <Link
              href="/projects/trixma"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.16em] font-mono px-5 py-3 rounded-full border border-flame-500/40 text-flame-300 bg-flame-500/10 hover:bg-flame-500/20 hover:border-flame-500/60 transition-colors"
            >
              Trixma case study
              <ArrowLeft className="w-3.5 h-3.5 rotate-180" />
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
