import React from 'react'
import AboutIntro from '../components/Intro_About'
import CareerTimeline from '../components/CareerTimeline_Home'
import EducationTimeline from '../components/EducationTimeline_About'
import LanguageCards from '../components/Language_About'

const About = () => {
  return (
   <div>
      <main className="flex-grow max-w-container-max mx-auto px-margin-phone md:px-margin-desktop py-section-gap w-full grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <AboutIntro />

        <hr className="md:col-span-12 border-t border-border-subtle my-section-gap w-full" />

        <div className="md:col-span-12 grid grid-cols-1 md:grid-cols-2 gap-x-gutter gap-y-section-gap">
          <EducationTimeline />
          <CareerTimeline />
        </div>
      </main>
    </div>
  )
}

export default About