import Hero from '@/components/ui/layout/Hero'
import TeamCarousel from '@/components/ui/layout/TeamCarousel'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { teamPageContent } from '@/lib/content'

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
    tagline: data.page?.heroTagline ? [data.page.heroTagline] : teamPageContent.heroDefault.tagline,
    description: data.page?.heroDescription || teamPageContent.heroDefault.description
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
            />
          )}
          <h2 className="text-4xl font-bold my-12 text-[#28599E]">{teamPageContent.sections.fullTeam.heading}</h2>
        </div>
        <div className="container flex flex-col-reverse md:flex-row-reverse justify-center items-center gap-8 mx-auto px-4 pt-32 pb-20">
          {data.page?.executiveTeamImage && (
            <Image 
              src={urlFor(data.page.executiveTeamImage).url()} 
              alt="Executive Team" 
              width={800} 
              height={600} 
            />
          )}
          <h2 className="text-4xl font-bold my-12 text-[#28599E]">{teamPageContent.sections.executiveTeam.heading}</h2>
        </div>
      </section>
      <section className='min-h-screen flex flex-col items-center mx-auto w-[90%]'>
        <h2 className="text-4xl font-bold my-12 text-[#28599E]">{teamPageContent.sections.presidents.heading}</h2>
        <div className='flex flex-col md:flex-row items-center w-full py-8 bg-linear-to-b from-[#80A6DF] via-[#B1CFE7] to-[#B1CFE7]'>
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
              className="shrink-0"
            />
          )}
          <span className='flex flex-col items-center justify-center flex-1 p-8'>
            <h3 className='text-2xl font-semibold text-white'>{data.presidents?.[1]?.name}</h3>
            <h3 className='text-xl text-[#28599E] font-bold'>{data.presidents?.[1]?.role}</h3>
          </span>
        </div>
        <blockquote>
          <p className='text-center italic mt-12'>{teamPageContent.sections.presidents.quote}</p>
        </blockquote>
      </section>
      <TeamCarousel 
        title={teamPageContent.teams.event.title}
        members={teamPageContent.teams.event.members}
      />
    </main>
  )
}
