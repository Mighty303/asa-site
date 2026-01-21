import Hero from '@/components/ui/layout/Hero'
import Sponsors from '@/components/ui/layout/Sponsors'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Pillars from '@/components/ui/layout/Pillars'
import Timeline from '@/components/ui/layout/Timeline'
import EventsGrid from '@/components/ui/layout/EventsGrid'

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

const heroContent = {
  tagline: ['ABOUT US'],
  description: 'At the SFU Accounting Student Association (ASA), our mission is to empower students on their journey to a successful and fulfilling professional life. We are dedicated to providing invaluable resources, fostering personal growth, and creating valuable experiences within our tight-knit community.'
}


export default async function About() {
  const data = await getHomeData()
  
  // Now you can use urlFor() to get image URLs:
  // urlFor(data.page.heroImage).url()
  // urlFor(data.sponsors[0].logo).width(200).url()
  
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />
      <Pillars />
      <Timeline />
      <EventsGrid />
    </main>
  )
}