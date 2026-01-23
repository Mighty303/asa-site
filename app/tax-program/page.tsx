import Hero from '@/components/ui/layout/Hero'
import TaxProgramContent from '@/components/ui/layout/TaxProgram'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

async function getTaxProgramData() {
  const query = `{
    "taxProgramPage": *[_type == "taxProgramPage" && slug.current == "tax-program"][0] {
      ...,
      introImage,
      incomeThresholdsImage,
      additionalInfoImage,
      exclusionsImage
    },
    "siteSettings": *[_type == "siteSettings"][0] {
      defaultTeamImage
    }
  }`
  
  return client.fetch(query)
}

export default async function TaxProgram() {
  const data = await getTaxProgramData()
  
  // Transform tax program page data
  const teamImage = data.siteSettings?.defaultTeamImage
    ? urlFor(data.siteSettings.defaultTeamImage).url()
    : '/assets/home/team.jpg'
  
  const taxProgramHeroContent = {
    tagline: data.taxProgramPage?.heroTagline || ['TAX PROGRAM'],
    teamImage,
  }

  const taxProgramPageContent = {
    introSection: {
      heading: data.taxProgramPage?.introHeading || '',
      description: data.taxProgramPage?.introDescription || '',
      image: data.taxProgramPage?.introImage ? urlFor(data.taxProgramPage.introImage).url() : '/assets/teams/tax-program/tax-hero.jpg',
      imageAlt: 'Tax Program Team',
      statNumber: data.taxProgramPage?.statNumber || '',
      statDescription: data.taxProgramPage?.statDescription || '',
    },
    registrationSection: {
      statusText: data.taxProgramPage?.registrationStatusText || '',
      deadlineText: data.taxProgramPage?.registrationDeadline || '',
      questionsHeading: data.taxProgramPage?.questionsHeading || '',
      questions: data.taxProgramPage?.questions || [],
      volunteerMessage: data.taxProgramPage?.volunteerMessage || '',
      ctaText: data.taxProgramPage?.ctaText || '',
      ctaLink: data.taxProgramPage?.ctaLink || '',
      sideDescription: data.taxProgramPage?.sideDescription || '',
    },
    eligibilitySection: {
      heading: data.taxProgramPage?.eligibilityHeading || '',
      subtitle: data.taxProgramPage?.eligibilitySubtitle || '',
      incomeThresholds: {
        image: data.taxProgramPage?.incomeThresholdsImage ? urlFor(data.taxProgramPage.incomeThresholdsImage).url() : '/assets/teams/tax-program/eligible.jpg',
        imageAlt: 'Tax volunteers helping clients',
        heading: data.taxProgramPage?.incomeThresholdsHeading || '',
        items: data.taxProgramPage?.incomeThresholds || [],
      },
      additionalInfo: {
        image: data.taxProgramPage?.additionalInfoImage ? urlFor(data.taxProgramPage.additionalInfoImage).url() : '/assets/teams/tax-program/eligible-2.jpg',
        imageAlt: 'Tax program session',
        heading: data.taxProgramPage?.additionalInfoHeading || '',
        items: data.taxProgramPage?.additionalInfoItems || [],
        note: data.taxProgramPage?.additionalInfoNote || '',
      },
    },
    exclusionsSection: {
      heading: data.taxProgramPage?.exclusionsHeading || '',
      subtitle: data.taxProgramPage?.exclusionsSubtitle || '',
      image: data.taxProgramPage?.exclusionsImage ? urlFor(data.taxProgramPage.exclusionsImage).url() : '/assets/teams/tax-program/volunteers.jpg',
      imageAlt: 'Volunteer working',
      items: data.taxProgramPage?.exclusionItems || [],
    },
    footerCTA: {
      heading: data.taxProgramPage?.footerCTAHeading || '',
      dateText: data.taxProgramPage?.footerCTADateText || '',
      ctaText: data.taxProgramPage?.footerCTAText || '',
      ctaLink: data.taxProgramPage?.footerCTALink || '',
      craText: data.taxProgramPage?.craText || '',
      craLink: data.taxProgramPage?.craLink || '',
      contactText: data.taxProgramPage?.contactText || '',
      contactEmail: data.taxProgramPage?.contactEmail || '',
    },
  }

  return (
    <main className="min-h-screen">
      <Hero content={taxProgramHeroContent} />
      <TaxProgramContent content={taxProgramPageContent} />
    </main>
  )
}