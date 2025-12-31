import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="relative">
      <Image 
        className='absolute inset-0 w-full h-full object-cover -z-10' 
        src="/assets/hero-background.jpg" 
        width={1920} 
        height={400} 
        alt="Footer background" 
      />
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          
            <div className="flex flex-col gap-4 text-white text-lg">
              <Link href="/" className="flex items-center gap-2">
               <Image className='w-12 h-12' src="/assets/asa-logo.png" width={32} height={32} alt="ASA Logo" />
              </Link>
              <Link href="/" className="hover:underline hover:underline-offset-6 hover:decoration-2">Home</Link>
              <Link href="/our-values" className="hover:underline hover:underline-offset-6 hover:decoration-2">Our Values</Link>
              <Link href="/team" className="hover:underline hover:underline-offset-6 hover:decoration-2">Team</Link>
              <Link href="/tax-program" className="hover:underline hover:underline-offset-6 hover:decoration-2">Tax Program</Link>
              <Link href="/contact-us" className="hover:underline hover:underline-offset-6 hover:decoration-2">Contact Us</Link>
              <div className="flex gap-4">
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
        </div>
      </div>
    </footer>
  )
}