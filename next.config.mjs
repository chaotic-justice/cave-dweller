/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.rei.com",
        port: "",
        pathname: "/media/**",
      },
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
        source: "/admin",
        destination: "/admin/index.html",
      },
    ];
  },
};

export default nextConfig;



















