// File: src/components/Services.tsx
import React from 'react';
import { FiCode, FiMonitor, FiSmartphone, FiDatabase, FiAward, FiSend } from 'react-icons/fi';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      icon: <FiCode size={32} />,
      title: "Custom Software Development",
      description: "Tailored solutions designed to meet your specific business requirements and challenges."
    },
    {
      icon: <FiMonitor size={32} />,
      title: "Web Application Development",
      description: "Modern, responsive web applications built with cutting-edge technologies."
    },
    {
      icon: <FiSmartphone size={32} />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <FiDatabase size={32} />,
      title: "Database Solutions",
      description: "Efficient database design, optimization, and management for your data needs."
    },
    {
      icon: <FiAward size={24} />,
      title: "IT Consulting",
      description: "Expert advice on technology selection, architecture, and implementation strategies."
    },
    {
      icon: <FiSend size={24} />,
      title: "Digital Transformation",
      description: "Guiding your business through digital adoption and process optimization."
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-light-bg to-light-card dark:from-dark-bg dark:to-dark-card text-light-text dark:text-dark-text">
      <div className="container mx-auto px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-light-text-secondary dark:text-dark-text-secondary mb-6">
            Comprehensive software solutions to power your business growth
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 via-pink-500 to-red-500 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -10,
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white dark:bg-dark-card rounded-xl p-8 lg:p-10 relative overflow-hidden group border border-gray-100 dark:border-gray-700 h-full"
            >
              {/* Hidden top bar that appears on hover */}
              <div className="absolute top-0 left-0 w-full h-0 group-hover:h-2 transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 left-0 w-[200%] h-full bg-gradient-to-r from-primary-500 via-pink-500 to-red-500 animate-shine"></div>
              </div>
              
              {/* Icon Circle */}
              <div className="flex justify-center mb-8">
                <div className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-br from-primary-500 to-primary-700 text-white shadow-lg">
                  {service.icon}
                </div>
              </div>
              
              <h3 className="text-2xl font-bold mb-4 text-center text-light-text dark:text-dark-text">{service.title}</h3>
              <p className="text-lg text-light-text-secondary dark:text-dark-text-secondary leading-relaxed text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;