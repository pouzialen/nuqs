import type { Metadata } from 'next'
import { DependentsSection } from './_landing/dependents/dependents'
import { FeaturesSection } from './_landing/features'
import Footer from './_landing/footer'
import { HeroSection } from './_landing/hero'
import { QuotesSection } from './_landing/quotes/quotes-section'

export const metadata: Metadata = {
  title: {
    absolute: 'nuqs | Type-safe search params state management for Next.js'
  },
  alternates: {
    canonical: 'https://nuqs.47ng.com'
  }
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <FeaturesSection />
      <DependentsSection />
      <QuotesSection />
      <Footer />
    </main>
  )
}
