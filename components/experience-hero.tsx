export function ExperienceHero() {
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
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] animate-fade-in-up">
            L'Expérience{" "}
            <span className="bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
              FMA
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed animate-fade-in-up [animation-delay:100ms]">
            Plus qu'un simple camp d'été, FMA est une immersion totale dans l'univers de la recherche scientifique. Une
            semaine où la physique prend vie à travers des cours, des ateliers pratiques, des conférences inspirantes et
            une communauté passionnée.
          </p>
        </div>
      </div>
    </section>
  )
}
