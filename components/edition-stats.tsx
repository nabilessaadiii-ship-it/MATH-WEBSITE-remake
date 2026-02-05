"use client"

import { Users, UserCheck, MapPin, Clock, BookOpen, Award } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function EditionStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    { icon: Users, value: 48, label: "Élèves Sélectionnés", suffix: "" },
    { icon: UserCheck, value: 40, label: "Filles", suffix: "%" },
    { icon: MapPin, value: 12, label: "Villes Représentées", suffix: "" },
    { icon: Clock, value: 60, label: "Heures de Cours", suffix: "+" },
    { icon: BookOpen, value: 15, label: "Ateliers Pratiques", suffix: "" },
    { icon: Award, value: 8, label: "Conférences", suffix: "" },
  ]

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">L'Édition Inaugurale en Chiffres</h2>
          <p className="text-lg text-muted-foreground">
            La première édition de FMA a posé les bases d'une expérience intensive qui a marqué les esprits et créé des
            liens durables dans la communauté scientifique marocaine.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass-light p-6 rounded-2xl text-center hover:glass hover:scale-105 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {isVisible ? <CountUp end={stat.value} duration={2} delay={index * 0.1} /> : "0"}
                {stat.suffix}
              </div>
              <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CountUp({ end, duration, delay }: { end: number; duration: number; delay: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const timeout = setTimeout(() => {
      let start = 0
      const increment = end / (duration * 60)
      const timer = setInterval(() => {
        start += increment
        if (start >= end) {
          setCount(end)
          clearInterval(timer)
        } else {
          setCount(Math.floor(start))
        }
      }, 1000 / 60)

      return () => clearInterval(timer)
    }, delay * 1000)

    return () => clearTimeout(timeout)
  }, [end, duration, delay])

  return <>{count}</>
}
