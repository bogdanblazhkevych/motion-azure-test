import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://motion-ise.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://motion-ise.com/partner',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://motion-ise.com/waitlist',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://motion-ise.com/talent',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: 'https://motion-ise.com/bdfr',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.3,
    },
    {
      url: 'https://motion-ise.com/mlpe',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.2,
    },
    {
      url: 'https://motion-ise.com/mleia',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.1,
    },
  ]
}