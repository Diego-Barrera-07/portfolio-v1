import { NextApiRequest, NextApiResponse } from "next";
import { mailOptions, transporter } from "../../../config/nodemailer";

interface EmailData {
  nombre: string;
  email: string;
  notas: string;
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const data: EmailData = req.body;

    if (!data.nombre && !data.email && !data.notas) {
      return res.status(400).json({ message: "There are empty fields" });
    }

    console.log(data.nombre, data.email, data.notas);

    try {
      await transporter.sendMail({
        ...mailOptions,
        subject: `New client or interested company: ${data.email}`,
        text: `New client or interested company: ${data.nombre} || ${data.email}`,
        html: `<h1>From my portfolio</h1><h2>${data.nombre} || ${data.email}</h2><br /> <p style="font-size: 12px;">${data.notas}</p>`,
      });

      //   console.log("Apparently it was sent");
    } catch (error) {
      console.log("There was an error sending the email");
      //   console.log(error);
    }

    res.status(200).json(req.body);
  } else {
    return res.status(400).json({ message: "It's not a method available" });
  }
};

export default handler;
