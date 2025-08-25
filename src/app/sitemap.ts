import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://runcall.re';
  const lastModified = new Date().toISOString();
  
  return [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/merci`,
      lastModified: lastModified,
      changeFrequency: 'yearly',
      priority: 0.1,
    },
    // Pages futures à ajouter quand elles seront créées
    // {
    //   url: `${baseUrl}/blog`,
    //   lastModified: lastModified,
    //   changeFrequency: 'daily',
    //   priority: 0.8,
    // },
    // {
    //   url: `${baseUrl}/mentions-legales`,
    //   lastModified: lastModified,
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    // },
    // {
    //   url: `${baseUrl}/politique-confidentialite`,
    //   lastModified: lastModified,
    //   changeFrequency: 'yearly',
    //   priority: 0.3,
    // },
  ];
}