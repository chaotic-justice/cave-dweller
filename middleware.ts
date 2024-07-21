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

import { localePrefix, locales } from "@/lib/i18n";
import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: "en",
  localePrefix,
});

export const config = {
  matcher: [
    // Enable a redirect to a matching locale at the root
    "/",

    // Set a cookie to remember the previous locale for
    // all requests that have a locale prefix
    "/(ja|en)/:path*",

    // Enable redirects that add missing locales
    // (e.g. `/pathnames` -> `/en/pathnames`)
    "/((?!_next|_vercel|admin(?:/index.html)?|.*\\..*).*)",
  ],
}




