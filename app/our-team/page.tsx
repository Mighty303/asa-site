import Hero from '@/components/ui/layout/Hero'
import TeamCarousel from '@/components/ui/layout/TeamCarousel'
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
      <TeamCarousel 
        title="Event Team" 
        members={[
          { name: "Guilherme", role: "Events Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Event Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Events Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Event Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Event Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Event Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Event Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
      <TeamCarousel 
        title="External Relations Team" 
        members={[
          { name: "Guilherme", role: "Events Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Event Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Events Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Event Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Event Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Event Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Event Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
      <TeamCarousel 
        title="Internal Relations Team" 
        members={[
          { name: "Guilherme", role: "Events Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Event Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Events Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Event Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Event Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Event Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Event Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
      <TeamCarousel 
        title="Design Team" 
        members={[
          { name: "Guilherme", role: "Events Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Event Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Events Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Event Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Event Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Event Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Event Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
      <TeamCarousel 
        title="Marketing Team" 
        members={[
          { name: "Guilherme", role: "Events Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Event Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Events Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Event Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Event Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Event Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Event Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
      <TeamCarousel 
        title="Finance Team" 
        members={[
          { name: "Guilherme", role: "Events Co-Director", photo: "/assets/teams/event/guilherme.jpg" },
          { name: "Jestin", role: "Event Co-Director", photo: "/assets/teams/event/jestin.jpg" },
          { name: "Mattias", role: "Events Coordinator", photo: "/assets/teams/event/mattias.jpg" },
          { name: "Jasveen", role: "Event Coordinator", photo: "/assets/teams/event/jasveen.jpg" },
          { name: "Liam", role: "Event Coordinator", photo: "/assets/teams/event/liam.jpg" },
          { name: "Stephanie", role: "Event Coordinator", photo: "/assets/teams/event/stephanie.jpg" },
          { name: "Cindy", role: "Event Coordinator", photo: "/assets/teams/event/cindy.jpg" }
        ]}
      />
    </main>
  )
}