import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

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
}

interface SponsorsProps {
  content: SponsorsContent
}

export default function Sponsors({ content }: SponsorsProps) {
  return (
    <section className="mx-12 my-28 bg-white flex flex-col items-center">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {content.stats.map((stat, index) => (
            <div key={index} className="text-center md:text-left">
              <h3 className="text-6xl md:text-7xl font-bold text-[#28599E] mb-6">
                {stat.number}
              </h3>
              <p className="text-lg md:text-xl text-black leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    
      <h2 className="text-4xl font-bold uppercase my-12 text-[#28599E]">
        {content.heading}
      </h2>
      
      <Carousel 
        className="w-full max-w-5xl mb-8"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent>
          {content.sponsors?.map((sponsor, index) => (
            <CarouselItem key={index} className="">
              <div className="p-4">
                <a 
                  // href={sponsor.url} 
                  // target="_blank" 
                  // rel="noopener noreferrer"
                  className="flex items-center justify-center h-32 transition-opacity"
                >
                  <Image
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={250}
                    height={200}
                    className="object-contain max-h-full w-auto"
                  />
                </a>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      
      <p className="text-lg text-black">
        {content.description}
      </p>
    </section>
  )
}