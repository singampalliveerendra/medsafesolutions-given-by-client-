import { promises as fs } from "fs";
import path from "path";
import { NextResponse } from "next/server";

type Registration = {
  fullName: string;
  mobile: string;
  whatsapp: string;
  email: string;
  qualification: string;
  city: string;
  year: string;
  message?: string;
};

const dataFile = path.join(process.cwd(), "data", "registrations.json");

function isValidRegistration(input: Partial<Registration>) {
  const phoneRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const year = Number(input.year);
  const currentYear = new Date().getFullYear();

  return (
    Boolean(input.fullName?.trim()) &&
    Boolean(input.city?.trim()) &&
    phoneRegex.test(input.mobile ?? "") &&
    phoneRegex.test(input.whatsapp ?? "") &&
    emailRegex.test(input.email ?? "") &&
    ["B.Pharmacy", "M.Pharmacy"].includes(input.qualification ?? "") &&
    Number.isInteger(year) &&
    year >= 1990 &&
    year <= currentYear + 1
  );
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as Partial<Registration>;

    if (!isValidRegistration(body)) {
      return NextResponse.json({ error: "Invalid registration data" }, { status: 400 });
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
      interestedIn: "Pharma Career Coaching",
      createdAt: new Date().toISOString()
    };

    await fs.mkdir(path.dirname(dataFile), { recursive: true });

    let existing: unknown[] = [];
    try {
      const file = await fs.readFile(dataFile, "utf8");
      existing = JSON.parse(file) as unknown[];
    } catch {
      existing = [];
    }

    // Replace with Supabase later.
    await fs.writeFile(dataFile, JSON.stringify([...existing, registration], null, 2));

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Unable to save registration" }, { status: 500 });
  }
}
