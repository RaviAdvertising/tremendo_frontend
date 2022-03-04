import { NextResponse } from "next/server";

export function middleware(req) {
  // if (!req.cookies["enableHTTPS"]) {
  //   let httpResponse = NextResponse.redirect(
  //     `https://${req.nextUrl.hostname}${req.nextUrl.pathname}`,
  //     301
  //   );
  //   response.cookie("enableHTTPS", "true");
  //   return httpResponse;
  // }
  return NextResponse.next();
}
