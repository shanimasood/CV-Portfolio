# Zeeshan Portfolio

A world-class developer portfolio built with **Next.js 14**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, **GSAP**, and **Lenis** smooth scrolling. Premium FinTech / Apple-inspired aesthetic with cinematic animations, glassmorphism, magnetic buttons, command palette, custom cursor, and full responsive design.

## Stack

- **Framework** — Next.js 14 (App Router) + React 18
- **Language** — TypeScript (strict mode)
- **Styling** — Tailwind CSS 3 + custom design tokens
- **Animation** — Framer Motion 11 + GSAP 3
- **Smooth scroll** — Lenis
- **Icons** — Lucide React
- **Fonts** — Inter (sans), Instrument Serif (display italic), JetBrains Mono — all via `next/font/google`

## Features

- Dark-mode-first premium aesthetic with subtle ambient gradients & noise texture
- Cinematic hero with text-reveal animation + rotating typing effect + floating tech pills
- Glassmorphism navbar with active section tracking & mobile drawer
- `⌘K` / `Ctrl+K` command palette for quick navigation
- Custom blended cursor with hover state magnetism (desktop only)
- Scroll-triggered reveal animations on every section
- Magnetic CTA buttons that follow the cursor
- 3D-tilt glass project cards with category filtering
- Vertical experience timeline with scroll-progress-driven gradient line
- Service cards with hover glow & micro-interactions
- Infinite marquee testimonials with masked edges
- Animated stat counters
- Animated skill proficiency bars
- Premium contact form with floating labels, status states, and success/error animations
- Smooth Lenis page scrolling
- Fully responsive (mobile / tablet / desktop)
- SEO + OpenGraph metadata
- Production-ready, type-safe component architecture

## Getting Started

### Prerequisites

- **Node.js** 18.17+ (20 LTS recommended)
- **pnpm** / **npm** / **yarn**

### Install & run

```bash
# 1. Install dependencies
npm install
# or
pnpm install

# 2. Run dev server
npm run dev

# 3. Open http://localhost:3000
```

### Build for production

```bash
npm run build
npm run start
```

### Type check

```bash
npm run type-check
```

## Project Structure

```
zeeshan-portfolio/
├── app/
│   ├── globals.css          # Tailwind + custom CSS
│   ├── layout.tsx           # Root layout, fonts, metadata
│   └── page.tsx             # Home — composes all sections
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Sticky nav, active section tracking, mobile drawer
│   │   ├── Footer.tsx          # Footer + back to top
│   │   ├── SmoothScroll.tsx    # Lenis wrapper
│   │   └── CommandPalette.tsx  # ⌘K palette
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Services.tsx
│   │   ├── Testimonials.tsx
│   │   ├── TechStack.tsx
│   │   └── Contact.tsx
│   └── ui/
│       ├── AnimatedText.tsx    # Word-by-word reveal
│       ├── Counter.tsx         # Animated number counter
│       ├── Cursor.tsx          # Custom blended cursor
│       ├── GlassCard.tsx       # Glass card with 3D tilt
│       ├── GridBackground.tsx  # Grid + glow background
│       ├── MagneticButton.tsx  # Cursor-magnetic button
│       ├── Reveal.tsx          # Scroll-triggered reveal wrapper
│       └── TypingEffect.tsx    # Rotating typing text
├── lib/
│   ├── data.ts              # All portfolio content (single source of truth)
│   └── utils.ts             # cn() helper
├── types/
│   └── index.ts             # TypeScript interfaces
├── public/                  # Static assets (add your images here)
├── tailwind.config.ts       # Theme tokens, animations, fonts
├── next.config.mjs
├── postcss.config.mjs
├── tsconfig.json
└── package.json
```

## Customizing Content

Almost everything lives in **`lib/data.ts`**. Update these objects to swap in your own info:

