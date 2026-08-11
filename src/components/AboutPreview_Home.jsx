import React from 'react'

const AboutPreview_Home = () => {
  return (
    <section
          className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop pt-section-gap-mobile md:pt-section-gap grid md:grid-cols-12 gap-gutter"
          id="about"
        >
          <div className="md:col-span-4">
            <h2 className="text-label-caps font-label-caps text-secondary uppercase tracking-widest sticky top-16 md:top-32">
              About
            </h2>
          </div>
          <div className="md:col-span-8 space-y-6">
            <p className="text-headline-sm-mobile md:text-headline-sm font-headline-sm text-primary leading-normal">
              I am an Assistant Professor at the Faculty of Information
              Technology, University of Central Punjab. Holding a PhD in
              Electrical Engineering from Shanghai Jiao Tong University, my
              research focuses on advanced control systems, computer vision, and
              autonomous robotics in dynamic environments.
            </p>
            <a
              className="text-secondary font-label-caps text-label-caps hover:text-primary transition-colors inline-flex items-center gap-1 group"
              href="#contact"
            >
              Learn more about me
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
          </div>
        </section>
  )
}

export default AboutPreview_Home