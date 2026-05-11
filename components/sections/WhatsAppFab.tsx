import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Medsafe Solutions on WhatsApp"
      className="fixed bottom-20 right-5 z-50 hidden h-14 w-14 place-items-center rounded-full bg-whatsapp text-white shadow-lg transition duration-300 hover:-translate-y-1 hover:scale-105 animate-whatsapp-pulse lg:bottom-6 lg:right-6 lg:grid"
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}
