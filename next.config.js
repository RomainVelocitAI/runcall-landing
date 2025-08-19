/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    formats: ['image/webp'],
  },
  experimental: {
    optimizeCss: true,
  },
}

module.exports = nextConfig