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

async function seedTeamData() {
  console.log('Starting team data seed...')
  const assetsDir = path.join(__dirname, '../public/assets/teams')

  try {
    // Upload team images
    console.log('Uploading team images...')
    const teamImage = await uploadImage(path.join(assetsDir, 'team.jpg'), 'team.jpg')
    const execImage = await uploadImage(path.join(assetsDir, 'exec-team.jpg'), 'exec-team.jpg')
    const presidentsImage = await uploadImage(path.join(assetsDir, 'presidents.jpg'), 'presidents.jpg')

    // Create team page
    await client.createOrReplace({
      _type: 'teamPage',
      _id: 'team-page',
      title: 'Team',
      slug: { _type: 'slug', current: 'team' },
      heroTagline: ['MEET', 'OUR', 'TEAMS'],
      heroDescription: "Our team culture thrives on collaboration, innovation, inclusivity, and empathy. While our primary goal is to support accounting and finance enthusiasts on their career journey, we welcome individuals from all backgrounds. With a diverse range of portfolios to explore, we encourage our members to pursue their interests and expand their horizons. ASA is more than just a club; it's a tight-knit community. We're here to foster connections and create unforgettable memories. Join us in building not just your career but also lasting friendships and invaluable experiences. Together, we'll make your journey towards success an exciting adventure.",
      fullTeamImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: teamImage._id,
        },
      },
      executiveTeamImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: execImage._id,
        },
      },
    })
    console.log('✅ Team page created')

    // Create presidents
    const presidents = [
      { name: 'Sara Guglielmini', role: 'Co-President', order: 1 },
      { name: 'Linus Pui', role: 'Co-President', order: 2 }
    ]

    for (const president of presidents) {
      await client.createOrReplace({
        _type: 'teamMember',
        _id: `president-${president.order}`,
        name: president.name,
        role: president.role,
        section: 'presidents',
        photo: {
          _type: 'image',
          asset: {
            _type: 'reference',
            _ref: presidentsImage._id,
          },
        },
        order: president.order,
      })
    }
    console.log('✅ Presidents created')

    console.log('🎉 Team data seed completed successfully!')
  } catch (error) {
    console.error('Error seeding team data:', error)
  }
}

seedTeamData()