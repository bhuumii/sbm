import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, phone, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Create SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // IMPORTANT: Use await, not callback
    const info = await transporter.sendMail({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
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

    console.log("Email sent successfully:", info.messageId);
    
    return NextResponse.json({ 
      message: "Email sent successfully",
      messageId: info.messageId 
    });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 },
    );
  }
}
