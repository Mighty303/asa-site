interface AboutClubProps {
  heading?: string
  description: string
  ctaText?: string
  ctaLink?: string
}

export default function AboutClub({ 
  heading = "WHO WE ARE", 
  description,
  ctaText,
  ctaLink
}: AboutClubProps) {
  return (
    <section className="container mx-auto px-4 md:px-4 pt-16 md:pt-32 pb-12 w-full">
      {/* <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-8">
        {heading}
      </h2> */}
      <p className="text-lg md:text-xl text-gray-800 leading-loose text-left">
        {description}
      </p>
      
      {ctaText && ctaLink && (
        <div className="mt-8">
          <a 
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-[#28599E] hover:bg-[#1d4578] text-white font-semibold text-lg rounded-lg transition-colors"
          >
            {ctaText}
          </a>
        </div>
      )}
    </section>
  )
}
