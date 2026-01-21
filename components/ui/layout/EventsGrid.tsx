import Image from 'next/image'

export interface Event {
  title: string
  subtitle?: string
  description: string
  image: string
  date?: string
}

interface EventsGridProps {
  heading?: string
  events: Event[]
}

export default function EventsGrid({ heading = 'Our Events', events }: EventsGridProps) {
  return (
    <section className="py-16 md:py-12 mb-12">
      <div className="container mx-auto px-4 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] text-center mb-12">
          {heading}
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
                {event.date && (
                  <p className="text-white/70 text-xs font-semibold uppercase tracking-wider mb-2">{event.date}</p>
                )}
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
