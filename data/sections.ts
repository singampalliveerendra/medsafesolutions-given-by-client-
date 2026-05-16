export const heroBullets = [
  "CDM-only curriculum with zero multi-domain clutter",
  "EDC, validation, query handling, and review workflows",
  "CDISC-aware learning for modern trial data teams",
  "Career support for entry-level CDM opportunities"
];

export const programPillars = [
  {
    title: "CDM Foundation",
    text: "Learn how trial data moves from CRF design and entry to review, cleaning, reconciliation, and database lock.",
    icon: "BookOpenCheck"
  },
  {
    title: "Hands-on EDC Thinking",
    text: "Understand how EDC environments support data entry, edit checks, discrepancy management, and audit-ready workflows.",
    icon: "LayoutGrid"
  },
  {
    title: "Standards and Quality",
    text: "Build context around CDISC structure, controlled terminology, and disciplined documentation used by regulated teams.",
    icon: "ShieldCheck"
  }
] as const;

// Logos for each tool are rendered in components/sections/Tools.tsx via the
// ToolLogo component (react-icons for the brand logos, lucide Mail for Email).
export const masterTools = [
  { name: "MedDRA", desc: "Medical terminology coding" },
  { name: "Excel", desc: "Data handling & reconciliation" },
  { name: "PowerPoint", desc: "Reporting & presentations" },
  { name: "ChatGPT", desc: "AI-assisted documentation" },
  { name: "Email", desc: "Professional communication" }
] as const;

export const toolCards = [
  {
    title: "EDC Systems",
    text: "Build comfort with modern electronic data capture workflows used for subject data entry, review, queries, and lock readiness.",
    icon: "LayoutGrid",
    image: "/images/cdm-edc-training.jpg"
  },
  {
    title: "CDISC Standards",
    text: "Understand the purpose of standards such as SDTM-oriented structure, metadata discipline, and submission-friendly consistency.",
    icon: "FileCheck2",
    image: "/images/cdm-inline-graphics.webp"
  },
  {
    title: "SQL Basics",
    text: "Develop foundational querying logic for filtering, reviewing, and validating structured clinical datasets with confidence.",
    icon: "Database",
    image: null
  },
  {
    title: "Excel for Data Handling",
    text: "Use formulas, review sheets, trackers, and reconciliation support techniques that remain practical in real CDM work.",
    icon: "LineChart",
    image: null
  },
  {
    title: "MedDRA Awareness",
    text: "Learn where standardized medical terminology supports coding, review, consistency, and downstream safety-related data quality.",
    icon: "ShieldCheck",
    image: null
  },
  {
    title: "AI-Enabled Tools",
    text: "Think through edit checks, discrepancy logic, data review patterns, and exception handling with a quality-first mindset.",
    icon: "Sparkles",
    image: "/images/cdm-ai-analytics.jpg"
  }
] as const;

export const highlightCards = [
  {
    eyebrow: "Module 01",
    title: "Strong Theoretical Foundation in Clinical Data Management",
    image: "/images/cdm-what-is.jpg",
    description:
      "Build a solid conceptual base through structured Clinical Data Management training delivered by industry experts with real-world experience in clinical trials and data operations.",
    bullets: [
      "Learn the fundamentals of CDM and its role in drug development",
      "Understand clinical trial phases (Phase I–IV) and CDM responsibilities",
      "Gain in-depth knowledge of CDM lifecycle, workflows, and data flow",
      "Learn ICH-GCP principles, GCP & GVP guidelines, and regulatory expectations",
      "Understand protocols, CRFs, data collection standards, and medical terminology"
    ]
  },
  {
    eyebrow: "Module 02",
    title: "Hands-On CDM Software & EDC Training",
    image: "/images/cdm-edc-training.jpg",
    description:
      "Move beyond theory with practical, workflow-based Clinical Data Management training using real software environments and industry-aligned processes.",
    bullets: [
      "Hands-on exposure to Clinical Data Management Systems (EDC)",
      "CRF design, annotation, and data entry practice",
      "Edit checks, validation rules, and query management",
      "Data discrepancy handling, data cleaning, and database lock process",
      "SAE reconciliation and CDM–Pharmacovigilance interface"
    ]
  },
  {
    eyebrow: "Module 03",
    title: "CDISC Standards & Regulatory-Compliant Data Handling",
    image: "/images/cdm-inline-graphics.webp",
    description:
      "Gain practical understanding of global data standards required for regulatory submissions through structured Clinical Data Management training.",
    bullets: [
      "Learn CDISC standards: CDASH, SDTM, and ADaM",
      "Understand data standardization and regulatory submission readiness",
      "Apply CDISC concepts to real clinical datasets",
      "Learn data privacy, HIPAA, and PHI compliance requirements"
    ]
  },
  {
    eyebrow: "Module 04",
    title: "AI-Enabled CDM Training & Advanced Analytics",
    image: "/images/cdm-ai-analytics.jpg",
    description:
      "Upgrade your skillset with India's only AI-enabled Clinical Data Management training, integrating advanced technology and smart data analytics tools.",
    bullets: [
      "Exposure to AI-enabled CDM tools used in modern clinical operations",
      "Use Generative AI tools to support data review and documentation",
      "Learn data visualization concepts applied to clinical data reporting",
      "Build analytical thinking and metrics awareness used by CDM teams"
    ]
  },
  {
    eyebrow: "Module 05",
    title: "Career Readiness, Placement Support & Interview Preparation",
    image: "/images/career-interview.png",
    description:
      "Convert your Clinical Data Management training into real job opportunities with structured career support.",
    bullets: [
      "ATS-friendly resume and cover letter creation for CDM roles",
      "LinkedIn profile optimization for clinical research recruiters",
      "Interview preparation for CDM, Clinical Data Coordinator, and Data Analyst",
      "Mock interviews (technical + HR) and salary negotiation guidance"
    ]
  }
];

