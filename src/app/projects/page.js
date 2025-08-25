'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects, categories } from '@/data/projects';
import { Code, ExternalLink, Github, Filter, ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 10;

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredProjects.length / projectsPerPage);
  const startIndex = (currentPage - 1) * projectsPerPage;
  const endIndex = startIndex + projectsPerPage;
  const currentProjects = filteredProjects.slice(startIndex, endIndex);

  // Reset to first page when filters change
  const handleCategoryChange = (categoryId) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
            Karya & Proyek
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            Koleksi proyek-proyek yang telah saya kembangkan, dari aplikasi web hingga mobile, 
            mencakup berbagai teknologi dan domain yang berbeda.
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
                placeholder="Cari proyek..."
                value={searchQuery}
                onChange={(e) => handleSearchChange(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg backdrop-blur-sm"
              />
              <Filter className="absolute left-3 top-3 w-5 h-5 text-slate-400" />
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

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {currentProjects.length === 0 ? (
            <div className="text-center py-12">
              <Code className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-600 dark:text-slate-400 mb-2">
                Tidak ada proyek ditemukan
              </h3>
              <p className="text-slate-500 dark:text-slate-500">
                Coba ubah filter atau kata kunci pencarian Anda.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project) => (
                <div key={project.id} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group border border-white/20 dark:border-slate-700/50">
                  {/* Project Image */}
                  <div className="h-48 relative overflow-hidden">
                    <Image 
                      src={`https://picsum.photos/400/200?random=${project.id}`}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full border border-white/30">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <Link href={`/projects/${project.id}`}>
                        <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors cursor-pointer">
                          {project.title}
                        </h3>
                      </Link>
                      <span className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded-full capitalize">
                        {project.category}
                      </span>
                    </div>
                    
                    <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="px-2 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <a 
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-xl hover:bg-blue-700 transition-all duration-300 text-sm font-medium flex items-center justify-center shadow-lg hover:shadow-xl"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-2 px-4 rounded-xl hover:bg-white dark:hover:bg-slate-800 transition-all duration-300 text-sm font-medium flex items-center justify-center shadow-lg hover:shadow-xl"
                      >
                        <Github className="w-4 h-4 mr-1" />
                        GitHub
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
              Menampilkan {startIndex + 1}-{Math.min(endIndex, filteredProjects.length)} dari {filteredProjects.length} proyek
            </p>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-8 flex justify-center">
              <div className="flex items-center space-x-2">
                {/* Previous Button */}
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                  // Show first page, last page, current page, and pages around current page
                  if (
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                  ) {
                    return (
                      <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-300 shadow-lg backdrop-blur-sm ${
                          currentPage === page
                            ? 'bg-blue-600 text-white shadow-blue-500/25'
                            : 'bg-white/80 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-white dark:hover:bg-slate-800'
                        }`}
                      >
                        {page}
                      </button>
                    );
                  } else if (
                    page === currentPage - 2 ||
                    page === currentPage + 2
                  ) {
                    return <span key={page} className="px-2 text-slate-400">...</span>;
                  }
                  return null;
                })}

                {/* Next Button */}
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg backdrop-blur-sm"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
