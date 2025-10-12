import React, { useState } from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

export default function Investor() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    cityState: "",
    amount: "",
    njResident: "Yes",
    accredited: false,
    message: "",
    consent: true,
  });

  const onChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((f) => ({ ...f, [name]: type === "checkbox" ? checked : value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // Replace with your submit handler / API call
    alert("Thanks! Our team will reach out to you shortly.");
  };

  return (
    <div className="relative overflow-clip">
      {/* Ambient gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full blur-3xl bg-gradient-to-br from-cyan-400/25 via-indigo-500/15 to-fuchsia-500/15" />
        <div className="absolute -bottom-40 -right-40 h-[28rem] w-[28rem] rounded-full blur-3xl bg-gradient-to-tr from-amber-300/25 via-rose-400/15 to-sky-400/15" />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Hero */}
        <motion.header variants={container} initial="hidden" animate="show" className="text-center">
          <motion.div
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm shadow-sm"
          >
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            Up to 40% New Jersey Angel Investor Tax Credits
          </motion.div>

          <motion.h1 variants={item} className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight">
            Invest in LLM Vertex
          </motion.h1>

          <motion.p variants={item} className="mx-auto mt-4 max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed">
            We build inclusive AI through ethical, diverse datasets and workforce innovation.
            Eligible investors may receive significant New Jersey Angel Investor Tax Credits when
            they invest in LLM Vertex.
          </motion.p>

          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-amber-300">
            <div className="h-full w-full bg-white/40 animate-pulse rounded-full" />
          </motion.div>
        </motion.header>

        {/* Program Summary Cards */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={item} className="relative rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-br from-cyan-50 via-fuchsia-50 to-amber-50 opacity-0 group-hover:opacity-100" />
            <div className="flex items-start gap-3">
              <BadgeIcon />
              <div>
                <h3 className="font-semibold text-lg">Tax Credit Amount</h3>
                <p className="text-slate-600 mt-1 text-sm">
                  Receive tax credits of <span className="font-semibold">up to 40%</span> of your qualified investment:
                  <br />• <span className="font-medium">35%</span> base credit
                  <br />• <span className="font-medium">+5%</span> if the company is certified as an MBE
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <ShieldIcon />
              <div>
                <h3 className="font-semibold text-lg">State Initiative</h3>
                <p className="text-slate-600 mt-1 text-sm">
                  LLM Vertex is eligible under the <span className="font-medium">New Jersey Angel Investor Tax Credit Program</span>,
                  which promotes investment in emerging technology businesses.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-start gap-3">
              <TargetIcon />
              <div>
                <h3 className="font-semibold text-lg">Why It Matters</h3>
                <p className="text-slate-600 mt-1 text-sm">
                  Your investment supports innovation, job creation, and inclusive AI in New Jersey’s growing tech ecosystem.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* How it works + Eligibility */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12 grid lg:grid-cols-2 gap-6"
        >
          <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold">How It Works</h2>
            <ol className="mt-4 space-y-3 text-slate-700">
              <li className="flex gap-3">
                <StepDot>1</StepDot>
                <div>
                  <p className="font-medium">Connect with our team</p>
                  <p className="text-slate-600 text-sm">Share your info below and we’ll discuss allocation, timeline, and next steps.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <StepDot>2</StepDot>
                <div>
                  <p className="font-medium">Make a qualified investment</p>
                  <p className="text-slate-600 text-sm">Invest in LLM Vertex in alignment with NJ program requirements.</p>
                </div>
              </li>
              <li className="flex gap-3">
                <StepDot>3</StepDot>
                <div>
                  <p className="font-medium">Apply for state tax credit</p>
                  <p className="text-slate-600 text-sm">Investors submit to the NJEDA program to claim their applicable credit.</p>
                </div>
              </li>
            </ol>

            <div className="mt-6 rounded-xl border border-slate-200 bg-slate-50 p-4">
              <p className="text-sm text-slate-600">
                For official details, eligibility, deadlines, and FAQs, visit the{" "}
                <a
                  href="https://www.njeda.gov/angeltaxcredit/"
                  className="underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
                  target="_blank"
                  rel="noreferrer"
                >
                  New Jersey Economic Development Authority (NJEDA) website
                </a>.
              </p>
            </div>
          </motion.div>

          <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm">
            <h2 className="text-xl md:text-2xl font-semibold">Quick Eligibility Notes</h2>
            <ul className="mt-4 grid sm:grid-cols-2 gap-3 text-slate-700">
              {[
                "Investment must meet NJ program criteria",
                "Credits apply to qualified investments",
                "Base 35% credit; +5% if MBE",
                "Subject to NJEDA rules & limits",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <CheckIcon />
                  <span className="text-sm">{x}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-amber-900 text-sm">
              <strong>Note:</strong> Nothing here constitutes legal, tax, or investment advice. Please consult your advisors.
            </div>
          </motion.div>
        </motion.section>

        {/* Contact / Interest Form */}
        {/* <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12"
        >
          <motion.h2 variants={item} className="text-center text-2xl md:text-3xl font-semibold">
            Interested in Investing?
          </motion.h2>
          <motion.p variants={item} className="text-center text-slate-600 mt-2 max-w-3xl mx-auto">
            If you’re a New Jersey resident and would like to invest in LLM Vertex, share your details below and our team will reach out.
          </motion.p>

          <motion.form
            variants={item}
            onSubmit={onSubmit}
            className="mt-8 grid gap-4 rounded-2xl border border-slate-200 bg-white p-6 md:p-8 shadow-sm"
          >
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={onChange}
                  required
                  placeholder="Jane Doe"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={onChange}
                  required
                  placeholder="jane@example.com"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="(201) 555-0123"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-700">City / State</label>
                <input
                  type="text"
                  name="cityState"
                  value={form.cityState}
                  onChange={onChange}
                  placeholder="Jersey City, NJ"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Estimated Investment</label>
                <input
                  type="number"
                  name="amount"
                  min="0"
                  step="1000"
                  value={form.amount}
                  onChange={onChange}
                  placeholder="50000"
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">NJ Resident</label>
                <select
                  name="njResident"
                  value={form.njResident}
                  onChange={onChange}
                  className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
                >
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>
              <div className="flex items-end">
                <label className="inline-flex items-center gap-2 text-sm text-slate-700">
                  <input
                    type="checkbox"
                    name="accredited"
                    checked={form.accredited}
                    onChange={onChange}
                    className="rounded border-slate-300 text-slate-900 focus:ring-slate-200"
                  />
                  I am an accredited investor
                </label>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700">Message (optional)</label>
              <textarea
                name="message"
                value={form.message}
                onChange={onChange}
                rows={4}
                placeholder="Tell us about your interest or timeline…"
                className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-200"
              />
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <label className="inline-flex items-start gap-2 text-sm text-slate-600">
                <input
                  type="checkbox"
                  name="consent"
                  checked={form.consent}
                  onChange={onChange}
                  className="mt-0.5 rounded border-slate-300 text-slate-900 focus:ring-slate-200"
                />
                <span>
                  I consent to be contacted by LLM Vertex. This is not legal, tax, or investment advice; consult your advisors.
                </span>
              </label>
              <button
                type="submit"
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-5 py-3 text-white text-sm font-medium hover:bg-slate-800 active:bg-slate-900 transition"
              >
                Submit Interest
              </button>
            </div>
          </motion.form>
        </motion.section> */}


        {/* Lets talk if you are interested to invest */}
        <motion.section
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-12"
        >
        <motion.h2 variants={item} className="text-center text-2xl md:text-3xl font-semibold">
            Let’s Talk Investment
        </motion.h2>

        <motion.p
            variants={item}
            className="text-center text-slate-600 mt-2 max-w-3xl mx-auto"
        >
            If you’re interested to invest or want to discuss future prospects, please reach out to us at{" "}
            <a
            href="mailto:info@llmvertex.com"
            className="font-medium text-slate-900 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-500"
            >
            info@llmvertex.com
            </a>.
        </motion.p>

        </motion.section>



        {/* FAQ (native details for accessibility) */}
        <motion.section
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-12"
        >
          <motion.h3 variants={item} className="text-xl md:text-2xl font-semibold text-center">
            Investor FAQs
          </motion.h3>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              {
                q: "How is the 40% composed?",
                a: "The program provides a 35% base credit, plus an additional 5% if the business is certified as a Minority-Owned Business Enterprise (MBE).",
              },
              {
                q: "Who determines eligibility?",
                a: "Eligibility, rules, and any limits are determined by the New Jersey Economic Development Authority (NJEDA).",
              },
              {
                q: "Is this advice?",
                a: "No. The information here is for general awareness and is not legal, tax, or investment advice.",
              },
              {
                q: "What are next steps?",
                a: "Submit the form above. Our team will contact you with details about timing, allocation, and the NJEDA application process.",
              },
            ].map(({ q, a }) => (
              <motion.details
                key={q}
                variants={item}
                className="group rounded-xl border border-slate-200 bg-white p-4 open:shadow-sm"
              >
                <summary className="flex cursor-pointer select-none items-center justify-between text-sm font-medium text-slate-900">
                  {q}
                  <svg className="ml-3 h-5 w-5 opacity-60 group-open:rotate-180 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.23 7.21a.75.75 0 011.06.02L10 11.116l3.71-3.886a.75.75 0 111.08 1.04l-4.24 4.444a.75.75 0 01-1.08 0L5.21 8.27a.75.75 0 01.02-1.06z" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{a}</p>
              </motion.details>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}

/* ---------- Tiny inline icons (no extra deps) ---------- */
function BadgeIcon() {
  return (
    <svg className="h-6 w-6 text-slate-900/80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l2.39 4.84L20 8l-4 3.9.94 5.48L12 15.77 7.06 17.38 8 11.9 4 8l5.61-.16L12 2z" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg className="h-6 w-6 text-slate-900/80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2l7 3v6c0 5-3.8 9.7-7 11-3.2-1.3-7-6-7-11V5l7-3z" />
    </svg>
  );
}
function TargetIcon() {
  return (
    <svg className="h-6 w-6 text-slate-900/80" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1010 10h-2A8 8 0 1112 4V2zm0 4a6 6 0 106 6h-2a4 4 0 11-4-4V6zm1 1.05V8a3 3 0 11-3 3h.95A2.05 2.05 0 1013 7.05z" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg className="mt-0.5 h-5 w-5 flex-none text-emerald-600" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path d="M16.704 5.29a1 1 0 010 1.414l-7.25 7.25a1 1 0 01-1.414 0l-3-3A1 1 0 016.454 9.79l2.293 2.293 6.543-6.543a1 1 0 011.414 0z" />
    </svg>
  );
}
function StepDot({ children }) {
  return (
    <div className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-slate-900 text-white text-xs font-semibold">
      {children}
    </div>
  );
}
