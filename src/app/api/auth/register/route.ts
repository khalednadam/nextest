import { NextResponse } from "next/server";
import prisma from "../../../../../prisma";
import bcrypt from "bcrypt";
import { connectToDatabase } from "@/helpers/server-helpers";

export const dynamic = "force-dynamic";

export async function GET(request?: Request) {
  return new Response(JSON.stringify({ message: "Hello from register" }), {
    headers: { "Content-Type": "application/json" },
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();
    if (!name || !email || !password) {
      return NextResponse.json({ message: "Invalid Data" }, { status: 422 });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await connectToDatabase();
    const user = await prisma.user.create({
      data: { email, name, hashedPassword },
    });
    return NextResponse.json({ user }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  } finally {
    await prisma.$disconnect();
  }
}
