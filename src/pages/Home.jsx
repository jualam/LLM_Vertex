import { Link } from "react-router-dom";

const Stat = ({ k, v }) => (
  <div className="rounded-2xl border border-slate-200 p-4 bg-white/70 backdrop-blur reveal">
    <div className="text-2xl font-bold">{k}</div>
    <div className="text-slate-600 text-sm">{v}</div>
  </div>
);

const Card = ({ title, body, href, id }) => (
  <div id={id} className="rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition reveal">
    <h3 className="font-semibold text-lg">{title}</h3>
    <p className="text-slate-600 mt-2">{body}</p>
    <Link to={href} className="inline-flex items-center gap-2 text-sky-600 mt-4 hover:underline">
      Learn more <span aria-hidden>→</span>
    </Link>
  </div>
);

export default function Home() {
  return (
    <div className="bg-soft">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-4 pt-16 pb-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-floatUp">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Building <span className="gradient-text">Inclusive AI</span> through Ethical Diverse Data & Workforce Innovation
            </h1>
            <p className="mt-4 text-slate-600">
              Underrepresented language datasets + AI workforce training to serve a diverse world.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/services" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">Explore Our Solutions</Link>
              <Link to="/contact" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">Request a Quote</Link>
              <Link to="/contact" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">Partner with Us</Link>
            </div>
          </div>

          <div className="relative">
            <div className="h-64 md:h-80 rounded-3xl bg-gradient-to-br from-sky-100 to-emerald-100 border border-slate-200"></div>
            <div className="absolute -bottom-6 -left-6 hidden md:block">
              <div className="rounded-2xl bg-white/70 border border-slate-200 backdrop-blur p-4 shadow-sm">
                <div className="text-sm font-semibold">Let’s Build AI for Everyone</div>
                <div className="text-xs text-slate-600">Inclusive data • Diverse workforce</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <h2 className="text-2xl md:text-3xl font-bold">What We Do</h2>
        <p className="text-slate-600 mt-2">Inclusive Data Services and Workforce Training.</p>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card
            id="multilingual"
            title="Multilingual Text Data Services"
            body="Collection, annotation, and curation with strong coverage in low-resource languages."
            href="/services#multilingual"
          />
          <Card
            id="talent"
            title="Trained AI Data Engineers"
            body="On-demand, multilingual talent across nationalities; trained in data quality, ethics, and tooling."
            href="/services#talent"
          />
          <Card
            id="finetune"
            title="Fine-Tuning & AI Model Partnerships"
            body="Dataset preparation and fine-tuning partnerships to align models with cultural nuance."
            href="/services#finetune"
          />
        </div>
      </section>

      {/* PROBLEM & VISION */}
      <section className="max-w-7xl mx-auto px-4 py-12 reveal">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-white">
          <h3 className="text-xl md:text-2xl font-bold">Problem & Vision</h3>
          <p className="text-slate-600 mt-3">
            LLMs often overlook underrepresented languages. We bridge this gap by creating culturally-aware datasets and empowering a diverse AI workforce.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-4">
            <Stat k="40+" v="languages covered (and growing)"/>
            <Stat k="95%" v="avg. QA acceptance on pilot projects"/>
            <Stat k="2–6w" v="typical dataset pilot delivery"/>
          </div>
        </div>
      </section>

      {/* WHO WE SERVE PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="rounded-3xl border border-slate-200 p-8 bg-white reveal">
          <h3 className="text-xl md:text-2xl font-bold">Who We Serve</h3>
          <p className="text-slate-600 mt-3">
            AI startups & LLM developers, academic researchers, NGOs, and public sector teams focused on fairness & access.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link to="/who-we-serve" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">
              Explore audiences
            </Link>
            <Link to="/contact" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">
              Start a project
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-gradient-to-br from-sky-50 to-emerald-50 reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Let’s Build AI for Everyone</h3>
              <p className="text-slate-600 mt-2">Get a fast quote or schedule a scoping call.</p>
            </div>
            <div className="flex gap-3">
              <Link to="/contact" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">Request a Quote</Link>
              <a href="#contact-form" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">Contact</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
