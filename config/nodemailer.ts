import nodemailer, { Transporter } from "nodemailer";

const email: string = process.env.EMAIL || "";
const pass: string = process.env.EMAIL_PASS || "";

export const transporter: Transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: email,
        pass
    },
});

export const mailOptions: nodemailer.SendMailOptions = {
    from: email,
    to: email,
};
