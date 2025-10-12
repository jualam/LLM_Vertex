import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const NavItem = ({ to, children, onNavigate }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClick = (e) => {
    // Build absolute URLs for reliable compare
    const cur = new URL(
      location.pathname + location.search + location.hash,
      window.location.origin
    );
    const tgt = new URL(to, window.location.origin);

    const samePath = cur.pathname === tgt.pathname;
    const hasHash = Boolean(tgt.hash);

    if (samePath) {
      // We are already on this page
      e.preventDefault();
      // If target has a hash => scroll to that section
      if (hasHash) {
        const el = document.querySelector(tgt.hash);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // fallback to top if id not found
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }
      } else {
        // No hash: force scroll to top
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
      // Close mobile menu if parent passed a closer
      onNavigate?.();
      return;
    }

    // Different path: let router navigate normally
    onNavigate?.();
    // NavLink will handle navigation, but if you ever convert to <a>, uncomment:
    // navigate(tgt.pathname + tgt.search + tgt.hash);
  };

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `px-3 py-2 rounded-lg text-sm font-medium transition hover:bg-slate-100 ${
          isActive ? "text-sky-600" : "text-slate-700"
        }`
      }
    >
      {children}
    </NavLink>
  );
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          closeMenu();
          // force scroll to top when clicking logo on same page
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}>
          <div className="h-15 w-15 rounded-lg flex items-center justify-center overflow-hidden">
            <img src="logo/logo.png" alt="LLM Vertex Logo" className="h-full w-full object-contain" />
          </div>

          <span className="font-bold tracking-tight">LLM Vertex</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" onNavigate={closeMenu}>Home</NavItem>
          <NavItem to="/work-with-us" onNavigate={closeMenu}>Work With Us</NavItem>
          <NavItem to="/services" onNavigate={closeMenu}>Solutions</NavItem>
          <NavItem to="/about" onNavigate={closeMenu}>Company</NavItem>
          <NavItem to="/who-we-serve" onNavigate={closeMenu}>Who We Serve</NavItem>
          <NavItem to="/investor" onNavigate={closeMenu}>Investor</NavItem>
          <NavItem to="/contact" onNavigate={closeMenu}>Contact/Request a Quote</NavItem>
          {/* <Link
            to="/contact"
            onClick={closeMenu}
            className="ml-2 inline-flex items-center gap-2 rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition"
          >
            Request a Quote
          </Link> */}
        </nav>

        <button
          onClick={() => setOpen((s) => !s)}
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-slate-300 hover:bg-slate-100"
          aria-label="Toggle menu"
        >
          <span className="i">≡</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-2 grid gap-1">
            <NavItem to="/" onNavigate={closeMenu}>Home</NavItem>
            <NavItem to="/services" onNavigate={closeMenu}>Solutions</NavItem>
            <NavItem to="/about" onNavigate={closeMenu}>Company</NavItem>
            <NavItem to="/who-we-serve" onNavigate={closeMenu}>Who We Serve</NavItem>
            <NavItem to="/work-with-us" onNavigate={closeMenu}>Work With Us</NavItem>
            <NavItem to="/investor" onNavigate={closeMenu}>Investor</NavItem>
            <NavItem to="/contact" onNavigate={closeMenu}>Contact</NavItem>
            <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
