import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative z-0 overflow-hidden text-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                       min-h-[420px] sm:min-h-[380px] md:min-h-0">
      {/* Background image */}
      <div className="absolute inset-0 z-0 pointer-events-none" aria-hidden="true">
        <img
          src="/footer-bg.png"
          alt=""
          className="w-full h-full select-none object-cover object-[center_top] md:object-center"
          loading="lazy"
        />
      </div>

      {/* (Very) light tint for contrast */}
      <div className="absolute inset-0 z-10 bg-slate-900/10 pointer-events-none" aria-hidden="true" />

      {/* Content */}
      <div
        className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 py-10 md:py-14
                   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-10
                   place-items-center md:place-items-start text-center md:text-left"
      >
        {/* Brand */}
        <div className="w-full">
          <div className="flex justify-center md:justify-start items-center gap-2">
            <div className="h-9 w-9 md:h-10 md:w-10 rounded-lg bg-gradient-to-br from-sky-400 to-emerald-400" />
            <span className="text-base md:text-lg font-bold tracking-tight text-white">LLM Vertex</span>
          </div>
          <p className="text-sm text-slate-300/80 mt-3 md:mt-4 leading-relaxed">
            Building inclusive AI through ethical diverse data and workforce innovation.
          </p>
        </div>

        {/* Company */}
        <div className="w-full">
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Company</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/about" className="hover:text-sky-400 transition">About</Link></li>
            <li><Link to="/work-with-us" className="hover:text-sky-400 transition">Careers / Work with us</Link></li>
            <li><Link to="/contact" className="hover:text-sky-400 transition">Contact</Link></li>
          </ul>
        </div>

        {/* Solutions */}
        <div className="w-full">
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Solutions</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/services#multilingual" className="hover:text-sky-400 transition">Multilingual Text Data</Link></li>
            <li><Link to="/services#talent" className="hover:text-sky-400 transition">Trained AI Data Engineers</Link></li>
            <li><Link to="/services#finetune" className="hover:text-sky-400 transition">Fine-Tuning & Partnerships</Link></li>
          </ul>
        </div>

        {/* Subscribe */}
        <div className="w-full">
          <h4 className="text-white font-semibold mb-3 md:mb-4 text-sm md:text-base">Subscribe</h4>
          <form className="flex flex-col sm:flex-row gap-2 w-full">
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg px-3 py-2 text-sm bg-slate-800/90 border border-slate-700 placeholder-slate-400
                         focus:outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              className="w-full sm:w-auto rounded-lg bg-gradient-to-r from-sky-500 to-emerald-500 text-white px-4 py-2 text-sm font-medium
                         hover:opacity-90 transition"
            >
              Join
            </button>
          </form>
          <p className="mt-3 text-xs text-slate-400/90">
            We’ll occasionally send updates. Unsubscribe anytime.
          </p>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative z-20 border-t border-slate-600/50">
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6 py-5 md:py-6
                     flex flex-col md:flex-row items-center justify-between gap-3
                     text-center md:text-left"
        >
          <p className="text-xs text-slate-400">
            © <span>{new Date().getFullYear()}</span> LLM Vertex LLC — All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-slate-300/80 text-sm">
            <a href="#" className="hover:text-sky-400 transition">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition">Terms</a>
            <a href="#" className="hover:text-sky-400 transition">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
