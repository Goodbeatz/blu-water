import { NextResponse } from "next/server";
import { investorInquirySchema } from "@/lib/validations/investors";
import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "team@blu.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const validated = investorInquirySchema.parse(body);
    const { honeypot: _, ...data } = validated;

    const supabase = getSupabase();
    const resend = getResend();

    const { error: dbError } = await supabase
      .from("investor_inquiries")
      .insert([data]);

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to submit inquiry" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Blu Water <notifications@blu.com>",
      to: ADMIN_EMAIL,
      subject: `New Investor Inquiry: ${data.name} — ${data.firm}`,
      html: `
        <h2>New Investor Inquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Firm:</strong> ${data.firm}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>LinkedIn:</strong> ${data.linkedin_url || "Not provided"}</p>
        <p><strong>Investment Focus:</strong> ${data.investment_focus}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    });

    await resend.emails.send({
      from: "Blu Water <team@blu.com>",
      to: data.email,
      subject: "Thank You for Your Interest in Blu",
      html: `
        <h2>Thank You for Your Interest</h2>
        <p>Dear ${data.name},</p>
        <p>We appreciate your interest in Blu. Our team will review your inquiry and send the investor overview materials shortly.</p>
        <br>
        <p>Best regards,</p>
        <p>The Blu Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Investor inquiry error:", error);
    return NextResponse.json(
      { error: "Invalid submission" },
      { status: 400 }
    );
  }
}
