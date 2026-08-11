import React from 'react'

const FeaturedResearch_Home = () => {
  return (
    <section className="bg-surface-ivory pt-section-gap" id="research">
          <div className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop">
            <div className="flex flex-col md:flex-row justify-between items-baseline mb-6 border-b border-border-subtle pb-4">
              <h2 className="text-label-caps font-label-caps text-secondary uppercase tracking-widest">
                Featured Research
              </h2>
               <a
                className="hidden md:flex text-secondary font-label-caps text-label-caps hover:text-primary transition-colors  items-center gap-1 group mt-4 md:mt-0"
                href="#"
              >
                View all publications
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
            </div>
            <div className="grid md:grid-cols-3 gap-gutter">
              {/* <!-- Card 1 --> */}
              <div className="border-b border-border-subtle pb-6 group cursor-pointer hover:bg-surface transition-colors p-4 -mx-4 rounded-DEFAULT">
                <p className="text-label-caps font-label-caps text-text-muted mb-2">
                  2023 · Robotics Journal
                </p>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">
                  Finite-time tracking control for robotic manipulators
                </h3>
                <p className="text-body-md font-body-md text-text-muted line-clamp-3">
                  A novel approach to finite-time stabilization of uncertain
                  nonlinear systems with applications in multi-DOF manipulators
                  under visual feedback.
                </p>
              </div>
              {/* <!-- Card 2 --> */}
              <div className="border-b border-border-subtle pb-6 group cursor-pointer hover:bg-surface transition-colors p-4 -mx-4 rounded-DEFAULT">
                <p className="text-label-caps font-label-caps text-text-muted mb-2">
                  2022 · IEEE Transactions
                </p>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">
                  Adaptive visual servo control strategies
                </h3>
                <p className="text-body-md font-body-md text-text-muted line-clamp-3">
                  Robust visual servoing techniques for autonomous uncalibrated
                  robotic systems operating in constrained dynamic environments.
                </p>
              </div>
              {/* <!-- Card 3 --> */}
              <div className="border-b border-border-subtle pb-6 group cursor-pointer hover:bg-surface transition-colors p-4 -mx-4 rounded-DEFAULT">
                <p className="text-label-caps font-label-caps text-text-muted mb-2">
                  2021 · Automatica
                </p>
                <h3 className="text-headline-sm font-headline-sm text-primary mb-3 group-hover:text-secondary transition-colors">
                  Multi-Agent Surveillance Coordination
                </h3>
                <p className="text-body-md font-body-md text-text-muted line-clamp-3">
                  Distributed control protocols for multi-agent UAV systems
                  performing coordinated area coverage and surveillance tasks.
                </p>
              </div>
            </div>
            <a
                className="md:hidden text-secondary font-label-caps text-label-caps hover:text-primary transition-colors inline-flex items-center gap-1 group mt-4 md:mt-0"
                href="#"
              >
                View all publications
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
          </div>
        </section>
  )
}

export default FeaturedResearch_Home