import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-0 overflow-hidden bg-white text-slate-700">
      {/* Content */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 py-12 md:py-16
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12"
      >
        {/* Brand */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <div className="h-10 w-10 rounded-lg bg-slate-100 flex items-center justify-center overflow-hidden ring-1 ring-slate-200">
              <img
                src="logo/logo.png"
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

        {/* Company */}
        <div className="space-y-3">
          <h4 className="text-slate-900 font-semibold text-sm">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/about"
                className="hover:text-slate-900 transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/work-with-us"
                className="hover:text-slate-900 transition-colors"
              >
                Careers / Work with us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-slate-900 transition-colors"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="space-y-3">
          <h4 className="text-slate-900 font-semibold text-sm">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/services#multilingual"
                className="hover:text-slate-900 transition-colors"
              >
                Multilingual Text Data
              </Link>
            </li>
            <li>
              <Link
                to="/services#talent"
                className="hover:text-slate-900 transition-colors"
              >
                Trained AI Data Engineers
              </Link>
            </li>
            <li>
              <Link
                to="/services#finetune"
                className="hover:text-slate-900 transition-colors"
              >
                Fine-Tuning & Partnerships
              </Link>
            </li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="space-y-3">
          <h4 className="text-slate-900 font-semibold text-sm">Subscribe</h4>
          <form
            className="flex flex-col sm:flex-row gap-2 w-full"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="footer-email" className="sr-only">
              Email address
            </label>
            <input
              id="footer-email"
              type="email"
              placeholder="info.llmvertex.com"
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
            We’ll occasionally send updates. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-t border-slate-200" />

      {/* Bottom bar */}
      <div
        className="mx-auto max-w-7xl px-4 sm:px-6 py-5 md:py-6
                   flex flex-col md:flex-row items-center justify-between gap-3 text-center md:text-left"
      >
        <p className="text-xs text-slate-500">
          © <span>{new Date().getFullYear()}</span> LLM Vertex LLC — All rights reserved.
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

export default Footer;
