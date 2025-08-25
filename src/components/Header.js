'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, FileText, BookOpen, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Beranda', href: '/', icon: Home },
    { name: 'Karya', href: '/projects', icon: Code },
    { name: 'Artikel', href: '/articles', icon: FileText },
    { name: 'Publikasi', href: '/publications', icon: BookOpen },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white">
              SioWeb
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200 flex items-center space-x-1"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-slate-700 hover:text-blue-600 dark:text-slate-300 dark:hover:text-blue-400 block px-3 py-2 text-base font-medium transition-colors duration-200 flex items-center space-x-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span>{item.name}</span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
