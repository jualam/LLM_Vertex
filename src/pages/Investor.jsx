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

const summaryCards = [
  {
    title: "Tax Credit Amount",
    body: "Receive tax credits of up to 40% of your qualified investment: 35% base credit, plus 5% if the company is certified as an MBE.",
  },
  {
    title: "State Initiative",
    body: "LLM Vertex is eligible under the New Jersey Angel Investor Tax Credit Program, which promotes investment in emerging technology businesses.",
  },
  {
    title: "Why It Matters",
    body: "Your investment supports innovation, job creation, and inclusive AI in New Jersey's growing tech ecosystem.",
  },
];

const steps = [
  ["Connect with our team", "Share your interest and we'll discuss allocation, timeline, and next steps."],
  ["Make a qualified investment", "Invest in LLM Vertex in alignment with NJ program requirements."],
  ["Apply for state tax credit", "Investors submit to the NJEDA program to claim their applicable credit."],
];

const eligibility = [
  "Investment must meet NJ program criteria",
  "Credits apply to qualified investments",
  "Base 35% credit; +5% if MBE",
  "Subject to NJEDA rules & limits",
];

const faqs = [
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
    a: "Contact our team. We will share details about timing, allocation, and the NJEDA application process.",
  },
];

export default function Investor() {
  return (
    <main className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-10 md:pb-8 md:pt-16">
        <Motion.header variants={container} initial="hidden" animate="show" className="text-center">
          <Motion.div
            variants={item}
            className="mx-auto w-fit rounded-full bg-[#1c1c1c] px-[15px] py-[10px] text-[14px] font-medium text-white"
          >
            Up to 40% New Jersey Angel Investor Tax Credits
          </Motion.div>
          <Motion.h1
            variants={item}
            className="mt-6 text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-6xl md:tracking-[-2.4px] lg:text-[64px]"
          >
            Invest in LLM Vertex
          </Motion.h1>
          <Motion.p
            variants={item}
            className="mx-auto mt-6 max-w-4xl text-[20px] leading-[1.35] text-[#999999]"
          >
            We build inclusive AI through ethical, diverse datasets and workforce innovation.
            Eligible investors may receive significant New Jersey Angel Investor Tax Credits when
            they invest in LLM Vertex.
          </Motion.p>
        </Motion.header>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-5 px-5 py-12 md:grid-cols-3 md:py-14"
        >
          {summaryCards.map((card) => (
            <Motion.div
              key={card.title}
              variants={item}
              className="rounded-[20px] bg-[linear-gradient(135deg,#6a4cf5_0%,#d44df0_52%,#ff7a3d_100%)] p-6"
            >
              <h2 className="text-[24px] font-medium leading-tight text-white">{card.title}</h2>
              <p className="mt-4 text-[15px] leading-[1.35] text-white/85">
                {card.body}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-12 pt-6 md:pb-16 md:pt-8 lg:grid-cols-2">
        <Motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[20px] bg-[#141414] p-6 md:p-8"
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">How It Works</p>
          <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
            From interest to tax credit.
          </h2>
          <div className="mt-8 space-y-5">
            {steps.map(([title, body], index) => (
              <div key={title} className="border-t border-white/10 pt-5">
                <div className="flex gap-4">
                  <span className="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-[#1c1c1c] text-[13px] text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="text-[18px] font-medium leading-tight text-white">{title}</h3>
                    <p className="mt-2 text-[14px] leading-[1.35] text-[#999999]">{body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-[15px] bg-[#1c1c1c] p-5 text-[14px] leading-[1.35] text-[#999999]">
            For official details, eligibility, deadlines, and FAQs, visit the{" "}
            <a
              href="https://www.njeda.gov/angeltaxcredit/"
              className="text-[#0099ff] hover:underline"
              target="_blank"
              rel="noreferrer"
            >
              New Jersey Economic Development Authority website
            </a>
            .
          </p>
        </Motion.div>

        <Motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-[20px] bg-[#141414] p-6 md:p-8"
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">Eligibility Notes</p>
          <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
            Quick investor notes.
          </h2>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {eligibility.map((note) => (
              <div key={note} className="rounded-[15px] bg-[#1c1c1c] p-4 text-[14px] leading-[1.35] text-[#999999]">
                {note}
              </div>
            ))}
          </div>
          <p className="mt-8 rounded-[15px] border border-[#262626] p-5 text-[14px] leading-[1.35] text-[#999999]">
            Nothing here constitutes legal, tax, or investment advice. Please consult your advisors.
          </p>
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto max-w-7xl px-5 pb-12 pt-6 text-center md:pb-14 md:pt-8"
        >
          <Motion.h2 variants={item} className="text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
            Let's Talk Investment
          </Motion.h2>
          <Motion.p variants={item} className="mx-auto mt-5 max-w-3xl text-[18px] leading-[1.35] text-[#999999]">
            If you're interested to invest or want to discuss future prospects, please reach out to us at{" "}
            <a href="mailto:info@llmvertex.com" className="font-medium text-[#0099ff] hover:underline">
              info@llmvertex.com
            </a>
            .
          </Motion.p>
        </Motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-12 pt-6 md:pb-16 md:pt-8">
        <Motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="text-center"
        >
          <h2 className="text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
            Common investor questions
          </h2>
        </Motion.div>
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-2"
        >
          {faqs.map(({ q, a }) => (
            <Motion.details key={q} variants={item} className="group rounded-[20px] bg-[#141414] p-5">
              <summary className="flex cursor-pointer select-none items-center justify-between text-[16px] font-medium text-white">
                {q}
                <span className="ml-4 text-[#999999] transition group-open:rotate-180">⌄</span>
              </summary>
              <p className="mt-4 border-t border-white/10 pt-4 text-[14px] leading-[1.35] text-[#999999]">{a}</p>
            </Motion.details>
          ))}
        </Motion.div>
      </section>
    </main>
  );
}
