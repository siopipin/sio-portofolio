import Link from 'next/link';
import Image from 'next/image';
import { Download, Github, Linkedin, Mail } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Glass Effect Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 backdrop-blur-3xl" />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-40 right-20 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Hello, I'm <span className="text-yellow-300">Sio</span>
              </h1>
              <div className="flex flex-row gap-4 items-start">
                <p className="text-xl md:text-2xl text-blue-100 leading-relaxed flex-1">
                  IT Lecturer, Programmer, and Writer passionate about technology development and education.
                </p>
                <div className="relative sm:hidden flex-shrink-0">
                  <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/20 shadow-lg">
                    <div className="w-20 h-20 bg-gradient-to-br from-yellow-300/90 to-orange-400/90 rounded-full flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/30 shadow-md">
                      <Image
                        src="/siojurnalispipin.png"
                        alt="Sio Jurnalis Pipin Profile Photo"
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
                See Projects
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
              <a
                href="https://github.com/sioweb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/sioweb"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:contact@sioweb.com"
                className="p-3 bg-white/10 backdrop-blur-xl border border-white/20 rounded-xl text-white hover:text-yellow-300 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
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
  );
}
