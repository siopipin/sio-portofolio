import Link from 'next/link';
import Image from 'next/image';
import { formatDate } from '@/utils/date';

export default function ArticleCard({ article }) {
  // Use coverImage from MD frontmatter; path is under /articles/assets/ (copied by copy-article-assets.js)
  const coverFilename = article.coverImage?.replace(/^assets\//, '') || '';
  const coverSrc = coverFilename
    ? `/articles/assets/${coverFilename}`
    : `https://picsum.photos/200/200?random=${article.id ?? article.slug}`;

  return (
    <Link href={`/articles/${article.slug}`} className="group block">
      <div className="border border-slate-200 dark:border-slate-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-white dark:bg-slate-900">
        <div className="flex min-h-32 md:min-h-36">
          <div className="w-28 md:w-36 h-32 md:h-36 flex-shrink-0 relative bg-slate-100 dark:bg-slate-800">
            <Image
              src={coverSrc}
              alt={article.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 7rem, 9rem"
            />
          </div>
          <div className="flex-1 px-3 pt-3 pb-4 md:px-6 md:pt-6 md:pb-6 flex flex-col justify-between min-w-0">
            <div>
              <h3 className="text-base md:text-lg font-semibold text-slate-900 dark:text-white line-clamp-2 flex-1 mr-2 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {article.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm mb-2 line-clamp-2">
                {article.excerpt}
              </p>
            </div>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 md:gap-0 text-xs text-slate-500 dark:text-slate-400">
              <span className="truncate">
                {formatDate(article.publishedAt)} · {article.author || 'Sio Jurnalis Pipin'}
              </span>
              <span className="flex-shrink-0">{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
