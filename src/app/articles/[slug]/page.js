import { notFound } from 'next/navigation';
import { getArticleBySlug, getAllArticles, markdownToHtml } from '@/lib/markdown';
import { getArticlesByCategory } from '@/data/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  Calendar,
  Clock,
  Tag,
  Share2,
  ArrowLeft,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  const articles = getAllArticles();
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return { title: 'Artikel Tidak Ditemukan' };
  }

  return {
    title: `${article.title} | SioWeb Portfolio`,
    description: article.excerpt,
    keywords: article.tags?.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default async function ArticleDetailPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  let htmlContent = await markdownToHtml(article.content);

  const formatDateForContent = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  htmlContent = htmlContent
    .replace(/\{\{date\}\}/g, formatDateForContent(article.publishedAt))
    .replace(/\{\{author\}\}/g, article.author || 'Sio Jurnalis Pipin');

  const articles = getAllArticles();
  const relatedArticles = getArticlesByCategory(article.category)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const popularArticles = articles
    .filter((a) => a.slug !== article.slug)
    .sort((a, b) => (b.featured ? 1 : -1))
    .slice(0, 3);

  const currentIndex = articles.findIndex((a) => a.slug === article.slug);
  const nextArticle =
    currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;

  const formatDate = (dateString) => {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen">
      <Header />

      <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 transform scale-110 parallax-bg bg-cover bg-center"
            style={{
              backgroundImage: article.coverImage
                ? `url(${article.coverImage.startsWith('/') ? article.coverImage : `/articles/assets/${article.coverImage}`})`
                : 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="mb-6">
              <Link
                href="/articles"
                className="inline-flex items-center text-blue-300 hover:text-blue-200 transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Kembali ke Artikel
              </Link>
            </div>

            <div className="flex items-center space-x-4 mb-6 text-sm text-slate-300">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                <span>{article.readTime || '5 min read'}</span>
              </div>
              <span className="px-3 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-300 text-xs rounded-full capitalize border border-blue-500/30">
                {article.category?.replace(/-/g, ' ')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {(article.tags || []).map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full flex items-center border border-white/20"
                >
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <article className="lg:col-span-3">
              <div
                className="text-slate-700 dark:text-slate-300 article-content [&_img]:rounded-xl [&_img]:shadow-lg [&_img]:w-full [&_img]:h-auto"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Article Navigation */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                {prevArticle && (
                  <Link
                    href={`/articles/${prevArticle.slug}`}
                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        Artikel Sebelumnya
                      </span>
                      <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {prevArticle.title}
                    </h3>
                    <div className="flex items-center mt-3 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(prevArticle.publishedAt)}</span>
                    </div>
                  </Link>
                )}

                {nextArticle && (
                  <Link
                    href={`/articles/${nextArticle.slug}`}
                    className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 p-6 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-slate-500 dark:text-slate-400">
                        Artikel Selanjutnya
                      </span>
                      <ArrowLeft className="w-4 h-4 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors rotate-180" />
                    </div>
                    <h3 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                      {nextArticle.title}
                    </h3>
                    <div className="flex items-center mt-3 text-sm text-slate-500 dark:text-slate-400">
                      <Calendar className="w-3 h-3 mr-1" />
                      <span>{formatDate(nextArticle.publishedAt)}</span>
                    </div>
                  </Link>
                )}
              </div>
            </article>

            <aside className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 p-6 mb-8">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <Share2 className="w-5 h-5 mr-2" />
                    Bagikan Artikel
                  </h3>
                  <div className="space-y-3">
                    <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
                      Share on Twitter
                    </button>
                    <button className="w-full px-4 py-2 bg-blue-800 text-white rounded-lg hover:bg-blue-900 transition-colors text-sm">
                      Share on LinkedIn
                    </button>
                    <button className="w-full px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-sm">
                      Share on WhatsApp
                    </button>
                  </div>
                </div>

                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 p-4">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mt-4 mb-4 flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Artikel Paling Banyak Dibaca
                  </h3>
                  <div className="space-y-4">
                    {popularArticles.map((popularArticle, index) => (
                      <Link
                        key={popularArticle.slug}
                        href={`/articles/${popularArticle.slug}`}
                        className="block group"
                      >
                        <article className="p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                              {index + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <h6 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                                {popularArticle.title}
                              </h6>
                              <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                                <Calendar className="w-3 h-3 mr-1" />
                                <span>
                                  {formatDate(popularArticle.publishedAt)}
                                </span>
                              </div>
                            </div>
                          </div>
                        </article>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
