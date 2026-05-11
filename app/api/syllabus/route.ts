import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { validateLeadEmail } from "@/lib/validate";

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const limit = rateLimit(`syllabus:${ip}`, 10, 60_000);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Try again shortly." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter ?? 60) } }
    );
  }
  let body: { name?: string; email?: string; hp?: string };
  try {
    body = (await request.json()) as { name?: string; email?: string; hp?: string };
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
  if (body.hp && body.hp.trim().length > 0) {
    return NextResponse.json({ ok: true, url: "/files/medsafe-cdm-syllabus.pdf" });
  }
  if (!body.name?.trim() || !validateLeadEmail(body.email ?? "")) {
    return NextResponse.json({ error: "Name and a valid email are required." }, { status: 400 });
  }
  await sendLeadEmail("Syllabus download · Medsafe Solutions", {
    name: body.name.trim(),
    email: body.email!.trim(),
    ip,
    userAgent: request.headers.get("user-agent") ?? null,
    createdAt: new Date().toISOString()
  });
  return NextResponse.json({ ok: true, url: "/files/medsafe-cdm-syllabus.pdf" });
}
