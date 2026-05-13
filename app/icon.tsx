import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 32, height: 32 };
export const contentType = 'image/png';

export default function Icon() {
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
          fontSize: 18,
          fontWeight: 700,
          letterSpacing: '-0.04em',
          borderRadius: 6,
        }}
      >
        MZ
      </div>
    ),
    { ...size },
  );
}
