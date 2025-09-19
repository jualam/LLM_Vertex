export default function WorkWithUs() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-extrabold">Work With Us</h1>
      <p className="text-slate-600 mt-3">
        We’re actively building a diverse team of AI data engineers with expertise across languages, nationalities, and cultures—primarily from developing countries. We welcome international students and support both OPT and CPT work authorization.
      </p>

      <div className="mt-8 rounded-2xl border border-slate-200 p-6 bg-white reveal">
        <h2 className="font-semibold text-lg">How to Apply</h2>
        <ol className="list-decimal pl-5 mt-3 text-slate-700 space-y-2">
          <li>Prepare a one-page resume (PDF preferred).</li>
          <li>Include contact information and languages you speak.</li>
          <li>We’ll reach out shortly after review.</li>
        </ol>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href="mailto:talent@llmvertex.com?subject=Resume%20Submission&body=Please%20find%20my%20resume%20attached."
            className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800"
          >
            Click here to submit your resume
          </a>
          <a href="/contact" className="rounded-xl border border-slate-300 px-5 py-3 text-sm hover:bg-slate-100">
            Questions? Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
