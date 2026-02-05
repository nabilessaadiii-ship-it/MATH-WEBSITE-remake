"use client"

import { Card } from "@/components/ui/card"
import { Heart, Users, Target, Sparkles } from "lucide-react"
import { useEffect, useRef } from "react"

export function QuiSommesNous() {
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

    const cards = sectionRef.current?.querySelectorAll(".value-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="qui-sommes-nous"
      className="py-20 md:py-32 relative bg-gradient-to-b from-white to-blue-50"
      ref={sectionRef}
    >
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Qui <span className="text-primary">Sommes Nous</span> ?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              <span className="font-bold text-primary">Math&Maroc</span> est une association créée en 2013 dans le but
              de promouvoir les mathématiques et les sciences au Maroc. Nous organisons des compétitions, des formations
              et des camps d'été pour accompagner les jeunes talents marocains.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <Card className="value-card p-8 space-y-5 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Target className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Notre Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                Démocratiser l'accès aux sciences et inspirer les jeunes lycéens marocains à poursuivre des carrières
                scientifiques, en particulier dans les domaines de la physique et des mathématiques.
              </p>
            </Card>

            <Card className="value-card p-8 space-y-5 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:100ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-7 h-7 text-secondary" />
              </div>
              <h3 className="font-bold text-2xl">Notre Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                Créer un écosystème éducatif stimulant où chaque jeune talent marocain peut découvrir sa passion pour
                les sciences et développer son potentiel au maximum.
              </p>
            </Card>

            <Card className="value-card p-8 space-y-5 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:200ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-bold text-2xl">Notre Communauté</h3>
              <p className="text-muted-foreground leading-relaxed">
                Une communauté dynamique de plus de 2000 étudiants, alumni et mentors passionnés par les sciences et
                engagés dans le développement de l'éducation au Maroc.
              </p>
            </Card>

            <Card className="value-card p-8 space-y-5 glass-light hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-2 border-border/50 group opacity-0 [animation-delay:300ms]">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-bold text-2xl">Nos Valeurs</h3>
              <p className="text-muted-foreground leading-relaxed">
                Excellence académique, partage des connaissances, inclusion, bienveillance et engagement envers le
                développement du potentiel scientifique des jeunes marocains.
              </p>
            </Card>
          </div>

          <div className="glass-light p-8 md:p-12 rounded-2xl text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">Future of Mathematics Academy (FMA)</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              FMA est l'un de nos programmes phares, un camp d'été de physique qui réunit chaque année les meilleurs
              lycéens du Maroc pour une semaine intensive d'apprentissage, de découverte et d'inspiration scientifique.
              Avec des cours magistraux, des ateliers pratiques et des conférences animées par des chercheurs de renom,
              FMA offre une expérience unique qui marque le début d'un parcours scientifique exceptionnel.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
