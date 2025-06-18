import React from 'react';
import { motion } from 'framer-motion';
import { FiChevronDown } from 'react-icons/fi';

const HomeSection = () => {
  return (
    <section id="home" className="relative bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 z-10">
        {/* Text content - centered and closer to animation */}
        <div className="lg:w-1/2 max-w-2xl text-center lg:text-left">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-4"
          >
            <span className="bg-gradient-to-r from-blue-400 to-pink-500 text-transparent bg-clip-text">Grow Software</span> Solutions
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="text-xl md:text-2xl text-light-text-secondary dark:text-dark-text-secondary mb-4"
          >
            We Specialize in <span className="font-bold text-light-text dark:text-dark-text">Solving Problems</span>
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
            className="text-lg text-light-text-secondary dark:text-dark-text-secondary mb-6"
          >
            Empowering businesses with custom software solutions and expert consulting
            services to accelerate growth and innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
            className="flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-lg font-medium hover:from-blue-700 hover:to-blue-800 transition-colors shadow-lg text-sm sm:text-base">
              Our Services
            </button>
            <button className="bg-gradient-to-r from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 text-gray-700 dark:text-gray-300 px-6 py-2.5 rounded-lg font-medium hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-600 dark:hover:to-gray-700 transition-colors text-sm sm:text-base">
              Contact Us
            </button>
          </motion.div>
        </div>

        {/* Animation container - centered and closer to text */}
        <div className="lg:w-1/2 flex justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
            className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full flex items-center justify-center"
          >
            {/* Dashed border circle */}
            <div className="absolute inset-0 border-2 border-dashed border-blue-500 rounded-full"></div>

            {/* Animated elements */}
            <motion.div
              className="absolute w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg"
              animate={{
                x: ["0rem", "7rem", "0rem", "-7rem", "0rem"],
                y: ["-7rem", "0rem", "7rem", "0rem", "-7rem"]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear"
              }}
            >{`< />`}</motion.div>

            <motion.div
              className="absolute w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-white text-lg shadow-lg"
              animate={{
                x: ["0rem", "-7rem", "0rem", "7rem", "0rem"],
                y: ["7rem", "0rem", "-7rem", "0rem", "7rem"]
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "linear",
                delay: 3
              }}
            >{'{}'}</motion.div>

            <motion.div
              className="absolute w-4 h-4 bg-pink-500 rounded-full shadow-md"
              animate={{
                x: ["0rem", "5rem", "0rem", "-5rem", "0rem"],
                y: ["-5rem", "0rem", "5rem", "0rem", "-5rem"]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 6
              }}
            ></motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 1.0 }}
        className="absolute bottom-10 text-center text-gray-400"
      >
        <div className="mx-auto mb-2 animate-bounce">
          <FiChevronDown size={30} />
        </div>
        <span>Scroll Down</span>
      </motion.div>
      
      {/* Background circles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute w-60 h-60 bg-blue-500 rounded-full opacity-10 blur-3xl top-1/4 left-1/4 animate-pulse"></div>
        <div className="absolute w-80 h-80 bg-pink-500 rounded-full opacity-10 blur-3xl bottom-1/4 right-1/4 animate-pulse delay-200"></div>
      </div>
    </section>
  );
};

export default HomeSection;