import { Lightbulb, Users, Trophy, Rocket } from "lucide-react"

export function ImpactHighlights() {
  const highlights = [
    {
      icon: Lightbulb,
      title: "Physique de Pointe",
      description: "Cours et ateliers sur la thermodynamique, la mécanique et l'électromagnétisme",
    },
    {
      icon: Users,
      title: "Communauté d'Excellence",
      description: "Encadrement par des étudiants de MIT, Stanford, ETH Zurich et Polytechnique",
    },
    {
      icon: Trophy,
      title: "Sélection Nationale",
      description: "Les meilleurs lycéens du Maroc réunis pour une expérience transformatrice",
    },
    {
      icon: Rocket,
      title: "Tremplin International",
      description: "Préparez votre trajectoire vers les grandes écoles et universités mondiales",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Pourquoi FMA ?</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Une expérience unique qui combine excellence académique, mentorat de haut niveau et immersion dans la
            communauté scientifique internationale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-light p-8 rounded-2xl hover:glass hover:scale-105 transition-all duration-300 group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                <highlight.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{highlight.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
