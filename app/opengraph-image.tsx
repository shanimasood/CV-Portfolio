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
            'radial-gradient(ellipse at top left, rgba(95,100,41,0.10) 0%, transparent 55%), radial-gradient(ellipse at bottom right, rgba(140,80,30,0.08) 0%, transparent 55%), #f3ede0',
          color: '#2a1f17',
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
            color: '#5f6429',
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
              background: 'linear-gradient(135deg, #5f6429 0%, #7c7637 100%)',
              color: '#f3ede0',
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
                'linear-gradient(135deg, #1c130c 0%, #4a392b 60%, #5f6429 100%)',
              backgroundClip: 'text',
              color: 'transparent',
            }}
          >
            {PERSONAL.name}
          </div>
          <div
            style={{
              fontSize: 36,
              color: '#4a392b',
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
            color: '#6f5c4a',
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
