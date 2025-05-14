import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Menu, X, BookOpen } from 'lucide-react';

import LanguageToggle from '../common/LanguageToggle';
import ThemeToggle from '../common/ThemeToggle';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t } = useTranslation();
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/courses', label: t('nav.courses') },
    { to: '/faculty', label: t('nav.faculty') },
    { to: '/toppers', label: t('nav.toppers') },
    { to: '/latest', label: t('nav.latest') },
    { to: '/gallery', label: t('nav.gallery') },
    { to: '/about', label: t('nav.about') },
    { to: '/scholarship', label: t('nav.scholarship') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white dark:bg-gray-900 shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-2 font-bold text-primary-500 dark:text-primary-400"
          >
            <BookOpen size={28} className="text-primary-500 dark:text-primary-400" />
            <div>
              <h1 className="text-xl sm:text-2xl font-bold">{t('site.name')}</h1>
              <p className="text-xs text-secondary-600 dark:text-secondary-400">{t('site.tagline')}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:gap-5 space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${location.pathname === link.to
                  ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-gray-800'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Theme & Language Toggle (Desktop) */}
          <div className="hidden md:flex items-center space-x-2">
            <ThemeToggle />
            <LanguageToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-white dark:bg-gray-900 shadow-lg"
      >
        {isOpen && (
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`block px-3 py-2 rounded-md text-base font-medium ${location.pathname === link.to
                  ? 'text-primary-500 dark:text-primary-400 bg-primary-50 dark:bg-gray-800'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center pt-3 space-x-2 border-t border-gray-200 dark:border-gray-700">
              <ThemeToggle />
              <LanguageToggle />
            </div>
          </div>
        )}
      </motion.div>
    </header>
  );
};

export default Navbar;