import React from 'react'

const CareerTimeline_Home = () => {
    const careerData = [
  {
    period: 'Jul 2021 â€“ Present',
    role: 'Assistant Professor',
    organization: 'Faculty of Information Technology, UCP',
    active: true,
  },
  {
    period: 'Sep 2017 â€“ Jul 2021',
    role: 'PhD Research Scholar',
    organization: 'IRMV Lab, Department of Automation, SEIEE, SJTU',
    active: false,
  },
  {
    period: 'Jun 2015 â€“ Aug 2017',
    role: 'Assistant Professor',
    organization: 'Faculty of Engineering, UCP',
    active: false,
  },
  {
    period: 'Jul 2013 â€“ Jun 2015',
    role: 'Lecturer',
    organization: 'Faculty of Engineering, UCP',
    active: false,
  },
  {
    period: 'Sep 2012 â€“ Jul 2013',
    role: 'Lab Engineer',
    organization: 'Faculty of Engineering, UCP',
    active: false,
  },
]
  return (
     <div>
      <h2 className="text-section-heading-mobile md:text-section-heading font-display text-primary mb-8 border-b border-border-subtle pb-4">Career</h2>

      <div className="relative border-l border-primary ml-3 space-y-8">
        {careerData.map((career) => (
          <div key={career.period} className="relative pl-8">
            <div
              className={`absolute -left-[5px] top-1 w-2.5 h-2.5 ${
                career.active
                  ? 'bg-primary'
                  : 'bg-surface border border-primary'
              }`}
            ></div>
            <span
              className={`text-label font-ui block mb-1 ${
                career.active
                  ? 'text-secondary'
                  : 'text-on-surface-variant'
              }`}
            >
              {career.period}
            </span>
            <h3 className="text-lead font-body font-semibold text-primary">
              {career.role}
            </h3>
            <p className="text-body font-body text-on-surface-variant">
              {career.organization}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CareerTimeline_Home
