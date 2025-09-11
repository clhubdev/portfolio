export default function robots() {
  return {
    rules: { userAgent: '*', allow: '/' },
    sitemap: 'https://www.clement-hubert.fr/sitemap.xml',
    host: 'https://www.clement-hubert.fr',
  };
}