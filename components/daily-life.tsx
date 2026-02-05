import { Clock, Coffee, BookOpen, Lightbulb, Users, Moon } from "lucide-react"

export function DailyLife() {
  const schedule = [
    {
      time: "08:00 - 09:00",
      icon: Coffee,
      title: "Petit-déjeuner & Réveil",
      description: "Début de journée convivial avec toute la communauté FMA",
    },
    {
      time: "09:00 - 12:00",
      icon: BookOpen,
      title: "Cours de Physique",
      description: "Sessions intensives en thermodynamique, mécanique ou électromagnétisme",
    },
    {
      time: "12:30 - 14:00",
      icon: Users,
      title: "Déjeuner & Repos",
      description: "Moment d'échange et de détente entre participants et encadrants",
    },
    {
      time: "14:00 - 17:00",
      icon: Lightbulb,
      title: "Ateliers Pratiques",
      description: "Expériences en laboratoire et résolution de problèmes en groupe",
    },
    {
      time: "17:30 - 19:00",
      icon: Clock,
      title: "Conférences",
      description: "Rencontres avec des chercheurs de renommée internationale",
    },
    {
      time: "20:00 - 22:00",
      icon: Moon,
      title: "Soirée & Activités",
      description: "Discussions, jeux scientifiques et moments de convivialité",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Une Journée Type à FMA</h2>
          <p className="text-lg text-muted-foreground">
            Immergez-vous dans le quotidien d'un participant FMA : entre cours intensifs, ateliers pratiques et
            rencontres inspirantes.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="glass-light p-6 rounded-2xl hover:glass transition-all duration-300 flex items-start gap-6 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <item.icon className="w-7 h-7 text-white" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-sm font-semibold text-blue-600">{item.time}</div>
                  <div className="h-px flex-1 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
