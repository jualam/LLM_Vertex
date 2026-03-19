import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  }
};

const cards = [
  [
    "AI Startups & LLM Developers",
    "Build smarter multilingual AI, faster, fairer, and ready to scale."
  ],
  [
    "Academic Researchers",
    "Advance language equity with reproducible, impactful AI research."
  ],
  [
    "NGOs & Non-profits",
    "Advance inclusion through AI adoption research and workforce training."
  ],
  [
    "Government & Public Sector",
    "Deploy responsible AI with fairness, policy alignment, and workforce training for real-world impact."
  ]
];

const partnerServices = [
  {
    title: "Multilingual Data & AI Development",
    description:
      "Consent-driven data, annotation, evaluation, and model tuning for inclusive AI."
  },
  {
    title: "Agentic AI & Custom Solutions",
    description:
      "Design and deploy intelligent AI systems to automate workflows and support decision-making."
  },
  {
    title: "AI Adoption Research & Integration",
    description:
      "Research, readiness assessment, and support for responsible AI implementation."
  },
  {
    title: "Workforce Training & Development",
    description:
      "Hands-on training in AI tools, ethics, and workflows to build real-world capability."
  },
  {
    title: "AI-Powered EdTech Solutions",
    description:
      "Custom AI tools for teaching, learning, and academic performance."
  },
  {
    title: "Responsible AI Policy & Governance",
    description:
      "Guidance on fairness, risk review, governance, and policy-aligned AI deployment."
  }
];

export default function WhoWeServe() {
  return (
    <div className="relative overflow-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-gradient-to-br from-cyan-400/30 via-indigo-500/20 to-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-amber-300/30 via-rose-400/20 to-sky-400/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-4xl font-extrabold tracking-tight md:text-5xl">
            Who We Serve
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
            We support academia and organizations in building ethical, inclusive, and multilingual AI. We also conduct AI adoption research and provide workforce training for public and private institutions, as well as mission-driven NGOs.
          </motion.p>
          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300">
            <div className="h-full w-full animate-pulse rounded-full bg-white/40" />
          </motion.div>
        </motion.div>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-6 md:grid-cols-2"
        >
          {cards.map(([title, body]) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-amber-100 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{body}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14"
        >
          <motion.h2 variants={item} className="text-center text-2xl font-semibold text-slate-900 md:text-3xl">
            What We Do for Our Partners
          </motion.h2>
          <motion.p variants={item} className="mx-auto mt-3 max-w-3xl text-center text-base leading-relaxed text-slate-600">
            Practical support for multilingual AI, adoption research, and workforce development.
          </motion.p>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {partnerServices.map((service) => (
              <motion.article
                key={service.title}
                variants={item}
                className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className="py-2 px-4 text-center rounded-xl bg-slate-100 text-xs font-semibold uppercase tracking-[0.16em] text-slate-600">
                  {service.title.split(" ")[0]}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug text-slate-900">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {service.description}
                </p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12"
        >
          <motion.h2 variants={item} className="text-center text-2xl font-semibold md:text-3xl">
            Industries & Regions
          </motion.h2>
          <motion.p variants={item} className="mx-auto mt-2 max-w-3xl text-center text-slate-600">
            Strong coverage in low-resource languages across education, public services, health, and civic tech.
          </motion.p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              "Education & EdTech",
              "Civic & GovTech",
              "Healthcare & Public Health",
              "Humanitarian & Social Impact",
              "Search & Assistant Apps",
              "Fintech & Customer Ops"
            ].map((entry) => (
              <motion.div
                key={entry}
                variants={item}
                className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700"
              >
                {entry}
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
