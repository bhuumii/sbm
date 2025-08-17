import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const toEmail = "bhumikasongara255@gmail.com";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "SBM Contact Form <onboarding@resend.dev>",
      to: [toEmail],
      subject: `New Message from SBM Traders Website`,

      html: `
        <p>You have received a new message from your website contact form.</p>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p> 
        <p><strong>Enquiry Detail:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      console.error("Error from Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error: any) {
    console.error("Catch block error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 },
    );
  }
}
