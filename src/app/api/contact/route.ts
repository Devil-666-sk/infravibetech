import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactRequestBody {
  name: string;
  phone: string;
  message: string;
}

export async function POST(req: Request) {
  try {
    const body: ContactRequestBody = await req.json();
    const { name, phone, message } = body;

    // Validation
    if (!name || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "All fields are required" },
        { status: 400 }
      );
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER as string,
        pass: process.env.EMAIL_PASS as string,
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER as string,
      subject: "New Contact Form Message",
      html: `
        <h3>New Enquiry</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // ✅ VERY IMPORTANT: Proper success response
    return NextResponse.json(
      { success: true, message: "Message sent successfully" },
      { status: 200 }
    );

  } catch (error) {
    console.error("Mail Error:", error);

    return NextResponse.json(
      { success: false, message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
