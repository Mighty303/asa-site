import Image from "next/image"

interface HeroContent {
  tagline: string[]
  heading?: string
  description?: string
  teamImage?: string
}

interface HeroProps {
  content: HeroContent
  reverseOnMobile?: boolean
}

export default function Hero({ content, reverseOnMobile = false }: HeroProps) {
  const hasRightContent = content.description || content.teamImage

  return (
    <section className="relative min-h-screen overflow-hidden">
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
      <div className="relative container mx-auto px-4 pt-32 md:pb-20">
        <div className={`${hasRightContent ? `flex ${reverseOnMobile ? 'flex-col-reverse' : 'flex-col'} md:grid md:grid-cols-2 gap-8 md:gap-12 items-center` : 'flex justify-center items-center'} min-h-[65vh] md:min-h-[80vh]`}>
          {/* Left side - ASPIRE. SHARE. ACHIEVE. */}
          <div className={`${hasRightContent ? 'text-center md:text-left w-full' : 'text-center'} shrink-0 md:shrink min-w-0`}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight break-words">
              {content.tagline.map((line, index) => (
                <div key={index} className="break-words">
                  {line}
                </div>
              ))}
            </h1>
          </div>

          {/* Right side - Description or Team Image */}
          {hasRightContent && (
            <div className="text-white flex flex-col items-center md:items-start gap-6 w-full shrink-0">
              {content.description && (
                <p className="text-lg md:text-xl leading-relaxed">
                  {content.description}
                </p>
              )}
              {content.teamImage && (
                <Image
                  src={content.teamImage}
                  alt="Team"
                  width={800}
                  height={800}
                  className="rounded-lg shadow-lg w-full max-w-full h-auto object-contain"
                />
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}