import { client } from '@/lib/sanity'

async function getHomeData() {
  return await client.fetch(`*[_type == "page" && slug.current == "home"][0]`)
}

export default async function Home() {
  const data = await getHomeData()
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-cyan-400 to-blue-500">
      <div className="container mx-auto px-4 pt-32 pb-20">
        <h1 className="text-6xl font-bold text-white">
          {data?.heroTitle || 'ASPIRE. SHARE. ACHIEVE.'}
        </h1>
        <p className="text-xl text-white mt-8">
          {data?.heroSubtitle}
        </p>
      </div>
    </main>
  )
}