import Link from 'next/link';
import { Github, Linkedin, Mail, BookOpen } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
            
              <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
                SioPipin
              </span>
            </Link>
            <p className="text-slate-600 dark:text-slate-400 text-sm">
              IT Lecturer, Programmer, and Writer passionate about technology development and education.
            </p>
          </div>

          {/* Navigation & Contact */}
          <div className="grid grid-cols-2 gap-6 md:col-span-2">
            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Navigation
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/articles" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                    Articles
                  </Link>
                </li>
                <li>
                  <Link href="/publications" className="text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200">
                    Publications
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact & Social */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">
                Contact
              </h3>
              <div className="space-y-3">
                <a
                  href="mailto:contact@sioweb.com"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  <span>siojurnalispipin@hotmail.com</span>
                </a>
                <a
                  href="https://github.com/siopipin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  <Github className="w-4 h-4 flex-shrink-0" />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/siopipin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-slate-600 hover:text-blue-600 dark:text-slate-400 dark:hover:text-blue-400 text-sm transition-colors duration-200"
                >
                  <Linkedin className="w-4 h-4 flex-shrink-0" />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © {currentYear} SioPipin. Made with love using Next.js and Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
