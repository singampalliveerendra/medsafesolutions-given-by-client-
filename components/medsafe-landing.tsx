"use client";

import Image from "next/image";
import { FormEvent, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpenCheck,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Clock3,
  GraduationCap,
  Headphones,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  MonitorPlay,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
  UserRoundCheck,
  X
} from "lucide-react";

type FormValues = {
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  qualification: string;
  city: string;
  year: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormValues, string>>;

const programAreas = [
  "Clinical Research",
  "Clinical Data Management",
  "Pharmacovigilance",
  "Regulatory Affairs",
  "Medical Coding",
  "Career Guidance"
] as const;

const initialForm: FormValues = {
  fullName: "",
  mobile: "",
  whatsapp: "",
  email: "",
  qualification: "",
  city: "",
  year: "",
  message: ""
};

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Eligibility", href: "#eligibility" },
  { label: "Highlights", href: "#highlights" },
  { label: "Register", href: "#register" },
  { label: "Contact", href: "#contact" }
];

const heroBullets = ["Clinical Research", "Pharmacovigilance", "Regulatory Affairs", "Placement Support"];

const highlights = [
  "Clinical Research & CDM",
  "Pharmacovigilance Training",
  "Regulatory Affairs Guidance",
  "Medical Coding Support",
  "Interview & Placement Preparation"
];

const whyChoose = [
  {
    title: "Pharma-specific coaching",
    text: "Built for pharmacy graduates exploring multiple career paths across the pharma and clinical research industry.",
    icon: GraduationCap
  },
  {
    title: "Role-based learning",
    text: "Understand the workflow, terminology, and day-to-day expectations of CDM, PV, regulatory, and related pharma roles.",
    icon: BookOpenCheck
  },
  {
    title: "Online flexibility",
    text: "Attend structured online classes from anywhere without relocating.",
    icon: MonitorPlay
  },
  {
    title: "Career guidance support",
    text: "Get interview preparation and guidance for starting in pharma, clinical research, and healthcare support careers.",
    icon: UserRoundCheck
  },
  {
    title: "Beginner-friendly learning",
    text: "Concepts are explained clearly for students and freshers entering the pharma industry.",
    icon: Sparkles
  }
];

const contactNumber = "9014440263";
const email = "medsafesolutions2023@gmail.com";
const whatsappUrl = "https://wa.me/919014440263";

function validate(values: FormValues) {
  const errors: FormErrors = {};
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const year = Number(values.year);
  const currentYear = new Date().getFullYear();

  if (!values.fullName.trim()) errors.fullName = "Full name is required.";
  if (!phoneRegex.test(values.mobile.trim())) errors.mobile = "Enter a valid 10-digit mobile number.";
  if (!phoneRegex.test(values.whatsapp.trim())) errors.whatsapp = "Enter a valid 10-digit WhatsApp number.";
  if (!emailRegex.test(values.email.trim())) errors.email = "Enter a valid email address.";
  if (!values.qualification) errors.qualification = "Select your qualification.";
  if (!values.city.trim()) errors.city = "City is required.";
  if (!values.year.trim()) {
    errors.year = "Passed out year is required.";
  } else if (!Number.isInteger(year) || year < 1990 || year > currentYear + 1) {
    errors.year = "Enter a valid passed out year.";
  }

  return errors;
}

function buildWhatsAppMessage(values: FormValues) {
  return `New Student Registration - Medsafe Solutions

Name: ${values.fullName}
Mobile: ${values.mobile}
WhatsApp: ${values.whatsapp}
Email: ${values.email}
Qualification: ${values.qualification}
City: ${values.city}
Year: ${values.year}
Message: ${values.message || "Not provided"}

Interested In: Pharma Career Coaching
Programs: ${programAreas.join(", ")}`;
}

