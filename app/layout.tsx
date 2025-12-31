import './globals.css'
import type { Metadata } from 'next'
import { Platypi } from 'next/font/google'
import Navbar from '@/components/ui/layout/NavBar'
import Footer from '@/components/ui/layout/Footer'

const platypi = Platypi({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'SFU Accounting Student Association',
  description: 'Aspire. Share. Achieve.',
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
      </body>
    </html>
  )
}