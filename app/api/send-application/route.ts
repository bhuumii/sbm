import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const toEmail = "bhumikasongara255@gmail.com";

export async function POST(request: Request) {
	try {
		const formData = await request.formData();

		const firstName = formData.get("firstName") as string;
		const lastName = formData.get("lastName") as string;
		const email = formData.get("email") as string;
		const phone = formData.get("phone") as string;
		const message = formData.get("message") as string;
		const resumeFile = formData.get("resume") as File;

		if (!resumeFile) {
			throw new Error("Resume file is required.");
		}

		const buffer = Buffer.from(await resumeFile.arrayBuffer());

		const { data, error } = await resend.emails.send({
			from: "SBM Career Application <onboarding@resend.dev>",
			to: [toEmail],
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

		if (error) {
			console.error({ error });
			return NextResponse.json({ error: error.message }, { status: 500 });
		}

		return NextResponse.json(data);
	} catch (error: any) {
		console.error({ error });
		return NextResponse.json(
			{ error: error.message || "Something went wrong." },
			{ status: 500 },
		);
	}
}
