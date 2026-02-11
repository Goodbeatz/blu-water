import { NextResponse } from "next/server";
import { sampleRequestSchema } from "@/lib/validations/samples";
import { getSupabase } from "@/lib/supabase";
import { getResend } from "@/lib/resend";

const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "team@blu.com";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const validated = sampleRequestSchema.parse(body);
    const { honeypot: _, ...data } = validated;

    const supabase = getSupabase();
    const resend = getResend();

    const dbData = { ...data, quantity: parseInt(data.quantity, 10) };
    const { error: dbError } = await supabase
      .from("sample_requests")
      .insert([dbData]);

    if (dbError) {
      console.error("Database error:", dbError);
      return NextResponse.json(
        { error: "Failed to submit request" },
        { status: 500 }
      );
    }

    await resend.emails.send({
      from: "Blu Water <notifications@blu.com>",
      to: ADMIN_EMAIL,
      subject: `New Sample Request: ${data.name} at ${data.company}`,
      html: `
        <h2>New Sample Request</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Company:</strong> ${data.company}</p>
        <p><strong>Role:</strong> ${data.role || "Not provided"}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Product Interest:</strong> ${data.product_interest.join(", ")}</p>
        <p><strong>Quantity:</strong> ${data.quantity} bottles</p>
        <p><strong>Address:</strong> ${data.shipping_address}</p>
        <p><strong>Reason:</strong> ${data.reason}</p>
      `,
    });

    await resend.emails.send({
      from: "Blu Water <team@blu.com>",
      to: data.email,
      subject: "Your Blu Sample Request Received",
      html: `
        <h2>Sample Request Received</h2>
        <p>Dear ${data.name},</p>
        <p>Thank you for your interest in Blu. We've received your sample request and will be in touch within 24 hours to confirm shipping details.</p>
        <br>
        <p>Best regards,</p>
        <p>The Blu Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Sample request error:", error);
    return NextResponse.json(
      { error: "Invalid submission" },
      { status: 400 }
    );
  }
}
