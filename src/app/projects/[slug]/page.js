 'use client';

import { useState, useEffect } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { projects } from '@/data/projects';
import {
  Code,
  Calendar,
  ArrowLeft,
  Mail,
  Linkedin,
  Github as GithubIcon,
  Globe,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

function ProjectImages({ images, title }) {
  const validImages = Array.isArray(images) ? images.filter(Boolean) : [];
  const [current, setCurrent] = useState(0);

  if (validImages.length === 0) {
    return (
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl overflow-hidden shadow-2xl" />
      </div>
    );
  }

  if (validImages.length === 1) {
    return (
      <div className="relative">
        <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl overflow-hidden shadow-2xl">
          <Image
            src={validImages[0]}
            alt={title}
            width={800}
            height={800}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    );
  }

  const goPrev = () => {
    setCurrent((prev) => (prev === 0 ? validImages.length - 1 : prev - 1));
  };

  const goNext = () => {
    setCurrent((prev) => (prev === validImages.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative">
      <div className="aspect-square bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl overflow-hidden shadow-2xl">
        <Image
          src={validImages[current]}
          alt={`${title} screenshot ${current + 1}`}
          width={800}
          height={800}
          className="w-full h-full object-cover"
        />
      </div>

      <button
        type="button"
        onClick={goPrev}
        aria-label="Sebelumnya"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-colors"
      >
        <span className="sr-only">Sebelumnya</span>
        <span className="text-lg">&larr;</span>
      </button>
      <button
        type="button"
        onClick={goNext}
        aria-label="Berikutnya"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-700 shadow-md flex items-center justify-center text-slate-700 dark:text-slate-200 hover:bg-white dark:hover:bg-slate-800 transition-colors"
      >
        <span className="sr-only">Berikutnya</span>
        <span className="text-lg">&rarr;</span>
      </button>

      <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5">
        {validImages.map((_, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full border border-white/70 ${
              index === current ? 'bg-white' : 'bg-white/30'
            }`}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default function ProjectDetailPage() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const slug = params.slug;
    const foundProject = projects.find((p) => p.slug === slug);
    if (foundProject) {
      setProject(foundProject);
    }
    setIsLoading(false);
  }, [params.slug]);

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

  const demoEnabled = project.demoEnabled !== false;
  const githubEnabled = project.githubEnabled !== false;
  const hasDemo = demoEnabled && Boolean(project.demoUrl && project.demoUrl.trim() !== '');
  const hasGithub = githubEnabled && Boolean(project.githubUrl && project.githubUrl.trim() !== '');
  const aboutParagraphs = Array.isArray(project.about)
    ? project.about.filter(Boolean)
    : [];
  const gallery = Array.isArray(project.gallery) ? project.gallery.filter(Boolean) : [];
  const featureList = Array.isArray(project.features) ? project.features.filter(Boolean) : [];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl"></div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/25 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-blue-400/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-blue-300/25 rounded-full blur-3xl"></div>

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
              {hasDemo ? (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white/90 backdrop-blur-xl text-blue-600 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
                >
                  <Globe className="w-5 h-5 mr-2" />
                  Lihat Demo
                </a>
              ) : (
                <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-blue-100/60 font-semibold rounded-xl shadow-lg cursor-not-allowed">
                  <Globe className="w-5 h-5 mr-2" />
                  Demo tidak tersedia
                </div>
              )}

              {hasGithub ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <GithubIcon className="w-5 h-5 mr-2" />
                  Lihat Kode
                </a>
              ) : (
                <div className="inline-flex items-center px-8 py-3 bg-white/5 backdrop-blur-xl border border-white/10 text-white/70 font-semibold rounded-xl shadow-lg cursor-not-allowed">
                  <GithubIcon className="w-5 h-5 mr-2" />
                  Kode tidak tersedia
                </div>
              )}
            </div>

            {(!hasDemo || !hasGithub) && (
              <p className="mt-6 text-sm text-blue-100/90">
                Beberapa proyek klien tidak menyediakan akses demo publik atau kode sumber.
              </p>
            )}
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
              {aboutParagraphs.length > 0 ? (
                aboutParagraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))
              ) : (
                <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
                  {project.description}
                </p>
              )}

              {featureList.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-base font-semibold text-slate-900 dark:text-white mb-2">
                    Fitur utama pada proyek ini:
                  </h3>
                  <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
                    {featureList.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex gap-2"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 dark:bg-blue-400 flex-shrink-0" />
                        <span className="flex-1 leading-relaxed">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm border border-slate-200 dark:border-slate-700">
                  <Calendar className="w-4 h-4" />
                  {project.year}
                </span>
                <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 text-sm border border-slate-200 dark:border-slate-700 capitalize">
                  <Code className="w-4 h-4" />
                  {project.category}
                </span>
              </div>

              <p className="text-sm text-slate-500 dark:text-slate-400">
                Catatan: Untuk beberapa proyek klien, detail tertentu (mis. akses repo, data, atau lingkungan produksi) tidak dapat dipublikasikan.
              </p>
            </div>

            <ProjectImages images={Array.isArray(project.images) ? project.images : []} title={project.title} />
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="py-20 bg-slate-50 dark:bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Tampilan Aplikasi
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Cuplikan hasil karya dan antarmuka aplikasi
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((src, idx) => (
                <div
                  key={idx}
                  className="aspect-video bg-white/80 dark:bg-slate-900/80 rounded-2xl overflow-hidden shadow-lg border border-white/20 dark:border-slate-700/50"
                >
                  <Image
                    src={src}
                    alt={`${project.title} screenshot ${idx + 1}`}
                    width={1200}
                    height={675}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technologies */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Teknologi yang Digunakan
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-300">
              Stack teknologi modern yang digunakan dalam pengembangan proyek
              ini
            </p>
          </div>

          <div className="flex justify-center">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 justify-center">
              {(project.technologies || []).map((tech, index) => (
                <div
                  key={index}
                  className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20 dark:border-slate-700/50"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <Code className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-slate-900 dark:text-white">
                    {tech}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-slate-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
          }}
        ></div>

        {/* Glass Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-700/20 via-blue-600/20 to-blue-500/20 backdrop-blur-3xl"></div>

        {/* Floating Elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500/25 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-24 h-24 bg-blue-400/25 rounded-full blur-3xl"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Tertarik dengan Proyek Ini?
          </h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Saya siap membantu Anda mengembangkan proyek serupa atau proyek
            teknologi lainnya. Mari kita diskusikan kebutuhan Anda dan buat
            solusi yang tepat.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:siojurnalisp@gmail.com?subject=Diskusi Proyek"
              className="inline-flex items-center px-8 py-3 bg-white/90 backdrop-blur-xl text-blue-600 font-semibold rounded-xl hover:bg-white transition-all duration-300 shadow-lg hover:shadow-xl border border-white/30"
            >
              <Mail className="w-5 h-5 mr-2" />
              Hubungi via Email
            </a>
            <a
              href="https://www.linkedin.com/in/siopipin/"
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
              Respon cepat dalam 24 jam • Konsultasi gratis • Estimasi biaya
              transparan
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

