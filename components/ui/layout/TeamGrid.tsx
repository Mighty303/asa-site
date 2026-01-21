"use client"

import Image from "next/image"

interface TeamMember {
  name: string
  role: string
  photo: string
}

interface TeamGridProps {
  title: string
  members: TeamMember[]
}

export default function TeamGrid({ title, members }: TeamGridProps) {
  // Desktop: split into topRow and bottomRow (evenly, top gets extra if odd)
  const totalMembers = members.length;
  const topRowCount = Math.ceil(totalMembers / 2);
  const topRow = members.slice(0, topRowCount);
  const bottomRow = members.slice(topRowCount);

  // Mobile: chunk into rows of 2
  const mobileRows: TeamMember[][] = [];
  for (let i = 0; i < members.length; i += 2) {
    mobileRows.push(members.slice(i, i + 2));
  }

  return (
    <section className="flex flex-col items-center mx-auto w-full mb-12 px-2 md:px-12">
      <h2 className="text-4xl font-bold text-[#28599E] mb-8">{title}</h2>
      <div className="flex flex-col gap-6 w-full max-w-6xl">
        {/* Mobile: 2-column grid, hidden on desktop */}
        <div className="flex flex-col gap-6 sm:hidden">
          {mobileRows.map((row, rowIdx) => (
            <div key={rowIdx} className={`grid grid-cols-2 gap-6 ${row.length === 1 ? 'grid-cols-1 justify-center' : ''}`}>
              {row.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-48 aspect-4/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-3 text-center">
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        {/* Desktop: evenly split into 2 rows, hidden on mobile */}
        <div className="hidden sm:flex flex-col gap-6 w-full">
          {/* Top Row */}
          <div className="flex flex-row justify-center gap-6">
            {topRow.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="relative w-52 aspect-4/5 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-3 text-center">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Bottom Row */}
          {bottomRow.length > 0 && (
            <div className="flex flex-row justify-center gap-6">
              {bottomRow.map((member, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div className="relative w-52 aspect-4/5 overflow-hidden rounded-lg shadow-lg">
                    <Image
                      src={member.photo}
                      alt={member.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-3 text-center">
                      <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                      <p className="text-white/80 text-sm">{member.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
