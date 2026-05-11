"use client";

import { type FormEvent, useState } from "react";
import { Download } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { validateLeadEmail } from "@/lib/validate";

export function SyllabusCTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [hp, setHp] = useState("");
  const [state, setState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validateLeadEmail(email)) {
      setError("Enter a valid email address.");
      return;
    }
    if (!name.trim()) {
      setError("Enter your name.");
      return;
    }
    setError(null);
    setState("submitting");
    try {
      const res = await fetch("/api/syllabus", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, hp })
      });
      if (!res.ok) throw new Error("submit-failed");
      const data = (await res.json()) as { url?: string };
      setState("success");
      if (data.url) {
        const a = document.createElement("a");
        a.href = data.url;
        a.download = "medsafe-cdm-syllabus.pdf";
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
    } catch {
      setState("error");
    }
  }

  return (
    <section id="syllabus" className="section-pad">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl border border-cream-100 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-900 p-8 text-white shadow-xl sm:p-10">
            <div className="hero-blob -bottom-32 -right-32 opacity-50" />
            <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">Free Resource</p>
                <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                  Download the full CDM syllabus PDF
                </h2>
                <p className="mt-4 max-w-xl text-base leading-7 text-cream-50/95">
                  Module-by-module breakdown of every topic, tool, and outcome — including CDISC, EDC, and
                  placement-prep timeline.
                </p>
              </div>

              <form onSubmit={onSubmit} className="grid gap-3" noValidate>
                <input
                  type="text"
                  name="hp"
                  tabIndex={-1}
                  autoComplete="off"
                  className="hidden"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  aria-hidden
                />
                <label className="grid gap-1.5 text-sm font-bold">
                  Name
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="field-input"
                    placeholder="Your name"
                    required
                  />
                </label>
                <label className="grid gap-1.5 text-sm font-bold">
                  Email
                  <input
                    value={email}
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="field-input"
                    placeholder="you@example.com"
                    aria-invalid={!!error}
                    required
                  />
                </label>
                {error && <p className="text-xs font-bold text-signal">{error}</p>}
                <button
                  type="submit"
                  disabled={state === "submitting"}
                  className="gradient-button-gold inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <Download className="h-4 w-4" />
                  {state === "submitting" ? "Preparing…" : "Get the syllabus"}
                </button>
                {state === "success" && (
                  <p className="rounded-xl bg-emerald-500/15 px-4 py-2 text-xs font-bold text-emerald-200">
                    Download started. Check your downloads folder.
                  </p>
                )}
                {state === "error" && (
                  <p className="rounded-xl bg-signal/15 px-4 py-2 text-xs font-bold text-cream-50">
                    Could not generate the link. Please try again or WhatsApp us.
                  </p>
                )}
              </form>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
