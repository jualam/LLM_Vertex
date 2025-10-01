export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16" id="contact">
      <h1 className="text-3xl md:text-4xl font-extrabold text-black">Contact</h1>
      <p className="text-slate-700 mt-3">
        Reach out and we’ll get back to you shortly. For quick intake, use the Google Form below.
      </p>

      {/* Info cards */}
      <div className="mt-8 grid md:grid-cols-2 gap-4">
        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            {/* Mail icon (monochrome) */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"
              className="shrink-0 fill-none stroke-black" strokeWidth="1.5">
              <path d="M3 7.5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-9Z"/>
              <path d="m3 8 8.4 5.6c.37.25.83.25 1.2 0L21 8"/>
            </svg>
            <div>
              <h2 className="font-semibold text-black">General / Quotes</h2>
              <p className="text-slate-700 mt-1">Project scope, pricing, and timelines.</p>
              <a href="mailto:hello@llmvertex.com" className="mt-2 inline-block underline underline-offset-4">
                info@llmvertex.com
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            {/* Handshake icon (monochrome) */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"
              className="shrink-0 fill-none stroke-black" strokeWidth="1.5">
              <path d="M7.5 12 5 9.5A3 3 0 0 1 5 5h.5l6.5 5.5 3-2.5A3 3 0 0 1 19 8l.5.5M13 14l-1.5 1.5a2.5 2.5 0 0 1-3.5 0L6 14m11-2-2 2a2.5 2.5 0 0 1-3.5 0"/>
              <path d="M3 12v4a3 3 0 0 0 3 3h1m14-7v4a3 3 0 0 1-3 3h-2"/>
            </svg>
            <div>
              <h2 className="font-semibold text-black">Partnerships</h2>
              <p className="text-slate-700 mt-1">Research, fine-tuning, and model collaborations.</p>
              <a href="mailto:partners@llmvertex.com" className="mt-2 inline-block underline underline-offset-4">
                partners@llmvertex.com
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            {/* Briefcase icon (monochrome) */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"
              className="shrink-0 fill-none stroke-black" strokeWidth="1.5">
              <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2"/>
              <rect x="3" y="7" width="18" height="12" rx="2"/>
              <path d="M3 12h18"/>
            </svg>
            <div>
              <h2 className="font-semibold text-black">Careers / OPT-CPT</h2>
              <p className="text-slate-700 mt-1">Training programs and roles for AI data engineers.</p>
              <a href="mailto:talent@llmvertex.com" className="mt-2 inline-block underline underline-offset-4">
                talent@llmvertex.com
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="flex items-start gap-3">
            {/* Pin icon (monochrome) */}
            <svg width="24" height="24" viewBox="0 0 24 24" aria-hidden="true"
              className="shrink-0 fill-none stroke-black" strokeWidth="1.5">
              <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11Z"/>
              <circle cx="12" cy="10" r="2.5"/>
            </svg>
            <div>
              <h2 className="font-semibold text-black">Locations</h2>
              <p className="text-slate-700 mt-1">New Jersey, USA • Dhaka, Bangladesh</p>
              <p className="text-slate-700">Mon–Fri, 9:00–18:00 (local)</p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA row */}
      <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-slate-600">
          Prefer a quick form? Submit basic details and we’ll follow up.
        </div>
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLScetHA8HG-dE5hmIrmcQeqk6WSJOY6jr-Mytu40_F7tpd1OVg/viewform?usp=header"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-xl bg-black text-white px-5 py-3 text-sm hover:opacity-90"
        >
          Contact Us
          {/* Arrow (monochrome) */}
          <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true" className="fill-none stroke-white" strokeWidth="1.8">
            <path d="M5 12h14M13 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </div>
  );
}
