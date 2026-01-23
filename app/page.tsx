import Hero from '@/components/ui/layout/Hero'
import AboutClub from '@/components/ui/layout/AboutClub'
import Sponsors from '@/components/ui/layout/Sponsors'
import TaxProgramCTA from '@/components/ui/layout/TaxProgramCTA'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { taxProgramCTAContent, aboutClubContent } from '@/lib/content'

async function getHomeData() {
  const query = `{
    "homePage": *[_type == "homePage" && slug.current == "home"][0] {
      ...,
      heroTeamImage,
      taxProgramCTAImage
    },
    "stats": *[_type == "stat"] | order(order asc),
    "sponsors": *[_type == "sponsor"] | order(order asc) {
      ...,
      logo
    },
    "socialMedia": *[_type == "socialMedia"] | order(order asc) {
      ...,
      icon
    },
    "siteSettings": *[_type == "siteSettings"][0] {
      logo,
      footerBackground
    }
  }`
  
  try {
    const data = await client.fetch(query, {}, { cache: 'no-store' })
    return data
  } catch (error) {
    console.error('Error fetching home data:', error)
    return {
      homePage: null,
      stats: [],
      sponsors: [],
      socialMedia: [],
      siteSettings: null,
    }
  }
}

export default async function Home() {
  const data = await getHomeData()
  
  // Transform home page data
  const homeHeroContent = {
    tagline: data.homePage?.heroTagline || ['ACCOUNTING STUDENT ASSOCIATION (ASA)'],
    teamImage: data.homePage?.heroTeamImage ? urlFor(data.homePage.heroTeamImage).url() : '/assets/home/team.jpg',
  }

  // Prioritize Sanity data, fallback to content.ts
  const aboutClubContentData = {
    heading: data.homePage?.aboutClubHeading ?? aboutClubContent.heading,
    description: data.homePage?.aboutClubDescription ?? aboutClubContent.description,
  }

  const taxProgramCTAContentData = {
    heading: data.homePage?.taxProgramCTAHeading ?? taxProgramCTAContent.heading,
    description: data.homePage?.taxProgramCTADescription ?? taxProgramCTAContent.description,
    ctaText: data.homePage?.taxProgramCTAText ?? taxProgramCTAContent.ctaText,
    ctaLink: data.homePage?.taxProgramCTALink ?? taxProgramCTAContent.ctaLink,
    image: data.homePage?.taxProgramCTAImage ? urlFor(data.homePage.taxProgramCTAImage).url() : taxProgramCTAContent.image,
    imageAlt: data.homePage?.taxProgramCTAImageAlt ?? taxProgramCTAContent.imageAlt,
  }

  // Transform sponsors data
  interface Stat {
    number?: string
    description?: string
  }

  interface Sponsor {
    name?: string
    logo?: unknown
    url?: string
  }

  const sponsorsContent = {
    stats: data.stats?.map((stat: Stat) => ({
      number: stat.number || '',
      description: stat.description || '',
    })) || [],
    execTeamImage: '/assets/teams/exec-team.jpg',
    heading: data.homePage?.sponsorsHeading || 'Our Sponsors',
    description: data.homePage?.sponsorsDescription || 'We are proud to partner with leading accounting firms and professional institutions.',
    sponsors: data.sponsors?.map((sponsor: Sponsor) => ({
      name: sponsor.name || '',
      logo: sponsor.logo ? urlFor(sponsor.logo).url() : '',
      url: sponsor.url || '',
    })) || [],
  }
  
  return (
    <main className="min-h-screen">
      <Hero content={homeHeroContent} reverseOnMobile />
      <AboutClub 
        heading={aboutClubContentData.heading}
        description={aboutClubContentData.description}
      />
      <Sponsors content={sponsorsContent} />
      <TaxProgramCTA content={taxProgramCTAContentData} />
    </main>
  )
}