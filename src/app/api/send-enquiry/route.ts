import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { service, name, email, mobile, address, message } = await req.json();

    // Required validation
    if (!name || !email || !mobile || !address) {
      return NextResponse.json(
        { success: false, message: "All required fields missing" },
        { status: 400 }
      );
    }

    // Gmail transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.verify();

    await transporter.sendMail({
      from: `"InfraVibe Tech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,          // your receiving email
      replyTo: email,                   // 🔥 customer email for reply
      subject: `New Enquiry from ${name} (${service})`,
      html: `
        <div style="font-family:Arial;padding:15px">
          <h2>📩 New Website Enquiry</h2>
          <p><b>Service:</b> ${service}</p>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Mobile:</b> ${mobile}</p>
          <p><b>Address:</b> ${address}</p>
          <p><b>Message:</b><br/>${message || "N/A"}</p>
          <hr/>
          <p style="color:gray">Reply to this mail to contact customer directly.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (error: any) {
    console.error("MAIL ERROR:", error);
    return NextResponse.json(
      { success: false, message: "Email failed", error: error.message },
      { status: 500 }
    );
  }
}
