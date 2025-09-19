export default function WhoWeServe() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Who We Serve</h1>
      <p className="text-slate-600 mt-3">
        We support organizations building ethical, inclusive, and multilingual AI.
      </p>

      <div className="mt-8 grid md:grid-cols-2 gap-6">
        {[
          ["AI Startups & LLM Developers", "Curated multilingual datasets, evaluation, and tuning support."],
          ["Academic Researchers", "Language equity, low-resource corpora, and reproducible evaluations."],
          ["NGOs & Non-profits", "Culturally-aware data for inclusion and access initiatives."],
          ["Government & Public Sector", "Policy-aligned datasets and fairness-focused project support."],
        ].map(([title, body]) => (
          <div key={title} className="rounded-2xl border border-slate-200 p-6 bg-white reveal">
            <h3 className="font-semibold">{title}</h3>
            <p className="text-slate-600 mt-2 text-sm">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
