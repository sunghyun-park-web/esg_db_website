import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { DataVisualization } from "@/components/data-visualization"
import { Solutions } from "@/components/solutions"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <DataVisualization />
        <Solutions />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
