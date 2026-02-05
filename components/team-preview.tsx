import Link from "next/link"
import { Button } from "@/components/ui/button"

export function TeamPreview() {
  const teamMembers = [
    {
      name: "Mohamed Taha AFIF",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGp4d8kPPU7Jw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729615086399?e=1740614400&v=beta&t=kPXqCYZxYGxb8oCvHqqJBZp2WgTBhw3KqpQh3QEf7Ic",
    },
    {
      name: "Hadir TALEB",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHn7kKMKWzOtQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719841046662?e=1740614400&v=beta&t=4z0j-QL5nJdx8jzTuQ3DQZ2HVPzvqPmj9OlpBNNWZ_s",
    },
    {
      name: "Amine MAHDANE",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQFIy49JKMBhqg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1700413726134?e=1740614400&v=beta&t=Y5RYzSiQLLAy6TgZBPSZJeB-RV3gHKFBKwYuZBD3qnM",
    },
    {
      name: "Sara EL AKEL",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHUUT3i0KgvQw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725618399117?e=1740614400&v=beta&t=bv0Qv4xFy8LCXLyp4Hy_1iKS21fN6POXP7bvpYXZRhs",
    },
    {
      name: "Yassir AMAZOUZ",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHYzHYC0IuZxA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1721078668867?e=1740614400&v=beta&t=1DgXhSpcRLhTdR_7hPc6dS4N9_YmIVy1P-DEmPJUj84",
    },
    {
      name: "Ahmed CHAHLAOUI",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQHj_vwIabdEuQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1725707569965?e=1740614400&v=beta&t=sIpVMRHTk-S9jcvWOWBq2MzQZZS5-Z6HiMfx3vYqxko",
    },
    {
      name: "Aymane MAAITAT",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGFrEI5YYVJzA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1722027488127?e=1740614400&v=beta&t=ZHf7Yz9RzB0bXqEbQeN2PxRZVg8W8N0GGH_OIVQFU5o",
    },
    {
      name: "Khalil ELAZRI",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGN81WBTkMMNg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1717855831686?e=1740614400&v=beta&t=qvwcEBwb_4vAoC03t3B0vt6a5V9ksVLHQqIuOZZVNxI",
    },
    {
      name: "Mouad ZEMZOUMI",
      image:
        "https://media.licdn.com/dms/image/v2/D4E03AQGU-eXoXsb98A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719774952929?e=1740614400&v=beta&t=q05fUd7dHoU4SjqhMCDCbNkFKjIMy_9fzEuXt4raqmc",
    },
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
