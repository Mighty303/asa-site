import Hero from '@/components/ui/layout/Hero'
import TaxProgramContent from '@/components/ui/layout/TaxProgram'

const heroContent = {
  tagline: ['TAX PROGRAM']
}


export default function TaxProgram() {
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />
      <TaxProgramContent />
    </main>
  )
}