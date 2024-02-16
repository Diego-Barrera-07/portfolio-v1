import { NextResponse } from "next/server";
import { mailOptions, transporter } from "@/config/nodemailer";

export async function GET() {
    return NextResponse.json({
        message: "What are u doing here?"
    })
}

interface EmailData {
    name: string;
    email: string;
    message: string;
}

export async function POST(request: Request, context: any) {
    const { name, email, message } = await context.body.json() as EmailData;

    if (!name || !email || !message) {
        return NextResponse.json({ message: "There are empty fields" });
    }

    try {
        await transporter.sendMail({
            ...mailOptions,
            subject: `New client or interested company: ${email}`,
            text: `New client or interested company: ${name} || ${email}`,
            html: `<h1>From my portfolio</h1><h2>${name} || ${email}</h2><br /> <p style="font-size: 12px;">${name}</p>`,
        });

        return NextResponse.json({ message: "The email has been sent correctly" });
    } catch (error) {
        return NextResponse.json({ message: "There was an error sending the email" });
    }
}