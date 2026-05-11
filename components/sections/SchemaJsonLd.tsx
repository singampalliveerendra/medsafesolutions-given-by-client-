import { site } from "@/data/site";
import { faqItems, highlightCards } from "@/data/sections";

export function SchemaJsonLd() {
  const org = {
    "@context": "https://schema.org",
    "@type": ["EducationalOrganization", "LocalBusiness"],
    name: site.name,
    url: site.url,
    logo: `${site.url}/icon.png`,
    image: `${site.url}/og.png`,
    description: site.description,
    telephone: site.phoneE164,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country
    },
    sameAs: [site.socials.linkedin, site.socials.instagram, site.socials.youtube, site.socials.facebook],
    openingHours: "Mo-Sa 09:30-19:00"
  };

  const course = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "Clinical Data Management Training Program",
    description: site.description,
    provider: {
      "@type": "EducationalOrganization",
      name: site.name,
      sameAs: site.url
    },
    hasCourseInstance: highlightCards.map((m) => ({
      "@type": "CourseInstance",
      name: m.title,
      courseMode: "Online",
      description: m.description
    }))
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((q) => ({
      "@type": "Question",
      name: q.question,
      acceptedAnswer: { "@type": "Answer", text: q.answer }
    }))
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(course) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
    </>
  );
}
