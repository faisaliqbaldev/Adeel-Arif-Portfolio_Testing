import { motion } from 'framer-motion';
import { Award, BadgeCheck, Sparkles } from 'lucide-react';

const awards = [
  { year: '2015', title: 'Best Project Supervisor Award' },
  { year: '2016', title: 'Best Project Supervisor Award' },
];

const Recognitions_Teachings = () => {
  return (
    <section className="mb-24">
      <div className="mb-8 flex items-end justify-between gap-6 border-b border-border-subtle pb-4">
        <div>
          <span className="mb-2 flex items-center gap-2 text-label font-ui uppercase tracking-[0.12em] text-secondary">
            <Sparkles size={15} aria-hidden="true" />
            Recognition
          </span>
          <h2 className="font-display text-section-heading-mobile text-primary md:text-section-heading">
            Honours for teaching excellence
          </h2>
        </div>

        <Award className="hidden text-secondary sm:block" size={38} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <div className="flex flex-col gap-6">
        {awards.map((award, index) => (
          <motion.article
            key={award.year}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.12 }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-DEFAULT p-7 transition-colors hover:border-secondary"
          >
            <div className='flex'>
              <div className="flex h-full w-auto items-center justify-center rounded-full text-secondary">
                  <Award size={60} strokeWidth={1.7} aria-hidden="true" />
                </div>
            <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-secondary-container opacity-0 transition-opacity duration-300 group-hover:opacity-100" ></div>

            <div className="relative flex h-full w-full flex-col">
                <span className="absolute z-50 px-3 py-1 text-label font-ui tracking-[0.08em] text-on-surface-variant right-0">
                  {award.year}
                </span>
  

              <h3 className="max-w-sm font-display text-card-heading text-primary">
                {award.title}
              </h3>

              <div className="mt-6 flex items-center gap-2 text-body font-body text-on-surface-variant">
                <BadgeCheck size={18} className="shrink-0 text-secondary" aria-hidden="true" />
                <span>Faculty of Engineering, UCP</span>
              </div>
            </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Recognitions_Teachings;
