import { Header } from "@/components/header"
import { EditionHero } from "@/components/edition-hero"
import { EditionStats } from "@/components/edition-stats"
import { Speakers } from "@/components/speakers"
import { Gallery } from "@/components/gallery"
import { Testimonials } from "@/components/testimonials"
import { Footer } from "@/components/footer"
import { ActivitiesTree } from "@/components/activities-tree"

export default function EditionPrecedentePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <EditionHero />
      <EditionStats />
      <Speakers />
      <Gallery />
      <ActivitiesTree />
      <Testimonials />
      <Footer />
    </main>
  )
}
