const BASE_URL = 'https://www.clement-hubert.fr'

/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
  const staticRoutes = [
    {link: '', priority: 1, lastModified: '2025-09-11'},
    {link: '/contact', priority: 0.5, lastModified: '2025-09-11'},
    {link: '/mentions-legales', priority: 0.1, lastModified: '2025-09-11'}
  ].map((item) => ({
    url: `${BASE_URL}${item.link}`,
    lastModified: `${item.lastModified}`,
    priority: item.priority,
  }))

  return [
    ...staticRoutes,
  ]
}
