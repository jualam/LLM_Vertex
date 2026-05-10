import { Link } from "react-router-dom";
import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const services = [
  {
    id: "edtech_ai",
    title: "AI-Powered Learning Management System",
    body: "A modern LMS with adaptive learning tools, academic analytics, course management, and smart support for teaching, administration, and student engagement.",
    href: "/learning-management-system",
    img: "/ed_tech.jpg",
  },
  {
    id: "training",
    title: "AI Training for Workforce Development",
    body: "Practical AI training and career support for students and graduates from all disciplines.",
    href: "/services#training",
    img: "/llm.jpg",
  },
  {
    id: "custom_agents",
    title: "Custom Agentic AI Solution",
    body: "End-to-end development of intelligent, goal-driven AI agents customized for small businesses and individuals.",
    href: "/services#custom_agents",
    img: "/ai_agent.jpg",
  },
  {
    id: "multilingual",
    title: "Multilingual Text Data Services",
    body: "Collection, annotation, and evaluation with strong coverage in low-resource languages and dialects.",
    href: "/services#multilingual",
    img: "/data.jpg",
  },
  {
    id: "finetune",
    title: "Fine-Tuning & AI Model Partnerships",
    body: "Culturally-aware dataset prep and fine-tuning to align models with regional nuance.",
    href: "/services#finetune",
    img: "/fine_tune.jpg",
  },
  {
    id: "ai_adoption",
    title: "AI Adoption & Transformation Services",
    body: "AI readiness research, strategy design, risk assessment, and workflow integration to help organizations adopt AI safely and effectively.",
    href: "/services#ai_adoption",
    img: "/ai_adoption.jpg",
  },
];

const useCases = [
  ["Conversational AI & Support", "/data.jpg", "Multilingual intents, NER, and QA data for customer support and assistants."],
  ["Safety & Alignment", "/llm.jpg", "Red-teaming prompts and culturally-aware safety evaluation sets."],
  ["Search & RAG", "/ragai.jpg", "Domain corpora, chunking evaluation, and human-rated retrieval quality."],
  ["Content Moderation", "/m.jpg", "Policy-aligned datasets for nuanced harassment and hate-speech detection."],
  ["Education & Research", "/m1.jpg", "Academic partnerships for corpus building and benchmark creation."],
  ["Public Sector & NGOs", "/m2.jpg", "Civic-tech language coverage for underserved communities."],
];

const process = [
  ["Scope", "/scope.jpg", "Define languages, tasks, and policy constraints."],
  ["Pilot", "/pilot.jpg", "Small sample to validate quality and cost."],
  ["Scale", "/scale.jpg", "Expand with QA loops and analytics."],
  ["Deliver", "/deliver.jpg", "Datasets, reports, and integration help."],
];

const languages = [
  "Chinese",
  "Spanish",
  "English",
  "Hindi",
  "Arabic",
  "Bangla",
  "Portuguese",
  "Russian",
  "Japanese",
  "Punjabi",
  "German",
  "French",
  "Urdu",
  "Tamil",
  "Turkish",
];

const SectionHeader = ({ eyebrow, title, body, link }) => (
  <Motion.div
    variants={fadeUp}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, amount: 0.3 }}
    className="mx-auto max-w-7xl px-5"
  >
    <div className="flex flex-col items-center gap-5 text-center">
      <div className="max-w-5xl">
        <p className="text-[13px] font-medium uppercase text-[#999999]">{eyebrow}</p>
        <h2 className="mt-3 text-4xl font-medium leading-none text-white md:text-6xl">
          {title}
        </h2>
        {body && <p className="mx-auto mt-4 max-w-3xl text-[15px] leading-[1.35] text-[#999999]">{body}</p>}
      </div>
      {link && (
        <Link to={link.href} className="text-[14px] font-medium text-[#0099ff] hover:underline">
          {link.label}
        </Link>
      )}
    </div>
  </Motion.div>
);

