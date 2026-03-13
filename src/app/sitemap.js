import { projects } from '@/data/projects';
import { books } from '@/data/books';
import { publications } from '@/data/publications';
import { getAllArticles } from '@/lib/markdown';

const baseUrl = 'https://siopipin.my.id';

export default function sitemap() {
  const articles = getAllArticles();

  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/articles`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/publications`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  const projectPages = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: new Date(project.year ?? new Date().getFullYear(), 0, 1),
    changeFrequency: 'yearly',
    priority: 0.7,
  }));

  const bookPages = books.map((book) => ({
    url: `${baseUrl}/books/${book.slug ?? book.id}`,
    lastModified: new Date(book.year ?? new Date().getFullYear(), 0, 1),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const publicationPages = publications.map((pub) => ({
    url: `${baseUrl}/publications/${pub.slug}`,
    lastModified: new Date(pub.year ?? new Date().getFullYear(), 0, 1),
    changeFrequency: 'yearly',
    priority: 0.6,
  }));

  const articlePages = articles.map((article) => ({
    url: `${baseUrl}/articles/${article.slug}`,
    lastModified: new Date(article.publishedAt || Date.now()),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticPages, ...projectPages, ...bookPages, ...publicationPages, ...articlePages];
}

