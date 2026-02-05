import { FileText, PenTool, CheckCircle2, Trophy } from "lucide-react"

export function SelectionTimeline() {
  const steps = [
    {
      icon: FileText,
      title: "Dossier de Candidature",
      description: "Remplissez le formulaire en ligne avec vos informations académiques et votre motivation",
    },
    {
      icon: PenTool,
      title: "Test de Sélection",
      description: "Passez un test de physique et mathématiques évaluant votre niveau et votre potentiel",
    },
    {
      icon: CheckCircle2,
      title: "Entretiens",
      description: "Les candidats présélectionnés passent un entretien en ligne avec notre équipe",
    },
    {
      icon: Trophy,
      title: "Résultats Finaux",
      description: "Annonce des 48 participants sélectionnés pour rejoindre FMA",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Processus de Sélection</h2>
          <p className="text-lg text-muted-foreground">
            Un parcours en 4 étapes conçu pour identifier les lycéens les plus motivés et passionnés par la physique.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="glass-light p-6 rounded-2xl hover:glass transition-all duration-300 h-full">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-4">
                    <step.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 w-6 h-0.5 bg-gradient-to-r from-blue-600 to-cyan-600"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
