import { locales } from "./lib/i18n";

import { NextRequest, NextResponse } from "next/server";

const whitelist = ["not-found"];

// export function middleware(request: NextRequest) {
//   const { pathname } = request.nextUrl;

//   if (whitelist.includes(pathname.substring(1))) return;

//   const isValidLocale = locales.some(
//     (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
//   );

//   console.log("isValidLocale", isValidLocale, pathname);
//   if (!isValidLocale) {
//     request.nextUrl.pathname = `/not-found`;
//     return Response.redirect(request.nextUrl);
//   }

//   return;
// }

// export const config = {
//   matcher: ["/((?!_next)(?!.*\\.(?:ico|png|svg|jpg|jpeg|xml|txt)$)(?!/api).*)"],
// };

export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/home", request.url));
}

export const config = {
  matcher: "/about/:path*",
};














