import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  // Skip auth on local dev — only enforce on Vercel
  if (!process.env.VERCEL) {
    return NextResponse.next();
  }

  // Allow access to the login page and auth API
  const { pathname } = request.nextUrl;
  if (pathname === "/login" || pathname === "/api/auth") {
    return NextResponse.next();
  }

  // Check for auth cookie
  const authCookie = request.cookies.get("blu-auth");
  if (authCookie?.value === "authenticated") {
    return NextResponse.next();
  }

  // Redirect to login page
  const loginUrl = new URL("/login", request.url);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
