import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { PolaroidGallery } from "@/components/polaroid-gallery"
import { TeamPreview } from "@/components/team-preview"
import { Partners } from "@/components/partners"
import { MediaCoverage } from "@/components/media-coverage"
import { Footer } from "@/components/footer"
import { SocialSidebar } from "@/components/social-sidebar"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <SocialSidebar />
      <Hero />
      <About />
      <Stats />
      <section className="py-6 md:py-8 bg-gradient-to-br from-blue-50/30 to-purple-50/30">
        <PolaroidGallery />
      </section>
      <Partners />
      <TeamPreview />
      <MediaCoverage />
      <Footer />
    </main>
  )
}
