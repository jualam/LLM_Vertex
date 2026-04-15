export const webinarRegistrationUrl = "https://forms.gle/TJV4PkqgQcXnPf6CA";

export const packageCatalog = [
  {
    slug: "foundation",
    name: "Foundation Package",
    shortName: "Foundation",
    tier: "Starter Tier",
    tagline: "Best for students who have started their job search and need initial direction.",
    discountedPrice: 50,
    discountLabel: "75% off",
    originalPriceLabel: "Original price shared during consultation",
    accent: "from-cyan-500 via-sky-500 to-blue-600",
    surface: "from-cyan-50 via-white to-sky-50",
    buttonLabel: "Get Started with Foundation",
    outcomes: [
      "Clear understanding of AI career pathways",
      "Direction on next steps between job market and higher studies",
      "Awareness of challenges for international students",
      "A strong foundation to begin your job search"
    ],
    included: [
      "A practical roadmap to understand the AI job market",
      "One 30-minute one-on-one session focused on your job search strategy",
      "One small group Q&A session on Higher Studies vs Job Market",
      "One small group Q&A session on opportunities and challenges for international students in the USA",
      "One resume review tailored to AI roles"
    ]
  },
  {
    slug: "career-builder",
    name: "Career Builder Package",
    shortName: "Career Builder",
    tier: "Core Tier",
    tagline: "Best for students preparing to enter the job market and build a competitive profile.",
    discountedPrice: 300,
    discountLabel: "40% off",
    originalPriceLabel: "Original price shared during consultation",
    accent: "from-amber-500 via-orange-500 to-rose-500",
    surface: "from-amber-50 via-white to-rose-50",
    buttonLabel: "Join Career Builder",
    outcomes: [
      "A portfolio-ready AI project",
      "Stronger resume and LinkedIn profile",
      "Clear understanding of job market and visa pathways",
      "Improved confidence in interviews and applications"
    ],
    included: [
      "A practical roadmap to understand the AI job market",
      "One one-hour one-on-one session focused on your job search strategy",
      "One small group Q&A session on Higher Studies vs Job Market",
      "One hands-on AI project aligned with your background",
      "Portfolio development guidance",
      "LinkedIn profile optimization",
      "Resume and CV transformation tailored to AI roles",
      "Two one-on-one mentorship sessions, including focused guidance on OPT and H1B pathways",
      "Two mock interviews covering technical and behavioral preparation",
      "Small group sessions covering OPT job market, H1B visa landscape, and work authorization pathways in the USA"
    ]
  },
  {
    slug: "professional-accelerator",
    name: "Professional Accelerator",
    shortName: "Professional Accelerator",
    tier: "Premium Tier",
    tagline: "Best for students actively applying for jobs who need structured support to accelerate results.",
    discountedPrice: 600,
    discountLabel: "40% off",
    originalPriceLabel: "Original price shared during consultation",
    accent: "from-violet-500 via-fuchsia-500 to-pink-500",
    surface: "from-fuchsia-50 via-white to-violet-50",
    buttonLabel: "Apply for Professional Accelerator",
    outcomes: [
      "Faster and more structured job search execution",
      "Strong portfolio with multiple projects",
      "Improved application quality and consistency",
      "Better readiness for recruiter and interview interactions"
    ],
    included: [
      "A practical roadmap to understand the AI job market",
      "One one-hour one-on-one session focused on your job search strategy",
      "One small group Q&A session on Higher Studies vs Job Market",
      "Access to the LLM Vertex Workforce Development Course with limited access",
      "Personalized career path aligned with your job targets",
      "Weekly one-on-one mentorship sessions for 6 weeks, including OPT job market, H1B visa landscape, and work authorization pathways in the USA",
      "Targeted guidance on identifying OPT-friendly opportunities",
      "Development of two advanced portfolio projects",
      "Intensive interview preparation",
      "Structured job search strategy with application tracking",
      "Hands-on support in identifying relevant roles and assisting strategic applications",
      "Support in positioning your profile for recruiter visibility"
    ]
  },
  {
    slug: "elite-career-launch",
    name: "Elite Career Launch",
    shortName: "Elite Career Launch",
    tier: "Flagship Tier",
    tagline: "Best for candidates who need high-touch, personalized support to overcome job search challenges.",
    discountedPrice: 950,
    discountLabel: "50% off",
    originalPriceLabel: "Original price shared during consultation",
    accent: "from-emerald-500 via-teal-500 to-cyan-600",
    surface: "from-emerald-50 via-white to-cyan-50",
    buttonLabel: "Start Elite Career Launch",
    outcomes: [
      "A highly competitive, job-ready AI profile",
      "Strong clarity and direction throughout your job search",
      "Continuous support and accountability",
      "Greater confidence in interviews and applications",
      "Increased readiness for competitive opportunities"
    ],
    included: [
      "A practical roadmap to understand the AI job market",
      "One one-hour one-on-one session focused on your job search strategy",
      "One small group Q&A session on Higher Studies vs Job Market",
      "Access to the LLM Vertex Workforce Development Course with full access",
      "Weekly one-on-one mentorship sessions for 9 weeks, including OPT job market, H1B visa landscape, and work authorization pathways in the USA",
      "Targeted guidance on identifying OPT-friendly opportunities",
      "A dedicated career advisor providing ongoing one-on-one support",
      "A fully customized AI career strategy based on your goals",
      "One real-world project with detailed, industry-level feedback",
      "Unlimited mock interviews until you are fully prepared",
      "Continuous support in refining applications, resume, and positioning",
      "Priority exposure to recruiter and employer networks where available",
      "One-on-one sessions with the LLM Vertex vendor network",
      "General guidance based on experience navigating OPT-related processes",
      "Priority, high-touch support tailored to your progress and challenges"
    ]
  }
];

