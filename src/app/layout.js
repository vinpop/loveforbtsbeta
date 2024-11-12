import './globals.css'

export const metadata = {
  title: 'Love for BTS - Letters from ARMY',
  description: 'From ARMY, with love: heartfelt letters to BTS',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
