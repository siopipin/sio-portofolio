import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { books } from '@/data/books';
import Image from 'next/image';
import Link from 'next/link';

export default function BookDetailPage({ params }) {
  const id = Number(params.id);
  const book = books.find((b) => b.id === id);

  if (!book) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Book not found
          </h1>
          <Link
            href="/"
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Back to home
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="bg-slate-50 dark:bg-slate-900">
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1.8fr)] items-start">
            {/* Cover */}
            <div className="space-y-4">
              <div className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden bg-slate-100 dark:bg-slate-800 shadow-lg">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 18rem, 20rem"
                />
              </div>
              <div className="rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 p-4 text-xs sm:text-sm text-slate-600 dark:text-slate-300 space-y-1">
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Publisher:
                  </span>{' '}
                  {book.publisher}
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Year:
                  </span>{' '}
                  {book.year}
                </p>
                <p>
                  <span className="font-semibold text-slate-900 dark:text-white">
                    Role:
                  </span>{' '}
                  {book.role}
                </p>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400 mb-2">
                  Book
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white leading-snug mb-3">
                  {book.title}
                </h1>
                {book.subtitle && (
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300">
                    {book.subtitle}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  About this book
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  This book summarises years of teaching, research, and practical
                  work in software development and technology for education. It
                  is written for lecturers, practitioners, and developers who
                  want a pragmatic guide with real-world examples.
                </p>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Each chapter is designed to be hands-on, with focused topics
                  that can be used as reference material or as part of a
                  structured course. Examples, diagrams, and best practices are
                  presented using tools and stacks that are common in modern
                  industry projects.
                </p>
              </div>

              <div className="space-y-3">
                <h2 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  What you will learn
                </h2>
                <ul className="list-disc list-inside text-sm sm:text-base text-slate-700 dark:text-slate-300 space-y-1.5">
                  <li>How to structure and design real-world applications.</li>
                  <li>Patterns for integrating modern tools into teaching.</li>
                  <li>Tips for improving code quality and maintainability.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

