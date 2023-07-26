/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['i.annihil.us']
    },
    env: {
      API_BASE_URL:process.env.API_BASE_URL,
      API_PUBLIC_KEY:process.env.API_PUBLIC_KEY,
      API_PRIVATE_KEY:process.env.API_PUBLIC_KEY
    },
}

module.exports = nextConfig
