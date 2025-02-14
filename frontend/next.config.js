/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone', // Позволяет запускать Next.js внутри Nest.js
  async rewrites() {
    return [
      // Перенаправляем запросы API в NestJS
      { source: '/api/:path*', destination: 'http://192.168.0.99:3000/api/:path*' },
      { source: '/auth/:path*', destination: 'http://192.168.0.99:3000/auth/:path*' },
    ];
  },
};

module.exports = nextConfig;