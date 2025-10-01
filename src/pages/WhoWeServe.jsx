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
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
};

export default function WhoWeServe() {
  const cards = [
    ["AI Startups & LLM Developers", "Curated multilingual datasets, evaluation, and tuning support."],
    ["Academic Researchers", "Language equity, low‑resource corpora, and reproducible evaluations."],
    ["NGOs & Non‑profits", "Culturally‑aware data for inclusion and access initiatives."],
    ["Government & Public Sector", "Policy‑aligned datasets and fairness‑focused project support."],
  ];

  const useCases = [
    {
      title: "Multilingual Data Pipelines",
      points: [
        "Collection with consent and policy alignment",
        "Dialect‑aware annotation & quality assurance",
        "Red‑teaming for safety and bias"
      ]
    },
    {
      title: "Model Evaluation & Alignment",
      points: [
        "Benchmarks for underrepresented languages",
        "Human‑in‑the‑loop evals with cultural nuance",
        "Fine‑tuning partnerships"
      ]
    },
    {
      title: "Workforce Training",
      points: [
        "International student talent (OPT/CPT)",
        "Up‑skilling on tools, ethics, and QA",
        "Deployment‑ready AI data engineers"
      ]
    }
  ];

  const stats = [
    ["45+", "languages & dialects"],
    ["10k+", "hours of labeled data"],
    ["95%", "QA accuracy on gold sets"],
    ["100%", "policy‑aligned workflows"]
  ];

  return (
    <div className="relative overflow-clip">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/30 via-indigo-500/20 to-fuchsia-500/20" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-300/30 via-rose-400/20 to-sky-400/20" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight">Who We Serve</motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed">
            We support organizations building ethical, inclusive, and multilingual AI  from early stage startups to public institutions and mission driven NGOs.
          </motion.p>
          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300">
            <div className="h-full w-full bg-white/40 animate-pulse rounded-full" />
          </motion.div>
        </motion.div>

        {/* Audience Cards */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10 grid md:grid-cols-2 gap-6">
          {cards.map(([title, body]) => (
            <motion.div
              key={title}
              variants={item}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-amber-100" />
              <h3 className="font-semibold text-lg">{title}</h3>
              <p className="text-slate-600 mt-2 text-sm">{body}</p>
              {/* <div className="mt-4 inline-flex items-center text-sm font-medium text-slate-900/70 group-hover:text-slate-900">
                Learn more
                <svg className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 20 20" fill="currentColor"><path d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"/></svg>
              </div> */}
            </motion.div>
          ))}
        </motion.section>

        {/* Use Cases */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">What We Do for Our Partners</motion.h2>
          <motion.p variants={item} className="text-center text-slate-600 mt-2 max-w-3xl mx-auto">Practical collaborations that combine culture, language, and technology.</motion.p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {useCases.map((u) => (
              <motion.div key={u.title} variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="font-semibold text-lg">{u.title}</h3>
                <ul className="mt-3 space-y-2 text-slate-700">
                  {u.points.map((p) => (<li key={p}>• {p}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Impact Stats */}
        {/* <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">Impact Snapshot</motion.h2>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {stats.map(([num, label]) => (
              <motion.div key={label} variants={item} className="rounded-2xl border border-slate-200 bg-white py-6 text-center shadow-sm">
                <div className="text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500">{num}</div>
                <div className="mt-1 text-slate-600 text-sm">{label}</div>
              </motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* Industries & Regions */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">Industries & Regions</motion.h2>
          <motion.p variants={item} className="text-center text-slate-600 mt-2 max-w-3xl mx-auto">Strong coverage in low‑resource languages across education, public services, health, and civic tech.</motion.p>
          <div className="mt-6 grid md:grid-cols-3 gap-4">
            {["Education & EdTech","Civic & GovTech","Healthcare & Public Health","Humanitarian & Social Impact","Search & Assistant Apps","Fintech & Customer Ops"].map((x) => (
              <motion.div key={x} variants={item} className="rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700">
                {x}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Logos Placeholder */}
        {/* <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.h2 variants={item} className="text-2xl md:text-3xl font-semibold text-center">Selected Partners</motion.h2>
          <motion.p variants={item} className="text-center text-slate-600 mt-2">Add your partner logos here.</motion.p>
          <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4,5,6,7,8].map((i) => (
              <motion.div key={i} variants={item} className="aspect-[3/2] rounded-xl border border-dashed border-slate-300 bg-white/70 backdrop-blur flex items-center justify-center text-slate-400 text-sm">Logo {i}</motion.div>
            ))}
          </div>
        </motion.section> */}

        {/* CTA */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.div variants={item} className="relative overflow-hidden rounded-2xl bg-slate-900 text-slate-100 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(800px_220px_at_0%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(700px_200px_at_100%_100%,rgba(244,114,182,0.12),transparent)]" />
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-semibold">Let’s build AI for everyone</h3>
              <p className="mt-2 text-slate-300">Partner with LLM Vertex to create data and evaluations that reflect the world’s true diversity.</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {/* White button with black text */}
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-medium bg-white text-black hover:bg-slate-100 transition"
                >
                  Start a Conversation
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
