import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { site, whatsappLink } from "@/data/site";

function WhatsAppLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Contact() {
  const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, India`;
  return (
    <section id="contact" className="section-pad">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="panel rounded-3xl p-6 sm:p-8">
            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-navy-700">Contact Us</p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight text-navy-900 sm:text-4xl">
                  Talk to Medsafe Solutions about the CDM program.
                </h2>
                <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                  Reach out for eligibility, batch timing, career pathway questions, or a direct discussion about how
                  this program fits your background.
                </p>
                <p className="mt-5 text-xs font-bold uppercase tracking-[0.16em] text-slate-500">Registered Office</p>
                <p className="mt-1 text-sm font-bold text-navy-900">{fullAddress}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">{site.hours}</p>
                <p className="mt-1 text-sm font-semibold text-slate-600">Founder: {site.founder}</p>
                <p className="mt-1 text-sm font-semibold text-gold-700">Classes are conducted online.</p>
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
                  icon={<Phone className="h-6 w-6" />}
                  iconClass="bg-navy-700 text-white"
                  label="Phone"
                  value={site.phone}
                  href={`tel:${site.phoneE164}`}
                  action="Call Now"
                />
                <ContactCard
                  icon={<WhatsAppLogo className="h-6 w-6" />}
                  iconClass="bg-[#25D366] text-white"
                  label="WhatsApp"
                  value={site.phone}
                  href={whatsappLink}
                  action="Chat on WhatsApp"
                  external
                />
                <ContactCard
                  icon={<Mail className="h-6 w-6" />}
                  iconClass="bg-navy-700 text-white"
                  label="Email"
                  value={site.email}
                  href={`mailto:${site.email}`}
                  action="Send Email"
                />
                <ContactCard
                  icon={<MapPin className="h-6 w-6" />}
                  iconClass="bg-gold-500 text-white"
                  label="Office"
                  value={`${site.address.locality}, ${site.address.region}`}
                  href="https://www.google.com/maps/search/?api=1&query=19-27-43%2F1+Sampath+Niwas+Apartment+Pedagantyada+Visakhapatnam+530044"
                  action="View on Map"
                  external
                />
              </div>
            </div>

            {/* Clear call / WhatsApp CTA bar */}
            <div className="mt-8 rounded-2xl border border-cream-100 bg-navy-950 p-6 text-cream-50 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-display text-lg font-black tracking-tight">Prefer to talk to us now?</p>
                  <p className="mt-1 text-sm text-cream-50/80">
                    Call or message us directly — {site.hours}.
                  </p>
                </div>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <a
                    href={`tel:${site.phoneE164}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-black text-navy-900 transition hover:bg-cream-50"
                  >
                    <Phone className="h-5 w-5" />
                    Call {site.phone}
                  </a>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-black text-white transition hover:brightness-95"
                  >
                    <WhatsAppLogo className="h-5 w-5" />
                    WhatsApp Us
                  </a>
                </div>
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
  iconClass,
  label,
  value,
  href,
  action,
  external = false
}: {
  icon: React.ReactNode;
  iconClass: string;
  label: string;
  value: string;
  href: string;
  action: string;
  external?: boolean;
}) {
  return (
    <div className="rounded-2xl border border-cream-100 bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className={`grid h-12 w-12 place-items-center rounded-xl ${iconClass}`}>{icon}</div>
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
