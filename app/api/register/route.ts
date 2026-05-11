import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";
import { sendLeadEmail } from "@/lib/email";
import { getClientIp, rateLimit } from "@/lib/rate-limit";
import { type RegistrationInput, validateRegistration } from "@/lib/validate";

const dataFile = path.join(process.cwd(), "data", "registrations.json");

export async function POST(request: Request) {
  const ip = getClientIp(request.headers);
  const limit = rateLimit(`register:${ip}`, 5, 60_000);
  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many submissions. Please wait a minute." },
      { status: 429, headers: { "Retry-After": String(limit.retryAfter ?? 60) } }
    );
  }

  let body: Partial<RegistrationInput>;
  try {
    body = (await request.json()) as Partial<RegistrationInput>;
  } catch {
    return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  if (body.hp && body.hp.trim().length > 0) {
    return NextResponse.json({ ok: true });
  }

  const errors = validateRegistration(body);
  if (Object.keys(errors).length > 0) {
    return NextResponse.json({ error: "Invalid registration data", fields: errors }, { status: 400 });
  }

  const registration = {
    fullName: body.fullName?.trim(),
    mobile: body.mobile,
    whatsapp: body.whatsapp,
    email: body.email?.trim(),
    qualification: body.qualification,
    city: body.city?.trim(),
    year: body.year,
    message: body.message?.trim() ?? "",
    interestedIn: "Clinical Data Management Program",
    ip,
    userAgent: request.headers.get("user-agent") ?? null,
    createdAt: new Date().toISOString()
  };

  await sendLeadEmail("New CDM enquiry · Medsafe Solutions", registration);

  try {
    await fs.mkdir(path.dirname(dataFile), { recursive: true });
    let existing: unknown[] = [];
    try {
      const file = await fs.readFile(dataFile, "utf8");
      existing = JSON.parse(file) as unknown[];
    } catch {
      existing = [];
    }
    await fs.writeFile(dataFile, JSON.stringify([...existing, registration], null, 2));
  } catch (err) {
    console.warn("[register] file persistence failed (expected on serverless)", err);
  }

  return NextResponse.json({ ok: true });
}
