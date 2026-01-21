import Image from 'next/image'

interface Event {
  title: string
  subtitle?: string
  description: string
  image: string
}

const events: Event[] = [
  {
    title: 'MIX & MINGLE',
    subtitle: 'Networking Event',
    description: 'Our signature networking event, Mix & Mingle, launches Spring Recruit by giving students and firm representatives the opportunity to build meaningful connections before the interview and offer phases in May and June.',
    image: '/assets/events/mix-mingle.jpg',
  },
  {
    title: 'MIDSUMMER MIXER',
    subtitle: 'Networking Event',
    description: 'With Fall Recruit approaching, our annual Midsummer Mixer helps guide students through the final major recruiting season of the year, offering chances to build new connections with professionals.',
    image: '/assets/events/midsummer.jpg',
  },
  {
    title: 'HARVEST HORIZONS',
    subtitle: 'Networking Event',
    description: 'A low-barrier and casual networking event, Harvest Horizons offers a relaxed evening for students and firms to connect and build relationships in a comfortable setting.',
    image: '/assets/events/harvest-horizons.jpg',
  },
  {
    title: 'MIDSIZE MOTION',
    subtitle: 'Networking Event',
    description: 'Midsize Motion brings together students and representatives from midsize and growth-oriented accounting firms to foster genuine conversations and meaningful connections.',
    image: '/assets/events/midsize-motion.jpg',
  },
  {
    title: 'MENTORSHIP PROGRAM',
    subtitle: 'Skills-Development Initiative',
    description: 'The ASA Mentorship Program (AMP) connects junior accounting students with experienced senior students and industry professionals from October to December.',
    image: '/assets/events/mentorship.jpg',
  },
  {
    title: 'ACHIEVE',
    subtitle: 'Case Competition',
    description: "ASA's ACHIEVE Case Competition invites both beginner and experienced case competitors to tackle a unique accounting-focused case, partnering with CPABC and Big Four firms.",
    image: '/assets/events/achieve.jpg',
  },
]

export default function EventsGrid() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] text-center mb-12">
          Our Events
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative rounded-xl overflow-hidden min-h-96 group"
            >
              {/* Background Image */}
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#28599E]/70 group-hover:bg-[#28599E]/80 transition-colors" />
              
              {/* Content */}
              <div className="relative z-10 p-12 h-full flex flex-col justify-start text-white">
                <h3 className="text-2xl font-bold mb-1">{event.title}</h3>
                {event.subtitle && (
                  <p className="text-white/80 text-sm mb-4">{event.subtitle}</p>
                )}
                <p className="text-white/90 text-sm leading-relaxed">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
