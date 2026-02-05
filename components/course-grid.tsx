"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Zap, Waves, Flame, X } from "lucide-react"

const modules = [
  {
    id: "thermodynamics",
    title: "Thermodynamique",
    icon: Flame,
    color: "from-secondary/20 to-secondary/10",
    borderColor: "border-l-secondary",
    iconColor: "text-secondary",
    topics: [
      "Loi de Planck et rayonnement du corps noir",
      "Loi de Stefan-Boltzmann",
      "Température de la Terre",
      "Gaz parfaits et équations d'état",
    ],
  },
  {
    id: "mechanics",
    title: "Mécanique",
    icon: Zap,
    color: "from-primary/20 to-primary/10",
    borderColor: "border-l-primary",
    iconColor: "text-primary",
    topics: [
      "Lois de Newton et applications",
      "Mécanique orbitale et gravitation",
      "Énergie et collisions",
      "Propulsion et mécanique des fusées",
    ],
  },
  {
    id: "electromagnetism",
    title: "Électromagnétisme",
    icon: Waves,
    color: "from-accent/20 to-accent/10",
    borderColor: "border-l-accent",
    iconColor: "text-accent",
    topics: [
      "Équation d'onde et propagation",
      "Effet Doppler",
      "Loi de Coulomb et électrostatique",
      "Induction électromagnétique",
    ],
  },
]

export function CourseGrid() {
  const [selectedId, setSelectedId] = useState<string | null>(null)

  const selectedModule = modules.find((m) => m.id === selectedId)

  return (
    <section id="program" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-accent/30 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-balance">
              Contenu <span className="text-accent">Pédagogique</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Explorez les modules de physique que nous couvrirons durant le camp. Cliquez sur chaque carte pour
              découvrir les sujets détaillés.
            </p>
          </div>

          <Card className="p-10 md:p-14 glass relative overflow-hidden group mb-12">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary via-accent to-secondary opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
            <div className="absolute inset-[1px] rounded-2xl bg-card/80 backdrop-blur-xl"></div>

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-500">
                <Download className="w-12 h-12 text-primary" />
              </div>

              <div className="flex-1 text-center md:text-left space-y-4">
                <h3 className="text-3xl font-bold">Programme Complet Disponible</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Découvrez le contenu détaillé des cours, ateliers et conférences qui vous attendent durant ces 6 jours
                  d'immersion scientifique intense.
                </p>
              </div>

              <Button
                size="lg"
                className="flex-shrink-0 bg-gradient-to-r from-primary to-accent hover:scale-105 transition-transform duration-300 px-8 py-6"
                onClick={() => window.open("https://fma.mathmaroc.org/documents/FMA_Pedagogical_Content.pdf", "_blank")}
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger PDF
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            {modules.map((module, index) => (
              <Card
                key={module.id}
                onClick={() => setSelectedId(module.id)}
                className={`p-8 glass-light hover:glass-strong transition-all duration-300 group ${module.borderColor} border-l-4 hover:scale-105 cursor-pointer`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                  >
                    <module.icon className={`w-8 h-8 ${module.iconColor}`} />
                  </div>
                  <h3 className={`text-2xl font-bold ${module.iconColor}`}>{module.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Cliquez pour explorer {module.topics.length} sujets
                  </p>
                </div>
              </Card>
            ))}
          </div>

          {selectedId && selectedModule && (
            <>
              <div
                className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 animate-fade-in"
                onClick={() => setSelectedId(null)}
              />
              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                <Card className="w-full max-w-2xl max-h-[80vh] overflow-y-auto glass-strong shadow-2xl pointer-events-auto animate-scale-in">
                  <div className="p-8 space-y-6">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${selectedModule.color} flex items-center justify-center`}
                        >
                          <selectedModule.icon className={`w-8 h-8 ${selectedModule.iconColor}`} />
                        </div>
                        <h2 className={`text-3xl font-bold ${selectedModule.iconColor}`}>{selectedModule.title}</h2>
                      </div>
                      <button
                        onClick={() => setSelectedId(null)}
                        className="w-10 h-10 rounded-full glass hover:glass-strong transition-all duration-300 flex items-center justify-center"
                        aria-label="Fermer"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-muted-foreground">Sujets couverts :</h3>
                      <ul className="space-y-3">
                        {selectedModule.topics.map((topic, i) => (
                          <li key={i} className="flex items-start gap-3 group">
                            <div
                              className={`w-2 h-2 rounded-full ${selectedModule.iconColor.replace("text-", "bg-")} mt-2 flex-shrink-0 group-hover:scale-150 transition-transform`}
                            />
                            <span className="text-base text-foreground leading-relaxed">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4 border-t border-border/50">
                      <Button
                        variant="outline"
                        className="w-full glass-light hover:glass bg-transparent"
                        onClick={() =>
                          window.open("https://fma.mathmaroc.org/documents/FMA_Pedagogical_Content.pdf", "_blank")
                        }
                      >
                        <Download className="w-4 h-4 mr-2" />
                        Voir le chapitre complet dans le PDF
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  )
}
