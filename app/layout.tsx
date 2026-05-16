import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@/components/Analytics";
import { SchemaJsonLd } from "@/components/sections/SchemaJsonLd";
import { site } from "@/data/site";
import "./globals.css";

const display = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "700", "800"],
  variable: "--font-display",
  display: "swap"
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Clinical Data Management Training in Visakhapatnam`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  keywords: [
    "Clinical Data Management training",
    "CDM course Visakhapatnam",
    "EDC training",
    "CDISC training",
    "B.Pharm CDM",
    "M.Pharm clinical research",
    "CDM placement",
    "Clinical Data Coordinator",
    "Andhra Pradesh CDM",
    "Medsafe Solutions"
  ],
  alternates: { canonical: site.url },
  openGraph: {
    type: "website",
    siteName: site.name,
    url: site.url,
    title: `${site.name} | Clinical Data Management Training in Visakhapatnam`,
    description: site.description,
    locale: "en_IN",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }]
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
    images: ["/og.png"]
  },
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        {children}
        <SchemaJsonLd />
        <Analytics />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
