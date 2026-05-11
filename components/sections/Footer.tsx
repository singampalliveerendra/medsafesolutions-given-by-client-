import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { MedsafeLogoMark } from "@/components/ui/LogoMark";
import { site, whatsappLink } from "@/data/site";

const links = {
  Program: [
    { label: "Overview", href: "/#program" },
    { label: "Modules", href: "/#highlights" },
    { label: "Batches & Fees", href: "/#batches" },
    { label: "Faculty", href: "/#faculty" }
  ],
  Resources: [
    { label: "Blog", href: "/blog" },
    { label: "CDM Aptitude Quiz", href: "/quiz" },
    { label: "Free Syllabus", href: "/#syllabus" },
    { label: "FAQ", href: "/#faq" }
  ],
  Company: [
    { label: "Contact", href: "/#contact" },
    { label: "Apply", href: "/#register" },
    { label: "Privacy", href: "/legal/privacy" },
    { label: "Terms", href: "/legal/terms" }
  ]
};

export function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-3xl bg-navy-950 px-6 py-10 text-cream-50 sm:px-10">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <MedsafeLogoMark className="h-12 w-12" />
              <div>
                <p className="font-display text-lg font-black tracking-tight">Medsafe Solutions</p>
                <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-gold-300">
                  Clinical Data Management
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-6 text-cream-50/85">
              Job-oriented CDM training with EDC, CDISC, and placement support — built for B.Pharm, M.Pharm, nursing,
              biotech, and life-science graduates.
            </p>
            <div className="mt-5 grid gap-2 text-sm text-cream-50/90">
              <p className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 text-gold-300" />
                {site.address.street}, {site.address.locality}, {site.address.region} {site.address.postalCode}
              </p>
              <a href={`tel:${site.phoneE164}`} className="flex items-center gap-2 hover:text-gold-300">
                <Phone className="h-4 w-4 text-gold-300" /> {site.phone}
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-gold-300">
                <Mail className="h-4 w-4 text-gold-300" /> {site.email}
              </a>
              <a href={whatsappLink} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gold-300">
                <MessageCircle className="h-4 w-4 text-emerald-400" /> WhatsApp
              </a>
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading}>
              <p className="font-display text-sm font-black uppercase tracking-[0.18em] text-gold-300">{heading}</p>
              <ul className="mt-4 grid gap-2.5 text-sm text-cream-50/90">
                {items.map((it) => (
                  <li key={it.href}>
                    <a href={it.href} className="hover:text-gold-300">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-cream-50/70 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Medsafe Solutions. All rights reserved.</p>
          <div className="flex gap-4">
            <a href={site.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              LinkedIn
            </a>
            <a href={site.socials.instagram} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              Instagram
            </a>
            <a href={site.socials.youtube} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              YouTube
            </a>
            <a href={site.socials.facebook} target="_blank" rel="noreferrer" className="hover:text-gold-300">
              Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
