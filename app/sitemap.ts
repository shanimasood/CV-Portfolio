import type { MetadataRoute } from 'next';

const BASE_URL = 'https://zeeshanmasood.dev';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/projects/trixma`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects/cms`,
      lastModified: now,
      changeFrequency: 'yearly',
      priority: 0.8,
    },
  ];
}
