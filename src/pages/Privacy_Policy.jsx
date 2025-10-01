import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.05 } }
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } }
};

export default function PrivacyPolicy() {
  const meta = {
    effective: "January 15, 2025",
    updated: "September 22, 2025",
  };

  const sections = [
    {
      id: "scope",
      title: "1. Scope",
      body: (
        <p className="text-slate-700 leading-relaxed">
          This Privacy Policy applies to all personal data processed by LLM Vertex LLC ("LLM Vertex") in connection with our websites, products, services, workforce and recruiting programs, and vendor relationships worldwide. While our activities are global, we align our program to the New Jersey Data Privacy Act ("NJDPA"), and apply those standards across our operations regardless of where the data originates.
        </p>
      )
    },
    {
      id: "categories",
      title: "2. Categories of Personal Data We Collect",
      body: (
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li><span className="font-medium">Identifiers</span>: name, email address, phone number, postal address, account credentials.</li>
          <li><span className="font-medium">Professional Information</span>: employer/organization, role/title, areas of expertise, languages spoken.</li>
          <li><span className="font-medium">Technical Data</span>: IP address, device identifiers, browser/OS, pages viewed, referral source, approximate location, and product telemetry.</li>
          <li><span className="font-medium">Communications</span>: support tickets, feedback, survey responses, and application materials (e.g., resumes).</li>
          <li><span className="font-medium">Sensitive Data (by explicit consent only)</span>: health, financial, biometric identifiers, precise geolocation, racial/ethnic origin, religious beliefs, sexual orientation, gender identity, or immigration status.</li>
        </ul>
      )
    },
    {
      id: "purposes",
      title: "3. Purposes for Processing",
      body: (
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>Deliver, maintain, and improve our products and services.</li>
          <li>Authenticate accounts, prevent fraud, and ensure security.</li>
          <li>Conduct analytics, research, model evaluation, and innovation.</li>
          <li>Communicate with customers and talent (with opt‑out choices for marketing).</li>
          <li>Comply with legal, regulatory, and contractual obligations.</li>
        </ul>
      )
    },
    {
      id: "disclosure",
      title: "4. Disclosure of Personal Data",
      body: (
        <div className="space-y-3 text-slate-700">
          <p>
            We may share personal data with: <span className="font-medium">(a)</span> service providers (hosting, analytics, payments, communications); <span className="font-medium">(b)</span> our affiliates for operational support; <span className="font-medium">(c)</span> legal or regulatory authorities when required; and <span className="font-medium">(d)</span> transaction partners in the event of a merger, acquisition, or asset transfer.
          </p>
          <p>
            We do <span className="font-semibold">not sell</span> personal data without consent. Where we engage in targeted advertising or profiling that produces legal or similarly significant effects, you may <span className="font-medium">opt out</span> (see Section 6).
          </p>
        </div>
      )
    },
    {
      id: "rights",
      title: "5. Your Privacy Rights (NJDPA)",
      body: (
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li><span className="font-medium">Access</span> the personal data we hold about you.</li>
          <li><span className="font-medium">Correction</span> of inaccurate information.</li>
          <li><span className="font-medium">Deletion</span> of personal data, subject to lawful exceptions.</li>
          <li><span className="font-medium">Portability</span> of data in a usable format.</li>
          <li><span className="font-medium">Opt‑Out</span> of sales, targeted advertising, or certain profiling.</li>
          <li>You may designate an authorized agent to exercise rights on your behalf where permitted.</li>
        </ul>
      )
    },
    {
      id: "requests",
      title: "6. How to Exercise Your Rights",
      body: (
        <div className="space-y-3 text-slate-700">
          <p>
            Submit a verified request by emailing <a href="mailto:privacy@llmvertex.com" className="text-slate-900 underline underline-offset-2">privacy@llmvertex.com</a>. We will respond within 45 days (with one possible 45‑day extension if reasonably necessary). If we deny your request, you may appeal. If unresolved, you can contact the New Jersey Division of Consumer Affairs.
          </p>
          <p className="text-xs text-slate-500">For your security, we may request additional information to verify your identity and relationship with us.</p>
        </div>
      )
    },
    {
      id: "security",
      title: "7. Data Security & Retention",
      body: (
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>We implement administrative, technical, and physical safeguards appropriate to the nature and volume of data processed.</li>
          <li>We retain data only as long as necessary for the purposes described in this Policy, to comply with law, and to resolve disputes.</li>
          <li>Where feasible, we apply privacy‑preserving techniques such as pseudonymization and access minimization.</li>
        </ul>
      )
    },
    {
      id: "sensitive",
      title: "8. Sensitive Data & Children",
      body: (
        <ul className="list-disc pl-5 text-slate-700 space-y-2">
          <li>We will not process sensitive categories of personal data without your clear, affirmative consent, unless otherwise permitted by law.</li>
          <li>We do not knowingly collect personal data from children under 13. If you believe a child provided data to us, contact us to request deletion. We comply with COPPA where applicable.</li>
        </ul>
      )
    },
    {
      id: "nondiscrimination",
      title: "9. Non‑Discrimination",
      body: (
        <p className="text-slate-700 leading-relaxed">
          We will not deny services, charge different prices, or provide a different level of quality because you exercise your privacy rights. Incentives or loyalty programs may be offered where permitted by law, based on the good‑faith value of your data and with clear terms.
        </p>
      )
    },
    {
      id: "international",
      title: "10. International Data Transfers",
      body: (
        <p className="text-slate-700 leading-relaxed">
          If personal data is transferred across borders (for example, to infrastructure or service providers outside your jurisdiction), we implement appropriate safeguards consistent with applicable laws, such as contractual protections and risk assessments.
        </p>
      )
    },
    {
      id: "automated",
      title: "11. Automated Decision‑Making & Profiling",
      body: (
        <p className="text-slate-700 leading-relaxed">
          We may use automated systems for security, fraud detection, quality assurance, and analytics. Where such processing produces legal or similarly significant effects, you have the right to opt out and/or request information about the logic involved, subject to legal limits.
        </p>
      )
    },
    {
      id: "cookies",
      title: "12. Cookies & Similar Technologies",
      body: (
        <p className="text-slate-700 leading-relaxed">
          We use cookies and similar technologies to operate our site, remember preferences, and measure performance. You can manage cookies via your browser settings. Some features may not function properly if you disable cookies. For product analytics, we use privacy‑centric configurations where possible.
        </p>
      )
    },
    {
      id: "enforcement",
      title: "13. Enforcement",
      body: (
        <p className="text-slate-700 leading-relaxed">
          The New Jersey Attorney General has exclusive authority to enforce the NJDPA. While the NJDPA does not provide a private right of action, you may submit complaints to the Attorney General’s Office or relevant supervisory authorities.
        </p>
      )
    },
    {
      id: "updates",
      title: "14. Updates to This Policy",
      body: (
        <p className="text-slate-700 leading-relaxed">
          We may update this Policy as our practices evolve or as laws change. Material updates will be posted with a new effective date and, where required, additional notice will be provided. Your continued use of our services after posting signifies acceptance of the updated Policy.
        </p>
      )
    },
    {
      id: "contact",
      title: "15. Contact Us",
      body: (
        <div className="text-slate-700 leading-relaxed">
          <p>LLM Vertex — Privacy Compliance Team</p>
          <p>Email: <a href="mailto:privacy@llmvertex.com" className="text-slate-900 underline underline-offset-2">privacy@llmvertex.com</a></p>
        </div>
      )
    }
  ];

  return (
    <div className="bg-white text-slate-800">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-14 md:py-20">
        {/* Header */}
        <motion.header variants={container} initial="hidden" animate="show" className="text-center">
          <motion.h1 variants={item} className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </motion.h1>
          <motion.p variants={item} className="mt-3 text-slate-600">
            Effective: <span className="font-medium text-slate-900">{meta.effective}</span> · Last Updated: <span className="font-medium text-slate-900">{meta.updated}</span>
          </motion.p>
          <motion.div variants={item} className="mx-auto mt-6 h-[3px] w-28 rounded-full bg-slate-900/10">
            <div className="h-full w-full bg-slate-900/30 animate-pulse rounded-full" />
          </motion.div>
        </motion.header>

        {/* Layout: TOC + Content */}
        <div className="mt-10 grid md:grid-cols-12 gap-8">
          {/* TOC (sticky on desktop) */}
          <aside className="md:col-span-4 lg:col-span-3">
            <div className="sticky top-20 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-sm font-semibold text-slate-900">On this page</div>
              <nav className="mt-3 space-y-2 text-sm">
                {sections.map((s) => (
                  <a key={s.id} href={`#${s.id}`} className="block text-slate-600 hover:text-slate-900">
                    {s.title}
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main content */}
          <main className="md:col-span-8 lg:col-span-9">
            <motion.div variants={container} initial="hidden" animate="show" className="space-y-8">
              {/* NJDPA note */}
              <motion.div variants={item} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm text-slate-700">
                  LLM Vertex is headquartered in New Jersey and aligns its program to the <span className="font-medium">New Jersey Data Privacy Act (NJDPA)</span>. We apply these protections globally across our operations, regardless of where data originates.
                </p>
              </motion.div>

              {sections.map((s) => (
                <motion.section key={s.id} id={s.id} variants={item} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                  <h2 className="text-lg md:text-xl font-semibold text-slate-900">{s.title}</h2>
                  <div className="mt-3 text-sm md:text-base">{s.body}</div>
                </motion.section>
              ))}

              {/* Disclaimer */}
              <motion.section variants={item} className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
                <p className="text-xs text-amber-900">
                  <span className="font-semibold">Disclaimer:</span> This Privacy Policy is provided for transparency and does not constitute legal advice. Depending on your jurisdiction or the services you use, additional terms may apply.
                </p>
              </motion.section>
            </motion.div>
          </main>
        </div>
      </div>
    </div>
  );
}
