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
      <h2 className="mb-8 border-b border-slate-200 pb-4 font-serif text-3xl font-semibold text-slate-950">
        Projects Supervised
      </h2>

      <div className="mb-8 flex gap-6 overflow-x-auto border-b border-slate-200 pb-2">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;

          return (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`whitespace-nowrap border-b-2 pb-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors ${
                isActive
                  ? "border-teal-700 text-teal-700"
                  : "border-transparent text-slate-600 hover:text-teal-700"
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
            className="flex min-h-40 flex-col justify-between rounded border border-slate-200 bg-slate-50 p-6 transition-colors hover:border-teal-700"
          >
            <p className="leading-tight text-slate-950">{project.title}</p>

            <span className="mt-4 text-xs font-semibold uppercase tracking-[0.1em] text-teal-700/70">
              {categoryLabels[project.category]}
            </span>
          </article>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSupervised_Teachings