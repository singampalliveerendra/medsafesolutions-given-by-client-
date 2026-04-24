import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Medsafe Solutions | Pharma Career Coaching",
  description:
    "Pharma career coaching for pharmacy graduates, covering clinical research, CDM, pharmacovigilance, regulatory affairs, and interview preparation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
