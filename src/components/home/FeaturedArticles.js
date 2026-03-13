import Link from 'next/link';
import { ExternalLink } from 'lucide-react';
import ArticleCard from '@/components/ui/ArticleCard';

export default function FeaturedArticles({ articles }) {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
          Artikel Terbaru
        </h2>
        <Link
          href="/articles"
          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
        >
          Lihat Semua
          <ExternalLink className="w-4 h-4 ml-1" />
        </Link>
      </div>

      <div className="space-y-4">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </div>
  );
}
