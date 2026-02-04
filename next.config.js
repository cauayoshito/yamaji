// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "yamajistudio.com.br" }], // sem www
        destination: "https://www.yamajistudio.com.br/:path*",
        permanent: true,
      },
    ];
  },
};
module.exports = nextConfig;
