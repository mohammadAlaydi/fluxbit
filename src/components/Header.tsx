// File: src/components/Header.tsx
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext.tsx';
import Logo from './Logo.tsx';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isDarkMode, toggleDarkMode } = useTheme();
  const [activeSection, setActiveSection] = useState('#home');

  const navigation = useMemo(() => [
    { name: 'Home', href: '#home' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'Services', href: '#services' },
    { name: 'Features', href: '#features' },
    { name: 'Testimonials', href: '#testimonials' },
  ], []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    // Observe each section
    navigation.forEach((item) => {
      const section = document.querySelector(item.href);
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      navigation.forEach((item) => {
        const section = document.querySelector(item.href);
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, [navigation]);

  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-dark-bg/80 backdrop-blur-md shadow-sm dark:shadow-gray-800/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <Logo size={40} />
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10">
            {navigation.map((item) => (
              <motion.a 
                key={item.name}
                href={item.href}
                whileHover={{ y: -2 }}
                className={`text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors font-medium ${activeSection === item.href ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}`}
              >
                {item.name}
              </motion.a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-gray-600 dark:text-gray-300 font-medium hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Sign in
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-5 py-2 rounded-lg hover:bg-primary-700 transition-colors font-medium"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={toggleDarkMode}
              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors p-2"
            >
              {isDarkMode ? <FiSun size={20} /> : <FiMoon size={20} />}
            </motion.button>
            <motion.button 
              whileTap={{ scale: 0.95 }}
              className="text-gray-500 dark:text-gray-400"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-dark-card py-4"
            >
              <div className="flex flex-col space-y-3">
                {navigation.map((item) => (
                  <motion.a 
                    key={item.name}
                    href={item.href}
                    whileHover={{ x: 5 }}
                    className={`text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 py-2 px-4 rounded transition-colors font-medium ${activeSection === item.href ? 'text-primary-600 dark:text-primary-400 font-bold' : ''}`}
                  >
                    {item.name}
                  </motion.a>
                ))}
                <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <motion.button 
                    whileHover={{ x: 5 }}
                    className="text-gray-600 dark:text-gray-300 font-medium py-2 text-left"
                  >
                    Sign in
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-primary-600 text-white py-2 rounded-lg font-medium"
                  >
                    Get Started
                  </motion.button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;