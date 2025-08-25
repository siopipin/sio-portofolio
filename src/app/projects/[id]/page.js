'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import { 
  Code, 
  ExternalLink, 
  Github, 
  Calendar, 
  Users, 
  Clock, 
  ArrowLeft,
  Mail,
  Linkedin,
  Github as GithubIcon,
  Globe,
  Database,
  Smartphone,
  Zap,
  Shield,
  TrendingUp
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProjectDetailPage() {
  const params = useParams();
  const router = useRouter();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const foundProject = projects.find(p => p.id === parseInt(params.id));
    if (foundProject) {
      setProject(foundProject);
    }
    setIsLoading(false);
  }, [params.id]);

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen">
        <Header />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              Proyek tidak ditemukan
            </h1>
            <Link 
              href="/projects"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Daftar Proyek
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  const features = [
    {
      icon: Users,
      title: "Manajemen Pengguna",
      description: "Sistem registrasi, login, dan manajemen profil pengguna dengan role-based access control."
    },
    {
      icon: Database,
      title: "Database Terintegrasi",
      description: "Penyimpanan data yang aman dan terstruktur dengan backup otomatis."
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Antarmuka yang responsif dan optimal untuk desktop, tablet, dan mobile."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Fitur real-time untuk notifikasi dan update konten secara instan."
    },
    {
      icon: Shield,
      title: "Keamanan Tinggi",
      description: "Implementasi keamanan multi-layer dengan enkripsi data sensitif."
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Dashboard analitik untuk monitoring performa dan statistik pengguna."
    }
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
          <div className="text-center">
            <Link 
              href="/projects"
              className="inline-flex items-center text-blue-100 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Kembali ke Daftar Proyek
            </Link>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              {project.title}
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Calendar className="w-4 h-4" />
                <span className="text-sm">{project.year}</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Code className="w-4 h-4" />
                <span className="text-sm capitalize">{project.category}</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white/90 backdrop-blur-xl text-blue-600 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
              >
                <Globe className="w-5 h-5 mr-2" />
                Lihat Demo
              </a>
              <a 
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <GithubIcon className="w-5 h-5 mr-2" />
                Lihat Kode
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                Tentang Proyek
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Platform pembelajaran online yang terintegrasi dengan sistem manajemen pembelajaran (LMS) 
                untuk institusi pendidikan. Proyek ini dikembangkan dengan fokus pada user experience 
                yang optimal dan skalabilitas untuk menangani ribuan pengguna secara bersamaan.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                Fitur utama meliputi sistem manajemen kursus, video streaming, quiz interaktif, 
                forum diskusi, dan dashboard analitik untuk monitoring progress pembelajaran.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl overflow-hidden shadow-2xl">
                <Image 
                  src="https://picsum.photos/800/450?random=1"
                  alt={project.title}
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Teknologi yang Digunakan
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Stack teknologi modern yang digunakan dalam pengembangan proyek ini
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {project.technologies.map((tech, index) => (
              <div key={index} className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-slate-900 dark:text-white">{tech}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Fitur Utama
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Kemampuan dan fitur yang membuat proyek ini unggul
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-slate-50/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-white/20 dark:border-slate-700/50">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mb-4 shadow-lg">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-30" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
        
        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-indigo-700/20 backdrop-blur-3xl"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tertarik dengan Proyek Ini?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Saya siap membantu Anda mengembangkan proyek serupa atau proyek teknologi lainnya. 
            Mari kita diskusikan kebutuhan Anda dan buat solusi yang tepat.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:contact@sioweb.com?subject=Diskusi Proyek E-Learning Platform"
              className="inline-flex items-center px-8 py-3 bg-white/90 backdrop-blur-xl text-blue-600 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
            >
              <Mail className="w-5 h-5 mr-2" />
              Hubungi via Email
            </a>
            <a 
              href="https://linkedin.com/in/sioweb"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              Hubungi via LinkedIn
            </a>
          </div>
          
          <div className="mt-8 text-blue-100">
            <p className="text-sm">
              Respon cepat dalam 24 jam • Konsultasi gratis • Estimasi biaya transparan
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
