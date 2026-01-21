'use client'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'

interface Event {
  title: string
  subtitle?: string
  description: string
}

const events: Event[] = [
  {
    title: 'MIX & MINGLE',
    subtitle: 'Networking Event',
    description: 'Our signature networking event, Mix & Mingle, launches Spring Recruit by giving students and firm representatives the opportunity to build meaningful connections before the interview and offer phases in May and June. Its goal is to help students prepare for the largest public accounting recruitment period of the year.',
  },
  {
    title: 'MIDSUMMER MIXER',
    subtitle: 'Networking Event',
    description: 'With Fall Recruit approaching, our annual Midsummer Mixer helps guide students through the final major recruiting season of the year. It offers students who were not involved during Spring Recruit the chance to build new connections with professionals, strengthen existing relationships, and refine their networking skills.',
  },
  {
    title: 'HARVEST HORIZONS',
    subtitle: 'Networking Event',
    description: 'Designed as a low-barrier and casual networking event, Harvest Horizons offers a relaxed and welcoming evening, providing a unique opportunity for students and firms to connect, unwind, and build relationships in a comfortable, low-pressure setting.',
  },
  {
    title: 'MIDSIZE MOTION',
    subtitle: 'Networking Event',
    description: 'Midsize Motion is a focused networking event that brings together students and representatives from midsize and growth-oriented accounting firms. The evening is designed to foster genuine conversations, meaningful connections, and insight into diverse career pathways within the accounting profession, all in an engaging and approachable setting.',
  },
  {
    title: 'MENTORSHIP PROGRAM',
    subtitle: 'Skills-Development Initiative',
    description: 'The ASA Mentorship Program (AMP) supports junior accounting students looking to break into the industry. AMP connects mentees with experienced senior students and industry professionals. Running from October to December, the program includes multiple workshops and networking events with firm representatives. It serves as a platform to help junior students develop both professionally and personally as they begin their careers in accounting.',
  },
  {
    title: 'ACHIEVE',
    subtitle: 'Skills-Development Initiative',
    description: "As ASA's final pillar, the ACHIEVE Case Competition invites both beginner and experienced case competitors to tackle a unique accounting-focused case. Leading up to ACHIEVE is the ASPIRE workshop, held alongside a networking event before the competition. ASA aims to partner with CPABC as the case sponsor and invite the Big Four firms to judge and network with competitors on the day of the event.",
  },
]

export default function EventsCarousel() {
  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-white to-[#E8F4FC]">
      <div className="container mx-auto px-4 md:px-12">
        <Carousel className="w-full max-w-4xl mx-auto">
          <CarouselContent>
            {events.map((event, index) => (
              <CarouselItem key={index}>
                <div className="text-center px-8 md:px-16 py-12">
                  <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-2">
                    {event.title}
                  </h3>
                  {event.subtitle && (
                    <p className="text-[#5293BB] text-lg mb-8">{event.subtitle}</p>
                  )}
                  <p className="text-gray-700 text-lg leading-relaxed max-w-2xl mx-auto text-left">
                    {event.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0 md:-left-4" />
          <CarouselNext className="right-0 md:-right-4" />
        </Carousel>
      </div>
    </section>
  )
}