const ServiceCard = ({ service, featured }) => (
  <Motion.div variants={fadeUp}>
    <Link
      to={service.href}
      id={service.id}
      className={`group block h-full overflow-hidden rounded-[20px] border border-[#262626] ${
        featured ? "bg-[#1c1c1c]" : "bg-[#141414]"
      } transition duration-300 hover:-translate-y-1 hover:border-white/25`}
    >
      <div className="aspect-[16/10] overflow-hidden bg-[#1c1c1c]">
        <img
          src={service.img}
          alt=""
          className="h-full w-full object-cover opacity-75 transition duration-500 group-hover:scale-105 group-hover:opacity-95"
          loading="lazy"
        />
      </div>
      <div className="p-5">
        <h3 className="text-[22px] font-medium leading-[1.1] text-white">{service.title}</h3>
        <p className="mt-3 text-[15px] leading-[1.35] text-[#999999]">{service.body}</p>
      </div>
    </Link>
  </Motion.div>
);

const MiniTile = ({ title, img, body }) => (
  <Motion.div variants={fadeUp} className="overflow-hidden rounded-[15px] bg-[#141414] p-3">
    <div className="aspect-[16/10] overflow-hidden rounded-[10px] bg-[#1c1c1c]">
      <img src={img} alt="" className="h-full w-full object-cover opacity-75" loading="lazy" />
    </div>
    <h3 className="mt-4 text-[18px] font-medium leading-tight text-white">{title}</h3>
    <p className="mt-2 text-[14px] leading-[1.35] text-[#999999]">{body}</p>
  </Motion.div>
);

