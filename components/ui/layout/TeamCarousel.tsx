"use client"

import Image from "next/image"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

interface TeamMember {
  name: string
  role: string
  photo: string
}

interface TeamCarouselProps {
  title: string
  members: TeamMember[]
}

export default function TeamCarousel({ title, members }: TeamCarouselProps) {
  return (
    <section className="flex flex-col items-center mx-auto w-full mb-12 px-4 md:px-6 overflow-hidden">
      <h2 className="text-4xl font-bold text-[#28599E]">{title}</h2>
      
      <Carousel 
        className="w-full max-w-5xl"
        opts={{
          align: "start"
        }}
      >
        <CarouselContent>
          {members.map((member, index) => (
            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3">
              <div className="p-4 flex flex-col items-center">
                <div className="relative w-full max-w-64 aspect-4/5 overflow-hidden rounded-lg shadow-lg">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                  {/* Name and role overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 py-3 text-center">
                    <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                    <p className="text-white/80 text-sm">{member.role}</p>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  )
}
