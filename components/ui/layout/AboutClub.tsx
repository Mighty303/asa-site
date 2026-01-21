interface AboutClubProps {
  heading?: string
  description: string
  ctaText?: string
  ctaLink?: string
}

export default function AboutClub({ 
  heading = "WHO WE ARE",
  description,
}: AboutClubProps) {
  return (
    <section className="container mx-auto px-4 md:px-4 pt-12 md:pt-32 pb-12 w-full">
      <h2 className="text-4xl font-bold uppercase mb-12 text-[#28599E]">
        {heading}
      </h2>
      
      <p className="text-lg md:text-xl text-gray-800 leading-loose text-left">
        {description}
      </p>
    </section>
  )
}
