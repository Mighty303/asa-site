import Hero from '@/components/ui/layout/Hero'
import TaxProgramContent from '@/components/ui/layout/TaxProgram'
import { taxProgramHeroContent, taxProgramPageContent } from '@/lib/content'


export default function TaxProgram() {
  return (
    <main className="min-h-screen">
      <Hero content={taxProgramHeroContent} />
      <TaxProgramContent content={taxProgramPageContent} />
    </main>
  )
}