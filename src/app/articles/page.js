import ArticlesList from '@/components/ArticlesList';
import { getAllArticles } from '@/lib/markdown';

export default function ArticlesPage() {
  const articles = getAllArticles();

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

  const categories = [
    { id: 'all', name: 'Semua', count: articles.length },
    ...Array.from(categoryMap.values()),
  ];

  return <ArticlesList articles={articles} categories={categories} />;
}