export default function Home() {
  return (
    <div className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <style>{`
        @keyframes llmMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .llm-marquee {
          animation: llmMarquee 36s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .llm-marquee { animation: none; }
        }
      `}</style>

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-8 md:pb-14 md:pt-14">
        <Motion.div variants={stagger} initial="hidden" animate="show">
          <Motion.div variants={fadeUp} className="mx-auto max-w-6xl text-center">
            <h1 className="text-5xl font-medium leading-[1] tracking-[-1.8px] text-white md:text-7xl md:tracking-[-3px] lg:text-[86px]">
              Building Inclusive AI through Ethical Diverse Data & Workforce Innovation
            </h1>
          </Motion.div>

          <div className="mt-8 grid gap-8 md:mt-14 lg:grid-cols-[.8fr_1fr] lg:items-start">
            <Motion.div variants={fadeUp} className="lg:pt-[58px]">
              <div className="rounded-[20px] bg-[#141414] p-6">
                <p className="max-w-2xl text-[22px] leading-[1.3] text-[#999999]">
                  Underrepresented language datasets + AI workforce training to serve a diverse world
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="https://workforce.llmvertex.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full bg-white px-[15px] py-[10px] text-[14px] font-medium text-black transition hover:scale-[0.98]"
                  >
                    Work Force Development
                  </a>
                  <Link
                    to="/services"
                    className="rounded-full bg-[#1c1c1c] px-[15px] py-[10px] text-[14px] font-medium text-white transition hover:bg-[#262626]"
                  >
                    Explore Our Solutions
                  </Link>
                </div>
              </div>
            </Motion.div>

          <Motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-[30px] bg-[linear-gradient(135deg,#6a4cf5_0%,#d44df0_48%,#ff7a3d_100%)] p-6"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.35),transparent_34%),radial-gradient(circle_at_85%_80%,rgba(255,255,255,.2),transparent_30%)]" />
            <div className="relative flex flex-col gap-14 md:gap-16">
              <p className="max-w-md text-[22px] leading-[1.25] text-white md:text-[24px]">
                Let's build AI systems that understand more people, more languages, and more contexts.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {[
                  ["15+", "languages covered"],
                  ["95%", "avg. QA acceptance"],
                  ["2-6w", "dataset pilot delivery"],
                ].map(([k, v]) => (
                  <div key={k} className="rounded-[20px] bg-black/25 p-4 backdrop-blur">
                    <div className="text-3xl font-medium">{k}</div>
                    <div className="mt-1 text-[13px] leading-tight text-white/75">{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Motion.div>
          </div>
        </Motion.div>
      </section>

      <section className="overflow-hidden border-y border-[#1a1a1a] py-8">
        <div className="mx-auto max-w-7xl px-5">
          <p className="mb-4 text-[13px] font-medium uppercase text-[#999999]">Our Diversity</p>
          <div className="overflow-hidden">
            <div className="llm-marquee flex w-max gap-3 will-change-transform">
              {[...languages, ...languages].map((language, index) => (
                <span
                  key={`${language}-${index}`}
                  className="rounded-full bg-[#141414] px-6 py-3 text-[15px] font-medium text-white"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-8 pt-12 md:pb-10">
        <SectionHeader
          eyebrow="What We Do"
          title="Inclusive data services and workforce training"
          body="We combine practical AI services, learning systems, agentic solutions, and multilingual data work for organizations building responsibly."
          link={{ href: "/services", label: "See all services" }}
        />
        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} featured={index === 0 || index === 2} />
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-5 pb-10 pt-4 md:pt-6 lg:grid-cols-2">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[20px] bg-[#141414] p-8 md:p-10"
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">Problem & Vision</p>
          <h2 className="mt-4 text-4xl font-medium leading-none text-white md:text-6xl">
            AI should work across cultures
          </h2>
          <p className="mt-5 text-[15px] leading-[1.35] text-[#999999]">
            Many LLMs overlook underrepresented languages. We bridge this gap by creating culturally-aware
            datasets and empowering a diverse AI workforce.
          </p>
        </Motion.div>
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-[30px] bg-[linear-gradient(135deg,#ff5577_0%,#d44df0_52%,#6a4cf5_100%)] p-8 md:p-10"
        >
          <p className="text-[13px] font-medium uppercase text-white/70">Why It Matters</p>
          <ul className="mt-6 space-y-4 text-[22px] leading-[1.2] text-white">
            <li>Better access and fairness in AI products worldwide</li>
            <li>Improved safety through cultural context</li>
            <li>Higher model performance on real users' languages</li>
            <li>Stronger global adoption for AI-first products</li>
          </ul>
        </Motion.div>
      </section>

      <section className="pb-8 pt-12 md:pb-10">
        <SectionHeader
          eyebrow="Solutions & Use Cases"
          title="From data collection to fine-tuning and evaluation"
          body="Support for multilingual AI, safety work, RAG quality, moderation, education, research, public-sector programs, and mission-driven organizations."
        />
        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.15 }}
          className="mx-auto mt-10 grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {useCases.map(([title, img, body]) => (
            <MiniTile key={title} title={title} img={img} body={body} />
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-10 pt-4 md:pt-6">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="mx-auto mb-8 max-w-5xl text-center"
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">How We Work</p>
          <h2 className="mt-3 text-4xl font-medium leading-none text-white md:text-6xl">
            Simple, transparent collaboration
          </h2>
        </Motion.div>
        <Motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-4 md:grid-cols-4"
        >
          {process.map(([title, img, body], index) => (
            <Motion.div key={title} variants={fadeUp} className="rounded-[20px] bg-[#141414] p-4">
              <div className="aspect-[16/10] overflow-hidden rounded-[15px] bg-[#1c1c1c]">
                <img src={img} alt="" className="h-full w-full object-cover opacity-75" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#1c1c1c] text-[13px] text-white">
                  {index + 1}
                </span>
                <h3 className="text-[18px] font-medium text-white">{title}</h3>
              </div>
              <p className="mt-3 text-[14px] leading-[1.35] text-[#999999]">{body}</p>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-14 pt-4 md:pb-16 md:pt-6">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-[30px] bg-[#141414] p-8 md:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[13px] font-medium uppercase text-[#999999]">Ready to scope it?</p>
              <h2 className="mt-3 max-w-3xl text-4xl font-medium leading-none text-white md:text-6xl">
                Let's Build AI for Everyone
              </h2>
              <p className="mt-5 text-[15px] leading-[1.35] text-[#999999]">
                Get a fast quote or schedule a scoping call.
              </p>
            </div>
            <Link
              to="/contact"
              className="w-fit rounded-full bg-white px-[15px] py-[10px] text-[14px] font-medium text-black transition hover:scale-[0.98]"
            >
              Request a Quote
            </Link>
          </div>
        </Motion.div>
      </section>
    </div>
  );
}
