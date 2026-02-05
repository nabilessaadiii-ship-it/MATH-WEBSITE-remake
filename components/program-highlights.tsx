import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Zap, Waves, Flame } from "lucide-react"

export function ProgramHighlights() {
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
              Plongez dans des domaines fascinants de la physique moderne avec des cours et ateliers conçus pour
              stimuler votre curiosité scientifique
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
              >
                <Download className="w-5 h-5 mr-2" />
                Télécharger PDF
              </Button>
            </div>
          </Card>

          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-8 glass-light hover:glass-strong transition-all duration-300 group border-l-4 border-l-primary hover:scale-105">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary">Mécanique</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Mécanique classique, quantique et relativité
                </p>
              </div>
            </Card>

            <Card className="p-8 glass-light hover:glass-strong transition-all duration-300 group border-l-4 border-l-accent hover:scale-105">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Waves className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-accent">Électromagnétisme</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Théorie des champs et applications modernes
                </p>
              </div>
            </Card>

            <Card className="p-8 glass-light hover:glass-strong transition-all duration-300 group border-l-4 border-l-secondary hover:scale-105">
              <div className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Flame className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-secondary">Thermodynamique</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Concepts avancés et physique statistique
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
