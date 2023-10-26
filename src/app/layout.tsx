import './globals.css'
import type { Metadata } from 'next'
import Navbar from './components/Navbar'
import FooterBottomMost from './components/FooterBottomMost'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Next.js Image Gallery',
  description: 'Image gallery deployed by Bilal Gonen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="max-w-6xl mx-auto">
          {children}
        </main>
        <FooterBottomMost />
      </body>
    </html>
  )
}
