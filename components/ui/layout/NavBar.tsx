import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full bg-cyan-400/90 backdrop-blur-sm z-50">
      <div className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="text-white font-bold text-xl">ASA</div>
          </Link>
          
          <div className="flex gap-8 text-white">
            <Link href="/" className="hover:underline">Home</Link>
            <Link href="/our-values" className="hover:underline">Our Values</Link>
            <Link href="/team" className="hover:underline">Team</Link>
            <Link href="/tax-program" className="hover:underline">Tax Program</Link>
            <Link href="/contact-us" className="hover:underline">Contact Us</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}