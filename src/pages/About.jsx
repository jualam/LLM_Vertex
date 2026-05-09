import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

export default function About() {
  const pillars = [
    ["Inclusion", "Centering cultures and languages beyond the usual datasets."],
    ["Ethics", "Responsible sourcing, consent, and privacy-first practices."],
    ["Quality", "Layered QA with bilingual reviewers and spot checks."],
    ["Empowerment", "Training and upskilling international talent (OPT/CPT)."],
    ["Innovation", "Practical tooling and workflows for faster iteration."],
    ["Partnership", "We meet you where you are: research or production."],
  ];

  const stats = [
    ["15+", "languages & dialects"],
    ["10k+", "hours of labeled data"],
    ["95%", "QA accuracy on gold sets"],
    ["100%", "policy-aligned workflows"],
  ];

  return (
    <main className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-6 md:pb-8 md:pt-10">
        <Motion.header variants={container} initial="hidden" animate="show" className="grid gap-8 lg:grid-cols-[1fr_.85fr] lg:items-start">
          <Motion.div variants={item} className="pt-12 pl-4 md:pt-14 md:pl-8">
            <h1 className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-5xl md:tracking-[-2px] lg:text-[56px]">
              About LLM Vertex
            </h1>
          </Motion.div>
          <Motion.div variants={item} className="rounded-[20px] bg-[#141414] p-6 md:p-8 lg:-ml-8">
            <p className="text-[18px] leading-[1.35] text-[#999999]">
              We're building a more inclusive and ethical AI ecosystem by creating high-quality,
              culturally-aware datasets and empowering a diverse AI workforce. Our mission is to ensure
              underrepresented voices, cultures, and languages shape the future of AI
            </p>
          </Motion.div>
        </Motion.header>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-5 pb-12 pt-6 md:pb-14 md:pt-8">
          <Motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[30px] bg-[linear-gradient(135deg,#6a4cf5_0%,#d44df0_52%,#ff7a3d_100%)] p-8 md:p-10"
          >
            <p className="text-[13px] font-medium uppercase text-white/70">Our Story</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              Language carries stories and identities.
            </h2>
            <p className="mt-5 max-w-4xl text-[18px] leading-[1.35] text-white/85">
              LLM Vertex began with a simple belief: language carries stories and identities that deserve
              to be reflected in the systems shaping our future. As AI adoption accelerates, many cultures
              remain unseen in training data and evaluations. We partner with multilingual talent-especially
              international students to build fair, culturally nuanced datasets and evaluation pipelines.
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.18 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {pillars.map(([title, body]) => (
            <Motion.div key={title} variants={item} className="rounded-[20px] bg-[#141414] p-6">
              <h3 className="text-[22px] font-medium leading-tight text-white">{title}</h3>
              <p className="mt-3 text-[14px] leading-[1.35] text-[#999999]">{body}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-14">
          <Motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="pl-4 md:pl-8"
          >
            <p className="text-[13px] font-medium uppercase text-[#999999]">Impact Snapshot</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              Measurable progress across data and quality.
            </h2>
          </Motion.div>
          <Motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4"
          >
            {stats.map(([num, label]) => (
              <Motion.div key={label} variants={item} className="rounded-[20px] bg-[#141414] p-6">
                <div className="text-4xl font-medium tracking-[-1px] text-white md:text-5xl">{num}</div>
                <div className="mt-3 text-[14px] leading-[1.35] text-[#999999]">{label}</div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-12 md:py-16">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-2"
        >
          <Motion.div variants={item} className="rounded-[20px] bg-[#141414] p-6 md:p-8">
            <h3 className="text-[24px] font-medium leading-tight text-white">How We Work</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-[1.35] text-[#999999]">
              <li className="border-t border-white/10 pt-3">Consent driven collection with clear policy alignment.</li>
              <li className="border-t border-white/10 pt-3">Dialect aware annotation, layered QA, and gold set checks.</li>
              <li className="border-t border-white/10 pt-3">Human in the loop evaluation with cultural nuance.</li>
              <li className="border-t border-white/10 pt-3">Fine tuning and red teaming for safer models.</li>
            </ul>
          </Motion.div>
          <Motion.div variants={item} className="rounded-[20px] bg-[#1c1c1c] p-6 md:p-8">
            <h3 className="text-[24px] font-medium leading-tight text-white">Commitments</h3>
            <ul className="mt-5 space-y-3 text-[15px] leading-[1.35] text-[#999999]">
              <li className="border-t border-white/10 pt-3">Privacy by default; minimal data retention.</li>
              <li className="border-t border-white/10 pt-3">Clear contributor attribution where applicable.</li>
              <li className="border-t border-white/10 pt-3">Transparency in data provenance and tooling.</li>
              <li className="border-t border-white/10 pt-3">Continuous training and ethics workshops.</li>
            </ul>
          </Motion.div>
        </Motion.div>
      </section>
    </main>
  );
}
