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
  _type: 'page',
  _id: 'home-page',
  title: 'Home',
  slug: { _type: 'slug', current: 'home' },
  heroTagline: ['ASPIRE.', 'SHARE.', 'ACHIEVE.'],
  heroHeading: 'WHO WE ARE',
  heroDescription: 'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship.'
}

const statsData = [
  {
    _type: 'stat',
    _id: 'stat-1',
    number: '30+',
    description: 'Partners who are prestigious professional institutions and accounting firms across industries.',
    order: 1
  },
  {
    _type: 'stat',
    _id: 'stat-2',
    number: '50+',
    description: 'Networking events, information sessions, and social events held for our members throughout the year.',
    order: 2
  },
  {
    _type: 'stat',
    _id: 'stat-3',
    number: '2000+',
    description: 'Active subscribers and student members who are both highly engaged and eager to discover more opportunities in the accounting field.',
    order: 3
  }
]

const sponsorsData = [
  { _type: 'sponsor', _id: 'sponsor-1', name: 'Deloitte', url: 'https://www2.deloitte.com/ca/en.html', order: 1 },
  { _type: 'sponsor', _id: 'sponsor-2', name: 'EY', url: 'https://www.ey.com/en_ca', order: 2 },
  { _type: 'sponsor', _id: 'sponsor-3', name: 'KPMG', url: 'https://kpmg.com/ca/en/home.html', order: 3 },
  { _type: 'sponsor', _id: 'sponsor-4', name: 'PwC', url: 'https://www.pwc.com/ca/en.html', order: 4 },
  { _type: 'sponsor', _id: 'sponsor-5', name: 'Doane Grant Thornton', url: 'https://www.doanegrantthornton.ca/', order: 5 },
  { _type: 'sponsor', _id: 'sponsor-6', name: 'Crowe', url: 'https://www.crowe.com/', order: 6 },
  { _type: 'sponsor', _id: 'sponsor-7', name: 'Baker Tilly', url: 'https://www.bakertilly.ca/', order: 7 },
  { _type: 'sponsor', _id: 'sponsor-8', name: 'Manning Elliott', url: 'https://www.manningelliott.com/', order: 8 },
  { _type: 'sponsor', _id: 'sponsor-9', name: 'Lohn Caulder', url: 'https://lohncaulder.com/', order: 9 },
  { _type: 'sponsor', _id: 'sponsor-10', name: 'Invictus', url: 'https://invictusaccounting.ca/', order: 10 },
  { _type: 'sponsor', _id: 'sponsor-11', name: 'Treewalk', url: 'https://www.treewalk.ca/', order: 11 },
]

async function seedData() {
  console.log('Starting data seed...')
  
  try {
    // Create home page
    await client.createOrReplace(homePageData)
    console.log('✅ Home page created')

    // Create stats
    for (const stat of statsData) {
      await client.createOrReplace(stat)
    }
    console.log('✅ Stats created')

    // Create sponsors
    for (const sponsor of sponsorsData) {
      await client.createOrReplace(sponsor)
    }
    console.log('✅ Sponsors created')

    console.log('🎉 Seed completed successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedData()