export default function About() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-16">
      <div className="reveal">
        <h1 className="text-3xl md:text-4xl font-extrabold">About LLM Vertex</h1>
        <p className="text-slate-600 mt-4">
          We’re building a more inclusive and ethical AI ecosystem by creating high-quality, culturally-aware datasets and empowering a diverse AI workforce.
          Our mission is to ensure underrepresented voices, cultures, and languages shape the future of AI.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {[
          ["Inclusion", "Centering cultures and languages beyond the usual datasets."],
          ["Ethics", "Responsible sourcing, consent, and privacy-first practices."],
          ["Quality", "Layered QA with bilingual reviewers and spot checks."],
          ["Empowerment", "Training and upskilling international talent."],
          ["Innovation", "Practical tooling and workflows for faster iteration."],
          ["Partnership", "We meet you where you are: research or production."],
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
