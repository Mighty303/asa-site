import { config } from 'dotenv'
import { createClient } from '@sanity/client'

// Load environment variables
config()

const client = createClient({
  projectId: '97kwgu13',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
})

const homePageData = {
  _type: 'homePage',
  _id: 'home-page',
  title: 'Home',
  slug: { _type: 'slug', current: 'home' },
  heroTagline: ['ACCOUNTING STUDENT ASSOCIATION (ASA)'],
  aboutClubHeading: 'WHO WE ARE',
  aboutClubDescription: 'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship.',
  taxProgramCTAHeading: 'Join Our Free Tax Program!',
  taxProgramCTADescription: 'Get your taxes filed accurately and reliably for free by trained student volunteers today! We are now accepting CLIENT applications for the 2026 Tax Program.',
  taxProgramCTAText: 'Register for Tax Program',
  taxProgramCTALink: 'https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform',
  taxProgramCTAImageAlt: 'Tax volunteer onboarding session',
  sponsorsHeading: 'Our Sponsors',
  sponsorsDescription: 'We are proud to partner with leading accounting firms and professional institutions.',
}

async function seedHomePage() {
  console.log('Starting home page seed...')
  
  try {
    // Check if old document exists and delete it if it has wrong type
    try {
      const existing = await client.getDocument('home-page')
      if (existing && existing._type !== 'homePage') {
        console.log(`⚠️  Found existing document with type "${existing._type}", deleting it...`)
        await client.delete('home-page')
        console.log('✅ Old document deleted')
      }
    } catch (err: any) {
      // Document doesn't exist or other error - that's fine, we'll create it
      if (err.statusCode !== 404) {
        console.log('Note: Could not check for existing document:', err.message)
      }
    }
    
    // Create or replace home page
    await client.createOrReplace(homePageData)
    console.log('✅ Home page created/updated')
    console.log('🎉 Home page seed completed successfully!')
    console.log('\nNote: You will need to upload the Tax Program CTA image manually in Sanity Studio.')
  } catch (error) {
    console.error('Error seeding home page:', error)
    process.exit(1)
  }
}

seedHomePage()
