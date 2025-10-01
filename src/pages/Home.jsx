import { useEffect } from "react";
import { Link } from "react-router-dom";

/* ------------------------------
   Small helpers (no extra deps)
--------------------------------*/
const useReveal = () => {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("show");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
};

const Stat = ({ k, v }) => (
  <div className="rounded-2xl border border-slate-200 p-5 bg-white/70 backdrop-blur reveal">
    <div className="text-2xl font-bold">{k}</div>
    <div className="text-slate-600 text-sm">{v}</div>
  </div>
);

const Card = ({ title, body, href = "#", id, img = "/img/placeholder-1.jpg" }) => (
  <div
    id={id}
    className="group rounded-2xl border border-slate-200 p-6 bg-white hover:shadow-xl transition reveal"
  >
    <div className="aspect-[16/9] w-full overflow-hidden rounded-xl border border-slate-100 bg-slate-50">
      <img
        src={img}
        alt=""
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      />
    </div>
    <h3 className="font-semibold text-lg mt-4">{title}</h3>
    <p className="text-slate-600 mt-2">{body}</p>
    {/* <Link
      to={href}
      className="inline-flex items-center gap-2 text-sky-700 mt-4 hover:underline font-medium"
    >
      Learn more <span aria-hidden>→</span>
    </Link> */}
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center rounded-full border border-slate-200 bg-white px-3 py-1 text-xs text-slate-600">
    {children}
  </span>
);

