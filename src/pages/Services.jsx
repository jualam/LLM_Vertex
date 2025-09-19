export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Solutions & Services</h1>
      <p className="text-slate-600 mt-3">
        Purpose-built services aligned with our dual model: inclusive datasets and workforce training.
      </p>

      <div className="mt-10 grid md:grid-cols-3 gap-6">
        <section id="multilingual" className="rounded-2xl border border-slate-200 p-6 bg-white reveal">
          <h2 className="font-semibold text-lg">Multilingual Text Data Services</h2>
          <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-1">
            <li>Data collection & sourcing (consent-driven, policy-aligned)</li>
            <li>Annotation, labeling, & evaluation workflows</li>
            <li>Low-resource language coverage & dialect-aware design</li>
            <li>Quality metrics, bilingual reviewers, & audit trails</li>
          </ul>
        </section>

        <section id="talent" className="rounded-2xl border border-slate-200 p-6 bg-white reveal">
          <h2 className="font-semibold text-lg">Trained AI Data Engineers</h2>
          <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-1">
            <li>On-demand staffing & training pipelines</li>
            <li>Multilingual, multicultural talent from varied nationalities</li>
            <li>Hands-on experience with QA, red-teaming, & evaluation</li>
            <li>Ethics, safety, and privacy training included</li>
          </ul>
        </section>

        <section id="finetune" className="rounded-2xl border border-slate-200 p-6 bg-white reveal">
          <h2 className="font-semibold text-lg">Fine-Tuning & AI Model Partnerships</h2>
          <ul className="list-disc pl-5 mt-3 text-slate-700 space-y-1">
            <li>Dataset prep, filtering, and balanced splits</li>
            <li>Task-specific tuning with multilingual objectives</li>
            <li>Evaluation harness integration & reporting</li>
            <li>Pilot → Production handoff, documentation, and ops</li>
          </ul>
        </section>
      </div>
    </div>
  );
}
