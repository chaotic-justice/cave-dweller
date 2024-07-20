import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./lib/i18n.ts");

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "handcraftedfarmers.com",
        port: "",
        pathname: "/cdn/shop/files/**",
      },
      {
        protocol: "https",
        hostname: "assets.tina.io",
        port: "",
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/en/admin",
        destination: "/admin/index.html",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/",
        locale: false,
        destination: "/en",
        permanent: false,
      },
      // {
      //   source: "/en",
      //   destination: "/en/artworks",
      //   locale: false,
      //   permanent: false,
      // },
    ];
  },
};

export default withNextIntl(nextConfig);