export function MedsafeLanding() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<FormValues>(initialForm);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitState, setSubmitState] = useState<"idle" | "submitting" | "success" | "warning">("idle");

  const encodedIntro = useMemo(
    () =>
      encodeURIComponent("Hello Medsafe Solutions, I am interested in your pharma career coaching programs."),
    []
  );

  function updateField(field: keyof FormValues, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
    if (errors[field]) {
      setErrors((current) => ({ ...current, [field]: undefined }));
    }
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    setSubmitState("submitting");
    const message = encodeURIComponent(buildWhatsAppMessage(form));
    const whatsappTarget = `${whatsappUrl}?text=${message}`;
    const popup = window.open(whatsappTarget, "_blank", "noopener,noreferrer");

    if (!popup) {
      window.location.assign(whatsappTarget);
    }

    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        keepalive: true
      });

      if (!response.ok) {
        throw new Error("Registration save failed");
      }

      setSubmitState("success");
    } catch {
      setSubmitState("warning");
    }
  }

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/30 bg-white/90 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Medsafe Solutions home">
            <MedsafeLogoMark className="h-12 w-12 shrink-0" />
            <span className="leading-tight">
              <span className="block text-base font-extrabold text-navy-900 sm:text-lg">Medsafe Solutions</span>
              <span className="block text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                Pharma Career Coaching
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-semibold text-slate-700 transition hover:text-navy-700"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href={`${whatsappUrl}?text=${encodedIntro}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gold-400 px-5 py-3 text-sm font-extrabold text-navy-900 shadow-soft transition hover:-translate-y-0.5 hover:bg-gold-300"
            >
              <MessageCircle className="h-4 w-4" />
              WhatsApp
            </a>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen((open) => !open)}
            className="grid h-11 w-11 place-items-center rounded-lg border border-slate-200 text-navy-900 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {menuOpen ? (
          <div className="border-t border-slate-100 bg-white px-4 py-4 shadow-soft lg:hidden">
            <div className="mx-auto grid max-w-7xl gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-semibold text-slate-700 hover:bg-navy-50 hover:text-navy-800"
                >
                  {item.label}
                </a>
              ))}
              <a
                href={`${whatsappUrl}?text=${encodedIntro}`}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-5 py-3 text-sm font-extrabold text-navy-900"
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <section id="home" className="relative overflow-hidden bg-navy-900 pt-28 text-white sm:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,198,41,0.20),transparent_34%),linear-gradient(135deg,rgba(10,49,95,0.98),rgba(6,31,63,0.98))]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:pb-20">
          <div className="animate-fade-up">
            <div className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-gold-300">
              <Award className="h-4 w-4" />
              Career-Focused Coaching Across Pharma Domains
            </div>
            <h1 className="max-w-3xl text-balance text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Pharma Career Coaching for High-Growth Roles
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-blue-100 sm:text-xl">
              Build your path in clinical research, pharmacovigilance, regulatory affairs, and more.
            </p>
            <p className="mt-4 max-w-2xl text-base leading-7 text-blue-100/90 sm:text-lg">
              Medsafe Solutions supports pharmacy graduates with practical coaching, interview preparation, and career
              guidance across multiple pharma and healthcare industry opportunities.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {heroBullets.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-lg border border-white/10 bg-white/10 px-4 py-3">
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-gold-400" />
                  <span className="font-semibold text-white">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#register"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gold-400 px-6 py-4 text-base font-extrabold text-navy-900 shadow-premium transition hover:-translate-y-0.5 hover:bg-gold-300"
              >
                Register Now
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href={`${whatsappUrl}?text=${encodedIntro}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-4 text-base font-extrabold text-white transition hover:-translate-y-0.5 hover:bg-white/15"
              >
                <MessageCircle className="h-5 w-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <div className="animate-float-soft">
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/10 p-2 shadow-premium">
              <Image
                src="/images/hero-student.png"
                alt="Indian student attending online pharma career coaching on a laptop"
                width={1774}
                height={887}
                priority
                className="aspect-[1.55/1] w-full rounded-xl object-cover"
              />
              <div className="absolute bottom-5 left-5 right-5 rounded-lg bg-white/95 p-4 text-navy-900 shadow-soft backdrop-blur">
                <p className="text-sm font-extrabold">Online Classes (Learn from Anywhere)</p>
                <p className="mt-1 text-xs font-semibold text-slate-600">For B.Pharmacy and M.Pharmacy graduates</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-signal">About Our Coaching</p>
            <h2 className="mt-3 text-3xl font-black text-navy-900 sm:text-4xl">Build skills for multiple pharma career tracks.</h2>
          </div>
          <div className="grid gap-5 text-base leading-8 text-slate-700">
            <p>
              Medsafe Solutions helps pharmacy graduates prepare for practical roles across the pharma, clinical
              research, and healthcare support ecosystem.
            </p>
            <p>
              Our coaching can guide students toward areas such as Clinical Research, Clinical Data Management,
              Pharmacovigilance, Regulatory Affairs, and Medical Coding based on their interests and career goals.
            </p>
            <p>
              Medsafe Solutions offers structured, beginner-friendly online training with practical exposure, expert
              trainer support, and interview-focused preparation.
            </p>
          </div>
        </div>
      </section>

      <section id="eligibility" className="section-pad bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-navy-700">Eligibility</p>
              <h2 className="mt-3 text-3xl font-black text-navy-900">Designed for pharmacy graduates.</h2>
            </div>
            {["B.Pharmacy", "M.Pharmacy"].map((item) => (
              <div key={item} className="rounded-xl bg-white p-8 shadow-soft">
                <GraduationCap className="h-10 w-10 text-gold-500" />
                <h3 className="mt-5 text-2xl font-black text-navy-900">{item}</h3>
                <p className="mt-3 leading-7 text-slate-600">
                  Eligible students can register for pharma career coaching and role-specific guidance.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="overflow-hidden rounded-2xl shadow-premium">
            <Image
              src="/images/training-classroom.png"
              alt="Indian students attending pharma career coaching in a classroom with online learning support"
              width={1731}
              height={909}
              className="aspect-[1.42/1] w-full object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-signal">Mode of Training</p>
            <h2 className="mt-3 text-3xl font-black text-navy-900 sm:text-4xl">Online classes that fit real student schedules.</h2>
            <div className="mt-8 grid gap-4">
              <div className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-soft">
                <MonitorPlay className="h-7 w-7 shrink-0 text-navy-700" />
                <div>
                  <h3 className="text-lg font-black text-navy-900">Online Classes</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Attend instructor-led sessions from your city while following a structured learning path.
                  </p>
                </div>
              </div>
              <div className="flex gap-4 rounded-xl border border-slate-100 bg-white p-5 shadow-soft">
                <MapPin className="h-7 w-7 shrink-0 text-gold-500" />
                <div>
                  <h3 className="text-lg font-black text-navy-900">Learn from Anywhere</h3>
                  <p className="mt-2 leading-7 text-slate-600">
                    Remote access makes the program practical for students beyond Kakinada and across India.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="highlights" className="section-pad bg-navy-900 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-300">Course Highlights</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Focused coaching for pharma career readiness.</h2>
          </div>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {highlights.map((item) => (
              <div key={item} className="rounded-xl border border-white/10 bg-white/10 p-5 shadow-soft">
                <ShieldCheck className="h-8 w-8 text-gold-400" />
                <h3 className="mt-5 text-lg font-black leading-snug">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-signal">Placement Support</p>
            <h2 className="mt-3 text-3xl font-black text-navy-900 sm:text-4xl">
              Dedicated assistance to help students start their pharma career.
            </h2>
            <div className="mt-8 grid gap-4">
              {[
                "Dedicated career guidance",
                "Interview preparation support",
                "Help to start pharma and clinical research careers"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-100 bg-white p-5 shadow-soft">
                  <BriefcaseBusiness className="h-6 w-6 shrink-0 text-navy-700" />
                  <span className="font-bold text-slate-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-2xl shadow-premium">
            <Image
              src="/images/career-interview.png"
              alt="Indian candidate attending an interview for pharma career support"
              width={1719}
              height={915}
              className="aspect-[1.42/1] w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="section-pad bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-navy-700">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-black text-navy-900 sm:text-4xl">A clear path from coaching to interview readiness.</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {whyChoose.map(({ title, text, icon: Icon }) => (
              <div key={title} className="rounded-xl bg-white p-6 shadow-soft">
                <Icon className="h-8 w-8 text-gold-500" />
                <h3 className="mt-5 text-lg font-black text-navy-900">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="register" className="section-pad bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.78fr_1.22fr] lg:px-8">
          <div className="rounded-2xl bg-navy-900 p-8 text-white shadow-premium lg:p-10">
            <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-gold-300">Register Now</p>
            <h2 className="mt-3 text-3xl font-black sm:text-4xl">Start your pharma career enquiry today.</h2>
            <p className="mt-5 leading-8 text-blue-100">
              Submit your details and the form will open WhatsApp with a ready-to-send registration message for Medsafe
              Solutions.
            </p>
            <div className="mt-8 grid gap-4">
              <div className="flex items-center gap-3">
                <Clock3 className="h-5 w-5 text-gold-400" />
                <span className="font-semibold">Online Coaching (Learn from Anywhere)</span>
              </div>
              <div className="flex items-center gap-3">
                <Headphones className="h-5 w-5 text-gold-400" />
                <span className="font-semibold">Guidance Across Multiple Pharma Roles</span>
              </div>
              <div className="flex items-center gap-3">
                <UserRoundCheck className="h-5 w-5 text-gold-400" />
                <span className="font-semibold">Interview-Oriented Preparation</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-100 bg-white p-5 shadow-premium sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <Field label="Full Name" error={errors.fullName}>
                <input
                  value={form.fullName}
                  onChange={(event) => updateField("fullName", event.target.value)}
                  className="field-input"
                  placeholder="Your full name"
                />
              </Field>
              <Field label="Mobile Number" error={errors.mobile}>
                <input
                  value={form.mobile}
                  onChange={(event) => updateField("mobile", event.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="field-input"
                  inputMode="numeric"
                  placeholder="10-digit number"
                />
              </Field>
              <Field label="WhatsApp Number" error={errors.whatsapp}>
                <input
                  value={form.whatsapp}
                  onChange={(event) => updateField("whatsapp", event.target.value.replace(/\D/g, "").slice(0, 10))}
                  className="field-input"
                  inputMode="numeric"
                  placeholder="10-digit WhatsApp"
                />
              </Field>
              <Field label="Email" error={errors.email}>
                <input
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  className="field-input"
                  type="email"
                  placeholder="you@example.com"
                />
              </Field>
              <Field label="Qualification" error={errors.qualification}>
                <select
                  value={form.qualification}
                  onChange={(event) => updateField("qualification", event.target.value)}
                  className="field-input"
                >
                  <option value="">Select qualification</option>
                  <option value="B.Pharmacy">B.Pharmacy</option>
                  <option value="M.Pharmacy">M.Pharmacy</option>
                </select>
              </Field>
              <Field label="City" error={errors.city}>
                <input
                  value={form.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  className="field-input"
                  placeholder="Your city"
                />
              </Field>
              <Field label="Passed Out Year" error={errors.year}>
                <input
                  value={form.year}
                  onChange={(event) => updateField("year", event.target.value.replace(/\D/g, "").slice(0, 4))}
                  className="field-input"
                  inputMode="numeric"
                  placeholder="2025"
                />
              </Field>
              <Field label="Message">
                <textarea
                  value={form.message}
                  onChange={(event) => updateField("message", event.target.value)}
                  className="field-input min-h-28 resize-y md:col-span-1"
                  placeholder="Tell us anything important"
                />
              </Field>
            </div>
            <button
              type="submit"
              disabled={submitState === "submitting"}
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-navy-900 px-6 py-4 text-base font-extrabold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-navy-800 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {submitState === "submitting" ? "Submitting..." : "Submit & Open WhatsApp"}
              <Send className="h-5 w-5" />
            </button>
            {submitState === "success" ? (
              <p className="mt-4 rounded-lg bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700">
                WhatsApp opened and your registration was saved successfully.
              </p>
            ) : null}
            {submitState === "warning" ? (
              <p className="mt-4 rounded-lg bg-amber-50 px-4 py-3 text-sm font-semibold text-amber-800">
                WhatsApp opened. We could not save this form in the website database.
              </p>
            ) : null}
          </form>
        </div>
      </section>

      <section id="contact" className="section-pad bg-navy-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <p className="text-sm font-extrabold uppercase tracking-[0.18em] text-signal">Contact</p>
              <h2 className="mt-3 text-3xl font-black text-navy-900 sm:text-4xl">Talk to Medsafe Solutions.</h2>
              <p className="mt-5 leading-8 text-slate-600">
                For pharma coaching details, eligibility, batch timing, and registration support, reach out directly.
              </p>
            </div>
            <div className="grid gap-5 md:grid-cols-2">
              <ContactCard icon={Phone} label="Phone" value={contactNumber} href={`tel:${contactNumber}`} action="Call Now" />
              <ContactCard
                icon={MessageCircle}
                label="WhatsApp"
                value={contactNumber}
                href={`${whatsappUrl}?text=${encodedIntro}`}
                action="WhatsApp"
              />
              <ContactCard icon={Mail} label="Email" value={email} href={`mailto:${email}`} action="Email" />
              <ContactCard
                icon={MapPin}
                label="Location"
                value="Kakinada, Andhra Pradesh"
                href="https://maps.google.com/?q=Kakinada%2C%20Andhra%20Pradesh%2C%20India"
                action="View Location"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-navy-900 px-4 py-10 text-white sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-xl font-black">Medsafe Solutions</h2>
            <p className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-gold-300">Pharma Career Coaching</p>
          </div>
          <div className="text-sm leading-7 text-blue-100 md:text-right">
            <p>{contactNumber} | {email}</p>
            <p>Kakinada, Andhra Pradesh, India</p>
          </div>
        </div>
      </footer>

      <a
        href={`${whatsappUrl}?text=${encodedIntro}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Chat with Medsafe Solutions on WhatsApp"
        className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-premium transition hover:-translate-y-1"
      >
        <MessageCircle className="h-7 w-7" />
      </a>
    </main>
  );
}

function MedsafeLogoMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 72 72" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="medsafe-shield" x1="8" x2="64" y1="8" y2="64" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0f4ca6" />
          <stop offset="1" stopColor="#15c2d8" />
        </linearGradient>
        <linearGradient id="medsafe-swoosh" x1="8" x2="64" y1="58" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#77bf43" />
          <stop offset="1" stopColor="#15c2d8" />
        </linearGradient>
      </defs>
      <path
        d="M36 5 59 14v18c0 14.4-8.6 27-23 34-14.4-7-23-19.6-23-34V14L36 5Z"
        fill="url(#medsafe-shield)"
      />
      <path d="M36 11.5 54 18.6v13.7c0 11.5-6.5 21.6-18 27.8-11.5-6.2-18-16.3-18-27.8V18.6L36 11.5Z" fill="none" stroke="#ffffff" strokeWidth="2.8" />
      <path d="M31 16h10v6h6v10h-6v6H31v-6h-6V22h6z" fill="#ffffff" />
      <path d="M19 38c8-6 17-3.5 24-1.3 5.7 1.8 11.1 3.6 17-1.1v10.6c-6.2 3.2-12 2-17.7.7-7.4-1.7-14.6-3.3-23.3 2.7Z" fill="#ffffff" opacity="0.95" />
      <path d="M24 47h4v8h-4zm8-4h4v12h-4zm8-5h4v17h-4zm8-8h4v25h-4z" fill="#0f4ca6" opacity="0.92" />
      <path d="M23 44c6 0 9-5 13-5 4.3 0 7 3 10 3 4.1 0 6.5-4 11-4" fill="none" stroke="#15c2d8" strokeLinecap="round" strokeWidth="2" />
      <path d="M12 57c11 6 38 6 49-1" fill="none" stroke="url(#medsafe-swoosh)" strokeLinecap="round" strokeWidth="4" />
    </svg>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2 text-sm font-bold text-slate-800">
      {label}
      {children}
      {error ? <span className="text-xs font-semibold text-red-600">{error}</span> : null}
    </label>
  );
}

function ContactCard({
  icon: Icon,
  label,
  value,
  href,
  action
}: {
  icon: typeof Phone;
  label: string;
  value: string;
  href: string;
  action: string;
}) {
  return (
    <div className="rounded-xl bg-white p-6 shadow-soft">
      <Icon className="h-8 w-8 text-navy-700" />
      <p className="mt-4 text-sm font-extrabold uppercase tracking-[0.14em] text-slate-500">{label}</p>
      <p className="mt-2 break-words text-lg font-black text-navy-900">{value}</p>
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gold-400 px-4 py-3 text-sm font-extrabold text-navy-900 transition hover:bg-gold-300"
      >
        {action}
        <ChevronRight className="h-4 w-4" />
      </a>
    </div>
  );
}
