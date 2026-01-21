import Hero from '@/components/ui/layout/Hero'
import Sponsors from '@/components/ui/layout/Sponsors'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Pillars from '@/components/ui/layout/Pillars'
import Timeline from '@/components/ui/layout/Timeline'
import EventsGrid from '@/components/ui/layout/EventsGrid'
import { 
  aboutHeroContent, 
  pillarsContent, 
  timelineContent, 
  eventsContent 
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


export default async function About() {
  const data = await getHomeData()
  
  // Now you can use urlFor() to get image URLs:
  // urlFor(data.page.heroImage).url()
  // urlFor(data.sponsors[0].logo).width(200).url()
  
  return (
    <main className="min-h-screen">
      <Hero content={aboutHeroContent} />
      <Pillars heading={pillarsContent.heading} pillars={pillarsContent.pillars} />
      <Timeline 
        heading={timelineContent.heading} 
        events={timelineContent.events} 
        footnote={timelineContent.footnote} 
      />
      <EventsGrid events={eventsContent} />
    </main>
  )
}