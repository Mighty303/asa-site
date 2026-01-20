import Image from "next/image"

interface HeroContent {
  tagline: string[]
  heading?: string
  description?: string
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
          className="object-cover object-center"
          priority
          quality={100}
          sizes="100vw"
        />
      </div>

      {/* Optional: Add overlay for better text contrast */}
      <div className="absolute inset-0 bg-blue-900/10" />

      {/* Content */}
      <div className="relative container mx-auto px-4 pt-32 pb-20">
        <div className={`${content.description ? 'grid md:grid-cols-2 gap-12 items-center' : 'flex justify-center items-center'} min-h-[80vh]`}>
          {/* Left side - ASPIRE. SHARE. ACHIEVE. */}
          <div className={content.description ? 'text-left' : 'text-center'}>
            <h1 className="text-5xl md:text-8xl font-bold text-white leading-tight">
              {content.tagline.map((line, index) => (
                <div key={index} className={content.description ? (index === 1 ? 'pl-6' : index === 2 ? 'pl-12' : '') : ''}>
                  {line}
                </div>
              ))}
            </h1>
          </div>

          {/* Right side - WHO WE ARE (only shown if there's a description) */}
          {content.description && (
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
          )}
        </div>
      </div>
    </section>
  )
}