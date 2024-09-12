import { MetadataRoute } from 'next';


export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/*.pdf',
        '/*/404',
        '/next-api/*',
        '/api/*',
        '/*/terms-and-conditions/*',
      ],
    },
    sitemap: [
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-0.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-1.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-2.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-3.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-4.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-5.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-6.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-7.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-8.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-9.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-10.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-11.xml`,
      `${process.env.NEXT_PUBLIC_BASE_DOMAIN}/sitemap-12.xml`
    ],
  };
}
