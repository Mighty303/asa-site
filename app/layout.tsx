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

// Default fallback description
const DEFAULT_DESCRIPTION = 'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship.'
const DEFAULT_TEAM_IMAGE = '/assets/home/team.jpg'

export async function generateMetadata(): Promise<Metadata> {
  const siteData = await getSiteSettings()
  
  const description = siteData.siteSettings?.siteDescription || DEFAULT_DESCRIPTION
  const teamImageUrl = siteData.siteSettings?.defaultTeamImage 
    ? urlFor(siteData.siteSettings.defaultTeamImage).width(1200).height(630).url()
    : DEFAULT_TEAM_IMAGE

  return {
    title: 'SFU Accounting Student Association',
    description,
    openGraph: {
      title: 'SFU Accounting Student Association',
      description,
      images: [
        {
          url: teamImageUrl,
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
      description,
      images: [teamImageUrl],
    },
  }
}

async function getSiteSettings() {
  const query = `{
    "siteSettings": *[_type == "siteSettings"][0] {
      logo,
      footerBackground,
      siteDescription,
      defaultTeamImage
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
    console.error('Error fetching site settings:', error)
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
  const siteData = await getSiteSettings()
  
  // Prioritize Sanity data, fallback to content.ts
  const footerContentData = {
    logo: siteData.siteSettings?.logo 
      ? urlFor(siteData.siteSettings.logo).url() 
      : footerContent.logo,
    backgroundImage: siteData.siteSettings?.footerBackground 
      ? urlFor(siteData.siteSettings.footerBackground).url() 
      : footerContent.backgroundImage,
    socialLinks: siteData.socialMedia && siteData.socialMedia.length > 0
      ? siteData.socialMedia.map((sm: { name?: string; url?: string; icon?: unknown }) => ({
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