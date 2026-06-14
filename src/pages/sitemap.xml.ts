import type { APIRoute } from 'astro';
import { getProducts } from '../lib/medusa';

export const GET: APIRoute = async () => {
  const products = await getProducts(999);
  const baseUrl = 'https://sanvinshoemakers.com';
  const now = new Date().toISOString().split('T')[0];

  const staticPages = [
    { url: '/', priority: 1.0, changefreq: 'weekly' },
    { url: '/tienda', priority: 0.9, changefreq: 'weekly' },
    { url: '/nosotros', priority: 0.7, changefreq: 'monthly' },
    { url: '/contacto', priority: 0.7, changefreq: 'monthly' },
    { url: '/personalizacion', priority: 0.8, changefreq: 'monthly' },
  ];

  const productUrls = products.map((p) => ({
    url: `/tienda/${p.handle}`,
    priority: 0.8,
    changefreq: 'weekly',
    lastmod: now,
  }));

  const allUrls = [...staticPages, ...productUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map((page) => `  <url>
    <loc>${baseUrl}${page.url}</loc>
    <lastmod>${page.lastmod || now}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
