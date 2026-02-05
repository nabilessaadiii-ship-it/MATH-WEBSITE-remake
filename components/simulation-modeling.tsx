"use client"

import { Card } from "@/components/ui/card"
import { Telescope, Waves, Atom } from "lucide-react"

export function SimulationModeling() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass-light border border-secondary/20">
            <span className="text-sm font-medium text-secondary">Pôle 3</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Simulation & Modélisation</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprendre les phénomènes physiques à travers la modélisation numérique et les simulations interactives.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="p-8 glass hover:glass-strong transition-all duration-300 border-border/50 group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Telescope className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Simulation de Télescopes</h3>
                <p className="text-sm text-muted-foreground">Optique géométrique et systèmes d'observation</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glass hover:glass-strong transition-all duration-300 border-border/50 group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Waves className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Champs Électromagnétiques</h3>
                <p className="text-sm text-muted-foreground">Visualisation et analyse de champs EM</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glass hover:glass-strong transition-all duration-300 border-border/50 group">
            <div className="space-y-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <Atom className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-2">Mécanique Numérique</h3>
                <p className="text-sm text-muted-foreground">Résolution de problèmes dynamiques</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-12 max-w-3xl mx-auto glass-light p-8 rounded-2xl">
          <p className="text-muted-foreground leading-relaxed text-center">
            La simulation numérique est un outil essentiel en physique moderne. À FMA, tu apprends à utiliser Python et
            d'autres outils scientifiques pour modéliser et comprendre des phénomènes complexes.
          </p>
        </div>
      </div>
    </section>
  )
}
