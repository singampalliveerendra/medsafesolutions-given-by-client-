/**
 * TODO: Replace with real student/parent quotes after written consent.
 * For video, host on YouTube unlisted and paste the embed URL.
 */
export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  photo?: string;
  rating?: number;
  videoUrl?: string;
};

export const testimonials: Testimonial[] = [
  {
    quote:
      "The program is the only one I found that focuses purely on Clinical Data Management. EDC scenarios and query workflows became clear within weeks.",
    name: "Student A",
    role: "B.Pharm · Now CDM Associate at a CRO",
    rating: 5
  },
  {
    quote:
      "CDISC and SDTM finally made sense after this training. The mock interviews helped me articulate workflow questions confidently.",
    name: "Student B",
    role: "M.Pharm · Now Clinical Data Coordinator",
    rating: 5
  },
  {
    quote:
      "What stood out was how every module is tied to a real CDM task. I joined as a fresher and got placed within two months of finishing.",
    name: "Student C",
    role: "Life Sciences · Now Query Management Analyst",
    rating: 5
  },
  {
    quote:
      "The faculty understood industry expectations. Resume review and interview practice were tailored to CRO and sponsor roles.",
    name: "Parent of Student D",
    role: "Parent · Hyderabad",
    rating: 5
  },
  {
    quote:
      "The AI-enabled review module gave me a real edge. I now use ChatGPT-assisted documentation in my daily CDM work.",
    name: "Student E",
    role: "Biotech · Now EDC Operations Support",
    rating: 5
  },
  {
    quote:
      "Coming from nursing, I was nervous about a tech-leaning role. The program eased the transition with practical EDC and review exercises.",
    name: "Student F",
    role: "Nursing · Now Data Review Trainee",
    rating: 5
  }
];
