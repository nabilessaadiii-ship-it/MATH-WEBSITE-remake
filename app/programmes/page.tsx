import { Header } from "@/components/header"
import { ProgrammesHero } from "@/components/programmes-hero"
import { ExperimentalTracks } from "@/components/experimental-tracks"
import { ElectronicsSystems } from "@/components/electronics-systems"
import { SimulationModeling } from "@/components/simulation-modeling"
import { ScientificConferences } from "@/components/scientific-conferences"
import { Footer } from "@/components/footer"

export default function ProgrammesPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <ProgrammesHero />
      <ExperimentalTracks />
      <ElectronicsSystems />
      <SimulationModeling />
      <ScientificConferences />
      <Footer />
    </main>
  )
}
