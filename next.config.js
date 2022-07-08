/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // no protocol (http/https)
    // an array of whitelisted domains
    domains:['placekitten.com']
  }
}

module.exports = nextConfig
