// File: src/components/Hero.tsx
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-dark-bg dark:to-dark-card">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight mb-6">
            Grow your software development skills
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
            The all-in-one platform to help engineering teams improve their workflow, 
            productivity, and code quality.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary-600 text-white px-8 py-4 rounded-lg hover:bg-primary-700 transition-colors font-medium text-lg shadow-lg"
            >
              Start Free Trial
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 px-8 py-4 rounded-lg hover:bg-gray-50 dark:hover:bg-dark-card transition-colors font-medium text-lg"
            >
              View Demo
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-20 mx-auto max-w-5xl bg-white dark:bg-dark-card rounded-xl shadow-2xl overflow-hidden"
        >
          <div className="aspect-w-16 aspect-h-9 bg-gray-100 dark:bg-gray-800">
            <div className="w-full h-full flex items-center justify-center text-gray-500 dark:text-gray-400">
              Product Screenshot/Video
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;