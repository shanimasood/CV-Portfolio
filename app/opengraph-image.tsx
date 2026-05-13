import { ImageResponse } from 'next/og';
import { PERSONAL } from '@/lib/data';

export const runtime = 'edge';
export const alt = `${PERSONAL.name} — ${PERSONAL.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 80,
          background:
            'radial-gradient(ellipse at top left, rgba(184,140,42,0.20) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(120,80,220,0.12) 0%, transparent 55%), #070605',
          color: '#f6f5f1',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#d4aa3c',
            fontFamily: 'monospace',
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 10,
              background: 'linear-gradient(135deg, #b88c2a 0%, #d4aa3c 100%)',
              color: '#fff',
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            MZ
          </div>
          Portfolio
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
          <div
            style={{
              fontSize: 96,
              lineHeight: 1.02,
              letterSpacing: '-0.04em',
              fontWeight: 600,
              maxWidth: 1000,
              backgroundImage:
                'linear-gradient(135deg, #ffffff 0%, #c4bdab 60%, #d4aa3c 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {PERSONAL.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#c4bdab',
              maxWidth: 900,
              fontStyle: 'italic',
              fontFamily: 'serif',
            }}
          >
            {PERSONAL.role} · {PERSONAL.title}
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: 22,
            color: '#9e9787',
            fontFamily: 'monospace',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          <span>{PERSONAL.location}</span>
          <span>zeeshanmasood.dev</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
