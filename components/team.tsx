"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Users, Heart, Target, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export function Team() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up")
          }
        })
      },
      { threshold: 0.1 },
    )

    const cards = sectionRef.current?.querySelectorAll(".team-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="team" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-secondary/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Qui sommes-<span className="text-secondary">nous</span> ?
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="team-card p-8 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1 group text-center opacity-0 [animation-delay:0ms]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Passion</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Unis par l'amour des sciences et le désir de transmettre
              </p>
            </Card>

            <Card className="team-card p-8 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1 group text-center opacity-0 [animation-delay:100ms]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-bold text-lg mb-3">Communauté</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Une équipe de bénévoles dévoués et passionnés
              </p>
            </Card>

            <Card className="team-card p-8 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1 group text-center opacity-0 [animation-delay:200ms]">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300">
                <Target className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-bold text-lg mb-3">Mission</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Former les leaders scientifiques de demain
              </p>
            </Card>
          </div>

          <Card className="p-10 md:p-14 glass relative overflow-hidden group mb-10">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-secondary to-accent opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] rounded-2xl bg-card/80 backdrop-blur-xl"></div>

            <div className="relative text-center space-y-6">
              <h3 className="text-3xl font-bold">Notre Vision</h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Nous sommes avant tout des gens passionnés par la science, unis par l'envie de partager et de former les
                leaders de demain. Notre vision est celle d'un Maroc où chaque jeune a l'opportunité de réaliser son
                plein potentiel grâce à une éducation de qualité et accessible.
              </p>
              <Button
                size="lg"
                variant="outline"
                className="glass-light hover:glass transition-all duration-300 mt-6 bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                Voir l'équipe complète
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  )
}
