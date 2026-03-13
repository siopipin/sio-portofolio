import { getAllArticles } from '@/lib/markdown';

// Re-export articles dari MD files (source of truth)
const articlesData = getAllArticles();

export const articles = articlesData;

// Kategori dinamis dari artikel yang ada
const categoryMap = new Map();
articles.forEach((a) => {
  if (a.category && !categoryMap.has(a.category)) {
    categoryMap.set(a.category, {
      id: a.category,
      name: a.category.replace(/-/g, ' '),
      count: 0,
    });
  }
  if (a.category) {
    categoryMap.get(a.category).count++;
  }
});

export const categories = [
  { id: 'all', name: 'Semua', count: articles.length },
  ...Array.from(categoryMap.values()),
];

export const getArticlesByCategory = (category) => {
  if (category === 'all') return articles;
  return articles.filter((article) => article.category === category);
};

export const getFeaturedArticles = () => {
  return articles.filter((article) => article.featured);
};

export const searchArticles = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return articles.filter(
    (article) =>
      article.title.toLowerCase().includes(lowercaseQuery) ||
      article.excerpt?.toLowerCase().includes(lowercaseQuery) ||
      article.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
