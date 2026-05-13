import type { Metadata, Viewport } from 'next';
import { Inter, Instrument_Serif, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { PERSONAL } from '@/lib/data';
import SmoothScroll from '@/components/layout/SmoothScroll';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Cursor from '@/components/ui/Cursor';
import CommandPalette from '@/components/layout/CommandPalette';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const serif = Instrument_Serif({
  weight: '400',
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const mono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
});

export const viewport: Viewport = {
  themeColor: '#070605',
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://zeeshanmasood.dev'),
  title: {
    default: `${PERSONAL.name} — ${PERSONAL.role}`,
    template: `%s · ${PERSONAL.name}`,
  },
  description: PERSONAL.longBio,
  keywords: [
    'Software Engineer', 'Full Stack', 'FinTech', 'Vue 3',
    'React Native', 'Node.js', 'Java Quarkus', 'PostgreSQL',
    'Camunda', 'BPMN', 'Pakistan', 'Senior Engineer', 'Team Lead',
  ],
  authors: [{ name: PERSONAL.name }],
  creator: PERSONAL.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://zeeshanmasood.dev',
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description: PERSONAL.longBio,
    siteName: PERSONAL.name,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${PERSONAL.name} — ${PERSONAL.role}`,
    description: PERSONAL.bio,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${sans.variable} ${serif.variable} ${mono.variable} dark`}
    >
      <body className="min-h-screen overflow-x-hidden antialiased">
        <SmoothScroll>
          <Cursor />
          <Navbar />
          <CommandPalette />
          <main className="relative">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
