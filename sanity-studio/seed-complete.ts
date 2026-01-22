import { config } from 'dotenv'
import { createClient } from '@sanity/client'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

config()

const client = createClient({
  projectId: '97kwgu13',
  dataset: 'production',
  useCdn: false,
  token: process.env.SANITY_AUTH_TOKEN,
  apiVersion: '2024-01-01',
})

async function uploadImage(filePath: string, filename: string) {
  try {
    const imageBuffer = fs.readFileSync(filePath)
    const asset = await client.assets.upload('image', imageBuffer, {
      filename: filename,
    })
    return asset
  } catch (error) {
    console.error(`Error uploading ${filename}:`, error)
    throw error
  }
}

async function deleteAllDocuments() {
  console.log('🗑️  Deleting all existing documents...')
  
  const types = [
    'teamPage',
    'teamMember',
    'siteSettings',
    'socialMedia',
    'sponsor',
    'stat',
    'page',
    'aboutPage',
    'taxProgramPage',
    'contactPage',
    'event',
  ]

  for (const type of types) {
    const query = `*[_type == "${type}"]._id`
    const ids = await client.fetch(query)
    
    if (ids.length > 0) {
      console.log(`Deleting ${ids.length} documents of type: ${type}`)
      const transaction = client.transaction()
      ids.forEach((id: string) => transaction.delete(id))
      await transaction.commit()
    }
  }
  
  console.log('✅ All documents deleted')
}

