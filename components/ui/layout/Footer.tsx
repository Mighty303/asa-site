"use client"

import Link from 'next/link'
import Image from 'next/image'

export interface SocialLink {
  name: string
  url: string
  icon: string
}

export interface NavLink {
  label: string
  href: string
}

export interface FooterContent {
  logo: string
  backgroundImage: string
  socialLinks: SocialLink[]
  navLinks: NavLink[]
}

interface FooterProps {
  content: FooterContent
}

export default function Footer({ content }: FooterProps) {

  return (
    <footer className="relative">
      <Image 
        className='absolute inset-0 w-full h-full object-cover -z-10' 
        src={content.backgroundImage}
        width={1920} 
        height={400} 
        alt="Footer background" 
      />
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col-reverse md:flex-row items-start md:items-center justify-between gap-8">
          
          {/* Navigation Links */}
          <div className="flex flex-col gap-4 text-white text-lg">
            <Link href="/" className="flex items-center gap-2 mb-2">
             <Image className='w-18 h-18' src={content.logo} width={32} height={32} alt="ASA Logo" />
            </Link>
            <div className="flex gap-4 mt-2">
              {content.socialLinks.map((social, index) => (
                <Link key={index} href={social.url} target="_blank" rel="noopener noreferrer">
                  <Image className='w-8 h-8' src={social.icon} width={32} height={32} alt={`${social.name} Logo`} />
                </Link>
              ))}
            </div>
            {content.navLinks.map((link, index) => (
              <Link key={index} href={link.href} className="hover:underline hover:underline-offset-6 hover:decoration-2">
                {link.label}
              </Link>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}