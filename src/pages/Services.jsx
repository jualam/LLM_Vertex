import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const services = [
  {
    id: "multilingual",
    title: "Multilingual Text Data Services",
    bullets: [
      "Data collection & sourcing with consent-driven, policy-aligned workflows",
      "Annotation, labeling, and evaluation workflows",
      "Low-resource language coverage and dialect-aware design",
      "Quality metrics, bilingual reviewers, and audit trails",
    ],
  },
  {
    id: "training",
    title: "AI Training for Workforce Development",
    bullets: [
      "Customized AI training aligned with organizational goals and workforce skill levels",
      "Practical, hands-on training for daily AI tool use",
      "AI literacy for better adoption and collaboration with AI systems",
      "Guidance on responsible and ethical use of AI in the workplace",
    ],
  },
  {
    id: "finetune",
    title: "Fine-Tuning & AI Model Partnerships",
    bullets: [
      "Dataset prep, filtering, and balanced splits",
      "Task-specific tuning with multilingual objectives",
      "Evaluation harness integration and reporting",
      "Pilot to production handoff, documentation, and ops",
    ],
  },
  {
    id: "custom_agents",
    title: "Custom Agentic AI Solutions",
    bullets: [
      "End-to-end design and deployment of intelligent, goal-driven AI agents",
      "Automation of repetitive workflows for small businesses and individuals",
      "Personalized task management and decision-support capabilities",
      "Integration into existing tools, apps, and business processes",
    ],
  },
  {
    id: "ai_adoption",
    title: "AI Adoption & Transformation Services",
    bullets: [
      "AI adoption research tailored to your organization",
      "Digital transformation guidance grounded in human-centered design",
      "Assessment of AI readiness and strategic needs",
      "AI risk and impact assessments for safer deployment",
    ],
  },
  {
    id: "ai_edtech",
    title: "AI-Powered Learning Management Systems",
    bullets: [
      "AI-powered LMS platforms customized for your institution",
      "Bespoke AI solutions for teaching, learning, and operations",
      "Adaptive learning experiences powered by intelligent systems",
      "Academic analytics to support performance and retention",
    ],
  },
];

const steps = [
  ["Discover", "Goals, languages, constraints, success metrics"],
  ["Scope", "Data spec, ethics checklist, consent templates"],
  ["Build", "Collection, annotation, QA with bilingual reviewers"],
  ["Evaluate", "Bias, safety, cultural nuance, gold-set checks"],
  ["Deploy", "Reports, docs, and production handoff"],
];

const models = [
  ["Pilot Sprint", "2-4 weeks", "Fixed scope to validate value fast"],
  ["Managed Service", "Monthly", "We run end-to-end pipelines"],
  ["Embedded Team", "Hourly/FT", "Augment your team with our talent"],
];

const faqs = [
  ["Which languages do you support?", "We focus on low-resource languages and dialects; coverage grows continuously based on partner needs."],
  ["Do I need to be from a STEM background?", "No. You can be from any academic discipline. We value diverse perspectives."],
  ["Do you support OPT/CPT talent?", "Absolutely. Our workforce program onboards international students with compliance support."],
];

export default function Services() {
  return (
    <main className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <section className="mx-auto max-w-7xl px-5 pb-5 pt-10 md:pb-6 md:pt-16">
        <Motion.div variants={container} initial="hidden" animate="show" className="grid gap-8 lg:grid-cols-[1fr_.8fr] lg:items-start">
          <Motion.div variants={item} className="pt-6 pl-8 md:pl-14">
            <h1 className="max-w-5xl text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-5xl md:tracking-[-2px] lg:text-[56px]">
              Solutions & Services
            </h1>
          </Motion.div>
          <Motion.div variants={item} className="rounded-[20px] bg-[#141414] p-6 md:p-8">
            <p className="text-[20px] leading-[1.3] text-[#999999]">
              Purpose-built offerings aligned with our dual model: inclusive datasets and workforce training
            </p>
          </Motion.div>
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a] pb-12 pt-8 md:pb-14 md:pt-10">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <Motion.section
              key={service.id}
              id={service.id}
              variants={item}
              className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#141414] p-6 shadow-[0_0_26px_rgba(0,153,255,0.18),0_0_58px_rgba(212,77,240,0.12)] transition duration-300 before:pointer-events-none before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_16%_0%,rgba(0,153,255,.32),transparent_36%),radial-gradient(circle_at_88%_8%,rgba(212,77,240,.26),transparent_34%),linear-gradient(135deg,rgba(255,255,255,.08),transparent_48%)] before:content-[''] after:pointer-events-none after:absolute after:-inset-px after:bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,.18),transparent_42%)] after:content-[''] hover:border-white/20 hover:shadow-[0_0_34px_rgba(0,153,255,0.24),0_0_74px_rgba(212,77,240,0.2)]"
            >
              <h2 className="relative z-10 text-[24px] font-medium leading-[1.1] tracking-[-.4px] text-white">
                {service.title}
              </h2>
              <ul className="relative z-10 mt-5 space-y-3 text-[14px] leading-[1.35] text-[#b8b8b8]">
                {service.bullets.map((bullet) => (
                  <li key={bullet} className="border-t border-white/10 pt-3">
                    {bullet}
                  </li>
                ))}
              </ul>
            </Motion.section>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:pb-20 md:pt-12">
        <Motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">How We Deliver</p>
          <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-[-1px] text-white md:text-6xl">
            A clear path from discovery to deployment
          </h2>
        </Motion.div>
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-10 grid gap-4 md:grid-cols-5"
        >
          {steps.map(([title, body], index) => (
            <Motion.div key={title} variants={item} className="rounded-[20px] bg-[#141414] p-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1c1c1c] text-[13px] text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-[18px] font-medium text-white">{title}</h3>
              <p className="mt-2 text-[14px] leading-[1.35] text-[#999999]">{body}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:pb-20 md:pt-12">
          <Motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className="text-[13px] font-medium uppercase text-[#999999]">Engagement Models</p>
            <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-[-1px] text-white md:text-6xl">
              Start small or build with us long-term
            </h2>
          </Motion.div>
          <Motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-10 grid gap-5 md:grid-cols-3"
          >
            {models.map(([name, time, desc]) => (
              <Motion.div key={name} variants={item} className="rounded-[20px] bg-[#141414] p-6">
                <h3 className="text-[22px] font-medium leading-tight text-white">{name}</h3>
                <p className="mt-2 text-[13px] font-medium text-[#0099ff]">{time}</p>
                <p className="mt-5 text-[15px] leading-[1.35] text-[#999999]">{desc}</p>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-16 pt-10 md:pb-20 md:pt-12">
        <Motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">FAQs</p>
          <h2 className="mt-3 text-4xl font-medium leading-[1.05] tracking-[-1px] text-white md:text-6xl">
            Common questions
          </h2>
        </Motion.div>
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-10 grid gap-5 md:grid-cols-3"
        >
          {faqs.map(([question, answer]) => (
            <Motion.div key={question} variants={item} className="rounded-[20px] bg-[#141414] p-6">
              <h3 className="text-[18px] font-medium leading-tight text-white">{question}</h3>
              <p className="mt-4 text-[14px] leading-[1.35] text-[#999999]">{answer}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>
    </main>
  );
}
