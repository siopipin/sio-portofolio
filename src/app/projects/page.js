'use client';

import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects, categories } from '@/data/projects';
import { Code, ExternalLink, Github, Filter } from 'lucide-react';

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Karya & Proyek
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
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
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Filter className="absolute left-3 top-2.5 w-5 h-5 text-slate-400" />
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

      {/* Projects Grid */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
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
              {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  {/* Project Image */}
                  <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                    <Code className="w-16 h-16 text-white transition-transform duration-300 group-hover:scale-110" />
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
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
                        className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium flex items-center justify-center"
                      >
                        <ExternalLink className="w-4 h-4 mr-1" />
                        Demo
                      </a>
                      <a 
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium flex items-center justify-center"
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
              Menampilkan {filteredProjects.length} dari {projects.length} proyek
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
