import React from "react";

const HeroSection_Home = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop pt-24 pb-24 grid md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-7 space-y-2">
        <p className="hidden md:block text-label-caps font-label-caps text-secondary uppercase tracking-widest">
          ASSISTANT PROFESSOR · FACULTY OF INFORMATION TECHNOLOGY, UCP
        </p>
        <p className="md:hidden text-label-caps font-label-caps text-secondary uppercase tracking-widest">
          ASSISTANT PROFESSOR
        </p>
        <h1 className="text-display-lg-mobile md:text-display-lg font-display-lg-mobile md:font-display-lg text-primary leading-tight">
          Adeel Arif
        </h1>
        <p className="hidden md:block md:text-headline-md font-headline-md text-on-surface-variant">
          PhD in Electrical Engineering, Shanghai Jiao Tong University 
        </p>
        <p className="text-body-lg-mobile  md:hidden font-headline-md text-on-surface-variant">
          PhD in Electrical Engineering, Shanghai Jiao Tong University Interested in Vision based control systems for autonomous robotics
        </p>
        <p className="hidden md:block md:text-body-lg font-body-lg text-text-muted max-w-2xl">
          Vision-based control systems for autonomous robotics
        </p>
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a
            className="bg-secondary text-on-secondary px-8 py-4 rounded-DEFAULT font-label-caps text-label-caps hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
            href="#"
          >
            View CV / Download PDF
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
          <a
            className="border border-primary text-primary px-8 py-4 rounded-DEFAULT font-label-caps text-label-caps hover:bg-surface-container transition-colors inline-flex items-center gap-2"
            href="#research"
          >
            Explore Research
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center md:justify-end mt-12 md:mt-0">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-border-subtle shadow-sm bg-surface-ivory">
          {/* <!-- USING PLACEHOLDER IMAGE AS REQUESTED, but instruction said to use {{DATA:IMAGE:IMAGE_1}} if provided. Since none were in prompt's markdown list, I'll use a generic structural placeholder pattern as described in instructions to avoid standard alt-text --> */}
          <img
            className="w-full h-full object-cover"
            src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection_Home;
