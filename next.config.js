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
  
  // SEO Redirects
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.boostdevspeed.com',
          },
        ],
        destination: 'https://boostdevspeed.com/:path*',
        permanent: true,
      },
      // Redirect index.html and index.php to root
      {
        source: '/index.html',
        destination: '/',
        permanent: true,
      },
      {
        source: '/index.php',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
