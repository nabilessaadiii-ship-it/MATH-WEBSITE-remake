"use client"

import { Card } from "@/components/ui/card"
import { Waves, Zap, Thermometer, Eye } from "lucide-react"
import { useEffect, useRef } from "react"

export function ExperimentalTracks() {
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

    const cards = sectionRef.current?.querySelectorAll(".track-card")
    cards?.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const tracks = [
    {
      icon: Waves,
      title: "Mécanique",
      description: "Comprendre le mouvement et les forces",
      topics: [
        "Pendules et oscillations",
        "Chutes et trajectoires",
        "Conservation de l'énergie",
        "Analyse d'erreurs expérimentales",
      ],
      color: "primary",
    },
    {
      icon: Zap,
      title: "Électromagnétisme",
      description: "Explorer les champs et les ondes",
      topics: ["Bobines et induction", "Couplage électromagnétique", "Mesure de champs", "Capteurs et détecteurs"],
      color: "accent",
    },
    {
      icon: Thermometer,
      title: "Thermodynamique",
      description: "Maîtriser l'énergie thermique",
      topics: [
        "Machines thermiques",
        "Échanges d'énergie",
        "Calorimétrie expérimentale",
        "Transformations thermodynamiques",
      ],
      color: "secondary",
    },
    {
      icon: Eye,
      title: "Optique",
      description: "Manipuler la lumière",
      topics: ["Interférences lumineuses", "Diffraction", "Spectroscopie", "Instruments optiques"],
      color: "primary",
    },
  ]

  return (
    <section className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass-light border border-primary/20">
            <span className="text-sm font-medium text-primary">Pôle 1</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Physique Expérimentale</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Chaque TP est conçu pour développer une compréhension profonde : manipuler du matériel réel, mesurer,
            analyser les incertitudes, interpréter les résultats.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {tracks.map((track, index) => (
            <Card
              key={track.title}
              className={`track-card p-8 glass hover:glass-strong transition-all duration-300 border-border/50 opacity-0`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-6">
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br from-${track.color}/20 to-${track.color}/10 flex items-center justify-center shrink-0`}
                >
                  <track.icon className={`w-8 h-8 text-${track.color}`} />
                </div>
                <div className="space-y-4 flex-1">
                  <div>
                    <h3 className="font-bold text-2xl mb-2">{track.title}</h3>
                    <p className="text-sm text-muted-foreground">{track.description}</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm font-semibold text-foreground/80">Ce que tu découvres :</div>
                    <ul className="space-y-2">
                      {track.topics.map((topic) => (
                        <li key={topic} className="text-sm text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          <span>{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto glass-light p-8 rounded-2xl">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <div className="font-bold text-lg mb-2">L'esprit Feynman</div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Comme Richard Feynman le disait : "Ce que je ne peux pas créer, je ne le comprends pas." À FMA, chaque
                expérience est conçue pour te faire comprendre la physique en profondeur, pas juste mémoriser des
                formules.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
