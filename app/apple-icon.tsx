import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 180, height: 180 };
export const contentType = 'image/png';

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #b88c2a 0%, #d4aa3c 100%)',
          color: '#fff',
          fontSize: 96,
          fontWeight: 700,
          letterSpacing: '-0.04em',
        }}
      >
        MZ
      </div>
    ),
    { ...size },
  );
}
