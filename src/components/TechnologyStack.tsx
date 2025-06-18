import React from 'react';
import { motion } from 'framer-motion';

const technologies = [
  {
    name: 'React',
    logo: 'react-logo.svg',
    color: '#61DAFB', // React Blue
    tailwindClassColor: 'react-blue',
  },
  {
    name: 'Node.js',
    logo: 'nodejs-logo.svg',
    color: '#68A063', // Node.js Green
    tailwindClassColor: 'nodejs-green',
  },
  {
    name: 'Angular',
    logo: 'angular-logo.svg',
    color: '#DD0031', // Angular Red
    tailwindClassColor: 'angular-red',
  },
  {
    name: 'Vue.js',
    logo: 'vuejs-logo.svg',
    color: '#42B883', // Vue.js Green
    tailwindClassColor: 'vuejs-green',
  },
  {
    name: 'Python',
    logo: 'python-logo.svg',
    color: '#3776AB', // Python Blue
    tailwindClassColor: 'python-blue',
  },
];

const TechnologyStack = () => {
  return (
    <section id="technologies" className="py-20 bg-light-bg dark:bg-dark-bg text-light-text dark:text-dark-text text-center">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          TECHNOLOGIES WE USE
        </motion.h2>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 lg:gap-32">
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 flex items-center justify-center mb-4 transition-all duration-300 ease-in-out filter grayscale group-hover:grayscale-0"
                   style={{ filter: `drop-shadow(0 0 15px ${tech.color})` }}>
                <img 
                  src={`/images/${tech.logo}`} 
                  alt={`${tech.name} Logo`} 
                  className="max-w-full max-h-full transition-all duration-300 ease-in-out"
                />
              </div>
              <p className={`text-lg font-medium text-light-text-secondary dark:text-dark-text-secondary transition-colors duration-300 ease-in-out group-hover:text-${tech.tailwindClassColor}`}>
                {tech.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack; 