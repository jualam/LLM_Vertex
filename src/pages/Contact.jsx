const contactCards = [
  {
    title: "General / Quotes",
    body: "Project scope, pricing, and timelines.",
    email: "info@llmvertex.com",
  },
  {
    title: "Partnerships",
    body: "Research, fine-tuning, and model collaborations.",
    email: "partners@llmvertex.com",
  },
  {
    title: "Careers",
    body: "Training programs and career development opportunities.",
    email: "talent@llmvertex.com",
  },
  {
    title: "Locations",
    body: "New Jersey, USA. Monday-Friday, 9:00-18:00 local time.",
  },
];

export default function Contact() {
  return (
    <main id="contact" className="bg-[#090909] text-white [font-feature-settings:'cv01','cv05','cv09','cv11','ss03','ss07']">
      <style>{`
        @keyframes contactCardShift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .contact-card-surface {
          background:
            radial-gradient(circle at 12% 15%, rgba(255,255,255,.08), transparent 28%),
            linear-gradient(135deg, #141414 0%, #1c1c1c 42%, #242424 58%, #141414 100%);
          background-size: 180% 180%;
          animation: contactCardShift 9s ease-in-out infinite;
        }
      `}</style>
      <section className="mx-auto max-w-7xl px-5 pb-6 pt-10 text-center md:pb-8 md:pt-16">
        <h1 className="text-4xl font-medium leading-[1] tracking-[-1.2px] text-white md:text-6xl md:tracking-[-2.4px] lg:text-[64px]">
          Contact
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-[20px] leading-[1.35] text-[#999999]">
          Reach out and we'll get back to you shortly. For quick intake, use the Google Form below.
        </p>
      </section>

      <section className="border-y border-[#1a1a1a]">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-2 md:py-12">
          {contactCards.map((card) => (
            <div
              key={card.title}
              className="contact-card-surface rounded-[20px] border border-[#262626] p-6"
            >
              <h2 className="text-[24px] font-medium leading-tight text-white">{card.title}</h2>
              <p className="mt-3 text-[15px] leading-[1.35] text-[#999999]">
                {card.body}
              </p>
              {card.email && (
                <a
                  href={`mailto:${card.email}`}
                  className="mt-5 inline-block text-[15px] font-medium text-[#0099ff] hover:underline"
                >
                  {card.email}
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-10 md:py-12">
        <div className="flex flex-col gap-5 rounded-[20px] bg-[#141414] p-6 md:flex-row md:items-center md:justify-between md:p-8">
          <p className="max-w-2xl text-[18px] leading-[1.35] text-[#999999]">
            Prefer a quick form? Submit basic details and we'll follow up.
          </p>
          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdUC8kRwVb7UGUXs2GA_HSVQkjKuQXxuxN-TyG7mhysMpBVqg/viewform"
            target="_blank"
            rel="noreferrer"
            className="w-fit rounded-full bg-white px-[15px] py-[10px] text-[14px] font-medium text-black transition hover:scale-[0.98]"
          >
            Contact Us
          </a>
        </div>
      </section>
    </main>
  );
}
