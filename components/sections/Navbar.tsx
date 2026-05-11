"use client";

import { useState } from "react";
import { ArrowRight, Menu, Phone, X } from "lucide-react";
import { MedsafeLogoMark } from "@/components/ui/LogoMark";
import { navItems } from "@/data/sections";
import { site } from "@/data/site";

export function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-cream-100 bg-white/90 backdrop-blur-xl shadow-[0_2px_18px_rgba(6,31,63,0.06)]">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <a href="/#home" className="group flex items-center gap-3" aria-label="Medsafe Solutions home">
          <MedsafeLogoMark className="h-12 w-12 shrink-0 transition duration-300 group-hover:scale-[1.05] sm:h-14 sm:w-14" />
          <span className="leading-tight">
            <span className="block font-display text-base font-black tracking-tight text-navy-900 sm:text-lg">
              Medsafe Solutions
            </span>
            <span className="block text-[0.66rem] font-bold uppercase tracking-[0.22em] text-navy-700 sm:text-xs">
              Clinical Data Management
            </span>
          </span>
        </a>

        <div className="hidden items-center gap-5 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-bold text-slate-700 transition hover:text-navy-700">
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <a
            href={`tel:${site.phoneE164}`}
            className="grid h-10 w-10 place-items-center rounded-full border border-navy-100 text-navy-700 transition hover:bg-navy-50"
            aria-label="Call Medsafe Solutions"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a href="/#register" className="gradient-button inline-flex items-center gap-2">
            Apply Now
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="grid h-11 w-11 place-items-center rounded-2xl border border-navy-100 text-navy-900 lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-cream-100 bg-white/98 px-4 py-4 shadow-xl lg:hidden">
          <div className="mx-auto grid max-w-7xl gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-slate-700 transition hover:bg-navy-50 hover:text-navy-700"
              >
                {item.label}
              </a>
            ))}
            <a
              href="/#register"
              onClick={() => setOpen(false)}
              className="gradient-button mt-2 inline-flex items-center justify-center gap-2"
            >
              Apply Now
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
