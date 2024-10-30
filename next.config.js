/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.sharetrip.net",'via.placeholder.com', "flagcdn.com", "upload.wikimedia.org", "tbbd-flight.s3.ap-southeast-1.amazonaws.com", "api.sharetrip.net", "utility-assets.s3.amazonaws.com" ]
  }
}

module.exports = nextConfig
