import Hero from '@/components/ui/layout/Hero'
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
  tagline: ['TAX PROGRAM']
}


export default async function TaxProgram() {
  const data = await getHomeData()
  
  // Now you can use urlFor() to get image URLs:
  // urlFor(data.page.heroImage).url()
  // urlFor(data.sponsors[0].logo).width(200).url()
  
  return (
    <main className="min-h-screen">
      <Hero content={heroContent} />
      
    </main>
  )
}