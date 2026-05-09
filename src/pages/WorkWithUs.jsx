import { motion as Motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const cards = [
  {
    title: "Who We're Looking For",
    items: [
      "Multilingual talent bringing unique cultural perspectives.",
      "People passionate about inclusive, ethical AI.",
      "Detail-oriented contributors who love data quality.",
    ],
  },
  {
    title: "Why Join Us?",
    items: [
      "Hands-on experience in AI data pipelines.",
      "Meaningful impact on global language inclusion.",
      "Mentorship, workshops, and growth paths.",
    ],
  },
  {
    title: "Tracks & Roles",
    items: [
      "AI Data Engineer for collection, labeling, and QA.",
      "Language & Cultural Specialist for low-resource coverage.",
      "Eval & Red-Teaming for safety, bias, and cultural nuance.",
      "Program Assistant for training and coordination.",
    ],
  },
];

export default function WorkWithUs() {
  return (
    <main className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-10 md:pb-8 md:pt-16">
        <Motion.div variants={container} initial="hidden" animate="show" className="text-center">
          <Motion.h1
            variants={item}
            className="text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-6xl md:tracking-[-2.4px] lg:text-[64px]"
          >
            Work With Us
          </Motion.h1>
          <Motion.p
            variants={item}
            className="mx-auto mt-6 max-w-4xl text-[20px] leading-[1.35] text-[#999999]"
          >
            At LLM Vertex, we believe language is more than words. It carries stories, cultures,
            and identities that deserve to be heard in technologies shaping our future. Our mission
            is to bring underrepresented and low-resource languages into large language models,
            ensuring that AI reflects the true diversity of our world.
          </Motion.p>
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <div className="mx-auto max-w-7xl px-5 py-8 md:py-10">
          <Motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="rounded-[30px] bg-[linear-gradient(135deg,#6a4cf5_0%,#d44df0_52%,#ff7a3d_100%)] p-8 md:p-10"
          >
            <p className="text-[13px] font-medium uppercase text-white/70">Our Mission</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              Build AI that hears more of the world.
            </h2>
            <p className="mt-5 max-w-4xl text-[18px] leading-[1.35] text-white/85">
              Each year, people from diverse linguistic and cultural backgrounds come to the United
              States to study, work, and build their futures. Many of these communities remain
              underrepresented in today's AI landscape. We see this as an incredible opportunity.
              By working with us, your knowledge and cultural perspective can help create language
              models that are more inclusive, more human, and more connected to the global community.
            </p>
          </Motion.div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-8 md:py-10">
        <Motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-5 md:grid-cols-3"
        >
          {cards.map((card) => (
            <Motion.div key={card.title} variants={item} className="rounded-[20px] bg-[#141414] p-6">
              <h3 className="text-[22px] font-medium leading-tight text-white">{card.title}</h3>
              <ul className="mt-5 space-y-3 text-[14px] leading-[1.35] text-[#999999]">
                {card.items.map((entry) => (
                  <li key={entry} className="border-t border-white/10 pt-3">
                    {entry}
                  </li>
                ))}
              </ul>
            </Motion.div>
          ))}
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-8 md:py-10 lg:grid-cols-2">
          <Motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[20px] bg-[#141414] p-6 md:p-8"
          >
            <p className="text-[13px] font-medium uppercase text-[#999999]">How to Apply</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              Future opportunities.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.35] text-[#999999]">
              We are not currently hiring at this time. Please follow LLM Vertex for future
              opportunities and updates on available positions.
            </p>
          </Motion.div>

          <Motion.div
            variants={item}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-[20px] bg-[#1c1c1c] p-6 md:p-8"
          >
            <p className="text-[13px] font-medium uppercase text-[#999999]">Join the Movement</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              Shape the future of AI.
            </h2>
            <p className="mt-5 text-[16px] leading-[1.35] text-[#999999]">
              If you're passionate about making an impact at the intersection of language, culture,
              and technology, join us in shaping the future of AI.
            </p>
          </Motion.div>
        </div>
      </section>
    </main>
  );
}
