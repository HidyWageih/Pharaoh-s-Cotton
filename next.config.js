/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pharaohscotton.ae', 'localhost'], 
    unoptimized: true // ← مهم لتفادي مشاكل التحميل على Vercel
  },
  output: 'standalone' // ← يحسن الأداء على Vercel
};

module.exports = nextConfig;
