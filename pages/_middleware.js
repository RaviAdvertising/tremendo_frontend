import { NextResponse } from "next/server";

export function middleware(req) {
  if (req.headers.get("x-forwarded-proto") !== "https") {
    return NextResponse.redirect(
      `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
      301
    );
  }
  return NextResponse.next();
}
