import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TeamPreview() {
  const teamMembers = [
    { name: "Mohamed Taha AFIF", image: "/placeholder-user.jpg" },
    { name: "Hadir TALEB", image: "/placeholder-user.jpg" },
    { name: "Amine MAHDANE", image: "/placeholder-user.jpg" },
    { name: "Sara EL AKEL", image: "/placeholder-user.jpg" },
    { name: "Yassir AMAZOUZ", image: "/placeholder-user.jpg" },
    { name: "Ahmed CHAHLAOUI", image: "/placeholder-user.jpg" },
    { name: "Aymane MAAITAT", image: "/placeholder-user.jpg" },
    { name: "Khalil ELAZRI", image: "/placeholder-user.jpg" },
    { name: "Mouad ZEMZOUMI", image: "/placeholder-user.jpg" },
  ]

  return (
    <section className="py-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Qui sommes-nous ?</h2>
          <p className="text-lg text-muted-foreground">
            Nous sommes des passionnés de science, unis par le désir de partager et de former les leaders de demain.
            Notre vision est celle d'un Maroc où chaque jeune a la possibilité de réaliser son plein potentiel grâce à
            une éducation de qualité.
          </p>

          <div className="flex justify-center items-center gap-3 py-4">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border-2 border-white shadow-md hover:scale-110 transition-transform duration-300"
                style={{ marginLeft: index > 0 ? "-6px" : "0" }}
              >
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <Link href="/organizing-team">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Rencontrez l'équipe organisatrice
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
