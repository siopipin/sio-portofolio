import Link from 'next/link';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-slate-900 dark:text-white">
                SioWeb
              </span>
            </div>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              Dosen IT, Programmer, dan Penulis yang passionate dalam pengembangan teknologi dan pendidikan.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Navigasi
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">
                  Karya
                </Link>
              </li>
              <li>
                <Link href="/articles" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">
                  Artikel
                </Link>
              </li>
              <li>
                <Link href="/publications" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors">
                  Publikasi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
              Kontak
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:contact@sioweb.com"
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>contact@sioweb.com</span>
              </a>
              <a
                href="https://github.com/sioweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3 h-3" />
              </a>
              <a
                href="https://linkedin.com/in/sioweb"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} SioWeb. Dibuat dengan ❤️ menggunakan Next.js dan Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
