import { NextResponse } from "next/server";

export function middleware(request: Request) {
  const response = NextResponse.next();
  const cookies = request.headers.get("cookie") || "";

  // Check if the visitorId cookie exists
  if (!cookies.includes("visitorId")) {
    const visitorId = crypto.randomUUID();

    response.cookies.set("visitorId", visitorId, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });
  }
  return response;
}

export const config = {
  matcher: ["/"]
};