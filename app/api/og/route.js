import { ImageResponse } from 'next/server';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const alt = 'Aquaman Pool Services';
export const size = {
  width: 1200,
  height: 630,
};

// Font
const grotesk = fetch(
  new URL('./FamiljenGrotesk-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer());

export const contentType = 'image/png';

// Image generation
export async function GET() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          fontSize: 128,
          background: '#1b2832',
          background: 'linear-gradient(to bottom, #1b2832 30%, #0f1419 80%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          textAlign: 'center',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#4fc4ff',
          textDecoration: 'underline yellow solid',
        }}
      >
        Aquaman
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      fonts: [
        {
          name: 'Familjen Grotesk',
          data: await grotesk,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
