import React from 'react'
import TeachingHero from '../components/HeroSection_Teachings'
import CoursesCoordinated from '../components/CoursesCoordinated_Teachings'
import ProjectsSupervised from '../components/ProjectsSupervised_Teachings'
import Recognition from '../components/Recognitions_Teachings'
const Teachings = () => {
  return (
        <main className="mx-auto w-full max-w-6xl px-4 pb-24 pt-32 md:px-12">
      <TeachingHero />
      <CoursesCoordinated />
      <ProjectsSupervised />
      <Recognition />
    </main>
  )
}

export default Teachings