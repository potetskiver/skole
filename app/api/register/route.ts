// app/api/register/route.ts
import { NextResponse } from "next/server";
import { createUser, findUserByUsername } from "@/lib/user";

export async function POST(req: Request) {
  const { username, password } = await req.json();

  if (!username || !password) {
    return NextResponse.json({ error: "Username and password required" }, { status: 400 });
  }

  if (findUserByUsername(username)) {
    return NextResponse.json({ error: "Username already exists" }, { status: 400 });
  }

  createUser(username, password);
  return NextResponse.json({ success: true });
}
