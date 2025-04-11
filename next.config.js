/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost',            // الصور المحلية أثناء التطوير
      'example.com',          // نطاق مخصص
      'cdn.example.com',      // شبكة CDN مخصصة
      'images.unsplash.com',  // صور من Unsplash
      'cdn.pixabay.com',      // صور من Pixabay
      's3.amazonaws.com',     // صور من AWS S3
      'lh3.googleusercontent.com', // صور من Google (مثل صور المستخدمين عبر OAuth)
      'res.cloudinary.com',   // صور من Cloudinary
      'i.imgur.com',          // صور من Imgur
      'via.placeholder.com'   // صور من Placeholder
    ],
  },
};

module.exports = nextConfig;
