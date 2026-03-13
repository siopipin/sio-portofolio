'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { books } from '@/data/books';

const SCROLL_STEP = 280;

export default function BooksCarousel() {
  const scrollRef = useRef(null);

  if (!books || books.length === 0) return null;

  const sortedBooks = [...books].sort((a, b) => b.year - a.year);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === 'next' ? SCROLL_STEP : -SCROLL_STEP,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-12 md:py-16 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-6 md:mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 dark:text-white">
              Books & Publications
            </h2>
            <p className="mt-1 text-sm md:text-base text-slate-600 dark:text-slate-300">
              Selected books I&apos;ve authored or contributed to.
            </p>
          </div>
        </div>

        <div className="relative group">
          <button
            type="button"
            onClick={() => scroll('prev')}
            aria-label="Geser ke kiri"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 -translate-x-1 sm:translate-x-0 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll('next')}
            aria-label="Geser ke kanan"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 translate-x-1 sm:-translate-x-0 w-9 h-9 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div
            ref={scrollRef}
            className="flex gap-4 md:gap-6 overflow-x-auto pb-2 -mx-4 px-12 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-slate-700 scrollbar-track-transparent scroll-smooth"
          >
            {sortedBooks.map((book) => (
              <div
                key={book.id}
                className="flex-none w-44 sm:w-48 md:w-56 lg:w-60 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <Link href={`/books/${book.slug}`} className="block">
                  <div className="relative h-52 sm:h-56 md:h-64 rounded-t-xl overflow-hidden bg-slate-100 dark:bg-slate-800">
                    <Image
                      src={book.coverImage}
                      alt={book.title}
                      fill
                      sizes="(max-width: 768px) 11rem, 14rem"
                      className="object-cover"
                    />
                  </div>
                </Link>
                <div className="p-3 sm:p-4 space-y-1.5">
                  <p className="text-[11px] uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">
                    {book.year} · {book.publisher}
                  </p>
                  <Link href={`/books/${book.slug}`} className="block">
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white line-clamp-2">
                      {book.title}
                    </h3>
                  </Link>
                  {book.subtitle && (
                    <p className="text-[11px] sm:text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                      {book.subtitle}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    Role: <span className="font-medium">{book.role}</span>
                  </p>
                  <a
                    href={
                      book.purchaseUrl && book.purchaseUrl.trim() !== ''
                        ? book.purchaseUrl
                        : `https://www.google.com/search?q=${encodeURIComponent(
                            `${book.title} ${book.publisher} book`
                          )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 inline-flex items-center text-[11px] text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Beli / lihat buku
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


