import Image from 'next/image'

export interface TaxProgramCTAContent {
  heading: string
  description: string
  ctaText: string
  ctaLink: string
  image: string
  imageAlt: string
}

interface TaxProgramCTAProps {
  content: TaxProgramCTAContent
}

export default function TaxProgramCTA({ content }: TaxProgramCTAProps) {
  return (
    <section className="container mx-auto px-4 md:px-12 py-16 md:py-24 w-full">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <Image
            src={content.image}
            alt={content.imageAlt}
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between h-full py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#28599E] leading-tight mb-6">
            {content.heading}
          </h2>
          
          <p className="text-lg md:text-xl text-gray-900 mb-8">
            {content.description}
          </p>
          
          <a 
            href={content.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit px-8 py-4 bg-[#28599E] hover:bg-[#1d4578] text-white font-semibold text-lg rounded-full transition-colors"
          >
            {content.ctaText}
          </a>
        </div>
      </div>
    </section>
  )
}
