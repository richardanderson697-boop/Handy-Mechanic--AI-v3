/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['your-project.supabase.co'],
  },
  experimental: {
    serverActions: true,
  },
};
module.exports = nextConfig;
