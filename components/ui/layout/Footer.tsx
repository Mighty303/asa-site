import Link from 'next/link'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Footer() {
  return (
    <footer className="relative">
      <Image 
        className='absolute inset-0 w-full h-full object-cover -z-10' 
        src="/assets/hero-bg.svg" 
        width={1920} 
        height={400} 
        alt="Footer background" 
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-4 text-white text-lg">
            <Link href="/" className="flex items-center gap-2 mb-2">
             <Image className='w-12 h-12' src="/assets/asa-logo.svg" width={32} height={32} alt="ASA Logo" />
            </Link>
            <Link href="/" className="hover:underline hover:underline-offset-6 hover:decoration-2">Home</Link>
            <Link href="/about" className="hover:underline hover:underline-offset-6 hover:decoration-2">About</Link>
            <Link href="/our-team" className="hover:underline hover:underline-offset-6 hover:decoration-2">Team</Link>
            <Link href="/tax-program" className="hover:underline hover:underline-offset-6 hover:decoration-2">Tax Program</Link>
            <Link href="/contact-us" className="hover:underline hover:underline-offset-6 hover:decoration-2">Contact Us</Link>
            <div className="flex gap-4 mt-2">
              <Link href="https://www.instagram.com/sfuasa/" target="_blank" rel="noopener noreferrer">
                <Image className='w-8 h-8' src="/assets/footer/instagram-logo.jpg" width={32} height={32} alt="Instagram Logo" />
              </Link>
              <Link href="https://www.linkedin.com/company/sfu-accounting-student-association/" target="_blank" rel="noopener noreferrer">
                <Image className='w-8 h-8' src="/assets/footer/linkedin-logo.jpg" width={32} height={32} alt="Linkedin Logo" />
              </Link>
              <Link href="https://www.tiktok.com/@sfuasa" target="_blank" rel="noopener noreferrer">
                <Image className='w-8 h-8' src="/assets/footer/tiktok-logo.jpg" width={32} height={32} alt="Tiktok Logo" />
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="flex flex-col items-center md:items-start text-center md:text-right max-w-lg">
            <h2 className="text-3xl md:text-4xl font-bold text-[#28599E] mb-4">
              Join the ASA Newsletter!
            </h2>
            <p className="text-white text-left text-lg mb-6">
              Sign up with your email address to receive news and updates about ASA!
            </p>
            <form className="flex flex-col sm:flex-row gap-3 w-full">
              <Input 
                type="email" 
                placeholder="Email Address" 
                className="flex-1 bg-white/90 text-gray-900 placeholder:text-gray-500 border-none rounded-full px-6 py-3 md:py-6 text-base"
                required
              />
              <Button 
                type="submit" 
                className="bg-[#28599E] hover:bg-[#1d4578] text-white font-semibold px-8 py-6 rounded-full text-base whitespace-nowrap"
              >
                Sign Up
              </Button>
            </form>
          </div>

        </div>
      </div>
    </footer>
  )
}