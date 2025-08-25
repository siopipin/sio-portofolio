import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { getFeaturedProjects } from '@/data/projects';
import { getFeaturedArticles } from '@/data/articles';
import { getFeaturedPublications, getTotalCitations } from '@/data/publications';
import { Code, FileText, BookOpen, ExternalLink, Github, Linkedin, Mail, Download } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  const featuredProjects = getFeaturedProjects();
  const featuredArticles = getFeaturedArticles();
  const featuredPublications = getFeaturedPublications();
  const totalCitations = getTotalCitations();

  const skills = [
    { name: "Frontend Development", level: 95, technologies: ["React", "Next.js", "Vue.js", "TypeScript"] },
    { name: "Backend Development", level: 90, technologies: ["Node.js", "Python", "Java", "PHP"] },
    { name: "Mobile Development", level: 85, technologies: ["React Native", "Flutter", "Swift", "Kotlin"] },
    { name: "Database & Cloud", level: 88, technologies: ["PostgreSQL", "MongoDB", "AWS", "Firebase"] },
    { name: "AI & Machine Learning", level: 80, technologies: ["TensorFlow", "PyTorch", "OpenAI API", "Scikit-learn"] },
    { name: "DevOps & Tools", level: 85, technologies: ["Docker", "Kubernetes", "Git", "CI/CD"] }
  ];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 lg:space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  Halo, Saya <span className="text-yellow-300">SioWeb</span>
                </h1>
                <div className="flex flex-row gap-4 items-start">
                  <p className="text-xl md:text-2xl text-blue-100 leading-relaxed flex-1">
                    Dosen IT, Programmer, dan Penulis yang passionate dalam pengembangan teknologi dan pendidikan.
                  </p>
                  <div className="relative sm:hidden flex-shrink-0">
                    <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg">
                      <div className="w-20 h-20 bg-gradient-to-br from-yellow-300/90 to-orange-400/90 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/30 shadow-md">
                        <Image 
                          src="/siojurnalispipin.png" 
                          alt="SioWeb Profile Photo" 
                          width={80} 
                          height={80} 
                          className="w-full h-full object-cover rounded-full"
                          priority
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/projects"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Lihat Karya
                </Link>
                <a 
                  href="/cv-sioweb.pdf"
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download CV
                </a>
              </div>

              <div className="flex space-x-4">
                <a href="https://github.com/sioweb" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://linkedin.com/in/sioweb" target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:contact@sioweb.com" className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div className="relative hidden sm:block lg:block">
              <div className="w-64 h-64 lg:w-80 lg:h-80 mx-auto bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-2xl">
                <div className="w-48 h-48 lg:w-64 lg:h-64 bg-gradient-to-br from-yellow-300/90 to-orange-400/90 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/30 shadow-xl">
                  <Image 
                    src="/siojurnalispipin.png" 
                    alt="SioWeb Profile Photo" 
                    width={256} 
                    height={256} 
                    className="w-full h-full object-cover rounded-full"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Tentang Saya
              </h2>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 text-lg leading-relaxed">
                <p>
                  Saya adalah seorang dosen di bidang Teknologi Informasi dengan pengalaman lebih dari 10 tahun dalam pengembangan aplikasi dan penelitian teknologi.
                </p>
                <p>
                  Passion saya terletak pada pengembangan aplikasi web dan mobile yang inovatif, serta menulis artikel dan publikasi akademik yang berkontribusi pada kemajuan teknologi.
                </p>
                <p>
                  Saat ini saya aktif mengajar mata kuliah pemrograman, database, dan pengembangan aplikasi, sambil terus mengembangkan proyek-proyek teknologi yang bermanfaat.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">10+</div>
                  <div className="text-slate-600 dark:text-slate-400">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">{totalCitations}</div>
                  <div className="text-slate-600 dark:text-slate-400">Total Citations</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">Keahlian</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-sm text-slate-500 dark:text-slate-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Karya Terbaru
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Beberapa proyek terbaik yang telah saya kembangkan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-slate-900 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <Code className="w-16 h-16 text-white" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <a 
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-blue-600 text-white text-center py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors text-sm"
                    >
                      Demo
                    </a>
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 border border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 text-center py-2 px-4 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-sm"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/projects"
              className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
            >
              Lihat Semua Karya
              <ExternalLink className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Articles & Publications */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Featured Articles */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Artikel Terbaru
                </h2>
                <Link 
                  href="/articles"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  Lihat Semua
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {featuredArticles.map((article) => (
                  <div key={article.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
                        {article.title}
                      </h3>
                      <FileText className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>{article.publishedAt}</span>
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Publications */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Publikasi Terbaru
                </h2>
                <Link 
                  href="/publications"
                  className="text-blue-600 dark:text-blue-400 hover:underline flex items-center"
                >
                  Lihat Semua
                  <ExternalLink className="w-4 h-4 ml-1" />
                </Link>
              </div>
              
              <div className="space-y-6">
                {featuredPublications.map((publication) => (
                  <div key={publication.id} className="border border-slate-200 dark:border-slate-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-slate-900 dark:text-white line-clamp-2">
                        {publication.title}
                      </h3>
                      <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 flex-shrink-0 ml-2" />
                    </div>
                    <p className="text-slate-600 dark:text-slate-300 text-sm mb-2">
                      {publication.authors.join(', ')}
                    </p>
                    <p className="text-slate-500 dark:text-slate-400 text-xs mb-3">
                      {publication.journal} • {publication.year}
                    </p>
                    <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400">
                      <span>{publication.citations} citations</span>
                      <a 
                        href={`https://scholar.google.com/citations?user=8T6XwQ4AAAAJ&hl=id`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline"
                      >
                        Google Scholar
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
