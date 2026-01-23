import Hero from '@/components/ui/layout/Hero'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'
import Pillars from '@/components/ui/layout/Pillars'
import EventsGrid from '@/components/ui/layout/EventsGrid'
import { Event } from '@/components/ui/layout/EventsGrid'

async function getAboutData() {
  const query = `{
    "aboutPage": *[_type == "aboutPage" && slug.current == "about"][0] {
      ...,
      pillars
    },
    "events": *[_type == "event"] | order(order asc) {
      ...,
      image
    }
  }`
  
  return client.fetch(query)
}

export default async function About() {
  const data = await getAboutData()
  
  // Transform about page data
  const aboutHeroContent = {
    tagline: data.aboutPage?.heroTagline || ['ABOUT US'],
  }

  interface Pillar {
    title?: string
    description?: string
    bgColor?: string
  }

  interface SanityEvent {
    title?: string
    subtitle?: string
    description?: string
    image?: unknown
    date?: string
  }

  const pillarsContent = {
    heading: data.aboutPage?.pillarsHeading || 'Our Three Pillars',
    pillars: data.aboutPage?.pillars?.map((pillar: Pillar) => ({
      title: pillar.title || '',
      description: pillar.description || '',
      bgColor: pillar.bgColor || '#7FA5DF',
    })) || [],
  }

  // Transform events data
  const eventsContent: Event[] = data.events?.map((event: SanityEvent) => ({
    title: event.title || '',
    subtitle: event.subtitle || '',
    description: event.description || '',
    image: event.image ? urlFor(event.image).url() : '',
    date: event.date || '',
  })) || []
  
  return (
    <main className="min-h-screen">
      <Hero content={aboutHeroContent} />
      <Pillars heading={pillarsContent.heading} pillars={pillarsContent.pillars} />
      {/* <Timeline 
        heading={timelineContent.heading} 
        events={timelineContent.events} 
        footnote={timelineContent.footnote} 
      /> */}
      <EventsGrid events={eventsContent} />
    </main>
  )
}