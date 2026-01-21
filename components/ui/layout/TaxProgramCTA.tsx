import Image from 'next/image'

interface TaxProgramCTAProps {
  ctaLink?: string
}

export default function TaxProgramCTA({ 
  ctaLink = "https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform"
}: TaxProgramCTAProps) {
  return (
    <section className="container mx-auto px-4 md:px-12 py-16 md:py-24 w-full">
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Image */}
        <div className="relative">
          <Image
            src="/assets/home/tax-program.jpg"
            alt="Tax volunteer onboarding session"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full"
          />
        </div>

        {/* Text Content */}
        <div className="flex flex-col justify-between h-full py-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#28599E] leading-tight mb-6">
            Join Our Free Tax Program!
          </h2>
          
          <p className="text-lg md:text-xl text-gray-900 mb-8">
            Get your taxes filed accurately and reliably for free by trained student volunteers today!
            We are now accepting CLIENT applications for the 2026 Tax Program.
          </p>
          
          <a 
            href={ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-fit px-8 py-4 bg-[#28599E] hover:bg-[#1d4578] text-white font-semibold text-lg rounded-full transition-colors"
          >
            Register for Tax Program
          </a>
        </div>
      </div>
    </section>
  )
}
