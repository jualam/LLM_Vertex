import { motion as Motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};

const features = [
  "Custom course and content management",
  "AI support for learners, instructors, and administrators",
  "Adaptive learning paths and academic analytics",
  "Dashboards for progress, performance, and engagement",
];

export default function LearningManagementSystem() {
  return (
    <main className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <section className="mx-auto max-w-7xl px-5 py-14 md:py-20">
        <Motion.div variants={fadeUp} initial="hidden" animate="show">
          <div className="max-w-6xl">
            <span className="rounded-full bg-[#1c1c1c] px-[15px] py-[10px] text-[14px] font-medium text-white">
              AI-Powered LMS
            </span>
            <h1 className="mt-6 text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-5xl md:tracking-[-2px] lg:text-[56px]">
              Customized Learning Management System
            </h1>
          </div>
        </Motion.div>

        <Motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="mt-10 grid gap-5 md:grid-cols-2"
        >
          <div className="rounded-[20px] bg-[#141414] p-6 md:p-8">
            <p className="text-[20px] leading-[1.3] text-[#999999]">
              LLM Vertex provides customized AI-powered Learning Management Systems for schools,
              training programs, and organizations that need a smarter way to manage learning.
            </p>
          </div>

          <div className="rounded-[30px] bg-[linear-gradient(135deg,#6a4cf5_0%,#d44df0_52%,#ff7a3d_100%)] p-8 md:p-10">
            <p className="text-[24px] leading-[1.3] text-white">
              A clean platform for course delivery, learner engagement, instructor workflows,
              academic analytics, and administrative operations.
            </p>
          </div>
        </Motion.div>
      </section>

      <section className="border-y border-[#1a1a1a] py-16">
        <div className="mx-auto max-w-7xl px-5">
          <Motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            className="max-w-5xl"
          >
            <p className="text-[13px] font-medium uppercase text-[#999999]">What We Can Build</p>
            <h2 className="mt-3 text-3xl font-medium leading-[1.05] tracking-[-.8px] text-white md:text-5xl">
              An LMS shaped around your learning model
            </h2>
          </Motion.div>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {features.map((feature) => (
              <Motion.div
                key={feature}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="rounded-[20px] bg-[#141414] p-6 text-[18px] leading-[1.3] text-white"
              >
                {feature}
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 md:py-20">
        <Motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.35 }}
          className="rounded-[20px] bg-[#141414] p-8 md:p-10"
        >
          <p className="text-[13px] font-medium uppercase text-[#999999]">Request a Demo</p>
          <h2 className="mt-3 text-4xl font-medium leading-none tracking-[-1px] text-white md:text-6xl">
            Discuss your LMS project.
          </h2>
          <p className="mt-5 max-w-3xl text-[18px] leading-[1.3] text-[#999999]">
            To discuss purchasing, customization, or a product demo, contact us at{" "}
            <a className="font-medium text-[#0099ff] hover:underline" href="mailto:info@llmvertex.com">
              info@llmvertex.com
            </a>
            .
          </p>
        </Motion.div>
      </section>
    </main>
  );
}
