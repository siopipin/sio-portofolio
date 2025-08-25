'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { publications, categories, getTotalCitations } from '@/data/publications';
import { BookOpen, Search, Calendar, Users, ExternalLink, Quote } from 'lucide-react';

export default function PublicationsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPublications = publications.filter(publication => {
    const matchesCategory = selectedCategory === 'all' || publication.category === selectedCategory;
    const matchesSearch = publication.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         publication.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
                         publication.journal.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         publication.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalCitations = getTotalCitations();

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Publikasi Akademik
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Kumpulan publikasi penelitian dan artikel akademik yang telah saya tulis 
            dan dipublikasikan di berbagai jurnal internasional dan konferensi.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{publications.length}</div>
              <div className="text-blue-100">Total Publikasi</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">{totalCitations}</div>
              <div className="text-blue-100">Total Citations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-300">10+</div>
              <div className="text-blue-100">Jurnal Terindeks</div>
            </div>
          </div>
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
                placeholder="Cari publikasi..."
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

      {/* Publications List */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                Tidak ada publikasi ditemukan
              </h3>
              <p className="text-slate-500 dark:text-slate-500">
                Coba ubah filter atau kata kunci pencarian Anda.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredPublications.map((publication) => (
                <div key={publication.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className="p-6">
                    {/* Publication Header */}
                    <div className="flex items-start justify-between mb-4">
                      <h2 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-2 flex-1">
                        {publication.title}
                      </h2>
                      <BookOpen className="w-6 h-6 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-3" />
                    </div>

                    {/* Authors */}
                    <div className="flex items-center mb-3">
                      <Users className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                      <p className="text-slate-600 dark:text-slate-300 text-sm">
                        {publication.authors.join(', ')}
                      </p>
                    </div>

                    {/* Journal & Year */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-slate-500 dark:text-slate-400 mr-2" />
                        <span className="text-slate-600 dark:text-slate-300 text-sm">
                          {publication.journal} • {publication.year}
                        </span>
                      </div>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full capitalize">
                        {publication.category.replace('-', ' ')}
                      </span>
                    </div>

                    {/* Abstract */}
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {publication.abstract}
                    </p>

                    {/* DOI & Citations */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm">
                        <div className="flex items-center text-slate-500 dark:text-slate-400">
                          <Quote className="w-4 h-4 mr-1" />
                          <span>{publication.citations} citations</span>
                        </div>
                        <a 
                          href={`https://doi.org/${publication.doi}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                        >
                          <span className="mr-1">DOI</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      </div>
                      
                      <a 
                        href="https://scholar.google.com/citations?user=8T6XwQ4AAAAJ&hl=id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Google Scholar
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Results Count */}
          <div className="mt-12 text-center">
            <p className="text-slate-600 dark:text-slate-400">
              Menampilkan {filteredPublications.length} dari {publications.length} publikasi
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
