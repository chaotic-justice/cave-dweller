import { SiteConfig } from "@/types/siteConfig";
import { BsGithub, BsSpotify } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { SiBuymeacoffee } from "react-icons/si";

const OPEN_SOURCE_URL = "https://github.com/chaotic-justice/cave-dweller";

const baseSiteConfig = {
  name: "Cave dwellers",
  description:
    "A free, open-source, and powerful landing page boilerplate, ideal for various projects, enabling you to create a landing page in under an hour.",
  url: "https://landingpage.weijunext.com",
  ogImage: "https://landingpage.weijunext.com/og.png",
  metadataBase: "/",
  keywords: [
    "landing page boilerplate",
    "landing page template",
    "awesome landing page",
    "next.js landing page",
  ],
  authors: [
    {
      name: "chao justice lai",
      url: "https://github.com/chaotic-justice",
    },
  ],
  creator: "@chaolai",
  openSourceURL: "https://github.com/chaotic-justice/cave-dweller",
  themeColors: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  nextThemeColor: "light", // next-theme option: system | dark | light
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/logo.png",
  },
  headerLinks: [
    { name: "repo", href: OPEN_SOURCE_URL, icon: BsGithub },
    {
      name: "buyMeCoffee",
      href: "https://lichess.org/@/soft-orca",
      icon: SiBuymeacoffee,
    },
  ],
  footerLinks: [
    { name: "email", href: "mailto:chaolai.1082@gmail.com", icon: MdEmail },
    {
      name: "github",
      href: "https://github.com/chaotic-justice/",
      icon: BsGithub,
    },
    {
      name: "buyMeCoffee",
      href: "https://lichess.org/@/soft-orca",
      icon: SiBuymeacoffee,
    },
    {
      name: "spotify",
      href: "https://open.spotify.com/user/l7yw167zb9vylsyjbux550a2c",
      icon: BsSpotify,
    },
  ],
};

export const siteConfig: SiteConfig = {
  ...baseSiteConfig,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseSiteConfig.url,
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    siteName: baseSiteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: baseSiteConfig.name,
    description: baseSiteConfig.description,
    images: [`${baseSiteConfig.url}/og.png`],
    creator: baseSiteConfig.creator,
  },
};



