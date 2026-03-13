import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { publications } from '@/data/publications';
import { BookOpen, Calendar, Users, Quote, ExternalLink } from 'lucide-react';
import Link from 'next/link';

export default function PublicationDetailPage({ params }) {
  const param = params.id;
  const publication =
    publications.find((p) => p.slug === param) ||
    publications.find((p) => String(p.id) === String(param));

  if (!publication) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Publication not found
          </h1>
          <Link
            href="/publications"
            className="inline-flex items-center px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
          >
            Back to publications
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
        {/* Hero / Header */}
        <section className="border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
            <Link
              href="/publications"
              className="inline-flex items-center text-xs font-medium text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200 mb-4"
            >
              ← All publications
            </Link>

            <div className="flex items-start gap-3 mb-4">
              <div className="mt-1 hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/10 text-blue-600 dark:bg-blue-500/10 dark:text-blue-400">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="space-y-2 flex-1">
                <p className="text-xs uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold">
                  Journal Article
                </p>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-slate-900 dark:text-white leading-snug">
                  {publication.title}
                </h1>
              </div>
            </div>

            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <Users className="w-3.5 h-3.5" />
                <span className="truncate max-w-xs sm:max-w-md">
                  {publication.authors.join(', ')}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <Calendar className="w-3.5 h-3.5" />
                <span>
                  {publication.journal} • {publication.year}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800">
                <Quote className="w-3.5 h-3.5" />
                <span>{publication.citations} citations</span>
              </div>
            </div>

            <div className="mt-5 flex flex-wrap gap-3 text-xs sm:text-sm">
              <a
                href={`https://doi.org/${publication.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 text-white hover:bg-slate-800 text-xs sm:text-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                View DOI
              </a>
              <a
                href="https://scholar.google.com/citations?user=8T6XwQ4AAAAJ&hl=id"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 text-xs sm:text-sm"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                Google Scholar profile
              </a>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-10 sm:py-14">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)]">
            {/* Left: Abstract & dummy sections */}
            <div className="space-y-8">
              <div>
                <h2 className="text-lg sm:text-xl font-semibold text-slate-900 dark:text-white mb-2">
                  Abstract
                </h2>
                <p className="text-sm sm:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  {publication.abstract}
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                  Overview
                </h3>
                {publication.overview && publication.overview.length > 0 ? (
                  publication.overview.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-relaxed text-slate-700 dark:text-slate-300"
                    >
                      {paragraph}
                    </p>
                  ))
                ) : (
                  <>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      This publication explores a key topic in modern computing
                      and applied research. The work discusses motivation,
                      methodology, and practical implications, with a focus on
                      real-world scenarios and lessons learned from
                      implementation.
                    </p>
                    <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-300">
                      The results highlight both strengths and limitations of
                      the proposed approach, and provide guidance for
                      practitioners and researchers who want to build upon this
                      work in future studies.
                    </p>
                  </>
                )}
              </div>

              {publication.keyContributions &&
                publication.keyContributions.length > 0 && (
                  <div className="space-y-3">
                    <h3 className="text-base sm:text-lg font-semibold text-slate-900 dark:text-white">
                      Key Contributions
                    </h3>
                    <ul className="list-disc pl-5 text-sm text-slate-700 dark:text-slate-300 space-y-1.5 text-justify">
                      {publication.keyContributions.map((item, index) => (
                        <li key={index} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
            </div>

            {/* Right: metadata box */}
            <aside className="space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 p-5 shadow-sm">
                <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-3">
                  Publication Details
                </h3>
                <dl className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-slate-500 dark:text-slate-400">
                      Journal
                    </dt>
                    <dd className="text-right">{publication.journal}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-slate-500 dark:text-slate-400">
                      Year
                    </dt>
                    <dd className="text-right">{publication.year}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-slate-500 dark:text-slate-400">
                      Category
                    </dt>
                    <dd className="text-right capitalize">
                      {publication.category.replace('-', ' ')}
                    </dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-slate-500 dark:text-slate-400">
                      Citations
                    </dt>
                    <dd className="text-right">{publication.citations}</dd>
                  </div>
                  <div className="flex justify-between gap-3">
                    <dt className="font-medium text-slate-500 dark:text-slate-400">
                      DOI
                    </dt>
                    <dd className="text-right break-all">{publication.doi}</dd>
                  </div>
                </dl>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-5 text-xs sm:text-sm space-y-2">
                <p className="font-semibold">How to cite</p>
                <p className="text-slate-100 leading-relaxed">
                  {publication.authors.join(', ')}. "{publication.title}."{' '}
                  {publication.journal}, {publication.year}. DOI:{' '}
                  {publication.doi}.
                </p>
              </div>
            </aside>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