export const careerRoles = [
  "Clinical Data Coordinator",
  "CDM Associate",
  "Database Support Executive",
  "Data Review Trainee",
  "Query Management Analyst",
  "EDC Operations Support"
];

export const placementSupport = [
  "Resume positioning for CDM-aligned profiles",
  "Mock interviews focused on workflow, quality, and standards",
  "Guidance on applying to CROs, sponsors, biotech, and research support teams",
  "Practical discussion practice for EDC, data cleaning, and query scenarios"
];

export const whyProgram = [
  {
    label: "Focused",
    title: "Only Clinical Data Management",
    text: "The program removes CR, PV, RA, and medical coding distractions so learners build sharper CDM depth.",
    icon: "Database"
  },
  {
    label: "Practical",
    title: "Workflow-first learning",
    text: "Every module is anchored in how teams actually handle review, discrepancies, quality checks, and delivery pressure.",
    icon: "Workflow"
  },
  {
    label: "Relevant",
    title: "Standards-aware curriculum",
    text: "Learners get exposure to EDC logic, CDISC orientation, and terminology discipline expected in regulated environments.",
    icon: "FileCheck2"
  },
  {
    label: "Modern",
    title: "AI-enabled review mindset",
    text: "The program shows where AI tools assist CDM work, where human judgment is irreplaceable, and how to use both effectively.",
    icon: "Sparkles"
  },
  {
    label: "Career-ready",
    title: "Interview and placement support",
    text: "Preparation is tied to job conversations, role expectations, and practical explanations recruiters expect to hear.",
    icon: "BriefcaseBusiness"
  },
  {
    label: "Accessible",
    title: "Built for allied health graduates",
    text: "Friendly for learners moving into CDM from pharmacy, nursing, biotech, physiotherapy, and life sciences.",
    icon: "GraduationCap"
  }
] as const;

export const faqItems = [
  {
    question: "What is Clinical Data Management (CDM)?",
    answer:
      "Clinical Data Management is the discipline that ensures clinical trial data is complete, consistent, traceable, and review-ready. CDM teams work across CRF design inputs, EDC workflows, data cleaning, discrepancy handling, standards alignment, and database lock readiness."
  },
  {
    question: "What is the career scope in CDM?",
    answer:
      "CDM roles exist across CROs, sponsors, biotech companies, academic research programs, and trial technology vendors. Entry-level paths often start in data review, coordination, query handling, or database support and can progress into specialist, lead, and standards-aware operational roles."
  },
  {
    question: "What salary can a fresher expect in CDM?",
    answer:
      "Compensation varies by employer, city, role mix, and prior domain exposure. Freshers usually start in support or associate-level functions, then grow faster when they can clearly explain EDC workflows, query logic, quality checks, and standards terminology during interviews."
  },
  {
    question: "How long does it take to become job-ready in CDM?",
    answer:
      "There is no single timeline, but learners progress faster when they combine fundamentals with repeated practice in review workflows, discrepancies, standards, and interview articulation. The right program should reduce confusion and compress the path from theory to confidence."
  },
  {
    question: "What skills are important for success in CDM?",
    answer:
      "Attention to detail, structured thinking, documentation discipline, data review logic, comfort with spreadsheets and basic querying, and the ability to understand standards-driven processes are core. Clear communication is also critical because much of CDM work happens through query resolution and cross-functional coordination."
  },
  {
    question: "Does this program include placement support?",
    answer:
      "Yes. The program includes career guidance, profile positioning, mock interview practice, and discussion support around real CDM workflows so learners can present themselves credibly for entry-level opportunities."
  },
  {
    question: "What is the program fee, and are EMI options available?",
    answer:
      "Fees vary by batch and mode (online vs hybrid). 0% interest EMI options are available. The Batches & Fees section on this page lists current pricing and the next batch dates."
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "Yes — we offer early-enrolment discounts and merit scholarships for the top entrance-test scorers. Reach out via the registration form or WhatsApp to discuss eligibility."
  }
];

export const learnerCards = [
  {
    title: "B.Pharm",
    image: "/images/audience-bpharm.svg",
    text: "Strong fit for graduates who already understand medical language, therapeutic context, and regulated documentation."
  },
  {
    title: "M.Pharm",
    image: "/images/audience-pharmacy.svg",
    text: "Advanced pharmaceutical knowledge for specialized data roles in CROs and sponsor companies."
  },
  {
    title: "Nursing",
    image: "/images/audience-nursing.svg",
    text: "Clinical exposure and patient-care understanding translates well into trial data review and medical coding functions."
  },
  {
    title: "Biotech",
    image: "/images/audience-biotech.svg",
    text: "Scientific background enables deeper understanding of study design, endpoints, and biological data quality."
  },
  {
    title: "Physiotherapy",
    image: "/images/audience-physiotherapy.svg",
    text: "Allied health graduates bring practical clinical knowledge applicable to musculoskeletal and rehabilitation trial data."
  },
  {
    title: "Life Sciences",
    image: "/images/audience-life-science.svg",
    text: "Broad scientific foundation prepares graduates for cross-functional CDM roles at CROs and sponsors."
  }
];

export const navItems = [
  { label: "Home", href: "/#home" },
  { label: "Program", href: "/#program" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact", href: "/#contact" }
];
