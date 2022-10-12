/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'commons.wikimedia.org', 'github.com'],
  },
}

module.exports = nextConfig
