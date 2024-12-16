interface Route {
  path: string;
  lastMod?: string;
  changeFreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

const baseUrl = 'https://tielo-digital.nl';

export const routes: Route[] = [
  { path: '/', changeFreq: 'weekly', priority: 1.0 },
  { path: '/diensten', changeFreq: 'weekly', priority: 0.9 },
  { path: '/contact', changeFreq: 'monthly', priority: 0.8 },
  { path: '/blog', changeFreq: 'daily', priority: 0.8 },
  { path: '/diensten/email-handling', changeFreq: 'monthly', priority: 0.7 },
  { path: '/diensten/content-creation', changeFreq: 'monthly', priority: 0.7 },
  { path: '/diensten/customer-service', changeFreq: 'monthly', priority: 0.7 },
  { path: '/diensten/workflow', changeFreq: 'monthly', priority: 0.7 },
  { path: '/diensten/outreach', changeFreq: 'monthly', priority: 0.7 },
];

export function generateSitemap(): string {
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    ${route.lastMod ? `<lastmod>${route.lastMod}</lastmod>` : ''}
    ${route.changeFreq ? `<changefreq>${route.changeFreq}</changefreq>` : ''}
    ${route.priority ? `<priority>${route.priority}</priority>` : ''}
  </url>`).join('')}
</urlset>`;

  return xml.trim();
}