"use client"

import { useEffect, useRef, useState } from "react"

export function Stats() {
  const stats = [
    {
      number: 45,
      suffix: "",
      label: "Participants sélectionnés",
    },
    {
      number: 6,
      suffix: "",
      label: "Jours d'immersion totale",
    },
    {
      number: 2,
      suffix: "",
      label: "Workshops scientifiques",
    },
    {
      number: 100,
      suffix: "%",
      label: "Gratuit & tout inclus",
    },
  ]

  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left side - Group photo */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src="/images/498919422-18071561114477696-7377811035061315933-n.jpg"
                alt="FMA Group Photo"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Right side - Stats */}
            <div className="space-y-6">
              <div className="text-center lg:text-left mb-6">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">FMA en Chiffres</h2>
                <p className="text-gray-600 text-lg">Une expérience unique pour les passionnés de mathématiques</p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <StatCard key={index} stat={stat} delay={index * 100} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ stat, delay }: { stat: any; delay: number }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          setTimeout(() => {
            const duration = 2000
            const steps = 60
            const increment = stat.number / steps
            let current = 0

            const timer = setInterval(() => {
              current += increment
              if (current >= stat.number) {
                setCount(stat.number)
                clearInterval(timer)
              } else {
                setCount(Math.floor(current))
              }
            }, duration / steps)

            return () => clearInterval(timer)
          }, delay)
        }
      },
      { threshold: 0.3 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [stat.number, delay, hasAnimated])

  return (
    <div ref={ref} className="group">
      <div className="relative bg-white p-6 rounded-xl border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 transform hover:scale-105">
        <div className="text-center">
          <div className="text-5xl font-black text-gray-900 mb-2 leading-none">
            {count}
            {stat.suffix}
          </div>

          <div className="text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
        </div>
      </div>
    </div>
  )
}
