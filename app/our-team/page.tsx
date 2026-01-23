import Hero from '@/components/ui/layout/Hero'
import TeamGrid from '@/components/ui/layout/TeamGrid'
import { client, urlFor } from '@/lib/sanity'
import Image from 'next/image'
import {
  teamPageContent,
  eventTeamMembers as fallbackEventTeam,
  externalRelationsMembers as fallbackExternal,
  internalRelationsMembers as fallbackInternal,
  designTeamMembers as fallbackDesign,
  marketingTeamMembers as fallbackMarketing,
  financeTeamMembers as fallbackFinance,
} from '@/lib/content'

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
      name,
      role,
      photo
    },
    "eventTeam": *[_type == "teamMember" && section == "eventTeam"] | order(order asc) {
      name,
      role,
      photo
    },
    "externalRelations": *[_type == "teamMember" && section == "externalRelations"] | order(order asc) {
      name,
      role,
      photo
    },
    "internalRelations": *[_type == "teamMember" && section == "internalRelations"] | order(order asc) {
      name,
      role,
      photo
    },
    "designTeam": *[_type == "teamMember" && section == "designTeam"] | order(order asc) {
      name,
      role,
      photo
    },
    "marketingTeam": *[_type == "teamMember" && section == "marketingTeam"] | order(order asc) {
      name,
      role,
      photo
    },
    "financeTeam": *[_type == "teamMember" && section == "financeTeam"] | order(order asc) {
      name,
      role,
      photo
    }
  }`
  
  try {
    const data = await client.fetch(query)
    return data
  } catch (error) {
    console.error('Error fetching team data:', error)
    return {
      page: null,
      presidents: [],
      eventTeam: [],
      externalRelations: [],
      internalRelations: [],
      designTeam: [],
      marketingTeam: [],
      financeTeam: [],
    }
  }
}

function toTeamMembers(
  members: { name?: string; role?: string; photo?: unknown }[] | undefined,
  urlForFn: (src: unknown) => { url: () => string },
  fallback: { name: string; role: string; photo: string }[]
) {
  // If members is undefined or null, use fallback
  if (!members) {
    return fallback
  }
  
  // If members array exists (even if empty), process Sanity data
  const fromSanity = members
    .filter((m) => m.name && m.role) // Only include members with both name and role
    .map((m) => ({
      name: m.name ?? '',
      role: m.role ?? '',
      photo: m.photo ? urlForFn(m.photo).url() : '',
    }))
  
  // If we have Sanity members, use them; otherwise use fallback
  return fromSanity.length > 0 ? fromSanity : fallback
}

export default async function Team() {
  const data = await getTeamData()
  const p = data.page

  const heroContent = {
    tagline: p?.heroTagline ?? teamPageContent.hero.tagline,
  }

  const headings = {
    fullTeam: p?.headingFullTeam ?? teamPageContent.headings.fullTeam,
    executiveTeam: p?.headingExecutiveTeam ?? teamPageContent.headings.executiveTeam,
    presidents: p?.headingPresidents ?? teamPageContent.headings.presidents,
    eventTeam: p?.headingEventTeam ?? teamPageContent.headings.eventTeam,
    externalRelations: p?.headingExternalRelations ?? teamPageContent.headings.externalRelations,
    internalRelations: p?.headingInternalRelations ?? teamPageContent.headings.internalRelations,
    designTeam: p?.headingDesignTeam ?? teamPageContent.headings.designTeam,
    marketingTeam: p?.headingMarketingTeam ?? teamPageContent.headings.marketingTeam,
    financeTeam: p?.headingFinanceTeam ?? teamPageContent.headings.financeTeam,
  }

  const blockquote = p?.blockquote ?? teamPageContent.blockquote

  const eventTeamMembers = toTeamMembers(data.eventTeam, urlFor, fallbackEventTeam)
  const externalRelationsMembers = toTeamMembers(data.externalRelations, urlFor, fallbackExternal)
  const internalRelationsMembers = toTeamMembers(data.internalRelations, urlFor, fallbackInternal)
  const designTeamMembers = toTeamMembers(data.designTeam, urlFor, fallbackDesign)
  const marketingTeamMembers = toTeamMembers(data.marketingTeam, urlFor, fallbackMarketing)
  const financeTeamMembers = toTeamMembers(data.financeTeam, urlFor, fallbackFinance)
  
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
            <h2 className="text-4xl font-bold text-[#28599E]">{headings.fullTeam}</h2>
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
            <h2 className="text-4xl font-bold text-[#28599E]">{headings.executiveTeam}</h2>
          </div>
        </div>
      </section>

      {/* Presidents Section */}
      <section className='min-h-screen flex flex-col items-center mx-auto w-[90%]'>
        <h2 className="text-4xl font-bold my-12 text-[#28599E]">{headings.presidents}</h2>
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
          <p className='text-center my-12 font-semibold'>{blockquote}</p>
        </blockquote>
      </section>

      {/* Team Grids */}
      <TeamGrid title={headings.eventTeam} members={eventTeamMembers} />
      <TeamGrid title={headings.externalRelations} members={externalRelationsMembers} />
      <TeamGrid title={headings.internalRelations} members={internalRelationsMembers} />
      <TeamGrid title={headings.designTeam} members={designTeamMembers} />
      <TeamGrid title={headings.marketingTeam} members={marketingTeamMembers} />
      <TeamGrid title={headings.financeTeam} members={financeTeamMembers} />
      
      <div className="mb-24" />
    </main>
  )
}