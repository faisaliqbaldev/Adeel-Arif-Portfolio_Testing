import React from 'react'

const CoursesCoordinated_Teachings = () => {
 const courses = [
    "Basic Electronics",
    "Discrete Structures",
    "Operations Research",
  ];

  return (
    <section className="mb-24">
      <h2 className="mb-8 border-b border-border-subtle pb-4 font-display text-section-heading-mobile text-primary md:text-section-heading">
        Courses Coordinated
      </h2>

      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <span
            key={course}
            className="rounded-DEFAULT border border-border-subtle bg-secondary-container px-4 py-2 text-label font-ui uppercase tracking-[0.08em] text-primary"
          >
            {course}
          </span>
        ))}
      </div>
    </section>
  );
}

export default CoursesCoordinated_Teachings