- `PERSONAL` — name, role, bio, contact details, rotating titles
- `NAV_LINKS` — top nav items
- `SOCIALS` — social links shown in hero + footer + command palette
- `STATS` — animated counter values in the About section
- `PROJECTS` — featured work cards (set `featured: true` for the hero card)
- `EXPERIENCES` — vertical timeline entries
- `SKILLS` — skill bars in the About sidebar
- `SERVICES` — service grid cards
- `TESTIMONIALS` — marquee testimonials (replace with real quotes)
- `TECH_STACK` — categorized tech list

After edits, save the file — Next.js HMR will hot-reload instantly.

### Adding a project image

1. Drop an image into `public/projects/your-image.jpg`
2. In `lib/data.ts`, add an `image: '/projects/your-image.jpg'` field to the project
3. (Optional) Extend `Project` in `types/index.ts` and render it inside `Projects.tsx`

## Customizing Design

### Theme colors

Edit `tailwind.config.ts`:
- `ink` — neutral grayscale base palette
- `flame` — primary accent (currently warm orange/coral)
- `glass` — surface tokens for glassmorphism

To switch the accent color, change every `flame-*` shade — start with `flame-500` (`#ff5421`) which is the dominant accent.

### Fonts

Edit `app/layout.tsx`:
```ts
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
```
Swap any of these for other Google fonts. Keep the CSS variable names (`--font-sans`, `--font-serif`, `--font-mono`) so Tailwind picks them up.

## Connecting the Contact Form

The form in `components/sections/Contact.tsx` ships with a mocked submit (`setTimeout` resolve). To make it real, choose one of:

### Option A — Resend (recommended)
```bash
npm install resend
```
Create `app/api/contact/route.ts`:
```ts
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();
  await resend.emails.send({
    from: 'portfolio@yourdomain.com',
    to: 'mznhmbro@gmail.com',
    subject: `Portfolio inquiry from ${name}`,
    text: `${message}\n\nFrom: ${name} <${email}>`,
  });
  return Response.json({ ok: true });
}
```
Then update the `onSubmit` in `Contact.tsx` to POST to `/api/contact`.

### Option B — Formspree / Getform / Web3Forms
Free, no backend code. Replace the mock with a `fetch('https://formspree.io/f/YOUR_ID', ...)` call.

### Option C — EmailJS (client-only)
Add `@emailjs/browser`, replace the mock with `emailjs.send(...)`.

## Deployment

### Vercel (one-click)
```bash
npm install -g vercel
vercel
```
Or push to GitHub and import the repo at [vercel.com/new](https://vercel.com/new). Zero config needed.

### Other platforms
- **Netlify** — works out of the box, set build command `npm run build`
- **Cloudflare Pages** — set framework preset to Next.js
- **Self-hosted** — `npm run build` then `npm run start` behind a reverse proxy

### Environment variables (when adding a real contact API)
Create `.env.local`:
```
RESEND_API_KEY=re_xxxxxxxxxxxx
```

## Performance

The site is optimized for high Lighthouse scores out of the box:
- Fonts loaded with `display: swap` via `next/font`
- All animations CSS / Framer Motion (GPU-accelerated)
- No external image dependencies in the base build
- Static-rendered home page

When you add real images, use Next.js `<Image>` component and put them in `public/` for automatic optimization.

## Adding more sections

Create a new component in `components/sections/`, import it into `app/page.tsx`, and add a `NAV_LINKS` entry in `lib/data.ts` if you want it in the nav.

## Browser Support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge — latest 2 versions). The custom cursor auto-disables on touch devices. Reduced-motion users get a calmer experience via the prefers-reduced-motion-respecting Framer Motion defaults.

## License

This portfolio template is built specifically for Muhammad Zeeshan Masood. The content (bio, experience, projects) is personal — feel free to reuse the code structure and design system as inspiration for your own work.

---

**Built for:** Muhammad Zeeshan Masood — Senior Software Design Engineer
**Email:** mznhmbro@gmail.com
**LinkedIn:** [/in/muhammadzeeshan-masood](https://www.linkedin.com/in/muhammadzeeshan-masood-abb6871b8)