export const pricingOverview = packageCatalog.map((entry) => ({
  name: entry.shortName,
  price: `$${entry.discountedPrice}`,
  discount: entry.discountLabel
}));

export const audienceSegments = [
  "Students who have started their job search but need direction",
  "Students preparing to enter the job market",
  "Candidates actively applying for AI-related roles",
  "International students navigating OPT and H1B pathways",
  "Individuals seeking structured support and accountability"
];

export const webinarTakeaways = [
  "How to enter the AI job market with or without a technical background",
  "What recruiters look for in AI candidates",
  "Common job search mistakes students make",
  "How to position yourself for opportunities, including OPT-friendly roles",
  "Which package is right for your current stage"
];

export const differentiators = [
  "Practical AI training aligned with real-world roles",
  "Personalized mentorship and structured guidance",
  "Resume, LinkedIn, portfolio, and interview preparation",
  "Guidance for both domestic and international students",
  "Structured support to improve job search execution",
  "Developed in collaboration with industry and academic experts",
  "Informed by research-driven insights and real student outcome data",
  "Flexible virtual delivery designed to fit student schedules and commitments"
];

export const valueGains = [
  "Clear understanding of AI career pathways",
  "Practical experience with AI tools and workflows",
  "Stronger resume, CV, and LinkedIn positioning",
  "Portfolio-ready projects",
  "Improved interview confidence",
  "Structured job search strategy",
  "Better readiness for competitive opportunities"
];

export const onboardingSteps = [
  "Choose your package",
  "Complete enrollment",
  "Receive onboarding instructions",
  "Book your first session",
  "Begin training and mentorship"
];

export const faqEntries = [
  {
    question: "Do I need a technical background?",
    answer: "No. The program is designed for students from diverse academic backgrounds."
  },
  {
    question: "Do you guarantee a job?",
    answer: "No. We provide structured training, mentorship, and career support designed to improve your readiness and competitiveness."
  },
  {
    question: "Do you provide immigration legal advice?",
    answer: "No. We provide general guidance based on experience. For legal advice, consult a licensed immigration attorney."
  },
  {
    question: "Which package should I choose?",
    answer: "Start with the free webinar. It will help you understand which package is the right fit."
  }
];

export const disclaimer =
  "LLM Vertex provides training, mentorship, and career support services. We do not guarantee job placement, employment outcomes, or visa approvals. Outcomes depend on individual effort, background, and market conditions.";
