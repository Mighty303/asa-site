import Hero from '@/components/ui/layout/Hero'
import AboutClub from '@/components/ui/layout/AboutClub'
import Sponsors from '@/components/ui/layout/Sponsors'
import TaxProgramCTA from '@/components/ui/layout/TaxProgramCTA'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import { 
  homeHeroContent, 
  sponsorsContent, 
  aboutClubContent,
  taxProgramCTAContent 
} from '@/lib/content'

async function getHomeData() {
  const query = `{
    "page": *[_type == "page" && slug.current == "home"][0] {
      ...,
      heroImage,
      logo
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
  
  return client.fetch(query)
}

export default async function Home() {
  const data = await getHomeData()
  
  // Now you can use urlFor() to get image URLs:
  // urlFor(data.page.heroImage).url()
  // urlFor(data.sponsors[0].logo).width(200).url()
  
  return (
    <main className="min-h-screen">
      <Hero content={homeHeroContent} reverseOnMobile />
      <AboutClub 
        heading={aboutClubContent.heading}
        description={aboutClubContent.description}
      />
      <Sponsors content={sponsorsContent} />
      <TaxProgramCTA content={taxProgramCTAContent} />
    </main>
  )
}