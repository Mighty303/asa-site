"use client"

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import MobileMenu from './MobileMenu'
import HamburgerIcon from './HamburgerIcon'

export default function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <nav className="fixed top-0 w-full bg-[#5293BB70] backdrop-blur-md z-50">
      <div className="container mx-auto px-4 py-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image className='w-12 h-12' src="/assets/asa-logo.png" width={32} height={32} alt="ASA Logo" />
        </Link>
        
        <div className="hidden md:flex gap-8 text-white text-lg">
          <Link href="/" className="hover:underline hover:underline-offset-6 hover:decoration-2">Home</Link>
          <Link href="/our-values" className="hover:underline hover:underline-offset-6 hover:decoration-2">Our Values</Link>
          <Link href="/team" className="hover:underline hover:underline-offset-6 hover:decoration-2">Team</Link>
          <Link href="/tax-program" className="hover:underline hover:underline-offset-6 hover:decoration-2">Tax Program</Link>
          <Link href="/contact-us" className="hover:underline hover:underline-offset-6 hover:decoration-2">Contact Us</Link>
        </div>

        <div className="md:hidden">
          <HamburgerIcon onToggle={toggleMobileMenu} isOpen={isMobileMenuOpen} />
        </div>

        {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
      </div>
    </nav>
  )
}