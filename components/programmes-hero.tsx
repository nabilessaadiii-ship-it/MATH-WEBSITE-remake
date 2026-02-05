"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Atom, Cpu, LineChart, Microscope } from "lucide-react"

export function ProgrammesHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-light border border-primary/20">
            <Atom className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">Les Pôles Expérimentaux FMA</span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            De la vraie <span className="text-primary">science</span>, pas juste de la théorie
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
            FMA n'est pas un camp traditionnel. C'est une immersion complète dans la démarche scientifique expérimentale
            : manipuler, mesurer, analyser, comprendre. Inspiré par l'esprit de Richard Feynman, notre programme met
            l'accent sur la compréhension profonde à travers l'expérimentation.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-12">
            <div className="glass-light p-6 rounded-xl hover:glass-strong transition-all duration-300 group">
              <Microscope className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg">Physique Expérimentale</div>
              <div className="text-sm text-muted-foreground mt-2">TP & Manipulation</div>
            </div>

            <div className="glass-light p-6 rounded-xl hover:glass-strong transition-all duration-300 group">
              <Cpu className="w-10 h-10 text-accent mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg">Électronique</div>
              <div className="text-sm text-muted-foreground mt-2">Analogique & Digital</div>
            </div>

            <div className="glass-light p-6 rounded-xl hover:glass-strong transition-all duration-300 group">
              <LineChart className="w-10 h-10 text-secondary mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg">Simulation</div>
              <div className="text-sm text-muted-foreground mt-2">Modélisation Physique</div>
            </div>

            <div className="glass-light p-6 rounded-xl hover:glass-strong transition-all duration-300 group">
              <Atom className="w-10 h-10 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <div className="font-bold text-lg">Conférences</div>
              <div className="text-sm text-muted-foreground mt-2">Culture Scientifique</div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button size="lg" asChild className="magnetic-btn">
              <Link href="/candidature">Candidater pour 2026</Link>
            </Button>
            <Button size="lg" variant="outline" asChild className="glass-light hover:glass-strong bg-transparent">
              <Link href="/edition-precedente">Voir l'édition 2025</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
