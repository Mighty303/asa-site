"use client"

import Link from 'next/link'

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 top-22 bg-black/50 backdrop-blur-sm md:hidden z-40">
      <div className="bg-[#5293BB] backdrop-blur-md shadow-lg">
        <div className="flex flex-col text-white text-lg">
          <Link 
            href="/" 
            className="px-6 py-4 hover:bg-white/10 border-b border-white/10"
            onClick={onClose}
          >
            Home
          </Link>
          <Link 
            href="/about" 
            className="px-6 py-4 hover:bg-white/10 border-b border-white/10"
            onClick={onClose}
          >
            About
          </Link>
          <Link 
            href="/our-team" 
            className="px-6 py-4 hover:bg-white/10 border-b border-white/10"
            onClick={onClose}
          >
            Our Team
          </Link>
          <Link 
            href="/tax-program" 
            className="px-6 py-4 hover:bg-white/10 border-b border-white/10"
            onClick={onClose}
          >
            Tax Program
          </Link>
          <Link 
            href="/contact-us" 
            className="px-6 py-4 hover:bg-white/10"
            onClick={onClose}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  )
}