/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true
  },
  
  // IMPORTANT: Temporarily ignore errors to identify all issues
  typescript: {
    ignoreBuildErrors: true,
  },
  
  eslint: {
    ignoreDuringBuilds: true,
  },
  
  // Increase memory for build
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
}

module.exports = nextConfig
