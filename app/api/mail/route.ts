import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/config/nodemailer";
import { validateInput, alphabeticalRegex, alphanumericRegex, emailRegex } from "@/utils/validateInput"

export async function GET() {
    return NextResponse.json({
        message: "What are u doing here?"
    })
}

export async function POST(request: Request) {
    const formData = await request.json()

    const name = formData.name
    const email = formData.email
    const message = formData.message

    if (!name || !email || !message) {
        return Response.json({ message: "There are empty fields" });
    }

    if (!validateInput(name, alphabeticalRegex)) {
        return Response.json({ message: `Invalid input validation, name expected` });
    }

    if (!validateInput(email, emailRegex)) {
        return Response.json({ message: `Invalid entry validation, email expected` });
    }

    if (!validateInput(message, alphanumericRegex)) {
        return Response.json({ message: `Invalid input validation, expected alphanumeric message` });
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New client or interested company: ${email}`,
            text: `New client or interested company: ${name} || ${email}`,
            html: `
            <div style="max-width: 600px; margin: 20px auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
                <h1 style="color: #333333;">From my portfolio</h1>
                <h2 style="color: #555555;">${name} || ${email}</h2>
                <br />
                <p style="font-size: 12px; color: #555555;">${message}</p>
            </div>
            `,
        });

        return Response.json({ message: "The email has been sent correctly" });
    } catch (error) {
        return Response.json({ message: "There was an error sending the email", error: error });
    }
}