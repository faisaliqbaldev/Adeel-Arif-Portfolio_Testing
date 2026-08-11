import React from 'react'

const CoursesCoordinated_Teachings = () => {
 const courses = [
    "Basic Electronics",
    "Discrete Structures",
    "Operations Research",
  ];

  return (
    <section className="mb-24">
      <h2 className="mb-8 border-b border-slate-200 pb-4 font-serif text-3xl font-semibold text-slate-950">
        Courses Coordinated
      </h2>

      <div className="flex flex-wrap gap-4">
        {courses.map((course) => (
          <span
            key={course}
            className="rounded border border-slate-200 bg-slate-950/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-950"
          >
            {course}
          </span>
        ))}
      </div>
    </section>
  );
}

export default CoursesCoordinated_Teachings