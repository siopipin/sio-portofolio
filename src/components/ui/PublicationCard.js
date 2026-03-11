import Link from 'next/link';
import { BookOpen } from 'lucide-react';

export default function PublicationCard({ publication }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-4 md:p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start gap-2 mb-2 md:mb-3">
        <Link
          href={`/publications/${publication.slug}`}
          className="flex-1 min-w-0 group/heading"
        >
          <h3 className="text-sm md:text-lg font-semibold text-slate-900 dark:text-white group-hover/heading:text-blue-600 dark:group-hover/heading:text-blue-400 transition-colors">
            {publication.title}
          </h3>
        </Link>
        <BookOpen className="w-4 h-4 md:w-5 md:h-5 text-slate-500 dark:text-slate-400 flex-shrink-0 mt-0.5" />
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-xs md:text-sm mb-1 md:mb-2 line-clamp-2">
        {publication.authors.join(', ')}
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-[10px] md:text-xs mb-2 md:mb-3">
        {publication.journal} • {publication.year}
      </p>
      <div className="flex items-center justify-between text-[10px] md:text-xs text-slate-500 dark:text-slate-400">
        <span>{publication.citations} citations</span>
        <a
          href="https://scholar.google.com/citations?user=8T6XwQ4AAAAJ&hl=id"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 hover:underline"
        >
          Google Scholar
        </a>
      </div>
    </div>
  );
}
