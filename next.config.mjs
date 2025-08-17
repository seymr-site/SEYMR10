/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: { serverActions: { allowedOrigins: ['*'] } },
  images: { formats: ['image/avif','image/webp'] },
  i18n: {
    locales: ['fr','en','ar','zh','ru'],
    defaultLocale: 'fr'
  }
}
export default nextConfig
