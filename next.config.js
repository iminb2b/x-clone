/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/en",
      permanent: true
    },
  ]


}

module.exports = nextConfig
