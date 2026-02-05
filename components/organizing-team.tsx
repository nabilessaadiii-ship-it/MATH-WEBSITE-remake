"use client"

import { Card } from "@/components/ui/card"
import { Linkedin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"

// --- Types ---
type TeamMember = {
  name: string
  role: string
  image: string
  linkedin?: string
}

// --- Data ---
// Note: I have normalized the filenames. 
// You will need to save the images in public/images/team/ with these exact names.
const teamMembers: TeamMember[] = [
  {
    name: "Mohamed Taha AFIF",
    role: "Coordinator",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/mohamed-taha-afif",
  },
  {
    name: "Hadir TALEB",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/hadir-taleb",
  },
  {
    name: "Amine MAHDANE",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/amine-mahdane",
  },
  {
    name: "Sara EL AKEL",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/sara-el-akel",
  },
  {
    name: "Yassir AMAZOUZ",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/yassir-amazouz",
  },
  {
    name: "Ahmed CHAHLAOUI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/ahmed-chahlaoui",
  },
  {
    name: "Aymane MAAITAT",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/aymane-maaitat",
  },
  {
    name: "Khalil ELAZRI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/khalil-elazri",
  },
  {
    name: "Mouad ZEMZOUMI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/mouad-zemzoumi",
  },
  {
    name: "Ilyas DAHAOUI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/ilyas-dahaoui",
  },
  {
    name: "Ali HAKIM",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/ali-hakim",
  },
  {
    name: "Youssef LAZZOUZI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/youssef-lazzouzi",
  },
  {
    name: "Salma OUACHA",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/salma-ouacha",
  },
  {
    name: "Amine EL KHANCHAF",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/amine-el-khanchaf",
  },
  {
    name: "Chayma FARAJI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/chayma-faraji",
  },
  {
    name: "Abderrahmane ECHAARANI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/abderrahmane-echaarani",
  },
  {
    name: "Ayoub EL GOURARI",
    role: "Organizing Committee",
    image: "/placeholder-user.jpg",
    linkedin: "https://www.linkedin.com/in/ayoub-el-gourari",
  },
  {
    name: "Nasma CHADLI",
    role: "Organizing Committee",
    image: "/images/team/nasma-chadli.jpg",
    linkedin: "https://www.linkedin.com/in/nasma-chadli",
  },
  {
    name: "Amine SAADI",
    role: "Organizing Committee",
    image: "/images/team/amine-saadi.jpg",
    linkedin: "https://www.linkedin.com/in/amine-saadi",
  },
  {
    name: "Rania DAYA",
    role: "Organizing Committee",
    image: "/images/team/rania-daya.jpg",
    linkedin: "https://www.linkedin.com/in/rania-daya",
  },
  {
    name: "Badr Eddine EL HOMAYDY",
    role: "Organizing Committee",
    image: "/images/team/badr-eddine-el-homaydy.jpg",
    linkedin: "https://www.linkedin.com/in/badr-eddine-el-homaydy",
  },
]

// --- Helper Components ---

function TeamCard({ member, index }: { member: TeamMember; index: number }) {
  const [imageError, setImageError] = useState(false)

  // Function to generate initials (e.g., "Mohamed Taha" -> "MT")
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .slice(0, 2)
      .join("")
      .toUpperCase()
  }

  return (
    <Card
      className="team-member-card group relative flex flex-col items-center overflow-hidden border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl opacity-0 translate-y-4"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      {/* Image Container */}
      <div className="relative aspect-square w-full overflow-hidden bg-slate-50">
        {!imageError ? (
          <Image
            src={member.image}
            alt={member.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          // Fallback: Professional Initials Avatar
          <div className="flex h-full w-full items-center justify-center bg-slate-100 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
            <span className="text-4xl font-bold tracking-tighter opacity-50">
              {getInitials(member.name)}
            </span>
          </div>
        )}

        {/* Hover Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* LinkedIn Button (Appears on Hover) */}
        {member.linkedin && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <Link
              href={member.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-white/90 p-2 text-[#0077b5] backdrop-blur-sm transition-transform hover:scale-110 hover:bg-white"
            >
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        )}
      </div>

      {/* Text Content */}
      <div className="flex w-full flex-1 flex-col items-center justify-center p-4 text-center">
        <h3 className="text-sm font-bold uppercase tracking-tight text-slate-900 md:text-base">
          {member.name}
        </h3>
        <p className="mt-1 text-xs font-medium text-slate-500">
            {member.role}
        </p>
        
        {/* Decorative underline */}
        <div className="mt-3 h-0.5 w-8 bg-slate-200 transition-all duration-300 group-hover:w-12 group-hover:bg-primary" />
      </div>
    </Card>
  )
}

// --- Main Component ---

export function OrganizingTeam() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add utility classes to trigger the CSS transition
            entry.target.classList.remove("opacity-0", "translate-y-4")
          }
        })
      },
      { threshold: 0.1 }
    )

    const cards = sectionRef.current?.querySelectorAll(".team-member-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="organizing-team"
      className="relative py-16 md:py-24 bg-white" 
      ref={sectionRef}
    >
      {/* Background Pattern (Optional, strictly minimal) */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30" />

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 md:text-5xl">
              Équipe <span className="text-primary">Organisatrice</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
              Les bénévoles passionnés derrière le projet.
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:gap-8 lg:grid-cols-4 xl:grid-cols-5">
            {teamMembers.map((member, index) => (
              <TeamCard key={index} member={member} index={index} />
            ))}
          </div>
          
        </div>
      </div>
    </section>
  )
}