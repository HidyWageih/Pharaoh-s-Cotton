/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['pharaohscotton.ae', 'localhost'],
    unoptimized: true // ← مهم لتفادي مشاكل الصور على Vercel
  },
  output: 'standalone', // ← يحسن الأداء
  // إعدادات الترجمة (اللغة العربية أساسية)
  i18n: {
    locales: ['ar', 'en'],
    defaultLocale: 'ar',
  },
  // إعدادات الأمان
  poweredByHeader: false,
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        {
          key: 'X-Frame-Options',
          value: 'DENY',
        }
      ],
    }
  ]
};

module.exports = nextConfig;
