import Hero from '@/components/ui/layout/Hero'
import TeamGrid from '@/components/ui/layout/TeamGrid'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { teamPageContent, eventTeamMembers, externalRelationsMembers, internalRelationsMembers, designTeamMembers, marketingTeamMembers, financeTeamMembers } from '@/lib/content'

// Revalidate the page every 60 seconds
export const revalidate = 60

async function getTeamData() {
  const query = `{
    "page": *[_type == "teamPage" && slug.current == "our-team"][0] {
      ...,
      fullTeamImage,
      executiveTeamImage,
      presidentsImage
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
    tagline: teamPageContent.hero.tagline
  }
  
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />
      
      {/* Full Team Section */}
      <section className="relative min-h-screen">
        <div className="container flex flex-col md:flex-row justify-center items-center gap-8 mx-auto px-4 pt-32 pb-20">
          <div className="flex-1 flex justify-center">
            {data.page?.fullTeamImage ? (
              <Image 
                src={urlFor(data.page.fullTeamImage).url()} 
                alt="Full Team" 
                width={800} 
                height={600} 
                className='rounded-lg object-cover'
              />
            ) : (
              <div className="w-full max-w-2xl h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Team photo coming soon</p>
              </div>
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <h2 className="text-4xl font-bold text-[#28599E]">{teamPageContent.headings.fullTeam}</h2>
          </div>
        </div>

        {/* Executive Team Section */}
        <div className="container flex flex-col md:flex-row-reverse justify-center items-center gap-8 mx-auto px-4 pt-32 pb-20">
          <div className="flex-1 flex justify-center">
            {data.page?.executiveTeamImage ? (
              <Image 
                src={urlFor(data.page.executiveTeamImage).url()} 
                alt="Executive Team" 
                width={800} 
                height={600}
                className='rounded-lg object-cover'
              />
            ) : (
              <div className="w-full max-w-2xl h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Executive team photo coming soon</p>
              </div>
            )}
          </div>
          <div className="flex-1 flex justify-center">
            <h2 className="text-4xl font-bold text-[#28599E]">{teamPageContent.headings.executiveTeam}</h2>
          </div>
        </div>
      </section>

      {/* Presidents Section */}
      <section className='min-h-screen flex flex-col items-center mx-auto w-[90%]'>
        <h2 className="text-4xl font-bold my-12 text-[#28599E]">{teamPageContent.headings.presidents}</h2>
        <div className='flex flex-col md:flex-row items-center w-full py-8 bg-linear-to-b from-[#80A6DF] via-[#B1CFE7] to-[#B1CFE7] rounded-lg'>
          <span className='flex flex-col items-center justify-center flex-1 p-8'>
            <h3 className='text-2xl font-semibold text-white'>{data.presidents?.[0]?.name || 'Co-President'}</h3>
            <h3 className='text-xl text-[#28599E] font-bold'>{data.presidents?.[0]?.role || 'Co-President'}</h3>
          </span>
          <div className="">
            {data.page?.presidentsImage ? (
              <Image 
                src={urlFor(data.page.presidentsImage).url()} 
                alt="Presidents" 
                width={400} 
                height={300}
                className="rounded-lg object-cover w-full max-w-2xl h-96"
              />
            ) : (
              <div className="w-96 h-96 bg-gray-200 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Presidents photo coming soon</p>
              </div>
            )}
          </div>
          <span className='flex flex-col items-center justify-center flex-1 p-8'>
            <h3 className='text-2xl font-semibold text-white'>{data.presidents?.[1]?.name || 'Co-President'}</h3>
            <h3 className='text-xl text-[#28599E] font-bold'>{data.presidents?.[1]?.role || 'Co-President'}</h3>
          </span>
        </div>
        <blockquote>
          <p className='text-center my-12 font-semibold'>{teamPageContent.blockquote}</p>
        </blockquote>
      </section>

      {/* Team Grids */}
      <TeamGrid title={teamPageContent.headings.eventTeam} members={eventTeamMembers} />
      <TeamGrid title={teamPageContent.headings.externalRelations} members={externalRelationsMembers} />
      <TeamGrid title={teamPageContent.headings.internalRelations} members={internalRelationsMembers} />
      <TeamGrid title={teamPageContent.headings.designTeam} members={designTeamMembers} />
      <TeamGrid title={teamPageContent.headings.marketingTeam} members={marketingTeamMembers} />
      <TeamGrid title={teamPageContent.headings.financeTeam} members={financeTeamMembers} />
      
      <div className="mb-24" />
    </main>
  )
}