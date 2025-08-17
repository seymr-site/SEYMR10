/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://seymr.art',
  generateRobotsTxt: true,
  alternateRefs: [
    { href: (process.env.NEXT_PUBLIC_SITE_URL || 'https://seymr.art') + '/fr', hreflang: 'fr' },
    { href: (process.env.NEXT_PUBLIC_SITE_URL || 'https://seymr.art') + '/en', hreflang: 'en' },
    { href: (process.env.NEXT_PUBLIC_SITE_URL || 'https://seymr.art') + '/ar', hreflang: 'ar' },
    { href: (process.env.NEXT_PUBLIC_SITE_URL || 'https://seymr.art') + '/zh', hreflang: 'zh' },
    { href: (process.env.NEXT_PUBLIC_SITE_URL || 'https://seymr.art') + '/ru', hreflang: 'ru' },
  ]
}
