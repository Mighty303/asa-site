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

async function uploadAssets() {
  console.log('Starting asset upload...')
  const assetsDir = path.join(__dirname, '../public/assets')

  try {
    // Upload logo
    console.log('Uploading logo...')
    const logo = await uploadImage(
      path.join(assetsDir, 'asa-logo.png'),
      'asa-logo.svg'
    )

    // Upload hero background
    console.log('Uploading hero background...')
    const heroBackground = await uploadImage(
      path.join(assetsDir, 'hero-background.jpg'),
      'hero-background.jpg'
    )

    // Upload footer background
    console.log('Uploading footer background...')
    const footerBackground = await uploadImage(
      path.join(assetsDir, 'footer-bg.jpg'),
      'footer-bg.jpg'
    )

    // Upload sponsor logos
    console.log('Uploading sponsor logos...')
    const sponsorLogos: Record<string, any> = {}
    const sponsorFiles = [
      'bakertilly.jpg',
      'crowe.jpg',
      'deloitte.jpg',
      'doane-grant-thornton.jpg',
      'ey.jpg',
      'invictus.jpg',
      'kpmg.jpg',
      'lohn-caulder.jpg',
      'manning-elliot.jpg',
      'pwc.jpg',
      'treewalk.jpg',
    ]

    for (const file of sponsorFiles) {
      const asset = await uploadImage(
        path.join(assetsDir, 'sponsors', file),
        file
      )
      sponsorLogos[file.replace('.jpg', '')] = asset
    }

    // Upload social media icons
    console.log('Uploading social media icons...')
    const socialIcons: Record<string, any> = {}
    const socialFiles = ['instagram-logo.jpg', 'linkedin-logo.jpg', 'tiktok-logo.jpg']

    for (const file of socialFiles) {
      const asset = await uploadImage(
        path.join(assetsDir, 'footer', file),
        file
      )
      socialIcons[file.replace('-logo.jpg', '')] = asset
    }

    console.log('✅ All assets uploaded!')
    
    return {
      logo,
      heroBackground,
      footerBackground,
      sponsorLogos,
      socialIcons,
    }
  } catch (error) {
    console.error('Error uploading assets:', error)
    throw error
  }
}

uploadAssets()
  .then(() => console.log('🎉 Upload completed!'))
  .catch((err) => console.error('Failed to upload assets:', err))