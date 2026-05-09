import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";

const NavItem = ({ to, children, onNavigate }) => {
  const location = useLocation();
  const isExternal = /^https?:\/\//.test(to);

  const handleClick = (e) => {
    if (isExternal) {
      onNavigate?.();
      return;
    }

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

  if (isExternal) {
    return (
      <a
        href={to}
        onClick={() => onNavigate?.()}
        target="_blank"
        rel="noreferrer"
        className="rounded-full px-3 py-2 text-sm font-medium text-[#d4d4d4] transition hover:bg-[#1c1c1c] hover:text-white"
      >
        {children}
      </a>
    );
  }

  return (
    <NavLink
      to={to}
      onClick={handleClick}
      className={({ isActive }) =>
        `rounded-full px-3 py-2 text-sm font-medium transition hover:bg-[#1c1c1c] hover:text-white ${isActive ? "bg-white text-black" : "text-[#d4d4d4]"
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
    <header className="sticky top-0 z-40 border-b border-[#1a1a1a] bg-[#090909]/85 text-white backdrop-blur supports-[backdrop-filter]:bg-[#090909]/75">
      <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2" onClick={() => {
          closeMenu();
          // force scroll to top when clicking logo on same page
          window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
        }}>
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full bg-white">
            <img src="logo/llm_logo1.png" alt="LLM Vertex Logo" className="h-full w-full object-contain" />
          </div>

          <span className="font-medium tracking-[-.2px] text-white">LLM Vertex</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          <NavItem to="/" onNavigate={closeMenu}>Home</NavItem>
          <NavItem to="/learning-management-system" onNavigate={closeMenu}>LMS</NavItem>
          <NavItem to="https://workforce.llmvertex.com/" onNavigate={closeMenu}>Work Force Development</NavItem>
          <NavItem to="/services" onNavigate={closeMenu}>Solutions</NavItem>
          <NavItem to="/about" onNavigate={closeMenu}>Company</NavItem>
          <NavItem to="/who-we-serve" onNavigate={closeMenu}>Who We Serve</NavItem>
          <NavItem to="/investor" onNavigate={closeMenu}>Investor</NavItem>
          <NavItem to="/careers" onNavigate={closeMenu}>Career</NavItem>
          <NavItem to="/contact" onNavigate={closeMenu}>Contact</NavItem>
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
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#262626] bg-[#141414] text-white hover:bg-[#1c1c1c]"
          aria-label="Toggle menu"
        >
          <span className="i">≡</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1a1a1a] bg-[#090909]">
          <div className="px-4 py-2 grid gap-1">
            <NavItem to="/" onNavigate={closeMenu}>Home</NavItem>
            <NavItem to="/learning-management-system" onNavigate={closeMenu}>LMS</NavItem>
            <NavItem to="https://workforce.llmvertex.com/" onNavigate={closeMenu}>Work Force Development</NavItem>
            <NavItem to="/services" onNavigate={closeMenu}>Solutions</NavItem>
            <NavItem to="/about" onNavigate={closeMenu}>Company</NavItem>
            <NavItem to="/who-we-serve" onNavigate={closeMenu}>Who We Serve</NavItem>
            <NavItem to="/investor" onNavigate={closeMenu}>Investor</NavItem>
            <NavItem to="/careers" onNavigate={closeMenu}>Career</NavItem>
            <NavItem to="/contact" onNavigate={closeMenu}>Contact</NavItem>
            {/* <Link
              to="/contact"
              onClick={closeMenu}
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800 transition"
            >
              Request a Quote
            </Link> */}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
