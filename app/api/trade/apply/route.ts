import { NextResponse } from "next/server";
import { tradeApplicationSchema } from "@/lib/validations/trade";
import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "team@blu.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Honeypot check
    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const validated = tradeApplicationSchema.parse(body);
    const { honeypot: _, ...data } = validated;

    const supabase = getSupabase();
    const resend = getResend();

    // Insert to database
    const { error: dbError } = await supabase
      .from("trade_applications")
      .insert([data]);

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to submit application" },
        { status: 500 }
      );
    }

    // Send admin notification
    await resend.emails.send({
      from: "Blu Water <notifications@blu.com>",
      to: ADMIN_EMAIL,
      subject: `New Trade Account Application: ${data.business_name}`,
      html: `
        <h2>New Trade Account Application</h2>
        <p><strong>Business:</strong> ${data.business_name}</p>
        <p><strong>Contact:</strong> ${data.contact_name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Type:</strong> ${data.business_type}</p>
        <p><strong>Est. Volume:</strong> ${data.estimated_volume}</p>
        <p><strong>Tax ID:</strong> ${data.tax_id || "Not provided"}</p>
        <p><strong>Address:</strong> ${data.shipping_address}</p>
        <p><strong>Message:</strong> ${data.message || "None"}</p>
      `,
    });

    // Send auto-reply to applicant
    await resend.emails.send({
      from: "Blu Water <team@blu.com>",
      to: data.email,
      subject: "Your Blu Trade Account Application — Next Steps",
      html: `
        <h2>Thank you for your interest in Blu</h2>
        <p>Dear ${data.contact_name},</p>
        <p>We've received your trade account application for ${data.business_name}. Our team will review your application and respond within 48 hours with pricing details and next steps.</p>
        <p>In the meantime, feel free to explore our products at our website.</p>
        <br>
        <p>Best regards,</p>
        <p>The Blu Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Trade application error:", error);
    return NextResponse.json(
      { error: "Invalid submission" },
      { status: 400 }
    );
  }
}
