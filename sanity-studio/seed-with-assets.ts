import { config } from 'dotenv'
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'

config()

const client = createClient({
  projectId: '97kwgu13',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
})

async function uploadImage(filePath: string, filename: string) {
  const imageBuffer = fs.readFileSync(filePath)
  const asset = await client.assets.upload('image', imageBuffer, {
    filename: filename,
  })
  return asset
}

async function seedWithAssets() {
  console.log('Starting data seed with assets...')
  const assetsDir = path.join(__dirname, '../public/assets')

  try {
    // Upload images first
    console.log('Uploading images...')
    const logo = await uploadImage(path.join(assetsDir, 'asa-logo.png'), 'asa-logo.png')
    const heroBackground = await uploadImage(path.join(assetsDir, 'hero-background.jpg'), 'hero-background.jpg')
    const footerBackground = await uploadImage(path.join(assetsDir, 'footer-bg.jpg'), 'footer-bg.jpg')

    // Create site settings
    await client.createOrReplace({
      _type: 'siteSettings',
      _id: 'site-settings',
      title: 'SFU Accounting Student Association',
      logo: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: logo._id,
        },
      },
      footerBackground: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: footerBackground._id,
        },
      },
    })
    console.log('✅ Site settings created')

    // Create home page with hero image
    await client.createOrReplace({
      _type: 'page',
      _id: 'home-page',
      title: 'Home',
      slug: { _type: 'slug', current: 'home' },
      heroImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: heroBackground._id,
        },
      },
      logo: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: logo._id,
        },
      },
      heroTagline: ['ASPIRE.', 'SHARE.', 'ACHIEVE.'],
      heroHeading: 'WHO WE ARE',
      heroDescription:
        'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life.',
    })
    console.log('✅ Home page created')

    // Create stats
    const statsData = [
      {
        _type: 'stat',
        _id: 'stat-1',
        number: '30+',
        description: 'Partners who are prestigious professional institutions and accounting firms across industries.',
        order: 1,
      },
      {
        _type: 'stat',
        _id: 'stat-2',
        number: '50+',
        description: 'Networking events, information sessions, and social events held for our members throughout the year.',
        order: 2,
      },
      {
        _type: 'stat',
        _id: 'stat-3',
        number: '2000+',
        description: 'Active subscribers and student members who are both highly engaged and eager to discover more opportunities in the accounting field.',
        order: 3,
      },
    ]

    for (const stat of statsData) {
      await client.createOrReplace(stat)
    }
    console.log('✅ Stats created')

    // Upload and create sponsors
    const sponsors = [
      { name: 'Deloitte', file: 'deloitte.jpg', url: 'https://www2.deloitte.com/ca/en.html', order: 1 },
      { name: 'EY', file: 'ey.jpg', url: 'https://www.ey.com/en_ca', order: 2 },
      { name: 'KPMG', file: 'kpmg.jpg', url: 'https://kpmg.com/ca/en/home.html', order: 3 },
      { name: 'PwC', file: 'pwc.jpg', url: 'https://www.pwc.com/ca/en.html', order: 4 },
      { name: 'Doane Grant Thornton', file: 'doane-grant-thornton.jpg', url: 'https://www.doanegrantthornton.ca/', order: 5 },
      { name: 'Crowe', file: 'crowe.jpg', url: 'https://www.crowe.com/', order: 6 },
      { name: 'Baker Tilly', file: 'bakertilly.jpg', url: 'https://www.bakertilly.ca/', order: 7 },
      { name: 'Manning Elliott', file: 'manning-elliot.jpg', url: 'https://www.manningelliott.com/', order: 8 },
      { name: 'Lohn Caulder', file: 'lohn-caulder.jpg', url: 'https://lohncaulder.com/', order: 9 },
      { name: 'Invictus', file: 'invictus.jpg', url: 'https://invictusaccounting.ca/', order: 10 },
      { name: 'Treewalk', file: 'treewalk.jpg', url: 'https://www.treewalk.ca/', order: 11 },
    ]

    for (const sponsor of sponsors) {
      const logoAsset = await uploadImage(
        path.join(assetsDir, 'sponsors', sponsor.file),
        sponsor.file
      )
      
      await client.createOrReplace({
        _type: 'sponsor',
        _id: `sponsor-${sponsor.order}`,
        name: sponsor.name,
        logo: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: logoAsset._id,
          },
        },
        url: sponsor.url,
        order: sponsor.order,
      })
    }
    console.log('✅ Sponsors created')

    // Upload and create social media links
    const socialMedia = [
      { name: 'Instagram', file: 'instagram-logo.jpg', url: 'https://www.instagram.com/sfuasa/', order: 1 },
      { name: 'LinkedIn', file: 'linkedin-logo.jpg', url: 'https://www.linkedin.com/company/sfu-accounting-student-association/', order: 2 },
      { name: 'TikTok', file: 'tiktok-logo.jpg', url: 'https://www.tiktok.com/@sfuasa', order: 3 },
    ]

    for (const social of socialMedia) {
      const iconAsset = await uploadImage(
        path.join(assetsDir, 'footer', social.file),
        social.file
      )
      
      await client.createOrReplace({
        _type: 'socialMedia',
        _id: `social-${social.order}`,
        name: social.name,
        icon: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: iconAsset._id,
          },
        },
        url: social.url,
        order: social.order,
      })
    }
    console.log('✅ Social media links created')

    console.log('🎉 Seed with assets completed successfully!')
  } catch (error) {
    console.error('Error seeding data:', error)
  }
}

seedWithAssets()