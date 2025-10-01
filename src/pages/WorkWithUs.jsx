import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const float = (delay = 0) => ({
  hidden: { opacity: 0, y: 10, scale: 0.95 },
  show: {
    opacity: 1,
    y: [10, -6, 10],
    scale: 1,
    transition: { delay, duration: 8, repeat: Infinity, ease: "easeInOut" }
  }
});

export default function WorkWithUs() {
  return (
    <div className="relative overflow-clip">
      {/* Ambient gradient background */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/40 via-indigo-500/30 to-fuchsia-500/30" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-300/40 via-rose-400/30 to-sky-400/30" />
      </div>

      {/* Decorative floating orbs */}
      <motion.span variants={float(0.2)} initial="hidden" animate="show" className="absolute left-6 top-8 size-16 rounded-full bg-cyan-400/40 blur-xl" />
      <motion.span variants={float(0.6)} initial="hidden" animate="show" className="absolute right-10 top-24 size-24 rounded-full bg-violet-400/40 blur-xl" />
      <motion.span variants={float(1.0)} initial="hidden" animate="show" className="absolute left-20 bottom-10 size-14 rounded-full bg-amber-300/40 blur-lg" />

      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight">
            Work With Us
          </motion.h1>
          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed">
            At LLM Vertex, we believe language is more than words. It carries stories, cultures, and identities that deserve to be heard in technologies shaping our future. Our mission is to bring underrepresented and low-resource languages into large language models, ensuring that AI reflects the true diversity of our world.
          </motion.p>
          {/* shimmering underline */}
          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300">
            <div className="h-full w-full bg-white/40 animate-pulse rounded-full" />
          </motion.div>
        </motion.div>

        {/* Mission */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }} className="mt-10">
          <motion.div variants={item} className="rounded-2xl border border-slate-200/80 bg-white/70 backdrop-blur p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.15)]">
            <h2 className="text-xl md:text-2xl font-semibold">Our Mission</h2>
            <p className="mt-3 text-slate-700 leading-relaxed">
              Every year, more than one million international students arrive in the United States to pursue higher education. Many of them come from regions where their languages and cultures remain invisible in today’s AI landscape. We see this as an incredible opportunity. By working with us, your knowledge and cultural perspective can help create language models that are more inclusive, more human, and more connected to the global community.
            </p>
          </motion.div>
        </motion.section>

        {/* Cards: Who, Benefits, Roles */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10 grid md:grid-cols-3 gap-6">
          {/* Who We’re Looking For */}
          <motion.div variants={item} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyan-100 via-fuchsia-100 to-amber-100" />
            <h3 className="font-semibold text-lg">Who We’re Looking For</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• International students on F1 visas seeking <span className="font-medium">OPT</span> or <span className="font-medium">CPT</span>.</li>
              <li>• Multilingual talent bringing unique cultural perspectives.</li>
              <li>• People passionate about inclusive, ethical AI.</li>
              <li>• Detail‑oriented contributors who love data quality.</li>
            </ul>
          </motion.div>

          {/* Benefits */}
          <motion.div variants={item} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-sky-100 via-violet-100 to-rose-100" />
            <h3 className="font-semibold text-lg">Why Join Us?</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• Hands‑on experience in AI data pipelines.</li>
              <li>• Meaningful impact on global language inclusion.</li>
              <li>• Support for <span className="font-medium">OPT/CPT</span> work authorization.</li>
              <li>• Mentorship, workshops, and growth paths.</li>
            </ul>
          </motion.div>

          {/* Roles & Tracks */}
          <motion.div variants={item} className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl">
            <div className="absolute inset-0 -z-10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-emerald-100 via-cyan-100 to-indigo-100" />
            <h3 className="font-semibold text-lg">Tracks & Roles</h3>
            <ul className="mt-3 space-y-2 text-slate-700">
              <li>• AI Data Engineer (collection, labeling, QA).</li>
              <li>• Language & Cultural Specialist (low‑resource coverage).</li>
              <li>• Eval & Red‑Teaming (safety, bias, cultural nuance).</li>
              <li>• Program Assistant (training, coordination).</li>
            </ul>
          </motion.div>
        </motion.section>

        {/* How to Apply */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-10">
          <motion.div variants={item} className="rounded-2xl border border-slate-200/80 bg-white/80 backdrop-blur p-6 md:p-8 shadow-[0_8px_40px_-12px_rgba(2,6,23,0.15)]">
            <h2 className="text-xl md:text-2xl font-semibold">How to Apply</h2>
            <ol className="list-decimal pl-5 mt-3 text-slate-700 space-y-2">
              <li>Prepare a one‑page resume (PDF preferred).</li>
              <li>Include contact info and the languages you speak.</li>
              <li>Share any relevant portfolio, GitHub, or writing samples.</li>
              <li>Submit via email or the form below. We’ll reach out after review.</li>
            </ol>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdh941YnHgePYvKWm6Zrbf_RwIWW16F0tVctIeI91gMqR8yGw/viewform?usp=sharing&ouid=113627358098737480565"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center overflow-hidden rounded-xl px-5 py-3 text-sm font-medium text-white bg-black hover:bg-slate-800 transition focus:outline-none"
              >
                  <span className="relative z-10">Submit Your Resume</span>
              </a>

              <Link
                to="/contact"
                className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-50"
              >
                Questions? Contact us
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* Join callout */}
        <motion.section variants={container} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }} className="mt-12">
          <motion.div variants={item} className="relative overflow-hidden rounded-2xl bg-slate-900 text-slate-100 p-6 md:p-8">
            <div className="absolute inset-0 bg-[radial-gradient(1000px_300px_at_0%_0%,rgba(56,189,248,0.15),transparent),radial-gradient(800px_200px_at_100%_100%,rgba(244,114,182,0.12),transparent)]" />
            <div className="relative">
              <h3 className="text-xl md:text-2xl font-semibold">Be part of the movement</h3>
              <p className="mt-2 text-slate-300">
                If you’re passionate about making an impact at the intersection of language, culture, and technology, join us in shaping the future of AI.
              </p>
            </div>
          </motion.div>
        </motion.section>
      </div>
    </div>
  );
}
