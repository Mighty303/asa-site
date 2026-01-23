import './globals.css'
import type { Metadata } from 'next'
import { Platypi } from 'next/font/google'
import Navbar from '@/components/ui/layout/NavBar'
import Footer from '@/components/ui/layout/Footer'
import { Toaster } from '@/components/ui/sonner'
import { client, urlFor } from '@/lib/sanity'
import { footerContent } from '@/lib/content'

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

async function getFooterData() {
  const query = `{
    "siteSettings": *[_type == "siteSettings"][0] {
      logo,
      footerBackground
    },
    "socialMedia": *[_type == "socialMedia"] | order(order asc) {
      name,
      url,
      icon
    }
  }`
  
  try {
    const data = await client.fetch(query, {}, { cache: 'no-store' })
    return data
  } catch (error) {
    console.error('Error fetching footer data:', error)
    return {
      siteSettings: null,
      socialMedia: [],
    }
  }
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const footerData = await getFooterData()
  
  // Prioritize Sanity data, fallback to content.ts
  const footerContentData = {
    logo: footerData.siteSettings?.logo 
      ? urlFor(footerData.siteSettings.logo).url() 
      : footerContent.logo,
    backgroundImage: footerData.siteSettings?.footerBackground 
      ? urlFor(footerData.siteSettings.footerBackground).url() 
      : footerContent.backgroundImage,
    socialLinks: footerData.socialMedia && footerData.socialMedia.length > 0
      ? footerData.socialMedia.map((sm: { name?: string; url?: string; icon?: unknown }) => ({
          name: sm.name || '',
          url: sm.url || '',
          icon: sm.icon ? urlFor(sm.icon).url() : '',
        }))
      : footerContent.socialLinks,
    navLinks: footerContent.navLinks, // Static navigation links
  }

  return (
    <html lang="en">
      <body className={platypi.className}>
        <Navbar />
        {children}
        <Footer content={footerContentData} />
        <Toaster position="bottom-right" toastOptions={{ style: { background: '#22c55e', color: 'white' } }} />
      </body>
    </html>
  )
}