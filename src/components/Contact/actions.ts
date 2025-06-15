/* eslint-disable @typescript-eslint/no-explicit-any */
"use server";

import nodemailer from "nodemailer";

export async function sendContactForm(_: any, formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return {
      ok: false,
      message: "All fields are required.",
    };
  }

  try {
    // Configure your transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // or "Outlook365", etc.
      auth: {
        user: process.env.EMAIL, // your Gmail or other SMTP user
        pass: process.env.PASS, // your password or app-specific password
      },
    });

    // Send the mail
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "mahatoavishekh@gmail.com", // where it should go
      subject: "New Contact Message from Portfolio",
      html: `
        <h2>Contact Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return {
      ok: true,
      message: "Message sent successfully!",
    };
  } catch (error: any) {
    console.error("Email send failed:", error);
    return {
      ok: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
