import React from "react";
import { motion } from "framer-motion";
import TypeWriterText_Typography from "./TypeWriterText_Typography";
const HeroSection_Home = () => {
  return (
    <section className="max-w-container-max mx-auto px-margin-phone md:px-margin-desktop pt-24 pb-24 grid md:grid-cols-12 gap-gutter items-center">
      <div className="md:col-span-7 space-y-2">
        
        {/* <h1 className="text-display-mobile md:text-display font-display text-primary">
          Adeel Arif
        </h1> */}
        <TypeWriterText_Typography text="Adeel Arif" />
        <p className="hidden md:block text-lead font-body text-on-surface-variant">
          PhD in Electrical Engineering, Shanghai Jiao Tong University 
        </p>
        <p className="text-lead-mobile md:hidden font-body text-on-surface-variant">
          PhD in Electrical Engineering, Shanghai Jiao Tong University Interested in Vision based control systems for autonomous robotics
        </p>
        <p className="hidden md:block text-body font-body text-text-muted max-w-2xl">
          Vision-based control systems for autonomous robotics
        </p>
        <div className="flex flex-wrap gap-4 pt-4 justify-center md:justify-start">
          <a
            className="bg-secondary text-on-secondary px-8 py-4 rounded-DEFAULT font-ui text-ui hover:bg-secondary/90 transition-colors inline-flex items-center gap-2"
            href="#"
          >
            View CV / Download PDF
            <span className="material-symbols-outlined text-sm">download</span>
          </a>
          <a
            className="border border-primary text-primary px-8 py-4 rounded-DEFAULT font-ui text-ui hover:bg-surface-container transition-colors inline-flex items-center gap-2"
            href="#research"
          >
            Explore Research
          </a>
        </div>
      </div>
      <div className="md:col-span-5 flex justify-center md:justify-end mt-12 md:mt-0">
        <div className="relative h-64 w-64 overflow-hidden rounded-full bg-surface-container p-1 shadow-sm md:h-80 md:w-80">
          <motion.div
            aria-hidden="true"
            className="absolute inset-[-50%]"
            style={{
              background:
                "conic-gradient(from 0deg, var(--color-primary), var(--color-secondary), var(--color-primary-fixed-dim), var(--color-secondary), var(--color-primary))",
            }}
            animate={{ rotate: 360 }}
            transition={{ duration: 4, ease: "linear", repeat: Infinity }}
          />
          <div className="relative z-10 h-full w-full overflow-hidden rounded-full bg-surface-ivory">
            <img
              className="h-full w-full object-cover"
              src="https://www.gstatic.com/labs-code/stitch/stitch-placeholder-300x300.svg"
              alt="Adeel Arif"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection_Home;
