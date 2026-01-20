import './globals.css'
import type { Metadata } from 'next'
import { Platypi } from 'next/font/google'
import Navbar from '@/components/ui/layout/NavBar'
import Footer from '@/components/ui/layout/Footer'
import { Toaster } from '@/components/ui/sonner'

const platypi = Platypi({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'SFU Accounting Student Association',
  description: 'Aspire. Share. Achieve.',
  openGraph: {
    title: 'SFU Accounting Student Association',
    description: 'Aspire. Share. Achieve.',
    images: [
      {
        url: '/assets/teams/team.jpg',
        width: 1200,
        height: 630,
        alt: 'SFU ASA Team',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SFU Accounting Student Association',
    description: 'Aspire. Share. Achieve.',
    images: ['/assets/teams/team.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={platypi.className}>
        <Navbar />
        {children}
        <Footer />
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#22c55e', color: 'white' } }} />
      </body>
    </html>
  )
}