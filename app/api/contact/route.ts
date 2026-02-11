import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations/contact";
import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "team@blu.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const validated = contactSchema.parse(body);
    const { honeypot: _, ...data } = validated;

    const supabase = getSupabase();
    const resend = getResend();

    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert([data]);

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to submit message" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Blu Water <notifications@blu.com>",
      to: ADMIN_EMAIL,
      subject: `New Contact: ${data.name}${data.subject ? ` — ${data.subject}` : ""}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${data.subject || "Not provided"}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    await resend.emails.send({
      from: "Blu Water <team@blu.com>",
      to: data.email,
      subject: "We've Received Your Message — Blu Water",
      html: `
        <h2>Message Received</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for reaching out. We've received your message and will respond as soon as possible.</p>
        <br>
        <p>Best regards,</p>
        <p>The Blu Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact submission error:", error);
    return NextResponse.json(
      { error: "Invalid submission" },
      { status: 400 }
    );
  }
}
