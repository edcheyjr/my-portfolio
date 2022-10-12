/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    EMAILJS_PUBLIC_KEY: 'o8pjtF-nSdq9CShme',
    EMAILJS_SERVICE_ID: 'service_94xvoll',
    EMAILJS_TEMPLATE_ID: 'template_4m1g1vb',
    EMAILJS_reCAPTCHA_KEY: 'ed bot talking',
    EMAILJS_TRACKING_ID: 'McQfTjWmZq4t7w!',
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['upload.wikimedia.org', 'commons.wikimedia.org', 'github.com'],
  },
}

module.exports = nextConfig
