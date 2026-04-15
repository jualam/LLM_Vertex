import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const packageHighlights = {
  foundation: [
    "AI career roadmap for early job-search direction",
    "30-minute 1:1 strategy session",
    "Resume review tailored to AI roles",
    "Guidance on higher studies vs job market"
  ],
  "career-builder": [
    "Hands-on AI project aligned with your background",
    "LinkedIn, resume, and CV transformation",
    "Two focused mentorship sessions",
    "Two mock interviews for technical and behavioral prep"
  ],
  "professional-accelerator": [
    "Weekly 1:1 mentorship for 6 weeks",
    "Two advanced portfolio projects",
    "Structured job search with application tracking",
    "Recruiter visibility and OPT-friendly opportunity guidance"
  ],
  "elite-career-launch": [
    "Weekly 1:1 mentorship for 9 weeks",
    "Dedicated career advisor and customized strategy",
    "Unlimited mock interviews until fully prepared",
    "High-touch support for applications and positioning"
  ]
};

const labelClass = "text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-500";

const getOriginalPrice = (discountedPrice, discountLabel) => {
  const percent = Number.parseFloat(discountLabel);
  if (!Number.isFinite(percent) || percent <= 0 || percent >= 100) return null;

  const originalPrice = discountedPrice / (1 - percent / 100);
  return Math.round(originalPrice);
};


export default function Packages({ container, item, packageCatalog, sectionTitle }) {
  return (
    <motion.section
      id="packages"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className="mt-14"
    >
      <motion.div variants={item} className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Packages</p>
        <h2 className={`mt-3 ${sectionTitle}`}>Choose the package that matches your career stage</h2>
        <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600 md:text-base md:leading-8">
          Explore the package structure clearly by stage, support level, and expected outcomes so it feels easy to compare what fits you best.
        </p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
          All sessions, mentorship, and program activities are conducted online, and each package below shows the current offer for easier comparison.
        </p>
      </motion.div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 2xl:grid-cols-4">
        {packageCatalog.map((pkg, index) => (
          <motion.article
            key={pkg.slug}
            variants={item}
            className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br ${pkg.surface} p-4 shadow-[0_20px_60px_-35px_rgba(15,23,42,0.24)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.32)] md:p-5`}
          >
            <div className={`absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${pkg.accent}`} />
            <div
              className={`pointer-events-none absolute right-[-3rem] top-[-3rem] h-28 w-28 rounded-full bg-gradient-to-br ${pkg.accent} opacity-15 blur-3xl transition duration-300 group-hover:opacity-25`}
            />

            <div className="relative flex h-full flex-col">
              <div className="min-h-[190px]">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-slate-200 bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-slate-600">
                    {pkg.tier}
                  </span>
                  <span className="rounded-full bg-slate-950 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-white">
                    Stage 0{index + 1}
                  </span>
                </div>

                <h3 className="mt-4 text-[1.45rem] font-black leading-[1.2] tracking-tight text-slate-950 md:text-2xl">
                  {pkg.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{pkg.tagline}</p>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-1">
                <div className="flex min-h-[118px] flex-col rounded-[22px] border border-white/80 bg-white/88 p-4 shadow-[0_18px_50px_-32px_rgba(15,23,42,0.32)] backdrop-blur">
                  <div className="flex items-start justify-between">
                    <div className="mt-3">
                      <p className={labelClass}>Discounted Price</p>
                      <div className="mt-2 flex items-end gap-2.5">
                        <span className="text-3xl font-black tracking-tight text-slate-950 md:text-4xl">${pkg.discountedPrice}</span>
                        {getOriginalPrice(pkg.discountedPrice, pkg.discountLabel) && (
                          <span className="text-lg font-semibold text-slate-400 line-through">
                            ${getOriginalPrice(pkg.discountedPrice, pkg.discountLabel)}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                      {pkg.discountLabel}
                    </span>
                  </div>

                </div>

                <div className="flex min-h-[118px] flex-col rounded-[22px] border border-white/80 bg-white/80 p-4 backdrop-blur">
                  <p className={labelClass}>Includes</p>
                  <p className="mt-2 text-3xl font-black tracking-tight text-slate-950">{pkg.included.length}</p>
                  <p className="mt-auto pt-1 text-sm leading-6 text-slate-600">Core features in this package</p>
                </div>
              </div>

              <div className="mt-4">
                <p className={labelClass}>What you get</p>
                <div className="mt-3 space-y-2.5">
                  {(packageHighlights[pkg.slug] || pkg.included.slice(0, 4)).map((point) => (
                    <div key={point} className="flex gap-2.5">
                      <CheckCircle2 className="mt-1 h-4 w-4 flex-none text-emerald-600" />
                      <p className="text-sm leading-6 text-slate-700">{point}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4">
                <Link
                  to={`/work-force-development/package/${pkg.slug}`}
                  className={`inline-flex min-h-12 w-full items-center justify-center whitespace-nowrap rounded-2xl bg-gradient-to-r ${pkg.accent} px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition hover:scale-[1.01]`}
                >
                  View Details
                </Link>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}

