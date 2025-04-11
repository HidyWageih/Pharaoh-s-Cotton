/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost'], // أضف هنا النطاقات المسموح بها للصور
  },
};

module.exports = nextConfig;