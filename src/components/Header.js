'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Code, FileText, BookMarked, Home, LayoutDashboard } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Projects', href: '/projects', icon: Code },
    { name: 'Articles', href: '/articles', icon: FileText },
    { name: 'Publications', href: '/publications', icon: BookMarked },
    { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 dark:bg-slate-900/80 dark:border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-full flex items-center justify-center shadow-md border border-blue-500/40 dark:border-blue-300/30">
              {/* Icon: BookOpen as research/scholar symbol */}
              <BookMarked className="w-5 h-5 text-white drop-shadow" />
            </div>
            <span className="text-xl font-bold text-slate-900 dark:text-white tracking-tight">
              SioPipin
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
