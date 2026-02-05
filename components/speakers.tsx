import { GraduationCap, Building2 } from "lucide-react"

export function Speakers() {
  const speakers = [
    {
      name: "Prof. Yahya Tayalati",
      role: "Physicien Chercheur",
      institution: "Université Mohammed V & CERN",
      topic: "Physique des Particules et KM3NET",
      image: "/images/519682849-18071561087477696-6280352850368943885-n.jpg",
      description:
        "Expert en physique des astroparticules, physique des hautes énergies et physique médicale. Leader de l'équipe marocaine au projet KM3NET.",
    },
    {
      name: "Dr. Youssef Moulane",
      role: "Astrophysicien",
      institution: "UM6P",
      topic: "Exploring life beyond Earth",
      image: "/images/520796267-18071561078477696-833809233401744959-n.jpg",
      description: "Astrophysicien engagé dans le développement de l'astronomie et l'astrophysique au Maroc.",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Nos Conférenciers</h2>
          <p className="text-lg text-muted-foreground">
            Des chercheurs et professeurs de renommée internationale ont partagé leur passion et leur expertise avec nos
            participants.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="glass-light rounded-2xl overflow-hidden hover:glass hover:scale-105 transition-all duration-300 group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-100 to-cyan-100">
                <img
                  src={speaker.image || "/placeholder.svg"}
                  alt={speaker.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{speaker.name}</h3>
                <div className="flex items-center gap-2 text-sm text-blue-600 mb-1">
                  <GraduationCap className="w-4 h-4" />
                  <span className="font-medium">{speaker.role}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Building2 className="w-4 h-4" />
                  <span>{speaker.institution}</span>
                </div>
                <div className="pt-3 border-t border-border/50">
                  <p className="text-sm italic text-muted-foreground mb-2">"{speaker.topic}"</p>
                  <p className="text-xs text-muted-foreground">{speaker.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
