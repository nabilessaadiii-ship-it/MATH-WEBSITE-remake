import { Header } from "@/components/header"
import { ExperienceHero } from "@/components/experience-hero"
import { QuiSommesNous } from "@/components/qui-sommes-nous"
import { DailyLife } from "@/components/daily-life"
import { Team } from "@/components/team"
import { Values } from "@/components/values"
import { OrganizingTeam } from "@/components/organizing-team"
import { Footer } from "@/components/footer"

export default function ExperiencePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ExperienceHero />
      <QuiSommesNous />
      <DailyLife />
      <Values />
      <Team />
      <OrganizingTeam />
      <Footer />
    </main>
  )
}