export default function Home() {
  useReveal();

  return (
    <div className="bg-white text-slate-900">
      {/* Inline styles for tiny extras (no config changes needed) */}
      <style>{`
        .gradient-text{
          background: linear-gradient(90deg,#0ea5e9 0%, #10b981 60%, #6366f1 100%);
          -webkit-background-clip:text;background-clip:text;color:transparent;
        }
        .reveal{opacity:0;transform:translateY(12px);transition:opacity .6s ease, transform .6s ease;}
        .reveal.show{opacity:1;transform:none;}
        .floaty{animation:floaty 6s ease-in-out infinite;}
        @keyframes floaty{0%,100%{transform:translateY(0)}50%{transform:translateY(-6px)}}
        .shine{position:relative;overflow:hidden}
        .shine:after{content:"";position:absolute;inset:-100% auto -100% -100%;width:60%;transform:rotate(20deg);
          background:linear-gradient(90deg,transparent,rgba(255,255,255,.7),transparent);
          animation:shine 2.5s linear infinite;}
        @keyframes shine{to{left:160%}}
      `}</style>

      {/* HERO */}
      <section className="relative">
        {/* subtle shape */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_rgba(14,165,233,.08),transparent_60%),radial-gradient(ellipse_at_bottom,_rgba(16,185,129,.08),transparent_60%)]"
        />
        <div className="max-w-7xl mx-auto px-4 pt-16 pb-10 lg:pt-20 lg:pb-16">
          <div className="grid lg:grid-cols-12 gap-10 items-stretch">
            <div className="lg:col-span-6 reveal">
              <div className="flex flex-wrap gap-2 mb-4">
                <Pill>Inclusive AI</Pill>
                <Pill>Low-resource Languages</Pill>
                <Pill>OPT/CPT Programs</Pill>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                {/* Building <span className="gradient-text">Inclusive AI</span> through Ethical Diverse Data &amp; Workforce Innovation */}
                Building Inclusive AI through Ethical Diverse Data &amp; Workforce Innovation
              </h1>
              <p className="mt-4 text-slate-600 max-w-xl">
                Underrepresented language datasets + AI workforce training to serve a diverse world.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/services"
                  className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800"
                >
                  Work with Us
                </Link>
                <Link
                  to="/contact"
                  className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100"
                >
                  Explore Our Solutions
                </Link>
                
              </div>

              {/* <div className="mt-8 flex items-center gap-4 text-sm text-slate-600">
                <img src="aiu.jpg" alt="" className="h-9 w-9 rounded-full object-cover" />
                <div>
                  “Let’s Build AI for Everyone.” <span className="text-slate-400">— LLM Vertex</span>
                </div>
              </div> */}

            </div>

            <div className="lg:col-span-6">
              <div className="relative h-full">
                <div className="absolute inset-0 rounded-[28px] border border-slate-200 bg-white p-3 md:p-4 reveal shine">

                  {/* New Code */}
                  <div className="h-full">
                    <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                      <img
                        src="llm.jpg"
                        alt="Dataset creation preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  {/* <div className="grid grid-cols-3 gap-3 md:gap-4 h-full">
                    <div className="col-span-2 rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                      <img
                        src="llm.jpg"
                        alt="Dataset creation preview"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col gap-3 md:gap-4">
                      <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50 floaty">
                        <img src="data.jpg" alt="" className="h-32 md:h-40 w-full object-cover" />
                      </div>
                      <div className="rounded-2xl overflow-hidden border border-slate-100 bg-slate-50">
                        <img src="aiu.jpg" alt="" className="h-32 md:h-40 w-full object-cover" />
                      </div>
                    </div>
                  </div> */}


                </div>

                <div className="absolute -top-2 -left-6 hidden md:block">
                  <div className="rounded-2xl bg-white/80 border border-slate-200 backdrop-blur p-4 shadow-sm">
                    <div className="text-sm font-semibold">Let’s Build AI for Everyone</div>
                    <div className="text-xs text-slate-600">Inclusive data • Diverse workforce</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* TRUST BAR (Marquee style) */}
        <div className="mt-12 reveal">
          <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">Our Diversity</div>

          {/* Inline keyframes for marquee */}
          <style>{`
            @keyframes marqueeRTL {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .marquee-track {
              display: flex;
              width: max-content;
              animation: marqueeRTL 30s linear infinite;
            }
            .marquee-track > * {
              flex-shrink: 0;
            }
          `}</style>

          <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="marquee-track gap-12 py-6 will-change-transform">
              {/* row 1 */}
              {["l1.jpg","logo/l1.jpg","logo/l2.jpg","logo/l3.jpg","logo/l4.jpg","logo/l5.jpg","logo/l6.jpg","logo/l7.jpg","logo/l8.jpg"].map((src, i) => (
                <div key={`row1-${i}`} className="opacity-90 hover:opacity-100 transition">
                  <img src={src} alt="" className="h-15 md:h-15 object-contain" />
                </div>
              ))}
              {/* duplicate row for seamless loop */}
              {["l1.jpg","logo/l1.jpg","logo/l2.jpg","logo/l3.jpg","logo/l4.jpg","logo/l5.jpg","logo/l6.jpg","logo/l7.jpg","logo/l8.jpg"].map((src, i) => (
                <div key={`row2-${i}`} className="opacity-90 hover:opacity-100 transition">
                  <img src={src} alt="" className="h-15 md:h-15 object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 reveal">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold">What We Do</h2>
            <p className="text-slate-600 mt-2">Inclusive Data Services and Workforce Training.</p>
          </div>
          <Link to="/services" className="text-sky-700 text-sm hover:underline">
            See all services →
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mt-8">
          <Card
            id="multilingual"
            title="Multilingual Text Data Services"
            body="Collection, annotation, and evaluation with strong coverage in low-resource languages and dialects."
            href="/services#multilingual"
            img="data.jpg"
          />
          <Card
            id="talent"
            title="Trained AI Data Engineers"
            body="On-demand multilingual talent trained in data quality, ethics, and tooling across use-cases."
            href="/services#talent"
            img="llm.jpg"
          />
          <Card
            id="finetune"
            title="Fine-Tuning & AI Model Partnerships"
            body="Culturally-aware dataset prep and fine-tuning to align models with regional nuance."
            href="/services#finetune"
            img="hero.jpg"
          />
        </div>
      </section>

      {/* PROBLEM & VISION */}
      <section className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="rounded-3xl border border-slate-200 p-8 md:p-10 bg-white reveal">
            <h3 className="text-xl md:text-2xl font-bold">Problem &amp; Vision</h3>
            <p className="text-slate-600 mt-3">
              Many LLMs overlook underrepresented languages. We bridge this gap by creating culturally-aware datasets and empowering a diverse AI workforce.
            </p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <Stat k="40+" v="languages covered (and growing)" />
              <Stat k="95%" v="avg. QA acceptance on pilot projects" />
              <Stat k="2–6w" v="typical dataset pilot delivery" />
            </div>
          </div>

          <div className="rounded-3xl border border-slate-200 p-8 md:p-10 bg-white reveal">
            <h3 className="text-xl md:text-2xl font-bold">Why It Matters</h3>
            <ul className="mt-3 space-y-3 text-slate-700">
              <li>• Better access and fairness in AI products worldwide</li>
              <li>• Improved safety through cultural context</li>
              <li>• Higher model performance on real users’ languages</li>
              <li>• Stronger global adoption for AI-first products</li>
            </ul>
            {/* <div className="mt-6">
              <Link to="/impact" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">
                See our impact
              </Link>
            </div> */}
          </div>
        </div>
      </section>


        {/* PROGRAM FOR STUDENTS (OPT/CPT) */}
      <section className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-white reveal">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">International Students: OPT/CPT Friendly</h3>
              <p className="text-slate-600 mt-3">
                We welcome F-1 students seeking OPT or CPT. Gain real-world experience while helping us make AI more inclusive.
              </p>
              <ul className="mt-4 space-y-2 text-slate-700">
                <li>• Training in data quality, ethics, and tooling</li>
                <li>• Work with multilingual datasets and evaluation</li>
                <li>• Mentorship and career guidance</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link to="/careers" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">
                  Apply / Submit Resume
                </Link>
                <Link to="/programs" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">
                  Learn more
                </Link>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-50">
              <img src="student.jpg" alt="Students collaborating" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>



      {/* USE CASES / SOLUTIONS */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="reveal">
          <h3 className="text-xl md:text-2xl font-bold">Solutions & Use Cases</h3>
          <p className="text-slate-600 mt-2">From data collection to fine-tuning and evaluation.</p>
        </div>

        <div className="mt-6 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            ["Conversational AI & Support","data.jpg","Multilingual intents, NER, and QA data for customer support and assistants."],
            ["Safety & Alignment","llm.jpg","Red-teaming prompts and culturally-aware safety evaluation sets."],
            ["Search & RAG","hero.jpg","Domain corpora, chunking evaluation, and human-rated retrieval quality."],
            ["Content Moderation","data.jpg","Policy-aligned datasets for nuanced harassment and hate-speech detection."],
            ["Education & Research","llm.jpg","Academic partnerships for corpus building and benchmark creation."],
            ["Public Sector & NGOs","hero.jpg","Civic-tech language coverage for underserved communities."]
          ].map(([title, img, body], i) => (
            <Card key={i} title={title} img={img} body={body} href="/use-cases" />
          ))}
        </div>
      </section>

    

      {/* PROCESS */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="reveal">
          <h3 className="text-xl md:text-2xl font-bold">How We Work</h3>
          <p className="text-slate-600 mt-2">Simple, transparent collaboration.</p>
        </div>
        <div className="grid md:grid-cols-4 gap-6 mt-8">
          {[
            ["Scope","1.webp","Define languages, tasks, and policy constraints."],
            ["Pilot","2.webp","Small sample to validate quality and cost."],
            ["Scale","3.webp","Expand with QA loops and analytics."],
            ["Deliver","4.webp","Datasets, reports, and integration help."]
          ].map(([t,img,desc],i)=>(
            <div key={i} className="rounded-2xl border border-slate-200 p-6 bg-white reveal">
              <div className="aspect-[16/9] rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
                <img src={img} alt="" className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="mt-4 flex items-center gap-2">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-slate-200 text-xs">
                  {i+1}
                </span>
                <h4 className="font-semibold">{t}</h4>
              </div>
              <p className="text-slate-600 mt-2">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* METRICS / SOCIAL PROOF */}
      {/* <section className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-white reveal">
          <div className="grid md:grid-cols-4 gap-6">
            <Stat k="150k+" v="human-labeled examples" />
            <Stat k="12+" v="active model partnerships" />
            <Stat k="85%" v="repeat customers & partners" />
            <Stat k="A+" v="data ethics compliance record" />
          </div>
        </div>
      </section> */}

      {/* TESTIMONIALS */}
      {/* <section className="max-w-7xl mx-auto px-4 pb-12 md:pb-16">
        <div className="grid lg:grid-cols-3 gap-6">
          {[
            ["“Their multilingual QA sets lifted our assistant’s accuracy across new markets.”","goni.jpg","Head of ML, SaaS"],
            ["“Strong ethics, strong delivery. The pilot was production-ready.”","Jisan.jpg","Founder, AI Startup"],
            ["“As an F-1 student, I gained real experience—and contributed to my language community.”","faiyaz.jpg","Data Engineer (OPT)"]
          ].map(([q,face,role],i)=>(
            <figure key={i} className="rounded-2xl border border-slate-200 p-6 bg-white reveal">
              <div className="flex items-center gap-3">
                <img src={face} alt="" className="h-10 w-10 rounded-full object-cover" />
                <figcaption className="text-sm text-slate-500">{role}</figcaption>
              </div>
              <blockquote className="mt-3 text-slate-800">{q}</blockquote>
            </figure>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="rounded-3xl border border-slate-200 p-8 md:p-12 bg-gradient-to-br from-white to-slate-50 reveal">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl md:text-2xl font-bold">Let’s Build AI for Everyone</h3>
              <p className="text-slate-600 mt-2">Get a fast quote or schedule a scoping call.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">
                Request a Quote
              </Link>
              <a href="#contact-form" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">
                Contact
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
