import React from 'react'
import { useState, useMemo } from 'react'

const PublicationsSection_Research = () => {
const [sortBy, setSortBy] = useState("year");

  const publicationItems = [
    {
      year: 2023,
      journal: "IEEE Transactions on Circuits and Systems I",
      title:
        "Finite-time tracking of moving platform with single camera for quadrotor autonomous landing",
      details: ["ISSN: 1549-8328", "Vol. 70", "Impact Factor: 5.2"],
    },
    {
      year: 2021,
      journal: "Robotics and Autonomous Systems",
      title:
        "Adaptive visual servo control law for finite-time tracking to land quadrotor on moving platform using virtual reticle algorithm",
      details: ["ISSN: 0921-8890", "Vol. 141", "Impact Factor: 5.2"],
    },
    {
      year: 2017,
      journal: "IEEEP New Horizons",
      title:
        "Multi-Agent Surveillance and Threat Evaluation for Indoor Environment",
      details: ["ISSN: 2226-3659", "July 2016 – Dec 2017, Vol. 91-96"],
    },
    {
      year: 2016,
      journal: "IJCSIS",
      title:
        "Vision Based Path Planning Control system for Omnidirectional Autonomous Mobile Robot",
      details: ["ISSN: 1947-5500"],
    },
    {
      year: 2016,
      journal: "Science International (Lahore)",
      title:
        "Diagnostic Simulation of Single Phase Induction Motor Noise with Different PWM Schemes",
      details: ["ISSN: 1013-5316"],
    },
    {
      year: 2014,
      journal: "Science International (Lahore)",
      title:
        "Computer Vision Based Navigation Module for Sustainable Broad-Acre Agriculture Robots",
      details: ["ISSN: 1013-5316", "Issue 5"],
    },
  ];

  const publications = useMemo(() => {
    return [...publicationItems].sort((a, b) => {
      if (sortBy === "journal") {
        return a.journal.localeCompare(b.journal);
      }

      return b.year - a.year;
    });
  }, [sortBy]);

  return (
    <section className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop mb-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter mb-8 items-end">
        <div className="md:col-span-8">
          <h2 className="text-section-heading-mobile md:text-section-heading font-display text-primary">
            Published Research Papers
          </h2>
        </div>

        <div className="md:col-span-4 flex md:justify-end">
          <select
            value={sortBy}
            onChange={(event) => setSortBy(event.target.value)}
            className="form-select border-border-subtle bg-surface text-ui font-ui text-primary rounded py-2 px-4 focus:border-secondary focus:ring-0"
          >
            <option value="year">Sort by Year</option>
            <option value="journal">Sort by Journal</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter">
        <div className="md:col-span-8 md:col-start-3 space-y-6">
          {publications.map((publication) => (
            <article
              key={`${publication.year}-${publication.title}`}
              className="border-b border-border-subtle pb-6 relative pl-6 group"
            >
              <div className="absolute left-0 top-2 w-1 h-full bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="flex flex-wrap items-center mb-2 gap-x-3 gap-y-2">
                <span className="bg-primary-container text-on-primary-container text-label font-ui px-2 py-1 rounded">
                  {publication.year}
                </span>

                <span className="text-label font-ui text-on-surface-variant">
                  {publication.journal}
                </span>
              </div>

              <h3 className="text-card-heading font-display text-primary mb-2">
                {publication.title}
              </h3>

              <div className="flex flex-wrap gap-4 text-body font-body text-text-muted">
                {publication.details.map((detail) => (
                  <span key={detail}>{detail}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PublicationsSection_Research
