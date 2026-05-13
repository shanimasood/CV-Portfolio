'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Check, AlertCircle, Mail, Linkedin, Phone, MapPin } from 'lucide-react';
import { PERSONAL, SOCIALS } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';
import AnimatedText from '@/components/ui/AnimatedText';
import MagneticButton from '@/components/ui/MagneticButton';
import { cn } from '@/lib/utils';

type Status = 'idle' | 'sending' | 'success' | 'error';

interface FormState {
  name: string;
  email: string;
  message: string;
}

function Field({
  label,
  name,
  type = 'text',
  value,
  onChange,
  multiline,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  multiline?: boolean;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const active = focused || value.length > 0;

  return (
    <div className="relative">
      <label
        className={cn(
          'absolute left-0 pointer-events-none transition-all duration-300 font-mono uppercase tracking-[0.16em]',
          active
            ? 'top-0 text-[10px] text-flame-400'
            : 'top-4 text-xs text-ink-400',
        )}
      >
        {label} {required && '*'}
      </label>
      {multiline ? (
        <textarea
          name={name}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          rows={5}
          className="w-full bg-transparent border-b border-glass-border focus:border-flame-500 pt-6 pb-3 text-ink-50 outline-none resize-none transition-colors"
        />
      ) : (
        <input
          name={name}
          type={type}
          value={value}
          required={required}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className="w-full bg-transparent border-b border-glass-border focus:border-flame-500 pt-6 pb-3 text-ink-50 outline-none transition-colors"
        />
      )}
      <motion.span
        className="absolute bottom-0 left-0 h-px bg-flame-500"
        initial={{ width: '0%' }}
        animate={{ width: focused ? '100%' : '0%' }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');

  const update = (key: keyof FormState) => (v: string) =>
    setForm((p) => ({ ...p, [key]: v }));

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error((await res.json()).error ?? 'Send failed');

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const contactItems = [
    { Icon: Mail, label: 'Email', value: PERSONAL.email, href: `mailto:${PERSONAL.email}` },
    { Icon: Phone, label: 'Phone', value: PERSONAL.phone, href: `tel:${PERSONAL.phone.replace(/\s/g, '')}` },
    {
      Icon: Linkedin,
      label: 'LinkedIn',
      value: '/in/muhammad-zeeshan-masood',
      href: 'https://www.linkedin.com/in/muhammad-zeeshan-masood-abb6871b8/',
    },
    { Icon: MapPin, label: 'Location', value: PERSONAL.location },
  ];

  return (
    <section id="contact" className="relative py-32 md:py-40">
      <div className="container mx-auto px-6">
        <Reveal className="mb-20">
          <div className="flex items-baseline gap-4 mb-3">
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-flame-400">
              07
            </span>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-ink-400">
              Get in touch
            </span>
            <span className="flex-1 h-px bg-glass-border" />
          </div>
          <AnimatedText
            text="Let's build something."
            as="h2"
            className="font-serif text-5xl md:text-8xl tracking-tight text-gradient"
          />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <Reveal delay={0.1} className="lg:col-span-5">
            <div className="space-y-8">
              <p className="font-serif italic text-2xl md:text-3xl text-ink-100 leading-[1.4]">
                Have a project, role, or product idea?
              </p>
              <p className="text-ink-300 text-base leading-relaxed max-w-md">
                Send me a note about what you&rsquo;re building. I read every message and reply personally within 24 hours.
              </p>

              <div className="space-y-1 pt-6">
                {contactItems.map(({ Icon, label, value, href }) => {
                  const Content = (
                    <div className="group flex items-center gap-4 py-4 border-b border-glass-border">
                      <div className="w-10 h-10 rounded-full glass flex items-center justify-center group-hover:bg-flame-500/10 group-hover:border-flame-500/30 transition-colors">
                        <Icon className="w-4 h-4 text-flame-400" />
                      </div>
                      <div className="flex-1">
                        <div className="text-[10px] uppercase tracking-[0.18em] font-mono text-ink-400">
                          {label}
                        </div>
                        <div className="text-sm md:text-base text-ink-100 group-hover:text-flame-400 transition-colors mt-0.5 font-serif italic">
                          {value}
                        </div>
                      </div>
                      {href && (
                        <span className="text-ink-400 group-hover:text-flame-400 transition-colors">
                          →
                        </span>
                      )}
                    </div>
                  );
                  return href ? (
                    <a
                      key={label}
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="block"
                    >
                      {Content}
                    </a>
                  ) : (
                    <div key={label}>{Content}</div>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2} direction="left" className="lg:col-span-7">
            <form
              onSubmit={onSubmit}
              className="glass-strong rounded-2xl p-8 md:p-10 space-y-8"
            >
              <Field label="Your name" name="name" value={form.name} onChange={update('name')} />
              <Field label="Email" name="email" type="email" required value={form.email} onChange={update('email')} />
              <Field label="Message" name="message" multiline required value={form.message} onChange={update('message')} />

              <div className="flex items-center justify-between pt-4">
                <span className="text-[10px] uppercase tracking-[0.18em] font-mono text-ink-400">
                  {status === 'idle' && 'Ready to send'}
                  {status === 'sending' && 'Sending…'}
                  {status === 'success' && 'Message received'}
                  {status === 'error' && 'Something went wrong'}
                </span>
                <MagneticButton variant="primary">
                  <AnimatePresence mode="wait" initial={false}>
                    {status === 'success' ? (
                      <motion.span
                        key="ok"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <Check className="w-4 h-4" /> Sent
                      </motion.span>
                    ) : status === 'error' ? (
                      <motion.span
                        key="err"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4" /> Retry
                      </motion.span>
                    ) : status === 'sending' ? (
                      <motion.span
                        key="snd"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        <motion.span
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="inline-block w-4 h-4 border-2 border-white/40 border-t-white rounded-full"
                        />
                        Sending
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex items-center gap-2"
                      >
                        Send message <Send className="w-4 h-4" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
