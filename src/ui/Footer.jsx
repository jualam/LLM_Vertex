import { Link } from "react-router-dom";

const footerLinks = {
  Company: [
    ["About", "/about"],
    ["Careers", "/careers"],
    ["Contact", "/contact"],
  ],
  Solutions: [
    ["Learning Management System", "/learning-management-system"],
    ["Multilingual Text Data", "/services#multilingual"],
    ["AI Workforce Training", "/services#training"],
    ["Fine-Tuning & Partnerships", "/services#finetune"],
  ],
};

const Footer = () => {
  return (
    <footer className="bg-[#090909] text-[#999999] [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <div className="border-t border-[#1a1a1a]">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-[1.2fr_.8fr_.8fr_1fr] md:py-16">
          <div>
            <Link to="/" className="inline-flex items-center gap-3 text-white">
              <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white">
                <img src="/logo/llm_logo1.png" alt="LLM Vertex Logo" className="h-10 w-10 object-contain" />
              </span>
              <span className="text-[18px] font-medium tracking-[-.3px]">LLM Vertex</span>
            </Link>
            <p className="mt-5 max-w-xs text-[14px] leading-[1.4]">
              Building inclusive AI through ethical diverse data and workforce innovation.
            </p>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-[13px] font-medium uppercase text-white">{title}</h3>
              <ul className="mt-4 space-y-3 text-[14px]">
                {links.map(([label, href]) => (
                  <li key={label}>
                    <Link to={href} className="transition hover:text-white">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-[13px] font-medium uppercase text-white">Contact</h3>
            <p className="mt-4 text-[14px] leading-[1.4]">
              For demos, partnerships, and project discussions, contact us at{" "}
              <a className="text-[#0099ff] hover:underline" href="mailto:info@llmvertex.com">
                info@llmvertex.com
              </a>
              .
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-[#1a1a1a]">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-6 text-[13px] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} LLM Vertex LLC - All rights reserved.</p>
          <div className="flex flex-wrap gap-5">
            <Link to="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/privacy-policy" className="transition hover:text-white">
              Terms
            </Link>
            <Link to="/privacy-policy" className="transition hover:text-white">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

/*
const LegacyFooter = () => {
  return (
    <footer className="relative z-0 overflow-hidden bg-white text-slate-700">
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12"
      >
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-12 w-24 rounded-lg bg-white flex items-center justify-center overflow-hidden ">
              <img
                src="logo/llm_logo1.png"
                alt="LLM Vertex Logo"
                className="h-full w-full object-contain"
              />
            </div>

            <span className="text-lg font-bold tracking-tight text-slate-900">
              LLM Vertex
            </span>
          </div>
          <p className="text-sm text-slate-600/90 leading-relaxed text-center md:text-left">
            Building inclusive AI through ethical diverse data and workforce
            innovation.
          </p>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-semibold text-sm">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
            <li><Link to="/careers" className="hover:text-slate-900 transition-colors">Careers</Link></li>
            <li><Link to="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-semibold text-sm">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#multilingual" className="hover:text-slate-900 transition-colors">Multilingual Text Data</Link></li>
            <li><Link to="/services#talent" className="hover:text-slate-900 transition-colors">Trained AI Data Engineers</Link></li>
            <li><Link to="/services#finetune" className="hover:text-slate-900 transition-colors">Fine-Tuning & Partnerships</Link></li>
          </ul>
        </div>

        <div className="space-y-3">
          <h4 className="text-slate-900 font-semibold text-sm">Subscribe</h4>
          <form className="flex flex-col sm:flex-row gap-2 w-full" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="footer-email" className="sr-only">Email address</label>
            <input
              id="footer-email"
              type="email"
              placeholder="info@llmvertex.com"
              className="w-full rounded-lg px-3 py-2 text-sm bg-white border border-slate-300
                         placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-400"
            />
            <button
              className="w-full sm:w-auto rounded-lg bg-slate-900 text-white px-4 py-2 text-sm font-medium
                         hover:bg-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-900/10"
              type="submit"
              aria-label="Join newsletter"
            >
              Join
            </button>
          </form>
          <p className="text-xs text-slate-500">
            We'll occasionally send updates. Unsubscribe anytime.
          </p>
        </div>
      </div>

      <hr className="border-t border-slate-200" />

      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 py-5 md:py-6
                   flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
      >
        <p className="text-xs text-slate-500">
          © <span>{new Date().getFullYear()}</span> LLM Vertex LLC - All rights reserved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-slate-600 text-sm">
          <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
          <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Terms</Link>
          <Link to="/privacy-policy" className="hover:text-slate-900 transition-colors">Support</Link>
        </div>
      </div>
    </footer>
  );
};
*/

export default Footer;
