import React from 'react'

const Hero_Research = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop mb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 md:col-start-3 text-center md:text-left">
          <span className="text-label-caps font-label-caps text-secondary mb-4 block tracking-widest">
            RESEARCH
          </span>

          <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary mb-6">
            Research
          </h1>

          <p className="text-body-lg font-body-lg text-on-surface-variant leading-relaxed">
            Dr. Arif&apos;s research centers on vision-based navigation and
            control systems for autonomous robotics, with a focus on finite-time
            tracking control, visual servoing, and quadrotor landing systems.
            His work spans robotics, computer vision, and industrial automation.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero_Research