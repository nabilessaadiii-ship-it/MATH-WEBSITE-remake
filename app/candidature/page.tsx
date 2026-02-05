import { Header } from "@/components/header"
import { CandidatureHero } from "@/components/candidature-hero"
import { SelectionTimeline } from "@/components/selection-timeline"
import { CourseGrid } from "@/components/course-grid"
import { HowToParticipate } from "@/components/how-to-participate"
import { FAQ } from "@/components/faq"
import { Footer } from "@/components/footer"

export default function CandidaturePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <CandidatureHero />
      <SelectionTimeline />
      <CourseGrid />
      <HowToParticipate />
      <FAQ />
      <Footer />
    </main>
  )
}
