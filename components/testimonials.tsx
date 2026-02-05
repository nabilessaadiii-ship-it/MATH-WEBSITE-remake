"use client"

import { useEffect, useRef } from "react"
import { Quote } from "lucide-react"
import gsap from "gsap"

export function Testimonials() {
  const sectionRef = useRef(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  const testimonials = [
    {
      name: "Amina El Fassi",
      school: "Lycée Lyautey, Casablanca",
      quote: "FMA a complètement changé ma vision de la physique. Les cours étaient passionnants et j'ai découvert un monde que je ne connaissais pas.",
      image: "/moroccan-female-student.jpg",
    },
    {
      name: "Youssef Benani",
      school: "Lycée Moulay Youssef, Rabat",
      quote: "Rencontrer des étudiants de MIT et Stanford était incroyable. Ils nous ont montré que les grandes écoles internationales sont accessibles.",
      image: "/moroccan-male-student.jpg",
    },
    {
      name: "Salma Tazi",
      school: "Lycée Mohammed VI, Benguerir",
      quote: "Manipuler du matériel de laboratoire et mener des expériences réelles m'a fait comprendre la physique d'une manière totalement différente.",
      image: "/female-student-science.jpg",
    },
  ]

  // GSAP Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { 
          y: 50, 
          opacity: 0 
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-slate-900 tracking-tight">
            Ils nous font confiance
          </h2>
          <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"/>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="group relative bg-white p-10 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 border border-slate-100 overflow-hidden"
            >
              {/* Hover Background Fill - This creates the 'Inversion' effect */}
              <div className="absolute inset-0 bg-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Quote Icon */}
                <div className="mb-6 transform group-hover:translate-x-1 transition-transform duration-500">
                  <div className="w-12 h-12 bg-blue-50 group-hover:bg-blue-800 rounded-full flex items-center justify-center transition-colors duration-500">
                    <Quote className="w-5 h-5 text-blue-600 group-hover:text-blue-300 transition-colors duration-500" />
                  </div>
                </div>

                {/* Text Content */}
                <div className="mb-8 flex-grow">
                  <p className="text-lg text-slate-600 font-medium leading-relaxed group-hover:text-slate-100 transition-colors duration-500">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* User Profile */}
                <div className="flex items-center gap-4 pt-6 border-t border-slate-100 group-hover:border-blue-800 transition-colors duration-500">
                  <div className="relative">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white group-hover:border-blue-700 shadow-sm transition-colors duration-500">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=0D8ABC&color=fff`
                        }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <div className="font-bold text-slate-900 group-hover:text-white transition-colors duration-500">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-slate-500 group-hover:text-blue-200 transition-colors duration-500">
                      {testimonial.school}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}