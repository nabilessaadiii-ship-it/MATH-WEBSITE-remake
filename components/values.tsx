import { Target, Heart, Sparkles, Globe } from "lucide-react"

export function Values() {
  const values = [
    {
      icon: Target,
      title: "Excellence Académique",
      description:
        "Nous visons les plus hauts standards d'enseignement en physique, avec des contenus adaptés du niveau mondial pour préparer nos participants aux défis futurs.",
    },
    {
      icon: Heart,
      title: "Communauté & Bienveillance",
      description:
        "FMA crée un espace sûr où chaque participant peut s'épanouir, poser des questions librement et créer des amitiés durables avec des passionnés de science.",
    },
    {
      icon: Sparkles,
      title: "Inspiration & Passion",
      description:
        "Nous croyons que la passion pour la physique naît de l'émerveillement. Nos conférenciers et mentors incarnent cette passion et l'inspirent à la prochaine génération.",
    },
    {
      icon: Globe,
      title: "Ouverture Internationale",
      description:
        "FMA connecte le Maroc au réseau scientifique mondial en amenant des étudiants et chercheurs des meilleures universités pour partager leur parcours et leur vision.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos Valeurs</h2>
          <p className="text-lg text-muted-foreground">
            FMA repose sur des principes fondamentaux qui guident chaque aspect de notre programme et créent une
            expérience unique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={index}
              className="glass-light p-8 rounded-2xl hover:glass hover:scale-105 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
