export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16" id="contact-form">
      <h1 className="text-3xl md:text-4xl font-extrabold">Contact / Get a Quote</h1>
      <p className="text-slate-600 mt-3">
        Tell us about your project and timeline. We’ll reply with next steps or a quick estimate.
      </p>

      <form
        className="mt-8 grid gap-4 rounded-2xl border border-slate-200 p-6 bg-white reveal"
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks! We’ll be in touch shortly.");
        }}
      >
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Name</label>
            <input required className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input type="email" required className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Company</label>
          <input className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2" />
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium">Service</label>
            <select className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2">
              <option>Multilingual Data</option>
              <option>Trained AI Data Engineers</option>
              <option>Fine-Tuning Partnership</option>
              <option>Other</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Timeline</label>
            <select className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2">
              <option>ASAP</option>
              <option>2–6 weeks</option>
              <option>1–3 months</option>
              <option>Flexible</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea rows="5" className="mt-1 w-full border border-slate-300 rounded-xl px-3 py-2" placeholder="A few lines about goals, languages, scope..."></textarea>
        </div>

        <div className="flex items-center justify-between gap-4">
          <button className="rounded-xl bg-slate-900 text-white px-5 py-3 text-sm hover:bg-slate-800">
            Send
          </button>
          <a
            href="https://calendly.com/"
            target="_blank"
            rel="noreferrer"
            className="text-sky-600 text-sm hover:underline"
          >
            Or schedule a call →
          </a>
        </div>
      </form>
    </div>
  );
}
