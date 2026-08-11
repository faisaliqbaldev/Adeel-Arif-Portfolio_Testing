import React from 'react'

const EducationTimeline_About = () => {
    const educationData = [
  {
    year: '2025',
    degree: 'PhD, Electrical Engineering',
    institution: 'Shanghai Jiao Tong University (SJTU), Shanghai, China (QS Rank 47)',
  },
  {
    year: '2013',
    degree: 'MS, Electrical Engineering',
    institution: 'Government College University (GCU), Lahore, Pakistan',
  },
  {
    year: '2010',
    degree: 'BS, Electrical Engineering',
    institution: 'University of Central Punjab (UCP), Pakistan',
  },
]
  return (
     <div>
      <h2 className="text-section-heading-mobile md:text-section-heading font-display text-primary mb-8 border-b border-border-subtle pb-4">Education</h2>

      <div className="relative border-l border-primary ml-3 space-y-8">
        {educationData.map((education) => (
          <div key={education.year} className="relative pl-8">
            <div className="absolute -left-[5px] top-1 w-2.5 h-2.5 bg-primary"></div>
            <span className="text-label font-ui text-secondary block mb-1">
              {education.year}
            </span>
            <h3 className="text-lead font-body font-semibold text-primary">
              {education.degree}
            </h3>
            <p className="text-body font-body text-on-surface-variant">
              {education.institution}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EducationTimeline_About
