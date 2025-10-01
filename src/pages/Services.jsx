import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export default function Services() {
  const services = [
    {
      id: "multilingual",
      title: "Multilingual Text Data Services",
      bullets: [
        "Data collection & sourcing (consent‑driven, policy‑aligned)",
        "Annotation, labeling, & evaluation workflows",
        "Low‑resource language coverage & dialect‑aware design",
        "Quality metrics, bilingual reviewers, & audit trails"
      ],
      bg: "from-cyan-100 via-fuchsia-100 to-amber-100"
    },
    {
      id: "talent",
      title: "Trained AI Data Engineers",
      bullets: [
        "On‑demand staffing & training pipelines",
        "Multilingual, multicultural talent from varied nationalities",
        "Hands‑on experience with QA, red‑teaming, & evaluation",
        "Ethics, safety, and privacy training included"
      ],
      bg: "from-sky-100 via-violet-100 to-rose-100"
    },
    {
      id: "finetune",
      title: "Fine‑Tuning & AI Model Partnerships",
      bullets: [
        "Dataset prep, filtering, and balanced splits",
        "Task‑specific tuning with multilingual objectives",
        "Evaluation harness integration & reporting",
        "Pilot → Production handoff, documentation, and ops"
      ],
      bg: "from-emerald-100 via-cyan-100 to-indigo-100"
    }
  ];

  const steps = [
    ["Discover", "Goals, languages, constraints, success metrics"],
    ["Scope", "Data spec, ethics checklist, consent templates"],
    ["Build", "Collection, annotation, QA with bilingual reviewers"],
    ["Evaluate", "Bias, safety, cultural nuance, gold‑set checks"],
    ["Deploy", "Reports, docs, and production handoff"]
  ];

  const models = [
    ["Pilot Sprint", "2–4 weeks", "Fixed scope to validate value fast"],
    ["Managed Service", "Monthly", "We run end‑to‑end pipelines"],
    ["Embedded Team", "Hourly/FT", "Augment your team with our talent"],
  ];

  const faqs = [
    ["Which languages do you support?", "We focus on low‑resource languages and dialects; coverage grows continuously based on partner needs."],
    ["Do I need to be from a STEM background?", "No. you can be from any academic discipline. We value diverse perspectives."],
    ["Do you support OPT/CPT talent?", "Absolutely. Our workforce program onboards international students with compliance support."],
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
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight">Solutions & Services</motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed">
            Purpose‑built offerings aligned with our dual model: inclusive datasets and workforce training.
          </motion.p>
          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300">
            <div className="h-full w-full bg-white/40 animate-pulse rounded-full" />
          </motion.div>
        </motion.div>

        {/* Service Cards */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <motion.section key={s.id} id={s.id} variants={item} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
              <div className={`absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br ${s.bg}`} />
              <h2 className="font-semibold text-lg">{s.title}</h2>
              <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-1">
                {s.bullets.map((b) => (<li key={b}>{b}</li>))}
              </ul>
              {/* <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900/70 group-hover:text-slate-900">
                Learn more
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/></svg>
              </div> */}
            </motion.section>
          ))}
        </motion.section>

        {/* Process Steps */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">How We Deliver</motion.h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-5 gap-4">
            {steps.map(([t, d], i) => (
              <motion.div key={t} variants={item} className="relative rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm">
                <div className="mx-auto mb-2 h-8 w-8 flex items-center justify-center rounded-full bg-black text-white text-sm font-bold">{i+1}</div>
                <div className="font-semibold">{t}</div>
                <div className="mt-1 text-slate-600 text-sm">{d}</div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Engagement Models */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">Engagement Models</motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {models.map(([name, time, desc]) => (
              <motion.div key={name} variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="text-lg font-semibold">{name}</div>
                <div className="text-slate-500 text-sm mt-1">{time}</div>
                <p className="text-slate-700 mt-3 text-sm">{desc}</p>
                {/* <a href="/contact" className="mt-4 inline-flex items-center text-sm font-medium text-slate-900/70 hover:text-slate-900">Discuss this model →</a> */}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* FAQs */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">FAQs</motion.h2>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {faqs.map(([q,a]) => (
              <motion.div key={q} variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="font-semibold">{q}</div>
                <p className="text-slate-700 mt-2 text-sm">{a}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        
      </div>
    </div>
  );
}
