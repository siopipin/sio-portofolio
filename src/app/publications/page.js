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
            Publikasi Akademik
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed mb-12">
            Kumpulan publikasi penelitian dan artikel akademik yang telah saya tulis 
            dan dipublikasikan di berbagai jurnal internasional dan konferensi.
          </p>
          
          {/* Stats with Glass Effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">{publications.length}</div>
              <div className="text-blue-100 text-lg">Total Publikasi</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">{totalCitations}</div>
              <div className="text-blue-100 text-lg">Total Citations</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-8 shadow-xl">
              <div className="text-4xl font-bold text-yellow-300 mb-2">10+</div>
              <div className="text-blue-100 text-lg">Jurnal Terindeks</div>
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
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg backdrop-blur-sm"
              />
              <Search className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
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

      {/* Publications List */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPublications.length === 0 ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-slate-100/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4 border border-slate-200/50 dark:border-slate-700/50">
                <BookOpen className="w-8 h-8 text-slate-400" />
              </div>
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
                <div key={publication.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20 dark:border-slate-700/50">
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
            <div className="inline-flex items-center px-6 py-3 bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl border border-white/20 dark:border-slate-700/50 shadow-lg">
              <p className="text-slate-600 dark:text-slate-400 font-medium">
                Menampilkan {filteredPublications.length} dari {publications.length} publikasi
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
