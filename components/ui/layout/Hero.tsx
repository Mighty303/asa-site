import Image from "next/image"

interface HeroContent {
  tagline: string[]
  heading?: string
  description: string
}

interface HeroProps {
  content: HeroContent
}

export default function Hero({ content }: HeroProps) {
  return (
    <section className="relative min-h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/assets/hero-bg.svg"
          alt="Mountain background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left side - ASPIRE. SHARE. ACHIEVE. */}
          <div className="text-left">
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
              {content.tagline.map((line, index) => (
                <div key={index} className={index === 1 ? 'pl-6' : index === 2 ? 'pl-12' : ''}>
                  {line}
                </div>
              ))}
            </h1>
          </div>

          {/* Right side - WHO WE ARE */}
          <div className="text-white">
            {content.heading && (
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6">
                {content.heading}
              </h2>
            )}
            <p className="text-lg md:text-xl leading-relaxed">
              {content.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}