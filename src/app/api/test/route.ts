import { NextResponse } from "next/server";
import { connectDB } from "@/lib/mongoose";
import Test from "@/models/Test";

export async function GET() {
  try {
    await connectDB();

    const doc = await Test.create({
      title: "MongoDB Working Test",
    });

    return NextResponse.json({
      success: true,
      message: "✅ MongoDB is Fully Connected with Next.js!",
      data: doc,
    });

  } catch (err:any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    });
  }
}
