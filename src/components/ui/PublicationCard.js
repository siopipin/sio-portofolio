import { BookOpen } from 'lucide-react';

export default function PublicationCard({ publication }) {
  return (
    <div className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
          {publication.title}
        </h3>
        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2" />
      </div>
      <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
        {publication.authors.join(', ')}
      </p>
      <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
        {publication.journal} • {publication.year}
      </p>
      <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
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