async function seedCompleteData() {
  console.log('🌱 Starting complete data seed...')
  // Go up one directory from sanity-studio to reach the project root, then into public/assets
  const assetsDir = path.join(__dirname, '../public/assets')

  try {
    // Delete all existing data first
    await deleteAllDocuments()

    // Upload main images
    console.log('📤 Uploading main images...')
    const logo = await uploadImage(path.join(assetsDir, 'asa-logo.svg'), 'asa-logo.svg')
    const heroBg = await uploadImage(path.join(assetsDir, 'hero-bg.svg'), 'hero-bg.svg')
    
    // Site Settings
    console.log('⚙️  Creating site settings...')
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
          _ref: heroBg._id,
        },
      },
    })
    console.log('✅ Site settings created')

    // Home Page
    console.log('🏠 Creating home page...')
    const teamImage = await uploadImage(path.join(assetsDir, 'home/team.jpg'), 'team.jpg')
    await client.createOrReplace({
      _type: 'page',
      _id: 'home-page',
      title: 'Home',
      slug: { _type: 'slug', current: 'home' },
      heroImage: {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: teamImage._id,
        },
      },
      heroTagline: ['ACCOUNTING STUDENT ASSOCIATION (ASA)'],
    })
    console.log('✅ Home page created')

    // About Page
    console.log('📖 Creating about page content...')
    await client.createOrReplace({
    _type: 'aboutPage',
    _id: 'about-page',
    title: 'About',
    slug: { _type: 'slug', current: 'about' },
    heroTagline: ['ABOUT US'],
    pillarsHeading: 'Our Three Pillars',
    pillars: [
        {
        _key: 'aspire',
        title: 'ASPIRE',
        description: "Our external service – we work with our sponsors from various accounting designations and firms to plan and host information and networking sessions that foster students' knowledge of the accounting industry and enhance career decision-making.",
        bgColor: '#7FA5DF',
        },
        {
        _key: 'share',
        title: 'SHARE',
        description: 'Our community service – ASA is a platform for students to interact and learn from one another in a casual and social environment. We engage students at a social level to introduce students to the accounting industry and break down the misconceptions of accounting as a monotonous career.',
        bgColor: '#466CCC',
        },
        {
        _key: 'achieve',
        title: 'ACHIEVE',
        description: 'Our internal service – ASA recognizes that academic excellence alone will not guarantee a successful career. Other qualities, such as leadership, time management and interpersonal skills are also as important. Thus, our association encourages the improvement of these qualities by giving members opportunities to project manage and volunteer at ASA events.',
        bgColor: '#1D3B87',
        },
    ],
    })
    console.log('✅ About page created')

    // Tax Program Page
    console.log('💼 Skipping basic tax program page (using taxProgramPage type instead)...')


    // Contact Page
    console.log('📧 Skipping basic contact page (using contactPage type instead)...')

    // Stats
    console.log('📊 Creating stats...')
    const statsData = [
      {
        _id: 'stat-1',
        number: '30+',
        description: 'Partners who are prestigious professional institutions and accounting firms across industries.',
        order: 1,
      },
      {
        _id: 'stat-2',
        number: '50+',
        description: 'Networking events, information sessions, and social events held for our members throughout the year.',
        order: 2,
      },
      {
        _id: 'stat-3',
        number: '2000+',
        description: 'Active subscribers and student members who are both highly engaged and eager to discover more opportunities in the accounting field.',
        order: 3,
      },
    ]

    for (const stat of statsData) {
      await client.createOrReplace({
        _type: 'stat',
        ...stat,
      })
    }
    console.log('✅ Stats created')

    // Sponsors
    console.log('🏢 Creating sponsors...')
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

    // Social Media
    console.log('📱 Creating social media links...')
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

    // Team Page
    console.log('👥 Creating team page...')
    
    // Check which team images exist and upload them
    const teamImages: any = {}
    
    const teamImagePaths = [
      { key: 'fullTeam', path: 'home/team.jpg', name: 'team.jpg' },
      { key: 'execTeam', path: 'teams/exec-team.jpg', name: 'exec-team.jpg' },
      { key: 'presidents', path: 'teams/presidents.jpg', name: 'presidents.jpg' },
    ]
    
    for (const img of teamImagePaths) {
      const fullPath = path.join(assetsDir, img.path)
      if (fs.existsSync(fullPath)) {
        teamImages[img.key] = await uploadImage(fullPath, img.name)
        console.log(`  ✓ Uploaded ${img.name}`)
      } else {
        console.log(`  ⚠️  Skipped ${img.name} (not found at ${img.path})`)
      }
    }

    const teamPageDoc: any = {
      _type: 'teamPage',
      _id: 'team-page',
      title: 'Our Team',
      slug: { _type: 'slug', current: 'our-team' },
      heroTagline: ['OUR TEAM'],
    }

    if (teamImages.fullTeam) {
      teamPageDoc.fullTeamImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: teamImages.fullTeam._id,
        },
      }
    }

    if (teamImages.execTeam) {
      teamPageDoc.executiveTeamImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: teamImages.execTeam._id,
        },
      }
    }

    if (teamImages.presidents) {
      teamPageDoc.presidentsImage = {
        _type: 'image',
        asset: {
          _type: 'reference',
          _ref: teamImages.presidents._id,
        },
      }
    }

    await client.createOrReplace(teamPageDoc)
    console.log('✅ Team page created')

    // Create Team Members
    console.log('👤 Creating team members...')
    
    // Presidents
    const presidents = [
      { name: 'Sara Guglielmini', role: 'Co-President', photo: 'presidents.jpg', section: 'presidents', order: 1 },
      { name: 'Linus Pui', role: 'Co-President', photo: 'presidents.jpg', section: 'presidents', order: 2 },
    ]
    
    // Event Team
    const eventTeam = [
      { name: 'Guilherme', role: 'Co-Director', photo: 'event/guilherme.jpg', section: 'event', order: 1 },
      { name: 'Jestin', role: 'Co-Director', photo: 'event/jestin.jpg', section: 'event', order: 2 },
      { name: 'Mattias', role: 'Coordinator', photo: 'event/mattias.jpg', section: 'event', order: 3 },
      { name: 'Jasveen', role: 'Coordinator', photo: 'event/jasveen.jpg', section: 'event', order: 4 },
      { name: 'Liam', role: 'Coordinator', photo: 'event/liam.jpg', section: 'event', order: 5 },
      { name: 'Stephanie', role: 'Coordinator', photo: 'event/stephanie.jpg', section: 'event', order: 6 },
      { name: 'Cindy', role: 'Coordinator', photo: 'event/cindy.jpg', section: 'event', order: 7 },
    ]
    
    // External Relations
    const externalTeam = [
      { name: 'Jaymar', role: 'External Director', photo: 'external/jaymar.jpg', section: 'external', order: 1 },
      { name: 'Ehsan', role: 'Coordinator', photo: 'external/ehsan.jpg', section: 'external', order: 2 },
      { name: 'Quan', role: 'Coordinator', photo: 'external/quan.jpg', section: 'external', order: 3 },
      { name: 'Patty', role: 'Coordinator', photo: 'external/patty.jpg', section: 'external', order: 4 },
      { name: 'Francine', role: 'Coordinator', photo: 'external/francine.jpg', section: 'external', order: 5 },
      { name: 'Lauchlin', role: 'Coordinator', photo: 'external/lauchlin.jpg', section: 'external', order: 6 },
    ]
    
    // Internal Relations
    const internalTeam = [
      { name: 'Braden', role: 'Director', photo: 'internal/braden.jpg', section: 'internal', order: 1 },
      { name: 'Anson', role: 'Coordinator', photo: 'internal/anson.jpg', section: 'internal', order: 2 },
      { name: 'Ethan', role: 'Coordinator', photo: 'internal/ethan.jpg', section: 'internal', order: 3 },
      { name: 'Emma', role: 'Coordinator', photo: 'internal/emma.jpg', section: 'internal', order: 4 },
      { name: 'Cynthia', role: 'Coordinator', photo: 'internal/cynthia.jpg', section: 'internal', order: 5 },
      { name: 'Nicole', role: 'Coordinator', photo: 'internal/nicole.jpg', section: 'internal', order: 6 },
    ]
    
    // Design Team
    const designTeam = [
      { name: 'Caleb', role: 'Director', photo: 'design/caleb.jpg', section: 'design', order: 1 },
      { name: 'Anthony', role: 'Coordinator', photo: 'design/anthony.jpg', section: 'design', order: 2 },
      { name: 'Emily', role: 'Coordinator', photo: 'design/emily.jpg', section: 'design', order: 3 },
      { name: 'Priya', role: 'Coordinator', photo: 'design/priya.jpg', section: 'design', order: 4 },
      { name: 'Nathan Chen', role: 'Coordinator', photo: 'design/nathan-chen.jpg', section: 'design', order: 5 },
      { name: 'Nathan Chu', role: 'Coordinator', photo: 'design/nathan-chu.jpg', section: 'design', order: 6 },
    ]
    
    // Marketing Team
    const marketingTeam = [
      { name: 'Doris', role: 'Director', photo: 'marketing/doris.jpg', section: 'marketing', order: 1 },
      { name: 'Crystal', role: 'Coordinator', photo: 'marketing/crystal.jpg', section: 'marketing', order: 2 },
      { name: 'Jerry', role: 'Coordinator', photo: 'marketing/jerry.jpg', section: 'marketing', order: 3 },
      { name: 'Jocelyn', role: 'Coordinator', photo: 'marketing/jocelyn.jpg', section: 'marketing', order: 4 },
      { name: 'Edward', role: 'Coordinator', photo: 'marketing/edward.jpg', section: 'marketing', order: 5 },
    ]
    
    // Finance Team
    const financeTeam = [
      { name: 'Sandy', role: 'Director', photo: 'finance/sandy.jpg', section: 'finance', order: 1 },
      { name: 'Justin', role: 'Finance Co-Director', photo: 'finance/justin.jpg', section: 'finance', order: 2 },
      { name: 'Jessie', role: 'Finance Coordinator', photo: 'finance/jessie.jpg', section: 'finance', order: 3 },
      { name: 'Solomon', role: 'Finance Coordinator', photo: 'finance/solomon.jpg', section: 'finance', order: 4 },
    ]
    
    // Combine all teams
    const allTeamMembers = [
      ...presidents,
      ...eventTeam,
      ...externalTeam,
      ...internalTeam,
      ...designTeam,
      ...marketingTeam,
      ...financeTeam,
    ]
    
    let uploadedCount = 0
    let skippedCount = 0
    
    for (const member of allTeamMembers) {
      const photoPath = path.join(assetsDir, 'teams', member.photo)
      
      if (fs.existsSync(photoPath)) {
        try {
          const photoAsset = await uploadImage(photoPath, member.photo)
          
          await client.createOrReplace({
            _type: 'teamMember',
            _id: `team-member-${member.section}-${member.order}`,
            name: member.name,
            role: member.role,
            section: member.section,
            photo: {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: photoAsset._id,
              },
            },
            order: member.order,
          })
          uploadedCount++
        } catch (error) {
          console.log(`  ⚠️  Failed to upload ${member.name}: ${error}`)
          skippedCount++
        }
      } else {
        console.log(`  ⚠️  Skipped ${member.name} (photo not found: ${member.photo})`)
        skippedCount++
      }
    }
    
    console.log(`✅ Team members created: ${uploadedCount} uploaded, ${skippedCount} skipped`)

    // About Page
    console.log('📖 Creating about page content...')
    await client.createOrReplace({
      _type: 'aboutPage',
      _id: 'about-page',
      title: 'About',
      slug: { _type: 'slug', current: 'about' },
      heroTagline: ['ABOUT US'],
      pillarsHeading: 'Our Three Pillars',
      pillars: [
        {
          title: 'ASPIRE',
          description: "Our external service – we work with our sponsors from various accounting designations and firms to plan and host information and networking sessions that foster students' knowledge of the accounting industry and enhance career decision-making.",
          bgColor: '#7FA5DF',
        },
        {
          title: 'SHARE',
          description: 'Our community service – ASA is a platform for students to interact and learn from one another in a casual and social environment. We engage students at a social level to introduce students to the accounting industry and break down the misconceptions of accounting as a monotonous career.',
          bgColor: '#466CCC',
        },
        {
          title: 'ACHIEVE',
          description: 'Our internal service – ASA recognizes that academic excellence alone will not guarantee a successful career. Other qualities, such as leadership, time management and interpersonal skills are also as important. Thus, our association encourages the improvement of these qualities by giving members opportunities to project manage and volunteer at ASA events.',
          bgColor: '#1D3B87',
        },
      ],
    })
    console.log('✅ About page created')

    // Events
    console.log('📅 Creating events...')
    const eventsData = [
      {
        title: 'MIX & MINGLE',
        subtitle: 'Networking Event',
        description: 'Our signature networking event, Mix & Mingle, launches Spring Recruit by giving students and firm representatives the opportunity to build meaningful connections before the interview and offer phases in May and June.',
        image: 'events/mix-mingle.jpg',
        date: 'September',
        order: 1,
      },
      {
        title: 'MIDSUMMER MIXER',
        subtitle: 'Networking Event',
        description: 'With Fall Recruit approaching, our annual Midsummer Mixer helps guide students through the final major recruiting season of the year, offering chances to build new connections with professionals.',
        image: 'events/midsummer.jpg',
        date: 'October',
        order: 2,
      },
      {
        title: 'HARVEST HORIZONS',
        subtitle: 'Networking Event',
        description: 'A low-barrier and casual networking event, Harvest Horizons offers a relaxed evening for students and firms to connect and build relationships in a comfortable setting.',
        image: 'events/harvest-horizons.jpg',
        date: 'October',
        order: 3,
      },
      {
        title: 'MIDSIZE MOTION',
        subtitle: 'Networking Event',
        description: 'Midsize Motion brings together students and representatives from midsize and growth-oriented accounting firms to foster genuine conversations and meaningful connections.',
        image: 'events/midsize-motion.jpg',
        date: 'November',
        order: 4,
      },
      {
        title: 'MENTORSHIP PROGRAM',
        subtitle: 'Skills-Development Initiative',
        description: 'The ASA Mentorship Program (AMP) connects junior accounting students with experienced senior students and industry professionals from October to December.',
        image: 'events/mentorship.jpg',
        date: 'January – April',
        order: 5,
      },
      {
        title: 'ACHIEVE',
        subtitle: 'Case Competition',
        description: "ASA's ACHIEVE Case Competition invites both beginner and experienced case competitors to tackle a unique accounting-focused case, partnering with CPABC and Big Four firms.",
        image: 'events/achieve.jpg',
        date: 'March',
        order: 6,
      },
    ]

    for (const event of eventsData) {
      const eventImagePath = path.join(assetsDir, event.image)
      if (fs.existsSync(eventImagePath)) {
        const eventImage = await uploadImage(eventImagePath, event.image)
        await client.createOrReplace({
          _type: 'event',
          _id: `event-${event.order}`,
          title: event.title,
          subtitle: event.subtitle,
          description: event.description,
          image: {
            _type: 'image',
            asset: {
              _type: 'reference',
              _ref: eventImage._id,
            },
          },
          date: event.date,
          order: event.order,
        })
      }
    }
    console.log('✅ Events created')

    // Tax Program Page
    console.log('💼 Creating tax program page content...')
    const taxImages: any = {}
    const taxImagePaths = [
      { key: 'hero', path: 'teams/tax-program/tax-hero.jpg' },
      { key: 'eligible', path: 'teams/tax-program/eligible.jpg' },
      { key: 'eligible2', path: 'teams/tax-program/eligible-2.jpg' },
      { key: 'volunteers', path: 'teams/tax-program/volunteers.jpg' },
    ]

    for (const img of taxImagePaths) {
      const fullPath = path.join(assetsDir, img.path)
      if (fs.existsSync(fullPath)) {
        taxImages[img.key] = await uploadImage(fullPath, path.basename(img.path))
      }
    }

    await client.createOrReplace({
      _type: 'taxProgramPage',
      _id: 'tax-program-page',
      title: 'Tax Program',
      slug: { _type: 'slug', current: 'tax-program' },
      heroTagline: ['TAX PROGRAM'],
      introHeading: 'What is the Tax Program?',
      introDescription: 'The ASA Tax Program is a free tax filing service for eligible SFU community members. Our dedicated student volunteers are trained by the Canada Revenue Agency (CRA) to prepare income tax returns for those with low income and simple, non-complex tax situations.',
      ...(taxImages.hero && {
        introImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: taxImages.hero._id },
        },
      }),
      statNumber: '800+',
      statDescription: 'Returns filed last year, helping over 1,000 members of the SFU community',
      registrationStatusText: '2026 Client Applications Now Open!',
      registrationDeadline: 'February 20th, 2026 at 11:59 PM',
      questionsHeading: 'Are you:',
      questions: [
        'Having trouble filing your tax returns?',
        'Never filed a tax return before?',
        "Don't have time to file?",
      ],
      volunteerMessage: 'Our ASA tax volunteers are here for you!',
      ctaText: 'Register Now',
      ctaLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform',
      sideDescription: 'Register to be a client and have your tax returns filed by dedicated volunteers trained by the Canada Revenue Agency (CRA) and SFU Accounting Student Association (ASA). We help preserve benefits and financial entitlements while providing peace of mind for meeting tax filing obligations.',
      eligibilityHeading: 'Eligibility Criteria',
      eligibilitySubtitle: 'You may qualify if your income fits within the following limits:',
      ...(taxImages.eligible && {
        incomeThresholdsImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: taxImages.eligible._id },
        },
      }),
      incomeThresholdsHeading: 'Income Thresholds',
      incomeThresholds: [
        'Single Person: $40,000 or less',
        'Couple (no dependents): $55,000 or less',
        'Three-person family: $60,000 or less',
        'Four-person family: $65,000 or less',
        'Five-person family: $70,000 or less',
      ],
      ...(taxImages.eligible2 && {
        additionalInfoImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: taxImages.eligible2._id },
        },
      }),
      additionalInfoHeading: 'Additional Information',
      additionalInfoItems: [
        'Each additional dependent: +$2,500 allowed income',
        'Interest income must be under $1,200',
      ],
      additionalInfoNote: "Have a spouse/partner? Register them separately, but mention each other's names in the appropriate section.",
      exclusionsHeading: 'What We Cannot Help With',
      exclusionsSubtitle: 'Volunteers do not complete returns with the following:',
      ...(taxImages.volunteers && {
        exclusionsImage: {
          _type: 'image',
          asset: { _type: 'reference', _ref: taxImages.volunteers._id },
        },
      }),
      exclusionItems: [
        'Business or rental income/expenses',
        'Self-employed individuals or employment expenses',
        "Deceased persons' tax returns",
        'Capital gains or losses',
        'Major investments (RRSP, stocks, mutual funds, RESP)',
        'Investments outside Canada',
        'Foreign income',
        'Bankruptcy filings',
        'Non-residents during the tax year',
      ],
      footerCTAHeading: 'Ready to Get Started?',
      footerCTADateText: 'Taxes will be filed March 8 - April 30, 2026',
      footerCTAText: 'Register as Client',
      footerCTALink: 'https://docs.google.com/forms/d/e/1FAIpQLSdua4T4lEouP50tlToOrt83xGO3NtmBg-U0POrflaZJrVwOBQ/viewform',
      craText: 'For further information, visit the',
      craLink: 'https://www.canada.ca/en/revenue-agency.html',
      contactText: 'Questions? Contact us at',
      contactEmail: 'sfutax@gmail.com',
    })
    console.log('✅ Tax program page created')

    // Contact Page
    console.log('📧 Creating contact page content...')
    await client.createOrReplace({
      _type: 'contactPage',
      _id: 'contact-page',
      title: 'Contact Us',
      slug: { _type: 'slug', current: 'contact-us' },
      heroTagline: ['CONTACT US'],
      heading: 'Contact Us',
      introText: [
        'Thank you for contacting the SFU Accounting Student Association.',
        'Please submit your inquiry using the form below.',
        'You can expect a response in 1-7 business days.',
      ],
      submissionNote: "*Submissions are directly sent to the ASA President's inbox",
      emailHeading: 'Prefer Email?',
      emailText: 'You may also contact us at',
      emailAddress: 'sfuasa.pres@gmail.com',
      taxProgramHeading: 'Questions About Our Tax Program?',
      taxProgramText: 'Reach our Project Managers at',
      taxProgramEmail: 'sfutax@gmail.com',
      socialMediaHeading: 'Social Media',
      socialMediaText: 'Stay connected with us on',
    })
    console.log('✅ Contact page created')

    console.log('🎉 Complete data seed finished successfully!')
    console.log('\n📝 Summary:')
    console.log('  - Site settings ✓')
    console.log('  - 4 pages (Home, About, Tax Program, Contact) ✓')
    console.log('  - About page with 3 pillars ✓')
    console.log('  - Tax program page with full content ✓')
    console.log('  - Contact page with full content ✓')
    console.log('  - 6 events ✓')
    console.log('  - 3 stats ✓')
    console.log('  - 11 sponsors ✓')
    console.log('  - 3 social media links ✓')
    console.log('  - Team page ✓')
    console.log(`  - ${uploadedCount} team members ✓`)
    if (skippedCount > 0) {
      console.log(`  - ${skippedCount} team members skipped (photos not found)`)
    }

  } catch (error) {
    console.error('❌ Error seeding data:', error)
    throw error
  }
}

// Run the seed
seedCompleteData()
  .then(() => {
    console.log('\n✨ All done! Your Sanity data has been refreshed.')
    process.exit(0)
  })
  .catch((error) => {
    console.error('\n💥 Seed failed:', error)
    process.exit(1)
  })