import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "@/data/site";

export function StickyCallBar() {
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 flex items-stretch border-t border-cream-100 bg-white/95 shadow-[0_-8px_24px_rgba(6,31,63,0.1)] backdrop-blur-xl lg:hidden"
      role="navigation"
      aria-label="Quick contact"
    >
      <a
        href={`tel:${site.phoneE164}`}
        className="flex flex-1 items-center justify-center gap-2 px-4 py-3 font-display text-sm font-black text-navy-900"
      >
        <Phone className="h-4 w-4 text-navy-700" />
        Call Now
      </a>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="flex flex-1 items-center justify-center gap-2 bg-whatsapp px-4 py-3 font-display text-sm font-black text-white"
      >
        <MessageCircle className="h-4 w-4" />
        WhatsApp
      </a>
      <a
        href="/#register"
        className="flex flex-1 items-center justify-center gap-2 bg-navy-900 px-4 py-3 font-display text-sm font-black text-gold-300"
      >
        Apply
      </a>
    </div>
  );
}
