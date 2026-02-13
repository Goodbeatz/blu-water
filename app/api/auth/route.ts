import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { username, password } = await request.json();

  if (username === "Bluteam" && password === "GO!") {
    const response = NextResponse.json({ ok: true });
    response.cookies.set("blu-auth", "authenticated", {
      httpOnly: true,
      secure: !!process.env.VERCEL,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return response;
  }

  return NextResponse.json({ error: "Invalid password" }, { status: 401 });
}
