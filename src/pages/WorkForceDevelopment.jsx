import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.08 }
  }
};

const item = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  }
};

const float = (delay = 0) => ({
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: [10, -8, 10],
    scale: 1,
    transition: { delay, duration: 8, repeat: Infinity, ease: "easeInOut" }
  }
});

const trainingAreas = [
  "Data quality, labeling, and annotation workflows",
  "AI evaluation and real-world quality review practices",
  "Prompt engineering and working with large language models",
  "Ethical, responsible, and human-centered AI",
  "Exposure to AI tools and industry workflows without deep coding requirements"
];

const disciplines = [
  "Communication and media",
  "Business and management",
  "Social sciences",
  "Humanities",
  "Computer science and engineering"
];

const supportAreas = [
  "One-on-one career consultation and mentorship",
  "Resume and CV building tailored to AI roles",
  "LinkedIn profile optimization",
  "Portfolio and project development",
  "Mock interviews for technical and behavioral rounds"
];

const differentiators = [
  {
    title: "Accessible by Design",
    body:
      "The program is built for motivated students and graduates from many disciplines, not only technical majors."
  },
  {
    title: "Practical, Not Abstract",
    body:
      "We emphasize applied AI work that connects directly to how teams operate in industry today."
  },
  {
    title: "Career-Focused Support",
    body:
      "Training is paired with mentorship, profile development, and interview preparation so students are job ready."
  }
];

const outcomes = [
  "Build a credible, AI-aligned professional profile",
  "Gain practical experience with current AI tools and workflows",
  "Position yourself for internships, OPT/CPT pathways, and early-career roles",
  "Stand out for opportunities at startups and leading AI companies"
];

