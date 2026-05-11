"use client";

import { type FormEvent, type ReactNode, useState } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { qualificationOptions, validateRegistration } from "@/lib/validate";

type FormValues = {
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  qualification: string;
  city: string;
  year: string;
  message: string;
  hp: string;
};

const initialForm: FormValues = {
  fullName: "",
  mobile: "",
  whatsapp: "",
  email: "",
  qualification: "",
  city: "",
  year: "",
  message: "",
  hp: ""
};

export function Register() {
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [state, setState] = useState<"idle" | "submitting" | "success" | "warning">("idle");

  function update<K extends keyof FormValues>(field: K, value: FormValues[K]) {
    setForm((cur) => ({ ...cur, [field]: value }));
    if (errors[field]) setErrors((cur) => ({ ...cur, [field]: "" }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const next = validateRegistration(form);
    setErrors(next);
    if (Object.keys(next).length > 0) return;
    setState("submitting");
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form)
      });
      if (!res.ok) throw new Error("submit-failed");
      setState("success");
      setForm(initialForm);
      if (typeof window !== "undefined") {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        w.gtag?.("event", "lead_submit", { form: "register" });
      }
    } catch {
      setState("warning");
    }
  }

  return (
    <section id="register" className="section-pad">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 p-8 text-white shadow-xl lg:p-10">
            <div className="register-panel-img">
              <Image
                src="/images/cdm-foundation.webp"
                alt=""
                aria-hidden
                fill
                sizes="(max-width:1024px) 100vw, 45vw"
                className="object-cover"
              />
            </div>
            <div className="hero-blob -right-24 -top-24 opacity-60" />
            <div className="relative z-10">
              <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-300">Apply Now</p>
              <h2 className="mt-3 font-display text-3xl font-black tracking-tight sm:text-4xl">
                Start your CDM application with a faster, cleaner enquiry flow.
              </h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-cream-50/95">
                Fill in your details and submit. Our team will review your enquiry and reach out within one business day.
              </p>
              <div className="mt-7 grid gap-3">
                {[
                  "CDM-only curriculum and focused guidance",
                  "EDC, standards, and query workflow orientation",
                  "Career and placement support included"
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/10 px-4 py-3"
                  >
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-300" />
                    <span className="text-sm font-semibold">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={onSubmit}
            className="panel rounded-3xl border border-white/70 bg-white/95 p-5 shadow-lg backdrop-blur sm:p-8"
            noValidate
          >
            <input
              type="text"
              name="hp"
              tabIndex={-1}
              autoComplete="off"
              aria-hidden
              className="hidden"
              value={form.hp}
              onChange={(e) => update("hp", e.target.value)}
            />
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" htmlFor="r-fullName" error={errors.fullName}>
                <input
                  id="r-fullName"
                  value={form.fullName}
                  onChange={(e) => update("fullName", e.target.value)}
                  className="field-input"
                  placeholder="Your full name"
                  aria-invalid={!!errors.fullName}
                  aria-describedby={errors.fullName ? "r-fullName-err" : undefined}
                  required
                />
              </Field>
              <Field label="Mobile Number" htmlFor="r-mobile" error={errors.mobile}>
                <input
                  id="r-mobile"
                  value={form.mobile}
                  onChange={(e) => update("mobile", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="field-input"
                  inputMode="numeric"
                  placeholder="10-digit number"
                  aria-invalid={!!errors.mobile}
                  aria-describedby={errors.mobile ? "r-mobile-err" : undefined}
                  required
                />
              </Field>
              <Field label="WhatsApp Number" htmlFor="r-whatsapp" error={errors.whatsapp}>
                <input
                  id="r-whatsapp"
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="field-input"
                  inputMode="numeric"
                  placeholder="10-digit WhatsApp"
                  aria-invalid={!!errors.whatsapp}
                  aria-describedby={errors.whatsapp ? "r-whatsapp-err" : undefined}
                  required
                />
              </Field>
              <Field label="Email" htmlFor="r-email" error={errors.email}>
                <input
                  id="r-email"
                  value={form.email}
                  onChange={(e) => update("email", e.target.value)}
                  className="field-input"
                  type="email"
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "r-email-err" : undefined}
                  required
                />
              </Field>
              <Field label="Qualification" htmlFor="r-qualification" error={errors.qualification}>
                <select
                  id="r-qualification"
                  value={form.qualification}
                  onChange={(e) => update("qualification", e.target.value)}
                  className="field-input"
                  aria-invalid={!!errors.qualification}
                  aria-describedby={errors.qualification ? "r-qualification-err" : undefined}
                  required
                >
                  <option value="">Select qualification</option>
                  {qualificationOptions.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="City" htmlFor="r-city" error={errors.city}>
                <input
                  id="r-city"
                  value={form.city}
                  onChange={(e) => update("city", e.target.value)}
                  className="field-input"
                  placeholder="Your city"
                  aria-invalid={!!errors.city}
                  aria-describedby={errors.city ? "r-city-err" : undefined}
                  required
                />
              </Field>
              <Field label="Passed Out Year" htmlFor="r-year" error={errors.year}>
                <input
                  id="r-year"
                  value={form.year}
                  onChange={(e) => update("year", e.target.value.replace(/\D/g, "").slice(0, 4))}
                  className="field-input"
                  inputMode="numeric"
                  placeholder="2024"
                  aria-invalid={!!errors.year}
                  aria-describedby={errors.year ? "r-year-err" : undefined}
                  required
                />
              </Field>
              <Field label="Message" htmlFor="r-message">
                <textarea
                  id="r-message"
                  value={form.message}
                  onChange={(e) => update("message", e.target.value)}
                  className="field-input min-h-[7rem] resize-y"
                  placeholder="Tell us your background or what you want from the CDM program"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={state === "submitting"}
              className="gradient-button mt-7 inline-flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {state === "submitting" ? "Submitting…" : "Submit application"}
              <ArrowRight className="h-5 w-5" />
            </button>
            {state === "success" && (
              <p
                role="status"
                className="mt-4 rounded-xl bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
              >
                Registration received. We will contact you within one business day.
              </p>
            )}
            {state === "warning" && (
              <p role="alert" className="mt-4 rounded-xl bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                Submission failed. Please try again or contact us directly on WhatsApp.
              </p>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  error,
  children
}: {
  label: string;
  htmlFor?: string;
  error?: string;
  children: ReactNode;
}) {
  return (
    <label htmlFor={htmlFor} className="grid gap-2 text-sm font-bold text-navy-900">
      {label}
      {children}
      {error && (
        <span id={htmlFor ? `${htmlFor}-err` : undefined} className="text-xs font-semibold text-signal" role="alert">
          {error}
        </span>
      )}
    </label>
  );
}
