import Hero from '@/components/ui/layout/Hero'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'

const heroContent = {
  tagline: ['CONTACT US'],
  description: 'Have questions or want to get involved? We\'d love to hear from you! Fill out the form below and we\'ll get back to you as soon as possible.'
}

export default function ContactUs() {
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16 md:py-20 max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] mb-6">
          Contact Us
        </h2>
        <p className="text-lg md:text-xl">
          Thank you for contacting the SFU Accounting Student Association.
        </p>
        <p className="text-lg md:text-xl">
          Please submit your inquiry using the form below.
        </p>
        <p className="text-lg md:text-xl">
          You can expect a response in 1-7 business days.
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-3xl">
        <form className="space-y-8">
          {/* Name Fields Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
                First Name *
              </label>
              <Input 
                id="firstName"
                type="text" 
                required
                className="w-full px-4 py-6 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
                Last Name *
              </label>
              <Input 
                id="lastName"
                type="text" 
                required
                className="w-full px-4 py-6 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30"
              />
            </div>
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email *
            </label>
            <Input 
              id="email"
              type="email" 
              required
              className="w-full px-4 py-6 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <Input 
              id="subject"
              type="text"
              className="w-full px-4 py-6 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30"
            />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Leave us a message...
            </label>
            <Textarea 
              id="message"
              rows={12}
              className="w-full px-4 py-3 text-base border-2 border-gray-300 rounded-md focus:border-[#5293BB] focus:ring-[#5293BB]/30 resize-none"
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-4">
            <Button 
              type="submit"
              className="bg-[#5293BB] hover:bg-[#3d7496] text-white font-semibold px-12 py-6 text-lg rounded-md shadow-lg transition-colors"
            >
              Submit
            </Button>
          </div>
        </form>

        {/* Additional Note */}
        <p className="text-sm text-gray-600 mt-8 text-center">
          *Submissions are directly sent to the ASA President&apos;s inbox
        </p>
      </section>

      {/* Alternative Contact Options */}
      <section className="container mx-auto px-4 pb-16 md:pb-24 max-w-4xl space-y-12">
        {/* Prefer Email */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            Prefer Email?
          </h3>
          <p className="text-lg md:text-xl text-gray-800">
            You may also contact us at{' '}
            <a 
              href="mailto:sfuasa.pres@gmail.com" 
              className="text-[#5293BB] hover:underline font-semibold"
            >
              sfuasa.pres@gmail.com
            </a>
          </p>
        </div>

        {/* Tax Program */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            Questions About Our Tax Program?
          </h3>
          <p className="text-lg md:text-xl text-gray-800">
            Reach our Project Managers at{' '}
            <a 
              href="mailto:sfutax@gmail.com" 
              className="text-[#5293BB] hover:underline font-semibold"
            >
              sfutax@gmail.com
            </a>
          </p>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
            Social Media
          </h3>
          <p className="text-lg md:text-xl text-gray-800">
            Stay connected with us on Instagram, LinkedIn, and TikTok.
          </p>
        </div>
      </section>
    </main>
  )
}