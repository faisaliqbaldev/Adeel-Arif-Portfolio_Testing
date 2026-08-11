import React from 'react'

const ThesisWorkSection_Research = () => {
 const theses = [
    {
      degree: "PhD Thesis",
      year: "2025",
      title:
        "Vision-Based Finite-Time Tracking Control of a Quadrotor for Autonomous Landing on a Moving and Tilting Platform",
      institution: "Shanghai Jiao Tong University",
    },
    {
      degree: "MS Thesis",
      year: "2013",
      title:
        "Design of LabVIEW Based Real-Time Image Processing Module for a Humanoid Interactive Optomechatronic Telerobocop",
      institution: "Government College University, Lahore",
    },
  ];

  return (
    <section className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop mb-section-gap">
      <h2 className="text-section-heading-mobile md:text-section-heading font-display text-primary border-b border-border-subtle pb-4 mb-8">
        Thesis Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
        {theses.map((thesis) => (
          <article
            key={`${thesis.degree}-${thesis.year}`}
            className="bg-surface-ivory p-8 border border-border-subtle rounded-DEFAULT group hover:border-secondary transition-colors duration-300"
          >
            <div className="flex items-center mb-4 space-x-2 text-label font-ui text-on-surface-variant">
              <span className="text-secondary font-bold">{thesis.degree}</span>
              <span>·</span>
              <span>{thesis.year}</span>
            </div>

            <h3 className="text-card-heading font-display text-primary mb-4 group-hover:text-secondary transition-colors duration-300">
              {thesis.title}
            </h3>

            <p className="text-body font-body text-on-surface-variant flex items-center mt-6">
              <span className="material-symbols-outlined text-secondary mr-2 text-sm">
                school
              </span>
              {thesis.institution}
            </p>
          </article>
        ))}
      </div>
    </section>
  );}

export default ThesisWorkSection_Research
