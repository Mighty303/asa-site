import Hero from '@/components/ui/layout/Hero'
import AboutClub from '@/components/ui/layout/AboutClub'
import Sponsors from '@/components/ui/layout/Sponsors'
import TaxProgramCTA from '@/components/ui/layout/TaxProgramCTA'
import { client } from '@/lib/sanity'
import { urlFor } from '@/lib/sanity'

async function getHomeData() {
  const query = `{
    "page": *[_type == "page" && slug.current == "home"][0] {
      ...,
      heroImage,
      logo
    },
    "stats": *[_type == "stat"] | order(order asc),
    "sponsors": *[_type == "sponsor"] | order(order asc) {
      ...,
      logo
    },
    "socialMedia": *[_type == "socialMedia"] | order(order asc) {
      ...,
      icon
    },
    "siteSettings": *[_type == "siteSettings"][0] {
      logo,
      footerBackground
    }
  }`
  
  return client.fetch(query)
}

const heroContent = {
  tagline: ['ACCOUNTING STUDENT ASSOCIATION (ASA)'],
  teamImage: '/assets/teams/team.jpg',
  // description: 'The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship.'
}

const sponsorsContent = {
  stats: [
    {
      number: '30+',
      description: 'Partners who are prestigious professional institutions and accounting firms across industries.'
    },
    {
      number: '50+',
      description: 'Networking events, information sessions, and social events held for our members throughout the year.'
    },
    {
      number: '2000+',
      description: 'Active subscribers and student members who are both highly engaged and eager to discover more opportunities in the accounting field.'
    }
  ],
  execTeamImage: '/assets/teams/exec-team.jpg',
  heading: 'Our Sponsors',
  description: 'Sponsors, thank you for your time and for your continuous support over the years.',
  sponsors: [
    { name: 'Deloitte', logo: '/assets/sponsors/deloitte.jpg', url: 'https://www2.deloitte.com/ca/en.html' },
    { name: 'EY', logo: '/assets/sponsors/ey.jpg', url: 'https://www.ey.com/en_ca' },
    { name: 'KPMG', logo: '/assets/sponsors/kpmg.jpg', url: 'https://kpmg.com/ca/en/home.html' },
    { name: 'PwC', logo: '/assets/sponsors/pwc.jpg', url: 'https://www.pwc.com/ca/en.html' },
    { name: 'Doane Grant Thornton', logo: '/assets/sponsors/doane-grant-thornton.jpg', url: 'https://www.doanegrantthornton.ca/' },
    { name: 'Crowe', logo: '/assets/sponsors/crowe.jpg', url: 'https://www.crowe.com/' },
    { name: 'Baker Tilly', logo: '/assets/sponsors/bakertilly.jpg', url: 'https://www.bakertilly.ca/' },
    { name: 'Manning Elliott', logo: '/assets/sponsors/manning-elliot.jpg', url: 'https://www.manningelliott.com/' },
    { name: 'Lohn Caulder', logo: '/assets/sponsors/lohn-caulder.jpg', url: 'https://lohncaulder.com/' },
    { name: 'Invictus', logo: '/assets/sponsors/invictus.jpg', url: 'https://invictusaccounting.ca/' },
    { name: 'Treewalk', logo: '/assets/sponsors/treewalk.jpg', url: 'https://www.treewalk.ca/' },
  ]
}

export default async function Home() {
  const data = await getHomeData()
  
  // Now you can use urlFor() to get image URLs:
  // urlFor(data.page.heroImage).url()
  // urlFor(data.sponsors[0].logo).width(200).url()
  
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} reverseOnMobile />
      <AboutClub 
        description="The SFU Accounting Student Association (ASA) is an organization made up of highly-dedicated students with the mission of assisting students towards their professional life. In order to accomplish this mission, our association provides three types of services: facilitation of information and networking, self-growth, and fellowship."
      />
      <Sponsors content={sponsorsContent} />
      <TaxProgramCTA />
    </main>
  )
}