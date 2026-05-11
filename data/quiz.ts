export type QuizQuestion = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

export const quiz: QuizQuestion[] = [
  {
    q: "What does EDC stand for in clinical research?",
    options: [
      "Electronic Data Capture",
      "Electronic Drug Compliance",
      "External Data Coordinator",
      "Encrypted Data Channel"
    ],
    answer: 0,
    explain:
      "EDC = Electronic Data Capture, the system used by sites to enter trial data and by sponsors/CROs to review it."
  },
  {
    q: "Which CDISC standard is used to tabulate study data for regulatory submission?",
    options: ["CDASH", "SDTM", "ADaM", "MedDRA"],
    answer: 1,
    explain: "SDTM (Study Data Tabulation Model) is the submission tabulation standard."
  },
  {
    q: "A discrepancy raised against entered data is typically resolved via…",
    options: ["A protocol amendment", "A data query to the site", "An SAE report", "Database lock"],
    answer: 1,
    explain: "Queries are the standard mechanism to ask the site to clarify or correct data."
  },
  {
    q: "MedDRA is primarily used to:",
    options: [
      "Code adverse events and medical history",
      "Schedule patient visits",
      "Generate randomisation lists",
      "Submit eCTD"
    ],
    answer: 0,
    explain: "MedDRA is the dictionary used to code AEs, medical history, indications, and similar fields."
  },
  {
    q: "Database lock occurs after…",
    options: [
      "First subject visit",
      "Site selection",
      "All queries are resolved and data is verified",
      "Protocol approval"
    ],
    answer: 2,
    explain: "Lock comes once data cleaning is complete — queries closed, reconciliations done, sign-offs in."
  },
  {
    q: "An edit check that flags AGE > 120 is an example of:",
    options: ["Range check", "Logical check", "Cross-form check", "Source data verification"],
    answer: 0,
    explain: "Range (or limit) check — value outside an acceptable range."
  },
  {
    q: "ICH-GCP primarily ensures:",
    options: [
      "Data confidentiality only",
      "Quality of clinical trials and protection of subjects",
      "Faster regulatory approval",
      "Lower trial cost"
    ],
    answer: 1,
    explain:
      "Good Clinical Practice exists to protect trial subjects and ensure trial data are credible and accurate."
  }
];
