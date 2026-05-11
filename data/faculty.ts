/**
 * TODO: Replace with real faculty profiles, photos, and credentials.
 * Photos should go to /public/images/faculty/<slug>.jpg (square, ~512px).
 */
export type Faculty = {
  name: string;
  role: string;
  experience: string;
  bio: string;
  credentials: string[];
  photo: string;
  linkedin?: string;
};

export const faculty: Faculty[] = [
  {
    name: "Dr. Faculty Lead",
    role: "Lead Trainer · Clinical Data Management",
    experience: "12+ yrs · CRO and sponsor experience",
    bio:
      "Hands-on background in EDC implementation, CDISC SDTM mapping, and database lock readiness across global Phase II/III trials.",
    credentials: ["M.Pharm", "Certified CDM (SCDM)", "Veeva Vault & Medidata Rave"],
    photo: "/images/faculty/placeholder-1.svg",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Faculty 2",
    role: "Senior Trainer · CDISC & Standards",
    experience: "9 yrs · CDISC SDTM/ADaM",
    bio:
      "Specialist in standards-driven data review, CRF design and annotation, and submission-grade data packaging.",
    credentials: ["M.Sc Bioinformatics", "CDISC SDTM-IG Certified"],
    photo: "/images/faculty/placeholder-2.svg",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Faculty 3",
    role: "EDC & Query Operations Trainer",
    experience: "7 yrs · EDC ops",
    bio:
      "Workflow-first trainer focused on edit checks, discrepancy management, query resolution, and SAE reconciliation.",
    credentials: ["B.Pharm", "Veeva Vault Certified"],
    photo: "/images/faculty/placeholder-3.svg",
    linkedin: "https://www.linkedin.com/"
  },
  {
    name: "Faculty 4",
    role: "Career & Placement Mentor",
    experience: "10 yrs · CRO recruiting",
    bio:
      "Coaches learners on resume positioning, mock interviews, and CRO/sponsor hiring expectations for entry-level CDM.",
    credentials: ["MBA HR", "ATS Resume Specialist"],
    photo: "/images/faculty/placeholder-4.svg",
    linkedin: "https://www.linkedin.com/"
  }
];
