// src/components/features/display-lab/display-lab-page.tsx
import { ComparisonSection } from './comparison-section'
import { FAQSection } from './faq-section'
import { Footer } from './footer'
import { Header } from './header'
import { HeroSection } from './hero-section'
import { PrincipleSection } from './principle-section'
import { RecommendationSection } from './recommendation-section'
import { ScenarioSection } from './scenario-section'
import { SummarySection } from './summary-section'

export function DisplayLabPage() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <Header />
      <main>
        <HeroSection />
        <PrincipleSection />
        <ComparisonSection />
        <ScenarioSection />
        <RecommendationSection />
        <FAQSection />
        <SummarySection />
      </main>
      <Footer />
    </div>
  )
}
