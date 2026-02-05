"use client"

import { Card } from "@/components/ui/card"
import Image from "next/image"

export function ScientificConferences() {
  return (
    <section className="py-20 md:py-32 relative bg-gradient-to-b from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-16">
          <div className="inline-block px-4 py-2 rounded-full glass-light border border-primary/20">
            <span className="text-sm font-medium text-primary">Pôle 4</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Conférences & Culture Scientifique</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Rencontrer des chercheurs marocains de renom et découvrir les frontières de la physique moderne.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <Card className="p-8 glass hover:glass-strong transition-all duration-300 border-border/50">
            <div className="space-y-6">
              <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/520796267-18071561078477696-833809233401744959-n.jpg"
                  alt="Youssef Moulane"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Dr. Youssef Moulane</h3>
                <p className="text-sm text-muted-foreground">Astrophysicien, UM6P</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  "Exploring life beyond Earth" - Découverte de l'astrobiologie et des exoplanètes
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-8 glass hover:glass-strong transition-all duration-300 border-border/50">
            <div className="space-y-6">
              <div className="relative w-24 h-24 mx-auto rounded-2xl overflow-hidden">
                <Image
                  src="/images/519682849-18071561087477696-6280352850368943885-n.jpg"
                  alt="Yahya Tayalati"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="text-center space-y-2">
                <h3 className="font-bold text-xl">Prof. Yahya Tayalati</h3>
                <p className="text-sm text-muted-foreground">Physicien des particules, UM6P & CERN</p>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Physique des hautes énergies et recherche au CERN - plus de 20 ans d'expérience à l'ATLAS
                </p>
              </div>
            </div>
          </Card>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <Card className="p-8 glass-light border-border/50">
            <h3 className="font-bold text-xl mb-4">Les thèmes abordés</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Pourquoi faire de la physique moderne ?</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Parcours de chercheurs marocains</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">Du lycée aux grandes écoles et à la recherche</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-primary mt-1">•</span>
                <span className="text-sm text-muted-foreground">L'esprit Feynman : comprendre profondément</span>
              </div>
            </div>
          </Card>

          <div className="text-center glass-light p-8 rounded-2xl">
            <p className="text-muted-foreground leading-relaxed">
              Les conférences à FMA ne sont pas de simples présentations. Ce sont des moments d'échange où tu peux poser
              tes questions, comprendre les parcours des chercheurs, et découvrir ce que signifie vraiment faire de la
              science au plus haut niveau.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
