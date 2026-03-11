import Link from 'next/link';
import Image from 'next/image';
import { books } from '@/data/books';

export default function BooksCarousel() {
  if (!books || books.length === 0) return null;

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:3xl font-bold text-slate-900 dark:text-white">
              Books & Publications
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300">
              Selected books I&apos;ve authored or contributed to.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex gap-4 md:gap-6 overflow-x-auto pb-2 -mx-4 px-4 sm:mx-0 sm:px-0 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent">
            {books.map((book) => (
              <Link
                key={book.id}
                href={`/books/${book.id}`}
                className="flex-none w-44 sm:w-48 md:w-56 lg:w-60 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="relative h-52 sm:h-56 md:h-64 rounded-t-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={book.coverImage}
                    alt={book.title}
                    fill
                    sizes="(max-width: 768px) 11rem, 14rem"
                    className="object-cover"
                  />
                </div>
                <div className="p-3 sm:p-4 space-y-1.5">
                  <p className="text-[11px] uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">
                    {book.year} · {book.publisher}
                  </p>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white line-clamp-2">
                    {book.title}
                  </h3>
                  {book.subtitle && (
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Role: <span className="font-medium">{book.role}</span>
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


