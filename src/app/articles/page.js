'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { articles, categories, searchArticles } from '@/data/articles';
import { FileText, Search, Calendar, Clock, Tag } from 'lucide-react';
import Link from 'next/link';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

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
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Artikel & Tutorial
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Kumpulan artikel, tutorial, dan panduan tentang teknologi, pemrograman, 
            dan pengembangan aplikasi yang saya tulis berdasarkan pengalaman dan penelitian.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <input
                type="text"
                placeholder="Cari artikel..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12">
              <FileText className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-slate-500 dark:text-slate-500">
                Coba ubah filter atau kata kunci pencarian Anda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {filteredArticles.map((article) => (
                <article key={article.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    {/* Article Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                        {article.title}
                      </h2>
                      <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-3" />
                    </div>

                    {/* Article Excerpt */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>

                    {/* Article Meta */}
                    <div className="flex items-center justify-between mb-4 text-sm text-slate-500 dark:text-slate-400">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span>{formatDate(article.publishedAt)}</span>
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full capitalize">
                        {article.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded flex items-center">
                          <Tag className="w-3 h-3 mr-1" />
                          {tag}
                        </span>
                      ))}
                      {article.tags.length > 3 && (
                        <span className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded">
                          +{article.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Read More Button */}
                    <Link 
                      href={`/articles/${article.slug}`}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                    >
                      Baca Selengkapnya
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Menampilkan {filteredArticles.length} dari {articles.length} artikel
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
