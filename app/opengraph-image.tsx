import { ImageResponse } from 'next/og'
 
// Route segment config
export const runtime = 'edge'
 
// Image metadata
export const alt = 'Basketball Stars Unblocked'
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        style={{
          background: 'linear-gradient(to bottom right, #1d4ed8, #3b82f6)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '2rem',
        }}
      >
        <div style={{ fontSize: 96 }}>🏀</div>
        <div
          style={{
            fontSize: 48,
            fontWeight: 'bold',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Basketball Stars Unblocked
        </div>
        <div
          style={{
            fontSize: 24,
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
          }}
        >
          Play Free Online Basketball Games
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    }
  )
} 