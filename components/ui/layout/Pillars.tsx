interface Pillar {
  title: string
  description: string
  bgColor: string
}

interface PillarsProps {
  heading?: string
  pillars?: Pillar[]
}

const defaultPillars: Pillar[] = [
  {
    title: 'ASPIRE',
    description: "Our external service – we work with our sponsors from various accounting designations and firms to plan and host information and networking sessions that foster students' knowledge of the accounting industry and enhance career decision-making.",
    bgColor: '#7FA5DF'
  },
  {
    title: 'SHARE',
    description: 'Our community service – ASA is a platform for students to interact and learn from one another in a casual and social environment. We engage students at a social level to introduce students to the accounting industry and break down the misconceptions of accounting as a monotonous career.',
    bgColor: '#466CCC'
  },
  {
    title: 'ACHIEVE',
    description: 'Our internal service – ASA recognizes that academic excellence alone will not guarantee a successful career. Other qualities, such as leadership, time management and interpersonal skills are also as important. Thus, our association encourages the improvement of these qualities by giving members opportunities to project manage and volunteer at ASA events.',
    bgColor: '#1D3B87'
  }
]

export default function Pillars({ heading = 'Our Three Pillars', pillars = defaultPillars }: PillarsProps) {
  return (
    <section className="container mx-auto px-4 py-16 md:py-24">
      <h2 className="text-4xl md:text-5xl font-bold text-[#28599E] text-center mb-12 uppercase">
        {heading}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 max-w-7xl mx-auto">
        {pillars.map((pillar, index) => (
          <div 
            key={index}
            className="p-8 md:p-10 text-center flex flex-col min-h-100 md:min-h-115 rounded-lg"
            style={{ backgroundColor: pillar.bgColor }}
          >
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">{pillar.title}</h3>
            <p className="text-white leading-relaxed text-left">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
