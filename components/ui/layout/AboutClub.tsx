interface AboutClubProps {
  heading?: string
  description: string
}

export default function AboutClub({ heading = "WHO WE ARE", description }: AboutClubProps) {
  return (
    <section className="container mx-auto px-4 md:px-4 pt-16 md:pt-32 pb-12 w-full">
      {/* <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-8">
        {heading}
      </h2> */}
      <p className="text-lg md:text-2xl text-gray-800 leading-loose text-left">
        {description}
      </p>
    </section>
  )
}
