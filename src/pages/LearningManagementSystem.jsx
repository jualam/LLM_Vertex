export default function LearningManagementSystem() {
  const features = [
    "Custom course and content management",
    "AI support for learners, instructors, and administrators",
    "Adaptive learning paths and academic analytics",
    "Dashboards for progress, performance, and engagement",
  ];

  return (
    <main className="bg-white text-slate-900">
      <section className="max-w-5xl mx-auto px-4 py-14 md:py-20">
        <p className="text-sm font-semibold uppercase tracking-wide text-sky-700">
          AI-Powered LMS
        </p>
        <h1 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight">
          Customized Learning Management System
        </h1>
        <p className="mt-5 max-w-3xl text-slate-600 text-base md:text-lg leading-relaxed">
          LLM Vertex provides customized AI-powered Learning Management Systems for schools,
          training programs, and organizations that need a smarter way to manage learning.
        </p>
        <p className="mt-4 max-w-3xl text-slate-600 leading-relaxed">
          Our LMS can support course delivery, learner engagement, instructor workflows,
          academic analytics, and administrative operations in one clean platform.
        </p>
      </section>

      <section className="border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold">What We Can Build</h2>
          <div className="mt-5 grid md:grid-cols-2 gap-x-8 gap-y-3">
            {features.map((feature) => (
              <div key={feature} className="border-t border-slate-200 pt-3 text-slate-700">
                {feature}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 py-10">
          <h2 className="text-2xl font-bold">Request a Demo</h2>
          <p className="mt-3 max-w-3xl text-slate-600 leading-relaxed">
            To discuss purchasing, customization, or a product demo, contact us at{" "}
            <a className="font-semibold text-sky-700 hover:underline" href="mailto:info@llmvertex.com">
              info@llmvertex.com
            </a>
            .
          </p>
        </div>
      </section>
    </main>
  );
}
