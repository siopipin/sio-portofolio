'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { articles, categories, searchArticles } from '@/data/articles';
import { FileText, Search, Calendar, Clock, Tag, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';

export default function ArticlesPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  const filteredArticles = articles.filter(article => {
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const currentArticles = filteredArticles.slice(startIndex, endIndex);

  // Reset to first page when search or filter changes
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

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
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Artikel & Tutorial
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
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
                onChange={handleSearchChange}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => handleCategoryChange(category.id)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg backdrop-blur-sm ${
                    selectedCategory === category.id
                      ? 'bg-blue-600 text-white shadow-blue-500/25'
                      : 'bg-white/80 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-600'
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
      <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {currentArticles.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200/50 dark:border-slate-700/50">
                  <FileText className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                  Tidak ada artikel ditemukan
                </h3>
                <p className="text-slate-500 dark:text-slate-500">
                  Coba ubah filter atau kata kunci pencarian Anda.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {currentArticles.map((article) => (
                  <article key={article.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20 dark:border-slate-700/50">
                    <div className="p-6">
                      {/* Article Header */}
                      <div className="flex items-start justify-between mb-3">
                        <Link href={`/articles/${article.slug}`} className="group">
                          <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2">
                            {article.title}
                          </h2>
                        </Link>
                        <FileText className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-3" />
                      </div>

                      {/* Article Date */}
                      <div className="flex items-center mb-3 text-sm text-slate-500 dark:text-slate-400">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{formatDate(article.publishedAt)}</span>
                      </div>

                      {/* Article Excerpt */}
                      <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>

                      {/* Read More Button */}
                      <Link 
                        href={`/articles/${article.slug}`}
                        className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors duration-200 mb-4"
                      >
                        Baca Selengkapnya
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>

                      {/* Article Category */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="px-3 py-1 bg-blue-100/80 dark:bg-blue-900/80 backdrop-blur-sm text-blue-700 dark:text-blue-300 text-xs rounded-full capitalize border border-blue-200/50 dark:border-blue-800/50">
                          {article.category.replace('-', ' ')}
                        </span>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag, index) => (
                          <span key={index} className="px-2 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-xs rounded flex items-center border border-slate-200/50 dark:border-slate-700/50">
                            <Tag className="w-3 h-3 mr-1" />
                            {tag}
                          </span>
                        ))}
                        {article.tags.length > 3 && (
                          <span className="px-2 py-1 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm text-slate-700 dark:text-slate-300 text-xs rounded border border-slate-200/50 dark:border-slate-700/50">
                            +{article.tags.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-12 flex justify-center">
                <div className="flex items-center space-x-2 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl border border-white/20 dark:border-slate-700/50 shadow-lg p-2">
                  <button
                    onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        currentPage === page
                          ? 'bg-blue-600 text-white shadow-blue-500/25'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  
                  <button
                    onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-lg text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            )}

            {/* Results Count */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl border border-white/20 dark:border-slate-700/50 shadow-lg">
                <p className="text-slate-600 dark:text-slate-400 font-medium">
                  Menampilkan {startIndex + 1}-{Math.min(endIndex, filteredArticles.length)} dari {filteredArticles.length} artikel
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Footer />
    </div>
  );
}
