import { Header } from "@/components/header"
import { OrganizingTeam } from "@/components/organizing-team"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"

export default function OrganizingTeamPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SocialSidebar />
      <div className="pt-20">
        <OrganizingTeam />
      </div>
      <Footer />
    </main>
  )
}
