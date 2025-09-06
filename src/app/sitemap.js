const BASE_URL = 'https://clement-hubert.fr'

/** @type {import('next').MetadataRoute.Sitemap} */
export default async function sitemap() {
  const staticRoutes = [
    '',
    '/contact',
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))

  return [
    ...staticRoutes,
  ]
}
