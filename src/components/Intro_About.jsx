import React from "react";

const Intro_About = () => {
  return (
    <div className="md:col-span-12 mb-12">
      <span className="text-label-caps font-label-caps text-secondary mb-4 block tracking-widest uppercase">
        About
      </span>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
        <div className="md:col-span-5 mb-8 md:mb-0">
          <img
            className="w-full aspect-[4/5] object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-500"
            data-alt="Professional headshot of a South Asian male professor, Dr. Adeel Arif, wearing a navy blue blazer and tie. He has a neatly trimmed beard and a warm, approachable smile. The lighting is soft and professional, set against a blurred, muted background hinting at an academic environment. The overall tone is authoritative yet welcoming, fitting an academic editorial style."
            src="https://lh3.googleusercontent.com/aida/AP1WRLsywLSXj8hFZRLe0YO8unNZKHuhbcY_hbD3IFqKps49jBhwQmRAyHha_fQM83d6aDs16sO0RHj0UZs95AFXQ6hwFIUMoaO3fRbIVS3lqgi-rqMeAz6wMvI2qGwZ2Rq6vcsOBFzvKgQGt_gga5ygroEl3ENKjOVpj-p7GqC5IZT1j2m6ovMRhC2jkL82Cd6JjWyjbFEKkcboQLTCn3_eyLqHDfJxfbkaC2XsQzx7pwu_3XZgnjWxIt5asVw"
          />
        </div>

        <div className="md:col-span-7 prose prose-lg text-on-surface max-w-none">
          <p className="text-body-lg font-body-lg mb-6 leading-relaxed">
            Dr. Adeel Arif is an Assistant Professor at the Faculty of
            Information Technology, University of Central Punjab (UCP), where he
            has served in various academic and research roles since 2011. He
            completed his PhD in Electrical Engineering at Shanghai Jiao Tong
            University (SJTU), Shanghai, China â€” ranked 47th globally in the
            QS World University Rankings 2026 â€” as part of the IRMV Lab in the
            Department of Automation, SEIEE.
          </p>
          <p className="text-body-lg font-body-lg mb-6 leading-relaxed">
            His doctoral research focused on vision-based finite-time tracking
            control of quadrotors for autonomous landing on moving and tilting
            platforms, work that has been published in leading journals
            including IEEE Transactions on Circuits and Systems I and Robotics
            and Autonomous Systems.
          </p>
          <p className="text-body-lg font-body-lg mb-6 leading-relaxed">
            Before and during his PhD, Dr. Arif built a strong foundation in
            electrical engineering education and research at UCP, progressing
            from Teaching Assistant and Lab Engineer to Lecturer and Assistant
            Professor. He has supervised over 19 undergraduate projects spanning
            robotics, computer vision, machine learning, and embedded systems,
            and has been recognized twice as Best Project Supervisor.
          </p>
          <p className="text-body-lg font-body-lg leading-relaxed">
            He is a member of the Pakistan Engineering Council, IEEE, and IEEP,
            and remains actively engaged in academic service, curriculum
            development, and student mentorship at UCP.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro_About;
