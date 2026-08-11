import React from 'react'
import ResearchHero from '../components/Hero_Research'
import ThesisWorkSection from '../components/ThesisWorkSection_Research'
import PublicationsSection from '../components/PublicationsSection_Research'
const Research = () => {
  return (
        <main className="pt-32 pb-section-gap">
      <ResearchHero />
      <ThesisWorkSection />
      <PublicationsSection />
    </main>
  )
}

export default Research