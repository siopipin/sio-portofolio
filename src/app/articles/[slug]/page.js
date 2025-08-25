import { notFound } from 'next/navigation';
import { articles, getArticlesByCategory } from '@/data/articles';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Clock, Tag, Share2, BookOpen, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }) {
  const article = articles.find(article => article.slug === params.slug);
  
  if (!article) {
    return { title: 'Artikel Tidak Ditemukan' };
  }

  return {
    title: `${article.title} | SioWeb Portfolio`,
    description: article.excerpt,
    keywords: article.tags.join(', '),
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.publishedAt,
    },
  };
}

export default function ArticleDetailPage({ params }) {
  const article = articles.find(article => article.slug === params.slug);
  
  if (!article) {
    notFound();
  }

  const relatedArticles = getArticlesByCategory(article.category)
    .filter(a => a.id !== article.id)
    .slice(0, 3);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      <section className="relative bg-slate-900 text-white py-16 lg:py-24 overflow-hidden">
        {/* Parallax Background Image */}
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0 transform scale-110 parallax-bg"
            style={{
              backgroundImage: `url(https://picsum.photos/1920/1080?random=${article.id})`
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90"></div>
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
                <span>{article.readTime}</span>
              </div>
              <span className="px-3 py-1 bg-blue-600/20 backdrop-blur-sm text-blue-300 text-xs rounded-full capitalize border border-blue-500/30">
                {article.category.replace('-', ' ')}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              {article.title}
            </h1>

            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              {article.excerpt}
            </p>

            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, index) => (
                <span key={index} className="px-3 py-1 bg-white/10 backdrop-blur-sm text-white text-sm rounded-full flex items-center border border-white/20">
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
              <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-2xl shadow-xl border border-white/20 dark:border-slate-700/50 p-8 lg:p-12">
                <div className="text-slate-700 dark:text-slate-300 article-content">
                  <h2 className="font-bold text-slate-900 dark:text-white">
                    Pengenalan Next.js 14
                  </h2>
                  
                  <div className="mb-8">
                    <Image 
                      src={`https://picsum.photos/800/400?random=${article.id + 1}`}
                      alt="Next.js 14 Introduction"
                      width={800}
                      height={400}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <p>
                    Next.js 14 adalah versi terbaru dari framework React yang membawa banyak fitur revolusioner 
                    untuk pengembangan web modern. Framework ini dirancang untuk memberikan pengalaman pengembangan 
                    yang lebih cepat, efisien, dan powerful.
                  </p>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Fitur Terbaru Next.js 14
                  </h3>

                  <div className="mb-8">
                    <Image 
                      src={`https://picsum.photos/800/300?random=${article.id + 2}`}
                      alt="Next.js 14 Features"
                      width={800}
                      height={300}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    1. App Router
                  </h4>
                  <p>
                    App Router adalah fitur utama yang memperkenalkan sistem routing berbasis file yang lebih intuitif. 
                    Dengan struktur folder yang sederhana, Anda dapat membuat route yang kompleks dengan mudah.
                  </p>

                  <div className="bg-slate-100 dark:bg-slate-800 rounded-lg p-4 mb-6">
                    <pre className="text-sm text-slate-700 dark:text-slate-300">
{`app/
├── page.js          // Home page (/)
├── about/
│   └── page.js      // About page (/about)
├── blog/
│   ├── page.js      // Blog list (/blog)
│   └── [slug]/
│       └── page.js  // Blog post (/blog/post-slug)
└── layout.js        // Root layout`}
                    </pre>
                  </div>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    2. Server Components
                  </h4>
                  <p>
                    Server Components memungkinkan Anda menjalankan komponen React di server, 
                    mengurangi bundle size dan meningkatkan performa aplikasi.
                  </p>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    3. Streaming dan Suspense
                  </h4>
                  <p>
                    Fitur streaming memungkinkan aplikasi untuk menampilkan konten secara bertahap, 
                    memberikan pengalaman loading yang lebih baik bagi pengguna.
                  </p>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Best Practices
                  </h3>

                  <div className="mb-8">
                    <Image 
                      src={`https://picsum.photos/800/350?random=${article.id + 3}`}
                      alt="Next.js 14 Best Practices"
                      width={800}
                      height={350}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    1. Optimasi Performa
                  </h4>
                  <ul className="list-disc list-inside">
                    <li>Gunakan Image component untuk optimasi gambar otomatis</li>
                    <li>Implementasikan lazy loading untuk komponen yang tidak kritis</li>
                    <li>Manfaatkan caching dan revalidation</li>
                  </ul>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    2. SEO Optimization
                  </h4>
                  <p>
                    Next.js 14 menyediakan built-in SEO features seperti metadata API, 
                    structured data, dan automatic sitemap generation.
                  </p>

                  <h4 className="font-semibold text-slate-900 dark:text-white">
                    3. TypeScript Integration
                  </h4>
                  <p>
                    Dukungan TypeScript yang lebih baik dengan type safety yang enhanced 
                    dan developer experience yang lebih baik.
                  </p>

                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    Kesimpulan
                  </h3>
                  
                  <div className="mb-8">
                    <Image 
                      src={`https://picsum.photos/800/250?random=${article.id + 4}`}
                      alt="Next.js 14 Conclusion"
                      width={800}
                      height={250}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                  
                  <p>
                    Next.js 14 membawa revolusi dalam pengembangan web dengan fitur-fitur modern 
                    yang memudahkan developer dalam membuat aplikasi yang cepat, scalable, dan maintainable. 
                    Dengan App Router, Server Components, dan optimasi performa yang built-in, 
                    Next.js 14 adalah pilihan terbaik untuk proyek web modern.
                  </p>
                </div>
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

                <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl shadow-lg border border-white/20 dark:border-slate-700/50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-4 flex items-center">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Artikel Terkait
                  </h3>
                  <div className="space-y-4">
                    {relatedArticles.map((relatedArticle) => (
                      <Link 
                        key={relatedArticle.id}
                        href={`/articles/${relatedArticle.slug}`}
                        className="block group"
                      >
                        <article className="p-4 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors">
                          <h4 className="font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 mb-2">
                            {relatedArticle.title}
                          </h4>
                          <div className="flex items-center text-sm text-slate-500 dark:text-slate-400">
                            <Calendar className="w-3 h-3 mr-1" />
                            <span>{formatDate(relatedArticle.publishedAt)}</span>
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
