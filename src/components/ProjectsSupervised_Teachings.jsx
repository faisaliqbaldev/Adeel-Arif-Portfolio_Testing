import React from 'react'
import { useState } from 'react';

const ProjectsSupervised_Teachings = () => {
    const categories = [
  { id: "all", label: "All" },
  { id: "robotics", label: "Robotics & Vision" },
  { id: "ai", label: "AI & Machine Learning" },
  { id: "embedded", label: "Embedded, IoT & Control" },
  { id: "security", label: "Security & Web" },
];

const projects = [
  { title: "Vision Based Navigation Module for Robots in Soccer Field", category: "robotics" },
  { title: "Fire Fighting Robot", category: "robotics" },
  { title: "Cancerous Cell Segmentation Application", category: "ai" },
  { title: "Smart Barbie: Your Child's AI Learning Buddy", category: "ai" },
  { title: "Adaptive Traffic Light Control System", category: "embedded" },
  { title: "Finger Print Recognition Attendance System", category: "security" },
];

const categoryLabels = {
  robotics: "Robotics & Vision",
  ai: "AI & Machine Learning",
  embedded: "Embedded, IoT & Control",
  security: "Security & Web",
};
const [activeCategory, setActiveCategory] = useState("all");

  const visibleProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="mb-24">
      <h2 className="mb-8 border-b border-border-subtle pb-4 font-display text-section-heading-mobile text-primary md:text-section-heading">
        Projects Supervised
      </h2>

      <div className="mb-8 flex gap-6 overflow-x-auto border-b border-border-subtle pb-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap border-b-2 pb-2 text-ui font-ui transition-colors ${
                isActive
                  ? "border-secondary text-secondary"
                  : "border-transparent text-on-surface-variant hover:text-secondary"
              }`}
            >
              {category.label}
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="flex min-h-40 flex-col justify-between rounded-DEFAULT border border-border-subtle bg-surface-container-low p-6 transition-colors hover:border-secondary"
          >
            <p className="text-lead font-body text-primary">{project.title}</p>

            <span className="mt-4 text-label font-ui uppercase tracking-[0.08em] text-secondary">
              {categoryLabels[project.category]}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSupervised_Teachings
