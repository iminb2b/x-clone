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
      statusCode: 301
    }

  ]


}

module.exports = nextConfig
