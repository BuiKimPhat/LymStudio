/** @type {import('next').NextConfig} */
const { withKeystone } = require("@keystone-6/core/next");
const nextConfig = withKeystone({
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com'],
  },
});

module.exports = nextConfig
