"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, FileEdit, Send, UserCheck, ArrowRight } from "lucide-react"
import { useEffect, useRef } from "react"

export function HowToParticipate() {
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

    const elements = sectionRef.current?.querySelectorAll(".step-card")
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const steps = [
    {
      icon: FileEdit,
      title: "Remplir le formulaire",
      description: "Complétez le formulaire de pré-enregistrement avec vos informations académiques et personnelles",
    },
    {
      icon: Send,
      title: "Soumettre votre devoir",
      description: "Déposez votre devoir maison correspondant à votre niveau depuis votre profil candidat",
    },
    {
      icon: UserCheck,
      title: "Documents administratifs",
      description:
        "Envoyez tous vos documents requis avant la date limite annoncée lors de l'ouverture des candidatures",
    },
    {
      icon: CheckCircle2,
      title: "Résultats",
      description: "Les candidats retenus seront informés par email et pourront confirmer leur participation",
    },
  ]

  return (
    <section id="participate" className="py-20 md:py-32 relative" ref={sectionRef}>
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/30 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "3s" }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Comment <span className="text-primary">participer</span> ?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Le processus de candidature est simple et transparent. Suivez ces 4 étapes pour soumettre votre
              candidature et rejoindre l'aventure FMA.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-16">
            {steps.map((step, index) => (
              <Card
                key={index}
                className={`step-card p-8 glass hover:glass-strong transition-all duration-300 hover:scale-105 hover:-translate-y-1 group relative overflow-hidden opacity-0`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">{index + 1}</span>
                </div>

                <div className="flex items-start gap-5">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="space-y-3 flex-1">
                    <h3 className="font-bold text-xl">{step.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <Button
              size="lg"
              className="text-base px-10 py-7 bg-gradient-to-r from-primary to-accent hover:scale-105 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300"
              onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect()
                const x = e.clientX - rect.left - rect.width / 2
                const y = e.clientY - rect.top - rect.height / 2
                e.currentTarget.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px) scale(1.05)`
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = ""
              }}
            >
              <span className="mr-2">Préparer ma candidature 2026</span>
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-10 py-7 glass-light hover:glass transition-all duration-300 bg-transparent"
            >
              Consulter les critères de sélection
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
