export const phoneRegex = /^[6-9]\d{9}$/;
export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const qualificationOptions = [
  "B.Pharm",
  "M.Pharm",
  "B.Sc Nursing",
  "B.Sc Life Sciences",
  "B.Sc Biotech",
  "BPT",
  "Other"
] as const;

export type Qualification = (typeof qualificationOptions)[number];

export type RegistrationInput = {
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  qualification: string;
  city: string;
  year: string;
  message?: string;
  hp?: string;
};

export function validateRegistration(input: Partial<RegistrationInput>): Record<string, string> {
  const errors: Record<string, string> = {};
  const year = Number(input.year);
  const currentYear = new Date().getFullYear();

  if (!input.fullName?.trim()) errors.fullName = "Full name is required.";
  if (!phoneRegex.test((input.mobile ?? "").trim())) errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!phoneRegex.test((input.whatsapp ?? "").trim())) errors.whatsapp = "Enter a valid 10-digit WhatsApp number.";
  if (!emailRegex.test((input.email ?? "").trim())) errors.email = "Enter a valid email address.";
  if (!qualificationOptions.includes(input.qualification as Qualification)) {
    errors.qualification = "Select your qualification.";
  }
  if (!input.city?.trim()) errors.city = "City is required.";
  if (!input.year?.trim()) {
    errors.year = "Passed out year is required.";
  } else if (!Number.isInteger(year) || year < 1990 || year > currentYear + 1) {
    errors.year = "Enter a valid passed out year.";
  }
  return errors;
}

export function validateLeadEmail(email: string): boolean {
  return emailRegex.test(email.trim());
}
