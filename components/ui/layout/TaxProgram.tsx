import Image from 'next/image'

export default function TaxProgramContent() {
  return (
    <div className="w-full">
      {/* Hero Section with gradient background */}
      <section className="relative bg-linear-to-b from-white via-[#E8F4FC] to-[#7FA5DF] pb-16">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-8">Tax Program</h1>
          
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Left Column */}
            <div>
              <div className="mb-6">
                <p className="text-lg font-semibold text-black">Our 2026 client application is open!</p>
                <p className="text-lg">
                  Application closes on <span className="text-[#5293BB] font-semibold">February 20th, 2026 at 11:59 PM</span>. 
                </p>
                <a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform?fbclid=PAVERFWAPXcv1leHRuA2FlbQIxMABzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAad_9PrWUkQJQ-INxyGavNNF96G4r_GAqnnhkvY2UeaN-436bUOcdx0WFF24wQ_aem_P_1KLBZLEvRVQzxxHKttDA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 px-6 py-3 bg-[#28599E] text-white font-semibold rounded-lg hover:bg-[#1d4275] transition-colors"
                >
                  Register Now
                </a>
              </div>
              
              <div className="relative w-full max-w-md">
                <Image
                  src="/assets/teams/tax-program/tax-hero.jpg"
                  alt="Tax Program Team"
                  width={500}
                  height={350}
                  className="rounded-lg shadow-lg object-cover"
                />
              </div>
              
              <div className="mt-8 bg-[#5293BB]/80 text-white p-6 rounded-lg max-w-md">
                <p className="leading-relaxed">
                  The ASA Tax team prepares income tax returns according to the CRA eligibility policy. The Tax Program assists eligible taxpayers who have low income, simple and non-complex tax situations
                </p>
              </div>
            </div>
            
            {/* Right Column */}
            <div className="space-y-6">
              <div>
                <p className="text-lg font-semibold text-black mb-2">The ASA tax volunteers are here <em>for you</em> if you are:</p>
                <ul className="list-disc list-inside space-y-1 text-black">
                  <li><strong>Having trouble filing your tax returns?</strong></li>
                  <li><strong>Never filed a tax return before?</strong></li>
                  <li><strong>Don&apos;t have time to file?</strong></li>
                </ul>
              </div>
              
              <div className="bg-white/80 p-6 rounded-lg">
                <p className="text-[#28599E] leading-relaxed text-right">
                  Register to be a client and you will have your tax returns filed by dedicated volunteers trained by the Canada Revenue Agency (CRA) and SFU Accounting Student Association (ASA). The ASA Tax team filed over 800 returns last year, preserving the benefits and financial entitlements for over 1,000 members of the SFU community as well as providing peace of mind for these individuals in meeting their tax filing obligations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Eligibility Criteria Section */}
      <section className="bg-[#7FA5DF] py-16 relative">
        <div className="container mx-auto px-4">
          {/* Title with vertical line */}
          <div className="relative flex flex-col items-center mb-12">
            {/* Top dot */}
            <div className="w-3 h-3 rounded-full bg-[#28599E] mb-2" />
            {/* Vertical line */}
            <div className="w-0.5 h-8 bg-[#28599E]" />
            
            <h2 className="text-3xl md:text-4xl font-bold text-white my-4">Eligibility Criteria</h2>
            <p className="text-black">You may qualify if your income fits within the following limits:</p>
            
            {/* Vertical line below */}
            <div className="w-0.5 h-8 bg-[#28599E] mt-4" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Left eligibility */}
            <div className="relative">
              {/* Decorative line on image */}
              <div className="relative mb-4">
                <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-[#28599E]" />
                <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-[#28599E]" />
                <Image
                  src="/assets/teams/tax-program/eligible.jpg"
                  alt="Tax volunteers helping clients"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <ul className="list-disc list-inside space-y-1 text-black text-sm">
                <li>Single Person with an annual income of $40,000 or less.</li>
                <li>Couple without dependents combined income of $55,000 or less.</li>
                <li>Three-person family: $60,000 or less</li>
                <li>Four-person family: $65,000 or less</li>
                <li>Five-person family: $70,000 or less</li>
              </ul>
            </div>
            
            {/* Right eligibility */}
            <div className="relative">
              {/* Decorative line on image */}
              <div className="relative mb-4">
                <div className="absolute -left-4 top-0 bottom-0 w-0.5 bg-[#28599E]" />
                <div className="absolute -left-4 top-1/2 w-4 h-0.5 bg-[#28599E]" />
                <Image
                  src="/assets/teams/tax-program/eligible-2.jpg"
                  alt="Tax program session"
                  width={400}
                  height={250}
                  className="rounded-lg shadow-lg object-cover w-full"
                />
              </div>
              <ul className="list-disc list-inside space-y-1 text-black text-sm">
                <li>Each additional dependant: + $2,500 allowed income</li>
                <li>Interest income must be under $1,200</li>
              </ul>
              <div className="mt-4">
                <p className="font-semibold text-black text-sm">If you have a spouse/partner:</p>
                <p className="text-black text-sm">Please register them separately, but mention each other&apos;s names in the appropriate section of the form.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Volunteers Do Not Complete Section */}
      <section className="bg-[#5293BB] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
            Volunteers Do Not Complete<br />Returns With the Following:
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-start max-w-4xl mx-auto">
            <div>
              <Image
                src="/assets/teams/tax-program/volunteers.jpg"
                alt="Volunteer working"
                width={350}
                height={300}
                className="rounded-lg shadow-lg object-cover"
              />
            </div>
            
            <ul className="list-disc list-outside space-y-2 text-white">
              <li>You have business or rental income/expenses</li>
              <li>Self-employed individuals or those with employment expenses (see Exception 1)</li>
              <li>Deceased persons&apos; tax returns</li>
              <li>You have capital gains or losses</li>
              <li>You have major investments: RRSP, stocks, mutual funds, RESP, etc.</li>
              <li>You have investments outside Canada</li>
              <li>You have foreign income (see Exception 2)</li>
              <li>You have filed for bankruptcy</li>
              <li>Individuals who were non-residents during the tax year to be filed</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Footer Info */}
      <section className="bg-[#5293BB] py-8">
        <div className="container mx-auto px-4">
          <p className="font-bold text-white mb-4">Taxes will be filed March 8 - April 30, 2026.</p>
          
          <p className="text-white text-sm">
            For further information, refer to the CRA&apos;s website by clicking <a href="https://www.canada.ca/en/revenue-agency.html" target="_blank" rel="noopener noreferrer" className="underline">here</a>.
          </p>
          <p className="text-white text-sm">
            For any questions regarding the application, please feel free to reach our Project Managers at <a href="mailto:sfutax@gmail.com" className="text-[#28599E] underline">sfutax@gmail.com</a>.
          </p>
        </div>
      </section>
    </div>
  )
}
