import { Calendar, Clock, CheckCircle2 } from "lucide-react"

export function UpcomingTimeline() {
  const phases = [
    {
      phase: "Septembre - Mars",
      title: "Phase de Préparation",
      description: "Consultez le syllabus et préparez-vous avec les ressources disponibles",
      status: "current",
      icon: Clock,
    },
    {
      phase: "Avril - Juin",
      title: "Candidatures Ouvertes",
      description: "Soumettez votre candidature et passez le test de sélection",
      status: "upcoming",
      icon: Calendar,
    },
    {
      phase: "Juillet 2026",
      title: "FMA 2026",
      description: "Une semaine d'immersion scientifique intensive",
      status: "upcoming",
      icon: CheckCircle2,
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Prochaine Édition : Été 2026</h2>
          <p className="text-lg text-muted-foreground">
            Nous sommes actuellement en phase de préparation. Les candidatures ouvriront au printemps 2026.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative p-8 rounded-2xl border-2 transition-all duration-300 ${
                  phase.status === "current"
                    ? "bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-600 shadow-lg shadow-blue-600/20"
                    : "glass-light border-border hover:glass"
                }`}
              >
                <div
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-5 ${
                    phase.status === "current"
                      ? "bg-gradient-to-br from-blue-600 to-cyan-600"
                      : "bg-gradient-to-br from-gray-400 to-gray-500"
                  }`}
                >
                  <phase.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-sm font-semibold text-blue-600 mb-2">{phase.phase}</div>
                <h3 className="text-xl font-bold mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
                {phase.status === "current" && (
                  <div className="absolute top-4 right-4">
                    <div className="px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-semibold">En cours</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
