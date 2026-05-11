"use client";

import { type FormEvent, useMemo, useState } from "react";
import { ArrowRight, CheckCircle2, XCircle } from "lucide-react";
import { quiz } from "@/data/quiz";
import { validateLeadEmail } from "@/lib/validate";

export function QuizClient() {
  const [stage, setStage] = useState<"quiz" | "gate" | "results">("quiz");
  const [answers, setAnswers] = useState<number[]>(Array(quiz.length).fill(-1));
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [submitting, setSubmitting] = useState(false);

  const score = useMemo(() => answers.reduce((s, a, i) => (a === quiz[i]!.answer ? s + 1 : s), 0), [answers]);

  function setAnswer(qi: number, oi: number) {
    setAnswers((cur) => {
      const next = [...cur];
      next[qi] = oi;
      return next;
    });
  }

  async function onSubmitGate(e: FormEvent) {
    e.preventDefault();
    if (!name.trim() || !validateLeadEmail(email)) {
      setError("Enter your name and a valid email.");
      return;
    }
    setError(null);
    setSubmitting(true);
    try {
      await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName: name,
          email,
          mobile: "9000000000",
          whatsapp: "9000000000",
          qualification: "Other",
          city: "Quiz",
          year: String(new Date().getFullYear()),
          message: `Quiz score: ${score}/${quiz.length}`,
          hp
        })
      });
    } catch {
      // Non-blocking — show results anyway.
    }
    setSubmitting(false);
    setStage("results");
  }

  if (stage === "results") {
    return (
      <div className="rounded-3xl border border-cream-100 bg-white p-8 shadow-md animate-route-fade">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-gold-700">Your Results</p>
        <h2 className="mt-3 font-display text-3xl font-black text-navy-900">
          {score} / {quiz.length} correct
        </h2>
        <p className="mt-2 text-base text-slate-600">
          {score >= 5
            ? "You have a strong foundation. The full program would help you sharpen workflow articulation and standards depth."
            : "You're still building the core. Our program is built for exactly this — start from fundamentals and build to job-ready."}
        </p>
        <div className="mt-8 grid gap-4">
          {quiz.map((q, i) => {
            const correct = answers[i] === q.answer;
            return (
              <div key={q.q} className="rounded-2xl border border-cream-100 bg-cream-50/60 p-5">
                <div className="flex items-start gap-2">
                  {correct ? (
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                  ) : (
                    <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-signal" />
                  )}
                  <p className="font-display text-base font-bold text-navy-900">{q.q}</p>
                </div>
                <p className="mt-2 ml-7 text-sm text-slate-700">
                  <strong className="text-navy-700">Correct:</strong> {q.options[q.answer]}
                </p>
                <p className="mt-1 ml-7 text-sm text-slate-600">{q.explain}</p>
              </div>
            );
          })}
        </div>
        <a href="/#register" className="gradient-button mt-8 inline-flex items-center gap-2">
          Apply for the Program
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    );
  }

  if (stage === "gate") {
    return (
      <form
        onSubmit={onSubmitGate}
        noValidate
        className="rounded-3xl border border-cream-100 bg-white p-8 shadow-md animate-route-fade"
      >
        <input
          type="text"
          name="hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden
          className="hidden"
          value={hp}
          onChange={(e) => setHp(e.target.value)}
        />
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-navy-700">Almost there</p>
        <h2 className="mt-3 font-display text-2xl font-black text-navy-900">Where should we send your results?</h2>
        <div className="mt-6 grid gap-4">
          <label className="grid gap-1.5 text-sm font-bold text-navy-900">
            Name
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="field-input"
              placeholder="Your name"
              required
            />
          </label>
          <label className="grid gap-1.5 text-sm font-bold text-navy-900">
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="field-input"
              placeholder="you@example.com"
              required
              aria-invalid={!!error}
            />
          </label>
          {error && <p className="text-xs font-bold text-signal">{error}</p>}
          <button type="submit" disabled={submitting} className="gradient-button mt-2 inline-flex w-full items-center justify-center gap-2 disabled:opacity-70">
            {submitting ? "Sending…" : "Show my results"}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </form>
    );
  }

  const allAnswered = answers.every((a) => a !== -1);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (allAnswered) setStage("gate");
      }}
      className="grid gap-6 animate-route-fade"
    >
      {quiz.map((q, qi) => (
        <fieldset key={q.q} className="rounded-2xl border border-cream-100 bg-white p-6 shadow-sm">
          <legend className="px-2 text-xs font-bold uppercase tracking-[0.18em] text-gold-700">
            Question {qi + 1} of {quiz.length}
          </legend>
          <p className="mt-2 font-display text-base font-bold text-navy-900 sm:text-lg">{q.q}</p>
          <div className="mt-4 grid gap-2">
            {q.options.map((opt, oi) => {
              const selected = answers[qi] === oi;
              return (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-start gap-3 rounded-xl border px-4 py-3 transition ${
                    selected ? "border-navy-700 bg-navy-50" : "border-cream-100 bg-cream-50/40 hover:border-navy-200"
                  }`}
                >
                  <input
                    type="radio"
                    name={`q-${qi}`}
                    checked={selected}
                    onChange={() => setAnswer(qi, oi)}
                    className="mt-1 h-4 w-4 accent-navy-700"
                  />
                  <span className="text-sm font-semibold text-navy-900">{opt}</span>
                </label>
              );
            })}
          </div>
        </fieldset>
      ))}
      <button
        type="submit"
        disabled={!allAnswered}
        className="gradient-button inline-flex items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
      >
        Continue
        <ArrowRight className="h-4 w-4" />
      </button>
      {!allAnswered && (
        <p className="text-center text-xs font-semibold text-slate-500">Answer all questions to continue.</p>
      )}
    </form>
  );
}
