import { NextResponse } from "next/server";

export function proxy(reqeust) {
  if (reqeust.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", reqeust.url));
  }
  return NextResponse.next();
}
