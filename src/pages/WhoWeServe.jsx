import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const cards = [
  [
    "AI Startups & LLM Developers",
    "Build smarter multilingual AI, faster, fairer, and ready to scale.",
  ],
  [
    "Academic Researchers",
    "Advance language equity with reproducible, impactful AI research.",
  ],
  [
    "NGOs & Non-profits",
    "Advance inclusion through AI adoption research and workforce training.",
  ],
  [
    "Government & Public Sector",
    "Deploy responsible AI with fairness, policy alignment, and workforce training for real-world impact.",
  ],
];

const partnerServices = [
  {
    title: "Multilingual Data & AI Development",
    description:
      "Consent-driven data, annotation, evaluation, and model tuning for inclusive AI.",
  },
  {
    title: "Agentic AI & Custom Solutions",
    description:
      "Design and deploy intelligent AI systems to automate workflows and support decision-making.",
  },
  {
    title: "AI Adoption Research & Integration",
    description:
      "Research, readiness assessment, and support for responsible AI implementation.",
  },
  {
    title: "Workforce Training & Development",
    description:
      "Hands-on training in AI tools, ethics, and workflows to build real-world capability.",
  },
  {
    title: "AI-Powered EdTech Solutions",
    description:
      "Custom AI tools for teaching, learning, and academic performance.",
  },
  {
    title: "Responsible AI Policy & Governance",
    description:
      "Guidance on fairness, risk review, governance, and policy-aligned AI deployment.",
  },
];

const industries = [
  "Education & EdTech",
  "Civic & GovTech",
  "Healthcare & Public Health",
  "Humanitarian & Social Impact",
  "Search & Assistant Apps",
  "Fintech & Customer Ops",
];

export default function WhoWeServe() {
  return (
    <main className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <style>{`
        @keyframes serveCardShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .serve-card-surface {
          background:
            radial-gradient(circle at 12% 15%, rgba(255,255,255,.08), transparent 28%),
            linear-gradient(135deg, #141414 0%, #1c1c1c 42%, #242424 58%, #141414 100%);
          background-size: 180% 180%;
          animation: serveCardShift 9s ease-in-out infinite;
        }
        .serve-card-surface:hover {
          animation: serveCardShift 9s ease-in-out infinite, serveCardBounce .55s ease;
        }
        @keyframes serveCardBounce {
          0%, 100% { transform: translateY(0) scale(1); }
          35% { transform: translateY(-8px) scale(1.015); }
          65% { transform: translateY(-3px) scale(1.006); }
        }
      `}</style>
      <section className="mx-auto max-w-7xl px-5 pb-5 pt-10 md:pb-6 md:pt-16">
        <Motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <Motion.h1
            variants={item}
            className="text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-6xl md:tracking-[-2.4px] lg:text-[64px]"
          >
            Who We Serve
          </Motion.h1>
          <Motion.p
            variants={item}
            className="mx-auto mt-6 max-w-4xl text-[20px] leading-[1.35] text-[#999999]"
          >
            We support academia and organizations in building ethical, inclusive, and multilingual AI.
            We also conduct AI adoption research and provide workforce training for public and private
            institutions, as well as mission-driven NGOs.
          </Motion.p>
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-2 md:py-14"
        >
          {cards.map(([title, body]) => (
            <Motion.div
              key={title}
              variants={item}
              className="serve-card-surface rounded-[20px] border border-[#262626] p-6 transition-transform will-change-transform"
            >
              <h3 className="text-[24px] font-medium leading-tight text-white">{title}</h3>
              <p className="mt-3 text-[15px] leading-[1.35] text-[#999999]">
                {body}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
        >
          <Motion.div variants={item} className="pl-4 md:pl-8">
            <p className="text-[13px] font-medium uppercase text-[#999999]">
              What We Do for Our Partners
            </p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              Practical support for multilingual AI, adoption research, and workforce development.
            </h2>
          </Motion.div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {partnerServices.map((service) => (
              <Motion.article
                key={service.title}
                variants={item}
                className="rounded-[20px] bg-[#141414] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#1c1c1c]"
              >
                <div className="w-fit rounded-full bg-[#1c1c1c] px-[14px] py-[8px] text-[12px] font-medium uppercase tracking-[.08em] text-[#999999]">
                  {service.title.split(" ")[0]}
                </div>
                <h3 className="mt-5 text-[22px] font-medium leading-tight text-white">
                  {service.title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.35] text-[#999999]">
                  {service.description}
                </p>
              </Motion.article>
            ))}
          </div>
        </Motion.div>
      </section>

      <section className="border-t border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14">
          <Motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
          >
            <Motion.div variants={item} className="pl-4 md:pl-8">
              <p className="text-[13px] font-medium uppercase text-[#999999]">Industries & Regions</p>
              <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
                Strong coverage across high-impact domains.
              </h2>
              <p className="mt-4 max-w-3xl text-[16px] leading-[1.35] text-[#999999]">
                Strong coverage in low-resource languages across education, public services,
                health, and civic tech.
              </p>
            </Motion.div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {industries.map((entry) => (
                <Motion.div
                  key={entry}
                  variants={item}
                  className="rounded-[15px] bg-[#141414] px-5 py-4 text-[15px] text-white"
                >
                  {entry}
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>
    </main>
  );
}
