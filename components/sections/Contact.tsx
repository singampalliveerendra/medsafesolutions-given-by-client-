import { ChevronRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/data/site";

export function Contact() {
  const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, India`;
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="panel rounded-3xl p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy-700">Contact</p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">
                  Talk to Medsafe Solutions about the CDM program.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Reach out for eligibility, batch timing, career pathway questions, or a direct discussion about how
                  this program fits your background.
                </p>
                <p className="mt-5 text-sm font-bold text-navy-900">{fullAddress}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">{site.hours}</p>
                <div className="mt-5 overflow-hidden rounded-2xl border border-cream-100 bg-white/80 shadow-sm">
                  <iframe
                    src={site.mapEmbed}
                    title="Medsafe Solutions location"
                    width="100%"
                    height="280"
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    style={{ border: 0 }}
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <ContactCard
                  icon={<Phone className="h-7 w-7 text-navy-700" />}
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phoneE164}`}
                  action="Call Now"
                />
                <ContactCard
                  icon={<MessageCircle className="h-7 w-7 text-emerald-600" />}
                  label="WhatsApp"
                  value={site.phone}
                  href={whatsappLink}
                  action="WhatsApp"
                  external
                />
                <ContactCard
                  icon={<Mail className="h-7 w-7 text-navy-700" />}
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                  action="Email"
                />
                <ContactCard
                  icon={<MapPin className="h-7 w-7 text-gold-600" />}
                  label="Location"
                  value={`${site.address.locality}, ${site.address.region}`}
                  href="https://maps.google.com/?q=Kakinada%2C%20Andhra%20Pradesh%2C%20India"
                  action="View Map"
                  external
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
  action,
  external = false
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  action: string;
  external?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-cream-100 bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {icon}
      <p className="mt-4 text-sm font-bold uppercase tracking-[0.16em] text-slate-500">{label}</p>
      <p className="mt-1 break-words font-display text-base font-black text-navy-900">{value}</p>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="mt-4 inline-flex items-center gap-2 rounded-full bg-navy-50 px-4 py-2 text-sm font-bold text-navy-700 transition hover:bg-navy-100"
      >
        {action}
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}
