import { Rocket, Calendar } from "lucide-react"

export function CandidatureHero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-blue-50 to-white">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-glow" />
        <div
          className="absolute top-40 right-20 w-80 h-80 bg-cyan-400/20 rounded-full blur-3xl animate-glow"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-5xl mx-auto text-center space-y-10">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full glass-light animate-fade-in-up">
            <Rocket className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold">Préparez votre candidature pour 2026</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] animate-fade-in-up [animation-delay:100ms]">
            Rejoignez la prochaine{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              génération FMA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up [animation-delay:200ms]">
            Les candidatures pour FMA 2026 ouvriront au printemps. Préparez-vous dès maintenant en consultant le
            syllabus et les ressources de préparation.
          </p>

          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-xl glass border-l-4 border-blue-600 animate-fade-in-up [animation-delay:300ms]">
            <Calendar className="w-5 h-5 text-blue-600" />
            <p className="text-sm">
              <span className="font-semibold text-blue-600">Ouverture des candidatures:</span> Avril 2026
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
