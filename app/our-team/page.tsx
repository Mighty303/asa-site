import Hero from '@/components/ui/layout/Hero'
import TeamGrid from '@/components/ui/layout/TeamCarousel'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'

// Revalidate the page every 60 seconds
export const revalidate = 60

async function getTeamData() {
  const query = `{
    "page": *[_type == "teamPage" && slug.current == "team"][0] {
      ...,
      fullTeamImage,
      executiveTeamImage
    },
    "presidents": *[_type == "teamMember" && section == "presidents"] | order(order asc) {
      ...,
      photo
    }
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching team data:', error)
    return { page: null, presidents: [] }
  }
}

export default async function Team() {
  const data = await getTeamData()
  
  const heroContent = {
    tagline: data.page?.heroTagline || 'Our Team',
    description: data.page?.heroDescription || 'Learn more about the ASA team members'
  }
  
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />
      <section className="relative min-h-screen">
        <div className="container flex flex-col-reverse md:flex-row justify-center items-center gap-8 mx-auto px-4 pt-32 pb-20">
          {data.page?.fullTeamImage && (
            <Image 
              src={urlFor(data.page.fullTeamImage).url()} 
              alt="Team" 
              width={800} 
              height={600} 
              className='rounded-lg'
            />
          )}
          <h2 className="text-4xl font-bold my-12 text-[#28599E]">ASA 2025/2026 Team</h2>
        </div>
        <div className="container flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8 mx-auto px-4 pt-32 pb-20">
          {data.page?.executiveTeamImage && (
            <Image 
              src={urlFor(data.page.executiveTeamImage).url()} 
              alt="Executive Team" 
              width={800} 
              height={600}
              className='rounded-lg'
            />
          )}
          <h2 className="text-4xl font-bold my-12 text-[#28599E]">Executive Team</h2>
        </div>
      </section>
      <section className='min-h-screen flex flex-col items-center mx-auto w-[90%]'>
        <h2 className="text-4xl font-bold my-12 text-[#28599E]">Presidents</h2>
        <div className='flex flex-col md:flex-row items-center w-full py-8 bg-linear-to-b from-[#80A6DF] via-[#B1CFE7] to-[#B1CFE7] rounded-lg'>
          <span className='flex flex-col items-center justify-center flex-1 p-8'>
            <h3 className='text-2xl font-semibold text-white'>{data.presidents?.[0]?.name}</h3>
            <h3 className='text-xl text-[#28599E] font-bold'>{data.presidents?.[0]?.role}</h3>
          </span>
          {data.presidents?.[0]?.photo && (
            <Image 
              src={urlFor(data.presidents[0].photo).url()} 
              alt="presidents" 
              width={800} 
              height={600}
              className="shrink-0 rounded-lg"
            />
          )}
          <span className='flex flex-col items-center justify-center flex-1 p-8'>
            <h3 className='text-2xl font-semibold text-white'>{data.presidents?.[1]?.name}</h3>
            <h3 className='text-xl text-[#28599E] font-bold'>{data.presidents?.[1]?.role}</h3>
          </span>
        </div>
        <blockquote>
          <p className='text-center my-12 font-semibold'>“Since our founding in 2012, the SFU Accounting Student Association (ASA) has been dedicated to providing meaningful professional and personal development opportunities for students pursuing accounting. Guided by our core values—Aspire, Share, and Achieve—we strive to make a positive impact within our community. Each year, we engage the Beedie community through our pillar initiatives, including networking events, our mentorship program, the volunteer tax program, and the ACHIEVE Case Competition. Supported by a team of 36 committed members, we continue to expand and enhance opportunities for students year after year.”</p>
        </blockquote>
      </section>
      <TeamGrid 
        title="Event Team" 
        members={[
          { name: "Guilherme", role: "Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
      <TeamGrid 
        title="External Relations Team" 
        members={[
          { name: "Jaymar", role: "External Director", photo: "/assets/teams/external/jaymar.jpg" },
          { name: "Ehsan", role: "Coordinator", photo: "/assets/teams/external/ehsan.jpg" },
          { name: "Quan", role: "Coordinator", photo: "/assets/teams/external/quan.jpg" },
          { name: "Patty", role: "Coordinator", photo: "/assets/teams/external/patty.jpg" },
          { name: "Francine", role: "Coordinator", photo: "/assets/teams/external/francine.jpg" },
          { name: "Lauchlin", role: "Coordinator", photo: "/assets/teams/external/lauchlin.jpg" },
        ]}
      />
      <TeamGrid 
        title="Internal Relations Team" 
        members={[
          { name: "Braden", role: "Director", photo: "/assets/teams/internal/braden.jpg" },
          { name: "Anson", role: "Coordinator", photo: "/assets/teams/internal/anson.jpg" },
          { name: "Ethan", role: "Coordinator", photo: "/assets/teams/internal/ethan.jpg" },
          { name: "Emma", role: "Coordinator", photo: "/assets/teams/internal/emma.jpg" },
          { name: "Cynthia", role: "Coordinator", photo: "/assets/teams/internal/cynthia.jpg" },
          { name: "Nicole", role: "Coordinator", photo: "/assets/teams/internal/nicole.jpg" },
        ]}
      />
      <TeamGrid 
        title="Design Team" 
        members={[
          { name: "Caleb", role: "Director", photo: "/assets/teams/design/caleb.jpg" },
          { name: "Anthony", role: "Coordinator", photo: "/assets/teams/design/anthony.jpg" },
          { name: "Emily", role: "Coordinator", photo: "/assets/teams/design/emily.jpg" },
          { name: "Priya", role: "Coordinator", photo: "/assets/teams/design/priya.jpg" },
          { name: "Nathan Chen", role: "Coordinator", photo: "/assets/teams/design/nathan-chen.jpg" },
          { name: "Nathan Chu", role: "Coordinator", photo: "/assets/teams/design/nathan-chu.jpg" },
        ]}
      />
      <TeamGrid 
        title="Marketing Team" 
        members={[
          { name: "Doris", role: "Director", photo: "/assets/teams/marketing/doris.jpg" },
          { name: "Crystal", role: "Coordinator", photo: "/assets/teams/marketing/crystal.jpg" },
          { name: "Jerry", role: "Coordinator", photo: "/assets/teams/marketing/jerry.jpg" },
          { name: "Jocelyn", role: "Coordinator", photo: "/assets/teams/marketing/jocelyn.jpg" },
          { name: "Edward", role: "Coordinator", photo: "/assets/teams/marketing/edward.jpg" }
        ]}
      />
      <TeamGrid 
        title="Finance Team" 
        members={[
          { name: "Sandy", role: "Director", photo: "/assets/teams/finance/sandy.jpg" },
          { name: "Justin", role: "Finance Co-Director", photo: "/assets/teams/finance/justin.jpg" },
          { name: "Jessie", role: "Finance Coordinator", photo: "/assets/teams/finance/jessie.jpg" },
          { name: "Solomon", role: "Finance Coordinator", photo: "/assets/teams/finance/solomon.jpg" },
        ]}
      />
      <div className="mb-24" />
    </main>
  )
}