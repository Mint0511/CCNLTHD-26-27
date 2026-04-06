/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "res.cloudinary.com", // Thêm dòng này để hiện ảnh Cloudinary
      "avatars.githubusercontent.com", 
      "images.pexels.com"
    ],
  },
};

module.exports = nextConfig;