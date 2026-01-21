import Image from 'next/image'

export interface TaxProgramContent {
  // What is Tax Program Section
  introSection: {
    heading: string
    description: string
    image: string
    imageAlt: string
    statNumber: string
    statDescription: string
  }
  // Registration CTA Section
  registrationSection: {
    statusText: string
    deadlineText: string
    questionsHeading: string
    questions: string[]
    volunteerMessage: string
    ctaText: string
    ctaLink: string
    sideDescription: string
  }
  // Eligibility Section
  eligibilitySection: {
    heading: string
    subtitle: string
    incomeThresholds: {
      image: string
      imageAlt: string
      heading: string
      items: string[]
    }
    additionalInfo: {
      image: string
      imageAlt: string
      heading: string
      items: string[]
      note: string
    }
  }
  // What We Cannot Help With Section
  exclusionsSection: {
    heading: string
    subtitle: string
    image: string
    imageAlt: string
    items: string[]
  }
  // Footer CTA Section
  footerCTA: {
    heading: string
    dateText: string
    ctaText: string
    ctaLink: string
    craText: string
    craLink: string
    contactText: string
    contactEmail: string
  }
}

interface TaxProgramProps {
  content: TaxProgramContent
}

export default function TaxProgramContent({ content }: TaxProgramProps) {
  return (
    <div className="w-full">
      {/* What is the Tax Program Section */}
      <section className="container mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-6">
              {content.introSection.heading}
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: content.introSection.description }} />
          </div>
          <div className="relative">
            <Image
              src={content.introSection.image}
              alt={content.introSection.imageAlt}
              width={600}
              height={450}
              className="rounded-xl object-cover w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#28599E]/70 backdrop-blur-sm text-white p-6 rounded-b-xl">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-bold">{content.introSection.statNumber}</div>
                <p className="text-lg">{content.introSection.statDescription}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration CTA Section */}
      <section className="bg-[#28599E] py-16">
        <div className="container mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                <p className="text-xl font-bold">{content.registrationSection.statusText}</p>
              </div>
              <p className="text-lg text-white/90 mb-6">
                Application closes on <span className="font-semibold">{content.registrationSection.deadlineText}</span>
              </p>
              <h3 className="text-2xl font-bold mb-4">{content.registrationSection.questionsHeading}</h3>
              <ul className="space-y-2 mb-8 text-white/90">
                {content.registrationSection.questions.map((question, index) => (
                  <li key={index}>• {question}</li>
                ))}
              </ul>
              <p className="text-lg font-semibold mb-6">{content.registrationSection.volunteerMessage}</p>
              <a 
                href={content.registrationSection.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-[#28599E] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                {content.registrationSection.ctaText}
              </a>
            </div>
            <div>
              <p className="text-white/90 text-lg leading-relaxed">
                {content.registrationSection.sideDescription}
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility Criteria Section */}
      <section className="container mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">{content.eligibilitySection.heading}</h2>
          <p className="text-lg text-gray-600">{content.eligibilitySection.subtitle}</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Income Thresholds */}
          <div className="bg-gray-100 rounded-xl p-8">
            <div className="mb-6">
              <Image
                src={content.eligibilitySection.incomeThresholds.image}
                alt={content.eligibilitySection.incomeThresholds.imageAlt}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <h3 className="font-bold text-[#28599E] mb-4 text-xl">{content.eligibilitySection.incomeThresholds.heading}</h3>
            <ul className="space-y-3">
              {content.eligibilitySection.incomeThresholds.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-gray-700">
                  <div className="w-2 h-2 bg-[#28599E] rounded-full shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Additional Information */}
          <div className="bg-gray-100 rounded-xl p-8">
            <div className="mb-6">
              <Image
                src={content.eligibilitySection.additionalInfo.image}
                alt={content.eligibilitySection.additionalInfo.imageAlt}
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <h3 className="font-bold text-[#28599E] mb-4 text-xl">{content.eligibilitySection.additionalInfo.heading}</h3>
            <ul className="space-y-3 text-gray-700">
              {content.eligibilitySection.additionalInfo.items.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-[#28599E] rounded-full shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-[#28599E]" dangerouslySetInnerHTML={{ __html: content.eligibilitySection.additionalInfo.note }} />
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Cannot Help With */}
      <section className="bg-gray-100 py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
                {content.exclusionsSection.heading}
              </h2>
              <p className="text-gray-600 text-lg">{content.exclusionsSection.subtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src={content.exclusionsSection.image}
                  alt={content.exclusionsSection.imageAlt}
                  width={500}
                  height={400}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              
              <div>
                <ul className="space-y-3">
                  {content.exclusionsSection.items.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer CTA */}
      <section className="bg-[#28599E] py-16">
        <div className="container mx-auto px-4 md:px-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{content.footerCTA.heading}</h3>
          <p className="text-white/90 text-lg mb-8">
            <strong>{content.footerCTA.dateText}</strong>
          </p>
          <a 
            href={content.footerCTA.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#28599E] font-semibold text-lg rounded-full hover:bg-gray-100 transition-colors"
          >
            {content.footerCTA.ctaText}
          </a>
          <div className="mt-8 text-white/80">
            <p className="mb-2">
              {content.footerCTA.craText} <a href={content.footerCTA.craLink} target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">CRA website</a>
            </p>
            <p>
              {content.footerCTA.contactText} <a href={`mailto:${content.footerCTA.contactEmail}`} className="underline hover:text-white transition-colors">{content.footerCTA.contactEmail}</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
