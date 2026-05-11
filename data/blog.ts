/**
 * TODO: Add real posts. Each post body is markdown-lite — paragraphs separated by \n\n.
 */
export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  readingMinutes: number;
  cover?: string;
  body: string;
};

export const posts: Post[] = [
  {
    slug: "cdm-career-roadmap-2026",
    title: "Clinical Data Management Career Roadmap for 2026",
    description:
      "What entry-level CDM roles look like in 2026, where they sit at CROs vs sponsors, and how to position yourself credibly as a fresher.",
    date: "2026-04-10",
    readingMinutes: 6,
    cover: "/images/cdm-career.svg",
    body: `Clinical Data Management remains one of the most accessible entry points into the clinical research industry — and 2026 is no exception.

This roadmap walks through the typical fresher trajectory: Data Review Trainee → Clinical Data Coordinator → CDM Associate → Senior CDM → Standards/Lead.

CROs (contract research organisations) usually offer the broadest exposure for freshers — high volume, multi-sponsor work, structured training pipelines. Sponsors (pharma/biotech) often hire one or two levels higher.

Three skills move freshers up the fastest:
1. EDC workflow fluency (Rave, Veeva Vault, OpenClinica).
2. Standards orientation (CDASH/SDTM, controlled terminology).
3. Clear articulation of edit-check logic and query handling — this is what hiring managers test.

If you're starting out, the most useful next step is to download our syllabus and check the next batch — both are linked from the home page.`
  },
  {
    slug: "what-is-cdisc-and-why-it-matters",
    title: "What is CDISC, and why does every CDM team care about it?",
    description:
      "A plain-English introduction to CDASH, SDTM, and ADaM — and how they map to a real fresher's day-to-day work.",
    date: "2026-03-22",
    readingMinutes: 5,
    cover: "/images/cdm-cdisc.svg",
    body: `CDISC stands for Clinical Data Interchange Standards Consortium. It defines how clinical trial data should be structured, named, and submitted to regulators.

Three layers matter:
- CDASH covers what's collected at the point of data capture (CRFs).
- SDTM is the standardised "tabulation" model used for submission.
- ADaM is the analysis-ready format statisticians use.

For a fresher, your first six months will mostly touch CDASH and SDTM. You won't author standards from scratch — you'll review datasets against them, raise discrepancies, and reconcile.

The fastest way to learn this is to look at real annotated CRFs and a small SDTM dataset side by side. We cover this in Module 03 of the program.`
  }
];
