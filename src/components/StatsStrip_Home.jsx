import React from 'react'

const StatsStrip_Home = () => {
  return (
            <section className="bg-surface-ivory border-y border-border-subtle py-12">
          <div className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-headline-md font-headline-md text-primary mb-2">
                5+ Years
              </p>
              <p className="text-body-md font-body-md text-text-muted">
                Teaching &amp; Research Experience
              </p>
            </div>
            <div>
              <p className="text-headline-md font-headline-md text-primary mb-2">
                6+
              </p>
              <p className="text-body-md font-body-md text-text-muted">
                Published Research Papers
              </p>
            </div>
            <div>
              <p className="text-headline-md font-headline-md text-primary mb-2">
                19+
              </p>
              <p className="text-body-md font-body-md text-text-muted">
                Projects Supervised
              </p>
            </div>
            <div>
              <p className="text-headline-md font-headline-md text-primary mb-2">
                3
              </p>
              <p className="text-body-md font-body-md text-text-muted">
                Professional Affiliations
              </p>
            </div>
          </div>
        </section>
  )
}

export default StatsStrip_Home