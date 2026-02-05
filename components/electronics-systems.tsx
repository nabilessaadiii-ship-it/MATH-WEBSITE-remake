"use client"

import { Card } from "@/components/ui/card"
import { CircuitBoard, Radio, Cpu } from "lucide-react"

export function ElectronicsSystems() {
  const sections = [
    {
      icon: CircuitBoard,
      title: "Électronique Analogique",
      description: "Comprendre les circuits RC, filtres et amplification",
      topics: ["Circuits RC", "Filtres passifs et actifs", "Amplification de signaux", "Analyse fréquentielle"],
    },
    {
      icon: Cpu,
      title: "Électronique Numérique",
      description: "Découvrir la logique et les systèmes numériques",
      topics: [
        "Portes logiques",
        "Bascules et compteurs",
        "Systèmes logiques combinatoires",
        "Introduction aux microcontrôleurs",
      ],
    },
    {
      icon: Radio,
      title: "Systèmes Réels",
      description: "De la physique aux applications concrètes",
      topics: [
        "Capteurs et transducteurs",
        "Traitement du signal",
        "Chaînes de mesure",
        "Systèmes électroniques complets",
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32 relative bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass-light border border-accent/20">
            <span className="text-sm font-medium text-accent">Pôle 2</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Électronique & Systèmes</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Un point différenciant majeur de FMA : comprendre comment la physique devient un système fonctionnel.
            L'électronique est le lien entre les phénomènes physiques et les technologies modernes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {sections.map((section, index) => (
            <Card
              key={section.title}
              className="p-8 glass hover:glass-strong transition-all duration-300 border-border/50 group hover:scale-105"
            >
              <div className="space-y-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <section.icon className="w-8 h-8 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">{section.title}</h3>
                  <p className="text-sm text-muted-foreground">{section.description}</p>
                </div>
                <ul className="space-y-2">
                  {section.topics.map((topic) => (
                    <li key={topic} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 max-w-4xl mx-auto glass-light p-8 rounded-2xl border border-accent/20">
          <div className="text-center space-y-4">
            <div className="text-3xl">⚡</div>
            <div className="font-bold text-xl">Pourquoi l'électronique à FMA ?</div>
            <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              Aucun camp de physique au Maroc ne propose une formation aussi complète en électronique. À FMA, tu ne te
              contentes pas d'apprendre la théorie : tu construis des circuits, tu mesures des signaux, tu comprends
              comment fonctionne le monde technologique qui t'entoure.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
