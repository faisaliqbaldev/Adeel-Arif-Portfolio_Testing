import React from 'react'

const Recognitions_Teachings = () => {
const awards = ["Best Project Supervisor Award — 2015", "Best Project Supervisor Award — 2016"];

  return (
    <section>
      <h2 className="mb-8 border-b border-slate-200 pb-4 font-serif text-3xl font-semibold text-slate-950">
        Recognition
      </h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {awards.map((award) => (
          <article
            key={award}
            className="flex min-h-56 flex-col justify-center rounded border border-slate-200 bg-slate-100 p-8"
          >
            <span className="mb-4 text-3xl text-teal-700">✦</span>

            <h3 className="mb-2 font-serif text-2xl font-semibold text-slate-950">
              {award}
            </h3>

            <p className="text-slate-600">Faculty of Engineering, UCP</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Recognitions_Teachings