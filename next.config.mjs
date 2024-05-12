/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sanity.io", "via.placeholder.com"],
  },
};

export default nextConfig;
