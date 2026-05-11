import { Resend } from "resend";

const apiKey = process.env.RESEND_API_KEY;
const notify = process.env.LEAD_NOTIFY_EMAIL;
const fromAddress = process.env.LEAD_FROM_EMAIL ?? "Medsafe Solutions <onboarding@resend.dev>";

const resend = apiKey ? new Resend(apiKey) : null;

export async function sendLeadEmail(subject: string, body: Record<string, unknown>) {
  if (!resend || !notify) {
    console.warn("[email] RESEND_API_KEY or LEAD_NOTIFY_EMAIL not set; skipping email notification.");
    return { ok: false, reason: "not-configured" as const };
  }
  const html = `<h2>${subject}</h2><pre style="font-family:monospace;font-size:13px;background:#f5f5f5;padding:12px;border-radius:8px;white-space:pre-wrap;">${escapeHtml(
    JSON.stringify(body, null, 2)
  )}</pre>`;
  try {
    const { error } = await resend.emails.send({ from: fromAddress, to: notify, subject, html });
    if (error) {
      console.error("[email] resend error", error);
      return { ok: false, reason: "send-failed" as const };
    }
    return { ok: true } as const;
  } catch (err) {
    console.error("[email] unexpected", err);
    return { ok: false, reason: "exception" as const };
  }
}

function escapeHtml(s: string): string {
  return s.replace(/[&<>"']/g, (ch) => {
    switch (ch) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case '"':
        return "&quot;";
      default:
        return "&#39;";
    }
  });
}
