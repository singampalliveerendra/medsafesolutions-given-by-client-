/**
 * TODO: Replace with real alumni placements once you have written consent
 * to display names + companies. Anonymise (Name initial + last name + role + city)
 * if you don't have full consent.
 */
export type Placement = {
  name: string;
  role: string;
  company: string;
  batch: string;
  city?: string;
};

export const placements: Placement[] = [
  { name: "A. Sharma", role: "Clinical Data Coordinator", company: "Leading CRO", batch: "2024", city: "Hyderabad" },
  { name: "P. Reddy", role: "CDM Associate", company: "Top-5 CRO", batch: "2024", city: "Bengaluru" },
  { name: "K. Iyer", role: "Data Review Trainee", company: "Mid-size CRO", batch: "2024", city: "Hyderabad" },
  { name: "S. Kumar", role: "Query Management Analyst", company: "Sponsor Pharma", batch: "2024", city: "Pune" },
  { name: "R. Nair", role: "EDC Operations Support", company: "CRO India", batch: "2023", city: "Chennai" },
  { name: "V. Singh", role: "Database Support Executive", company: "Biotech", batch: "2023", city: "Hyderabad" },
  { name: "M. Patel", role: "CDM Associate", company: "Sponsor Pharma", batch: "2023", city: "Mumbai" },
  { name: "D. Rao", role: "Clinical Data Coordinator", company: "CRO India", batch: "2023", city: "Bengaluru" }
];

/**
 * TODO: Replace with real recruiter logos once you have permission to display them.
 * Place SVG/PNG logos under /public/images/recruiters/<slug>.svg.
 * If you don't have permission, keep these as initial-based wordmarks.
 */
export type Recruiter = { name: string; initials: string };

export const recruiters: Recruiter[] = [
  { name: "Recruiter A", initials: "RA" },
  { name: "Recruiter B", initials: "RB" },
  { name: "Recruiter C", initials: "RC" },
  { name: "Recruiter D", initials: "RD" },
  { name: "Recruiter E", initials: "RE" },
  { name: "Recruiter F", initials: "RF" },
  { name: "Recruiter G", initials: "RG" },
  { name: "Recruiter H", initials: "RH" }
];
