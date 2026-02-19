import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { service, name, email, mobile, address, message } = await req.json();

    if (!name || !mobile || !email) {
      return NextResponse.json(
        { success: false, message: "Name, mobile & email required" },
        { status: 400 }
      );
    }

    // --- Email Setup ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Admin Email (Sirf tumhe milega)
    await transporter.sendMail({
      from: `"InfraVibe Tech Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New Enquiry from ${name} (${service})`,
      html: `
        <div style="font-family:Arial;padding:15px">
          <h2>📩 New Website Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Mobile:</b> ${mobile}</p>
          <p><b>Service:</b> ${service}</p>
          <p><b>Message:</b><br/>${message || 'N/A'}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });

  } catch (err: any) {
    console.error("ERROR:", err);
    return NextResponse.json(
      { success: false, message: "Email sending failed" },
      { status: 500 }
    );
  }
}
