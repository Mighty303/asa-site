import Image from 'next/image'

export default function TaxProgramContent() {
  return (
    <div className="w-full">
      {/* What is the Tax Program Section */}
      <section className="container mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-6">
              What is the Tax Program?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The ASA Tax Program is a free tax filing service for eligible SFU community members. Our dedicated student volunteers are trained by the <strong>Canada Revenue Agency (CRA)</strong> to prepare income tax returns for those with low income and simple, non-complex tax situations.
            </p>
          </div>
          <div className="relative">
            <Image
              src="/assets/teams/tax-program/tax-hero.jpg"
              alt="Tax Program Team"
              width={600}
              height={450}
              className="rounded-xl object-cover w-full"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-[#28599E]/70 backdrop-blur-sm text-white p-6 rounded-b-xl">
              <div className="flex items-center gap-6">
                <div className="text-5xl font-bold">800+</div>
                <p className="text-lg">Returns filed last year, helping over 1,000 members of the SFU community</p>
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
                <p className="text-xl font-bold">2026 Client Applications Now Open!</p>
              </div>
              <p className="text-lg text-white/90 mb-6">
                Application closes on <span className="font-semibold">February 20th, 2026 at 11:59 PM</span>
              </p>
              <h3 className="text-2xl font-bold mb-4">Are you:</h3>
              <ul className="space-y-2 mb-8 text-white/90">
                <li>• Having trouble filing your tax returns?</li>
                <li>• Never filed a tax return before?</li>
                <li>• Don&apos;t have time to file?</li>
              </ul>
              <p className="text-lg font-semibold mb-6">Our ASA tax volunteers are here for you!</p>
              <a 
                href="https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-white text-[#28599E] font-semibold rounded-full hover:bg-gray-100 transition-colors"
              >
                Register Now
              </a>
            </div>
            <div>
              <p className="text-white/90 text-lg leading-relaxed">
                Register to be a client and have your tax returns filed by dedicated volunteers trained by the Canada Revenue Agency (CRA) and SFU Accounting Student Association (ASA). We help preserve benefits and financial entitlements while providing peace of mind for meeting tax filing obligations.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility Criteria Section */}
      <section className="container mx-auto px-4 md:px-12 py-16 md:py-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">Eligibility Criteria</h2>
          <p className="text-lg text-gray-600">You may qualify if your income fits within the following limits:</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Income Thresholds */}
          <div className="bg-gray-100 rounded-xl p-8">
            <div className="mb-6">
              <Image
                src="/assets/teams/tax-program/eligible.jpg"
                alt="Tax volunteers helping clients"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <h3 className="font-bold text-[#28599E] mb-4 text-xl">Income Thresholds</h3>
            <ul className="space-y-3">
              {[
                'Single Person: $40,000 or less',
                'Couple (no dependents): $55,000 or less',
                'Three-person family: $60,000 or less',
                'Four-person family: $65,000 or less',
                'Five-person family: $70,000 or less',
              ].map((item, index) => (
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
                src="/assets/teams/tax-program/eligible-2.jpg"
                alt="Tax program session"
                width={500}
                height={300}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
            <h3 className="font-bold text-[#28599E] mb-4 text-xl">Additional Information</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#28599E] rounded-full shrink-0" />
                <span>Each additional dependent: +$2,500 allowed income</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 bg-[#28599E] rounded-full shrink-0" />
                <span>Interest income must be under $1,200</span>
              </li>
            </ul>
            <div className="mt-6 p-4 bg-white rounded-lg border border-gray-200">
              <p className="text-[#28599E]">
                <strong>Have a spouse/partner?</strong> Register them separately, but mention each other&apos;s names in the appropriate section.
              </p>
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
                What We Cannot Help With
              </h2>
              <p className="text-gray-600 text-lg">Volunteers do not complete returns with the following:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/assets/teams/tax-program/volunteers.jpg"
                  alt="Volunteer working"
                  width={500}
                  height={400}
                  className="rounded-xl object-cover w-full"
                />
              </div>
              
              <div>
                <ul className="space-y-3">
                  {[
                    'Business or rental income/expenses',
                    'Self-employed individuals or employment expenses',
                    'Deceased persons\' tax returns',
                    'Capital gains or losses',
                    'Major investments (RRSP, stocks, mutual funds, RESP)',
                    'Investments outside Canada',
                    'Foreign income',
                    'Bankruptcy filings',
                    'Non-residents during the tax year',
                  ].map((item, index) => (
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
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Get Started?</h3>
          <p className="text-white/90 text-lg mb-8">
            <strong>Taxes will be filed March 8 - April 30, 2026</strong>
          </p>
          <a 
            href="https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-white text-[#28599E] font-semibold text-lg rounded-full hover:bg-gray-100 transition-colors"
          >
            Register as Client
          </a>
          <div className="mt-8 text-white/80">
            <p className="mb-2">
              For further information, visit the <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer" className="underline hover:text-white transition-colors">CRA website</a>
            </p>
            <p>
              Questions? Contact us at <a href="mailto:sfutax@gmail.com" className="underline hover:text-white transition-colors">sfutax@gmail.com</a>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
