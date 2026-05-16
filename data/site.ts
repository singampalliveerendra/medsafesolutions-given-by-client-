export const site = {
  name: "Medsafe Solutions",
  tagline: "Clinical Data Management Training",
  url: "https://medsafesolutions.in",
  description:
    "Job-oriented Clinical Data Management training in Visakhapatnam. EDC workflows, CDISC orientation, query handling, and placement support for B.Pharm, M.Pharm, nursing, biotech, and life-science graduates.",
  founder: "Chintapenta Santosh",
  phone: "9014440263",
  phoneE164: "+919014440263",
  whatsapp: "919014440263",
  email: "medsafesolutions2023@gmail.com",
  address: {
    street: "19-27-43/1, Sampath Niwas Apartment, Near Gandhi Nagar Park, Pedagantyada",
    locality: "Visakhapatnam",
    region: "Andhra Pradesh",
    postalCode: "530044",
    country: "IN"
  },
  hours: "Mon–Sat · 9:30 AM – 7:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=19-27-43%2F1+Sampath+Niwas+Apartment+Pedagantyada+Visakhapatnam+530044&output=embed",
  socials: {
    instagram: "https://instagram.com/",
    linkedin: "https://www.linkedin.com/",
    youtube: "https://youtube.com/",
    facebook: "https://facebook.com/"
  }
};

export const whatsappIntro = encodeURIComponent(
  "Hello Medsafe Solutions, I want details about your Clinical Data Management program."
);

export const whatsappLink = `https://wa.me/${site.whatsapp}?text=${whatsappIntro}`;
