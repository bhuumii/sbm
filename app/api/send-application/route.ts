import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const message = formData.get("message") as string;
    const resumeFile = formData.get("resume") as File;

    if (!firstName || !lastName || !email || !resumeFile) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resumeFile.arrayBuffer());

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
      subject: `New Job Application from ${firstName} ${lastName}`,
      html: `
        <h1>New Job Application</h1>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "No message provided."}</p>
      `,
      attachments: [
        {
          filename: resumeFile.name,
          content: buffer,
        },
      ],
    });

    console.log("Application sent successfully:", info.messageId);

    return NextResponse.json({ 
      message: "Application sent successfully",
      messageId: info.messageId 
    });
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { error: error.message || "Something went wrong." },
      { status: 500 }
    );
  }
}
