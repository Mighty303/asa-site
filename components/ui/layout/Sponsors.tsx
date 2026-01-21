"use client"

import Image from "next/image"
import CountUp from "@/components/ui/CountUp"

interface Stat {
  number: string
  description: string
}

interface Sponsor {
  name: string
  logo: string
  url: string
}

interface SponsorsContent {
  stats: Stat[]
  heading: string
  description: string
  sponsors?: Sponsor[]
  execTeamImage?: string
}

interface SponsorsProps {
  content: SponsorsContent
}

// Helper function to parse stat numbers
function parseStatNumber(statString: string) {
  // Extract number and suffix (e.g., "30+" => {number: 30, suffix: "+"})
  const match = statString.match(/^(\d+(?:,\d+)?)(.*)$/)
  if (match) {
    const number = parseInt(match[1].replace(/,/g, ''))
    const suffix = match[2] || ''
    return { number, suffix }
  }
  return { number: 0, suffix: '' }
}

export default function Sponsors({ content }: SponsorsProps) {
  return (
    <section className="px-4 md:px-12 my-14 bg-white flex flex-col items-center gap-12 overflow-hidden">
      <div className="container mx-auto">
        <hr className="w-full border-t border-[#28599E] border-3 mb-12" />
        <div className="grid md:grid-cols-3 gap-12">
          {content.stats.map((stat, index) => {
            const { number, suffix } = parseStatNumber(stat.number)
            return (
              <div key={index} className="text-center md:text-left">
                <h3 className="text-6xl md:text-7xl font-bold text-[#28599E] mb-6">
                  <CountUp
                    from={0}
                    to={number}
                    duration={2}
                    separator=","
                    direction="up"
                    suffix={suffix}
                    className="count-up-text"
                  />
                </h3>
                <p className="text-lg md:text-xl text-black leading-relaxed">
                  {stat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    
      <h2 className="text-4xl font-bold uppercase my-12 text-[#28599E]">
        {content.heading}
      </h2>
      
      {/* Marquee-style infinite carousel */}
      <div className="w-full overflow-hidden mb-8">
        <div className="inline-flex animate-marquee hover:paused" style={{ width: 'max-content' }}>
          {/* First set of sponsors */}
          <div className="flex">
            {content.sponsors?.map((sponsor, index) => (
              <div key={index} className="shrink-0 mx-6 md:mx-10">
                <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-40">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={160}
                    height={80}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex">
            {content.sponsors?.map((sponsor, index) => (
              <div key={`dup-${index}`} className="shrink-0 mx-6 md:mx-10">
                <div className="flex items-center justify-center h-16 md:h-20 w-28 md:w-40">
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={160}
                    height={80}
                    className="object-contain h-full w-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <p className="text-lg text-black">
        {content.description}
      </p>
    </section>
  )
}