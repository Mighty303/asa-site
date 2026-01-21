interface TimelineEvent {
  month: string
  title: string
  side: 'left' | 'right'
}

interface TimelineProps {
  heading?: string
  events?: TimelineEvent[]
  footnote?: string
}

const defaultEvents: TimelineEvent[] = [
  { month: 'MARCH', title: 'Mix & Mingle', side: 'left' },
  { month: 'AUGUST', title: 'Midsummer Mixer', side: 'right' },
  { month: 'OCTOBER', title: 'Harvest Horizons\nMentorship Program', side: 'left' },
  { month: 'JANUARY', title: 'ACHIEVE Case\nCompetition', side: 'right' },
  { month: 'FEBRUARY', title: 'Midsize Motion', side: 'left' },
  { month: 'YEAR-ROUND', title: 'Firm-specific Events\n(e.g. Office Tours,\nInfo Sessions)', side: 'right' },
]

export default function Timeline({ 
  heading = 'Our Events', 
  events = defaultEvents,
  footnote = '*Dates are subject to change'
}: TimelineProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] text-center mb-16">
        {heading}
      </h2>
      
      <div className="relative max-w-3xl mx-auto px-4">
        {/* Vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#A8D4F0] h-full" />
        
        {/* Top circle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -top-2 w-4 h-4 rounded-full bg-[#A8D4F0]" />
        
        {/* Events */}
        <div className="relative py-6">
          {events.map((event, index) => (
            <div 
              key={index} 
              className="relative mb-16 last:mb-0"
            >
              {event.side === 'left' ? (
                <div className="flex">
                  {/* Left content area - no right padding so border touches center */}
                  <div className="w-1/2 flex flex-col items-end border-b-4 border-[#A8D4F0]">
                    <div className="w-full pr-6 pb-2 text-right">
                      <h3 className="text-xl md:text-2xl font-bold text-[#28599E] uppercase">
                        {event.month}
                      </h3>
                    </div>
                  </div>
                  {/* Right empty space */}
                  <div className="w-1/2" />
                </div>
              ) : (
                <div className="flex">
                  {/* Left empty space */}
                  <div className="w-1/2" />
                  {/* Right content area - no left padding so border touches center */}
                  <div className="w-1/2 flex flex-col items-start border-b-4 border-[#A8D4F0]">
                    <div className="w-full pl-6 pb-2 text-left">
                      <h3 className="text-xl md:text-2xl font-bold text-[#28599E] uppercase">
                        {event.month}
                      </h3>
                    </div>
                  </div>
                </div>
              )}
              {/* Description below the line */}
              <div className={`flex ${event.side === 'left' ? '' : 'justify-end'}`}>
                <div className={`w-1/2 ${event.side === 'left' ? 'pr-6 text-right' : 'pl-6 text-left'}`}>
                  <p className="text-[#5293BB] whitespace-pre-line mt-2">
                    {event.title}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom circle */}
        <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-4 h-4 rounded-full bg-[#A8D4F0]" />
      </div>
      
      {footnote && (
        <p className="text-center mt-12 text-md">
          {footnote}
        </p>
      )}
    </section>
  )
}
