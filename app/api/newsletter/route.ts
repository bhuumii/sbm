import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `New Newsletter Subscription - SBM Traders`,
      html: `
        <h2>New Newsletter Subscription</h2>
        <p>Someone has subscribed to your newsletter:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      `,
    };

  
    const confirmationOptions = {
      from: process.env.FROM_EMAIL,
      to: email,
      subject: `Welcome to SBM Traders Newsletter!`,
      html: `
        <h2>Thank you for subscribing!</h2>
        <p>Welcome to the SBM Traders newsletter. You'll receive our latest insights and industry updates.</p>
        <p>If you didn't subscribe, you can ignore this email.</p>
      `,
    };

 
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(confirmationOptions);

    return NextResponse.json({ 
      message: "Subscription successful!" 
    });
  } catch (error: any) {
    console.error("Newsletter subscription error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
