"use client"

import { Card } from "@/components/ui/card"
import { Atom, Lightbulb, MessageCircle, Presentation } from "lucide-react"
import { useEffect, useRef } from "react"

export function About() {
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

    const cards = sectionRef.current?.querySelectorAll(".feature-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="py-6 md:py-10 relative" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-5">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-balance">
            C'est quoi, <span className="text-primary">FMA</span> ?
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            FMA est un camp d'été de physique destiné aux lycéens du tronc commun et 1ère année bac. Pendant six jours,
            les participants découvrent différents domaines de la physique à travers des cours animés par des étudiants
            issus des plus grandes écoles internationales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
          <Card className="feature-card p-6 space-y-4 glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:0ms]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Presentation className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Cours magistraux</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Des cours animés par des étudiants des meilleures écoles internationales
            </p>
          </Card>

          <Card className="feature-card p-6 space-y-4 glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:100ms]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Atom className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-bold text-lg">Ateliers pratiques</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Expériences scientifiques et découverte pratique des concepts physiques
            </p>
          </Card>

          <Card className="feature-card p-6 space-y-4 glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:200ms]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Lightbulb className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="font-bold text-lg">Conférences</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Interventions de chercheurs marocains de renom dans le domaine
            </p>
          </Card>

          <Card className="feature-card p-6 space-y-4 glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:300ms]">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <MessageCircle className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-bold text-lg">Discussions</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Échanges en petits groupes pour approfondir les sujets abordés
            </p>
          </Card>
        </div>

        <div className="max-w-3xl mx-auto mt-5 text-center glass-light p-5 rounded-2xl">
          <p className="text-sm md:text-base text-foreground leading-relaxed">
            Au-delà des cours, FMA offre une immersion stimulante mêlant échanges, exploration scientifique et
            accompagnement personnalisé pour mieux s'orienter dans les études supérieures.
          </p>
        </div>
      </div>
    </section>
  )
}
