// import { match } from "@formatjs/intl-localematcher";
// import Negotiator from "negotiator";

// export const locales = ["", "en", "en-US", "zh", "zh-CN", "zh-TW", 'zh-HK', 'ja', "ar", "es", "ru"];
export const localeNames: any = {
  en: "🇺🇸 English",
  zh: "🇨🇳 中文",
  ja: "🇯🇵 日本語",
  ar: "🇸🇦 العربية",
  es: "🇪🇸 Español",
  ru: "🇷🇺 Русский",
};
export const defaultLocale = "en";

// // If you wish to automatically redirect users to a URL that matches their browser's language setting,
// // you can use the `getLocale` to get the browser's language.
// export function getLocale(headers: any): string {
//   let languages = new Negotiator({ headers }).languages();

//   return match(languages, locales, defaultLocale);
// }

// const dictionaries: any = {
//   en: () => import("@/locales/en.json").then((module) => module.default),
//   zh: () => import("@/locales/zh.json").then((module) => module.default),
//   ja: () => import("@/locales/ja.json").then((module) => module.default),
//   ar: () => import("@/locales/ar.json").then((module) => module.default),
//   es: () => import("@/locales/es.json").then((module) => module.default),
//   ru: () => import("@/locales/ru.json").then((module) => module.default),
// };

// export const getDictionary = async (locale: string) => {
//   if (["zh-CN", "zh-TW", "zh-HK"].includes(locale)) {
//     locale = "zh";
//   }

//   if (!Object.keys(dictionaries).includes(locale)) {
//     locale = "en";
//   }

//   return dictionaries[locale]();
// };

import { LocalePrefix } from "next-intl/routing";
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
export const locales = ["en", "es"];

export const localePrefix: LocalePrefix<typeof locales> = "always";

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  console.log("locale from req:", locale);
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});