export default function WorkForceDevelopment() {
  return (
    <div className="relative overflow-clip">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-36 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-br from-cyan-400/35 via-sky-500/20 to-indigo-500/20" />
        <div className="absolute top-1/3 -right-24 h-[24rem] w-[24rem] rounded-full blur-3xl bg-gradient-to-bl from-amber-300/30 via-rose-400/20 to-fuchsia-500/20" />
        <div className="absolute -bottom-40 left-1/3 h-[24rem] w-[24rem] rounded-full blur-3xl bg-gradient-to-tr from-emerald-300/25 via-cyan-300/20 to-white/0" />
      </div>

      <motion.span
        variants={float(0.1)}
        initial="hidden"
        animate="show"
        className="absolute left-8 top-12 size-16 rounded-full bg-cyan-400/30 blur-xl"
      />
      <motion.span
        variants={float(0.5)}
        initial="hidden"
        animate="show"
        className="absolute right-10 top-28 size-24 rounded-full bg-amber-300/30 blur-xl"
      />
      <motion.span
        variants={float(0.9)}
        initial="hidden"
        animate="show"
        className="absolute left-1/4 bottom-12 size-14 rounded-full bg-fuchsia-400/25 blur-lg"
      />

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <motion.section
          variants={container}
          initial="hidden"
          animate="show"
          className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center"
        >
          <div>
            <motion.div variants={item} className="inline-flex items-center rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-xs font-medium text-slate-600 backdrop-blur">
              Workforce Development Program
            </motion.div>
            <motion.h1 variants={item} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-950">
              Prepare for an AI career with practical training, mentorship, and real career support
            </motion.h1>
            <motion.p variants={item} className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-slate-600">
              At LLM Vertex Workforce Development, we prepare motivated students and recent graduates to enter and succeed in the fast growing field of Artificial Intelligence. The program is designed for all disciplines, making AI career pathways accessible, practical, and achievable.
            </motion.p>
            <motion.p variants={item} className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Whether you are a domestic student or an international student, including F-1 OPT or CPT candidates, we provide the skills, guidance, and career support needed to become competitive in today&apos;s AI job market.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Talk to Us
              </Link>
              <Link
                to="/services"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
              >
                Explore Related Services
              </Link>
            </motion.div>
          </div>

          <motion.div variants={item} className="relative">
            <div className="rounded-[28px] border border-slate-200/80 bg-white/80 p-5 shadow-[0_10px_50px_-12px_rgba(2,6,23,0.16)] backdrop-blur">
              <div className="rounded-3xl bg-slate-950 p-6 text-white">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm uppercase tracking-[0.18em] text-slate-400">Program Snapshot</p>
                    <h2 className="mt-2 text-2xl font-semibold">Built for career momentum</h2>
                  </div>
                  <div className="rounded-2xl bg-white/10 px-4 py-3 text-right">
                    <div className="text-2xl font-bold">AI</div>
                    <div className="text-xs text-slate-300">practical track</div>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-slate-200">For who</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      Students, recent graduates, domestic applicants, and international students pursuing structured AI career growth.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-slate-200">Learning style</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      Applied, industry-aware, and intentionally not code heavy so diverse academic backgrounds can thrive.
                    </p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:col-span-2">
                    <div className="text-sm font-semibold text-slate-200">Career promise</div>
                    <p className="mt-2 text-sm leading-relaxed text-slate-300">
                      We help you strengthen your profile with mentorship, portfolio guidance, interview prep, and exposure to employer-aligned opportunities.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {differentiators.map((entry, index) => (
            <motion.div
              key={entry.title}
              variants={item}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              <div
                className={`absolute inset-0 -z-10 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${
                  [
                    "bg-gradient-to-br from-cyan-100 via-sky-100 to-indigo-100",
                    "bg-gradient-to-br from-amber-100 via-rose-100 to-fuchsia-100",
                    "bg-gradient-to-br from-emerald-100 via-cyan-100 to-teal-100"
                  ][index]
                }`}
              />
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                0{index + 1}
              </div>
              <h2 className="text-lg font-semibold text-slate-900">{entry.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{entry.body}</p>
            </motion.div>
          ))}
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]"
        >
          <motion.div variants={item} className="rounded-3xl border border-slate-200/80 bg-white/80 p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.14)] backdrop-blur">
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Practical, real-world AI training</h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              Our program is intentionally designed to be not heavily code focused, so students from diverse academic backgrounds can succeed. We concentrate on applied, industry relevant capabilities that help you contribute in the AI domain without needing deep programming expertise.
            </p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {trainingAreas.map((point) => (
                <div key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 p-4 text-sm leading-relaxed text-slate-700">
                  {point}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-3xl border border-slate-200 bg-slate-900 p-6 md:p-8 text-slate-100 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.22)]">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-400">AI Training for All Disciplines</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold">Your background can become your advantage</h2>
            <p className="mt-4 leading-relaxed text-slate-300">
              We believe AI is not only for engineers. We help students connect their existing background with meaningful AI applications so their profile becomes both unique and valuable in the job market.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {disciplines.map((discipline) => (
                <span
                  key={discipline}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200"
                >
                  {discipline}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <motion.div variants={item} className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Personalized Career Support</p>
            <h2 className="mt-3 text-2xl md:text-3xl font-semibold text-slate-950">Training plus hands-on career development</h2>
            <p className="mt-4 leading-relaxed text-slate-600">
              We go beyond training by providing hands on career development support tailored to each student. The goal is to help you feel prepared, credible, and confident when applying for roles in the AI space.
            </p>
            <ul className="mt-6 space-y-3">
              {supportAreas.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50/70 px-4 py-3 text-sm text-slate-700">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-slate-900 text-[11px] font-semibold text-white">
                    +
                  </span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={item} className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-slate-50 to-cyan-50 p-6 md:p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">OPT and CPT Friendly</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">Support for international students with employer alignment</h2>
              <p className="mt-4 leading-relaxed text-slate-600">
                For international students on F-1 visas, we provide structured support aligned with OPT and CPT pathways. We also continue developing an employer network that understands how to work with international students and support these opportunities.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
              <p className="text-sm uppercase tracking-[0.18em] text-slate-500">Become Competitive</p>
              <h2 className="mt-3 text-2xl font-semibold text-slate-950">A profile designed to stand out in the AI job market</h2>
              <ul className="mt-5 space-y-3">
                {outcomes.map((point) => (
                  <li key={point} className="rounded-2xl border border-slate-200 bg-slate-50/80 px-4 py-3 text-sm text-slate-700">
                    {point}
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-relaxed text-slate-600">
                With the right preparation and support, students can grow into strong candidates for opportunities at innovative startups and leading AI companies such as OpenAI, Google, Microsoft, and Meta.
              </p>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12"
        >
          <motion.div variants={item} className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-8 md:px-8 md:py-10 text-slate-100">
            <div className="absolute inset-0 bg-[radial-gradient(900px_300px_at_0%_0%,rgba(34,211,238,0.15),transparent),radial-gradient(700px_240px_at_100%_100%,rgba(251,191,36,0.14),transparent)]" />
            <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm uppercase tracking-[0.2em] text-slate-400">Who Should Apply</p>
                <h2 className="mt-3 text-2xl md:text-3xl font-semibold">For serious students who want structured growth in AI</h2>
                <p className="mt-4 max-w-3xl leading-relaxed text-slate-300">
                  We are selective and committed to impact. This program is designed for students who are serious about building a professional career in the AI domain, willing to invest time and effort into growth, and ready to use structured guidance and mentorship to achieve long term success.
                </p>
              </div>

              <div className="grid gap-3">
                {[
                  "Motivated students and recent graduates",
                  "Applicants ready to invest time and effort",
                  "People seeking guidance, mentorship, and accountability",
                  "Candidates aiming for long-term AI career success"
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                  >
                    {point}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12"
        >
          <motion.div variants={item} className="rounded-3xl border border-slate-200 bg-white/85 p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.14)] backdrop-blur">
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-950">Ready to start your AI career journey?</h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-600">
                  Connect with us to learn more about the program, discuss fit, and take the next step toward becoming competitive in the AI job market.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
                >
                  Contact Us
                </Link>
                <Link
                  to="/careers"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
                >
                  Visit Careers
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
