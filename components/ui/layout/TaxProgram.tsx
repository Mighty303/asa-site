import Image from 'next/image'

export default function TaxProgramContent() {
  return (
    <div className="w-full">
      {/* Hero Section with gradient background */}
      <section className="relative bg-linear-to-b from-white via-[#E8F4FC] to-[#7FA5DF] pb-20">
        <div className="container mx-auto px-6 md:px-12 py-16">
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <p className="text-lg font-bold text-[#28599E]">2026 Client Application is Open!</p>
                </div>
                <p className="text-gray-700 mb-6">
                  Application closes on <span className="text-[#28599E] font-semibold">February 20th, 2026 at 11:59 PM</span>
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform?fbclid=PAVERFWAPXcv1leHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAad_9PrWUkQJQ-INxyGavNNF96G4r_GAqnnhkvY2UeaN-436bUOcdx0WFF24wQ_aem_P_1KLBZLEvRVQzxxHKttDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-[#28599E] text-white font-semibold rounded-full hover:bg-[#1d4275] transition-all duration-300 hover:shadow-lg hover:scale-105"
                >
                  Register Now
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-[#28599E] to-[#5293BB] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <Image
                  src="/assets/teams/tax-program/tax-hero.jpg"
                  alt="Tax Program Team"
                  width={600}
                  height={400}
                  className="relative rounded-2xl shadow-xl object-cover w-full"
                />
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-8">
              <div className="bg-[#28599E] text-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-xl font-bold mb-4">Are You:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8D4F0] text-xl">•</span>
                    <span>Having trouble filing your tax returns?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8D4F0] text-xl">•</span>
                    <span>Never filed a tax return before?</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[#A8D4F0] text-xl">•</span>
                    <span>Don&apos;t have time to file?</span>
                  </li>
                </ul>
                <p className="mt-6 text-[#A8D4F0] font-semibold">Our ASA tax volunteers are here for you!</p>
              </div>
              
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white/50">
                <p className="text-gray-700 leading-relaxed mb-4">
                  Register to be a client and have your tax returns filed by dedicated volunteers trained by the <strong>Canada Revenue Agency (CRA)</strong> and <strong>SFU Accounting Student Association (ASA)</strong>.
                </p>
                <div className="flex items-center gap-4 p-4 bg-[#E8F4FC] rounded-xl">
                  <div className="text-4xl font-bold text-[#28599E]">800+</div>
                  <p className="text-gray-600 text-sm">Returns filed last year, helping over 1,000 members of the SFU community</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* What We Do Section */}
      <section className="bg-[#7FA5DF] py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full mb-6 shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#28599E]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <p className="text-white text-lg leading-relaxed">
              The ASA Tax team prepares income tax returns according to the CRA eligibility policy. We assist eligible taxpayers who have <strong>low income</strong> and <strong>simple, non-complex tax situations</strong>.
            </p>
          </div>
        </div>
      </section>
      
      {/* Eligibility Criteria Section */}
      <section className="bg-linear-to-b from-[#7FA5DF] to-[#5293BB] py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Eligibility Criteria</h2>
            <p className="text-white/90 text-lg">You may qualify if your income fits within the following limits:</p>
            <div className="w-24 h-1 bg-white mx-auto mt-6 rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Left eligibility card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/assets/teams/tax-program/eligible.jpg"
                  alt="Tax volunteers helping clients"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#28599E] mb-4 text-lg">Income Thresholds</h3>
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
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Right eligibility card */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="relative h-56">
                <Image
                  src="/assets/teams/tax-program/eligible-2.jpg"
                  alt="Tax program session"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#28599E] mb-4 text-lg">Additional Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#28599E] rounded-full shrink-0" />
                    <span className="text-sm">Each additional dependent: +$2,500 allowed income</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#28599E] rounded-full shrink-0" />
                    <span className="text-sm">Interest income must be under $1,200</span>
                  </li>
                </ul>
                <div className="mt-6 p-4 bg-[#E8F4FC] rounded-xl">
                  <p className="text-sm text-[#28599E]">
                    <strong>Have a spouse/partner?</strong> Register them separately, but mention each other&apos;s names in the appropriate section.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Volunteers Do Not Complete Section */}
      <section className="bg-[#28599E] py-20">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-red-500/20 rounded-full mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
                What We Cannot Help With
              </h2>
              <p className="text-white/70">Volunteers do not complete returns with the following:</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative group order-2 md:order-1">
                <div className="absolute -inset-1 bg-linear-to-r from-[#5293BB] to-[#A8D4F0] rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300" />
                <Image
                  src="/assets/teams/tax-program/volunteers.jpg"
                  alt="Volunteer working"
                  width={500}
                  height={400}
                  className="relative rounded-2xl shadow-xl object-cover w-full"
                />
              </div>
              
              <div className="order-1 md:order-2">
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
                    <li key={index} className="flex items-center gap-3 text-white/90">
                      <div className="w-5 h-5 bg-red-500/30 rounded-full flex items-center justify-center shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-red-400" viewBox="0 0 20 20" fill="currentColor">
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
      <section className="bg-linear-to-r from-[#28599E] to-[#5293BB] py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-3xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h3>
              <p className="text-white/90 mb-2">
                <strong>Taxes will be filed March 8 - April 30, 2026</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-[#28599E] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 hover:shadow-lg"
                >
                  Register as Client
                </a>
              </div>
              <div className="mt-8 pt-6 border-t border-white/20">
                <p className="text-white/80 text-sm mb-2">
                  For further information, visit the <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer" className="text-white underline hover:text-[#A8D4F0] transition-colors">CRA website</a>
                </p>
                <p className="text-white/80 text-sm">
                  Questions? Contact us at <a href="mailto:sfutax@gmail.com" className="text-white underline hover:text-[#A8D4F0] transition-colors">sfutax@gmail.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
