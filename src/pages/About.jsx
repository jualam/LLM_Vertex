import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export default function About() {
  const pillars = [
    ["Inclusion", "Centering cultures and languages beyond the usual datasets."],
    ["Ethics", "Responsible sourcing, consent, and privacy‑first practices."],
    ["Quality", "Layered QA with bilingual reviewers and spot checks."],
    ["Empowerment", "Training and upskilling international talent (OPT/CPT)."],
    ["Innovation", "Practical tooling and workflows for faster iteration."],
    ["Partnership", "We meet you where you are: research or production."]
  ];

  const stats = [
    ["45+", "languages & dialects"],
    ["10k+", "hours of labeled data"],
    ["95%", "QA accuracy on gold sets"],
    ["100%", "policy‑aligned workflows"]
  ];

  const timeline = [
    { year: "2023", title: "Founding", text: "Started LLM Vertex to bring underrepresented languages into AI." },
    { year: "2024", title: "Workforce Program", text: "Launched training for international students with OPT/CPT pathways." },
    { year: "2025", title: "Global Coverage", text: "Scaled low‑resource language coverage and launched evaluation suites." }
  ];

  return (
    <div className="relative overflow-clip">
      {/* Ambient gradient */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/30 via-indigo-500/20 to-fuchsia-500/20" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-300/30 via-rose-400/20 to-sky-400/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <motion.header variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight">About LLM Vertex</motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed">
            We’re building a more inclusive and ethical AI ecosystem by creating high‑quality, culturally‑aware datasets and empowering a diverse AI workforce. Our mission is to ensure underrepresented voices, cultures, and languages shape the future of AI.
          </motion.p>
          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300">
            <div className="h-full w-full bg-white/40 animate-pulse rounded-full" />
          </motion.div>
        </motion.header>

        {/* Our Story */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10">
          <motion.div variants={item} className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.15)]">
            <h2 className="text-xl md:text-2xl font-semibold">Our Story</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              LLM Vertex began with a simple belief: language carries stories and identities that deserve to be reflected in the systems shaping our future. As AI adoption accelerates, many cultures remain unseen in training data and evaluations. We partner with multilingual talent—especially international students—to build fair, culturally nuanced datasets and evaluation pipelines.
            </p>
          </motion.div>
        </motion.section>

        {/* Pillars */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10 grid md:grid-cols-3 gap-6">
          {pillars.map(([title, body]) => (
            <motion.div key={title} variants={item} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-amber-100" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{body}</p>
            </motion.div>
          ))}
        </motion.section>

        {/* Impact Stats */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">Impact Snapshot</motion.h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(([num, label]) => (
              <motion.div key={label} variants={item} className="rounded-2xl border border-slate-200 bg-white py-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500">{num}</div>
                <div className="mt-1 text-slate-600 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* How We Work */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12 grid md:grid-cols-2 gap-6">
          <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg">How We Work</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Consent‑driven collection with clear policy alignment.</li>
              <li>• Dialect‑aware annotation, layered QA, and gold‑set checks.</li>
              <li>• Human‑in‑the‑loop evaluation with cultural nuance.</li>
              <li>• Fine‑tuning and red‑teaming for safer models.</li>
            </ul>
          </motion.div>
          <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h3 className="font-semibold text-lg">Commitments</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Privacy by default; minimal data retention.</li>
              <li>• Clear contributor attribution where applicable.</li>
              <li>• Transparency in data provenance and tooling.</li>
              <li>• Continuous training and ethics workshops.</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* Timeline */}
        {/* <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">Milestones</motion.h2>
          <div className="mt-6 relative">
            <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 h-full w-[3px] bg-slate-200" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <motion.div key={t.year} variants={item} className={`relative md:grid md:grid-cols-2 md:gap-8 ${i % 2 ? "md:text-left" : "md:text-right"}`}>
                  <div className={`md:col-span-1 ${i % 2 ? "md:order-2" : ""}`}>
                    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                      <div className="text-sm font-medium text-slate-500">{t.year}</div>
                      <div className="text-lg font-semibold mt-1">{t.title}</div>
                      <p className="text-slate-600 mt-2 text-sm">{t.text}</p>
                    </div>
                  </div>
                  <div className={`hidden md:block md:col-span-1 ${i % 2 ? "md:order-1" : ""}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section> */}

        {/* CTA */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.div variants={item} className="relative overflow-hidden rounded-2xl bg-slate-900 text-slate-100 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(800px_220px_at_0%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(700px_200px_at_100%_100%,rgba(244,114,182,0.12),transparent)]" />
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-semibold">Let’s build AI for everyone</h3>
              <p className="mt-2 text-slate-300">Partner with us to create datasets, evaluations, and training programs that honor the world’s linguistic and cultural diversity.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {/* White button with black text */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-white text-black hover:bg-slate-100 transition"
                >
                  Contact Us
                </a>

                {/* Secondary outline button */}
                <a
                  href="/who-we-serve"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm text-white-700 hover:text-black hover:bg-slate-50 transition"
                >
                  Explore Services
                </a>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
