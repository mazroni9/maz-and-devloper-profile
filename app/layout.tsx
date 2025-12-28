import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DASM-e Team Profile',
  description: 'DASM-e Team Profiles - Founder and Technical Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  )
}

