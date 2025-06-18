// File: src/components/Features.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiUsers, FiBarChart2, FiGitBranch, FiShield, FiDatabase } from 'react-icons/fi';

const Features = () => {
  const features = [
    {
      icon: <FiCode size={32} />,
      title: "Code Review Automation",
      description: "Automate your code review process with AI-powered suggestions and quality checks."
    },
    {
      icon: <FiUsers size={32} />,
      title: "Team Collaboration",
      description: "Collaborate seamlessly with your team through integrated project management tools."
    },
    {
      icon: <FiBarChart2 size={32} />,
      title: "Performance Analytics",
      description: "Track your team's performance with detailed metrics and actionable insights."
    },
    {
      icon: <FiGitBranch size={32} />,
      title: "Git Integration",
      description: "Full integration with GitHub, GitLab, and Bitbucket for seamless workflow."
    },
    {
      icon: <FiShield size={32} />,
      title: "Security Checks",
      description: "Automated security vulnerability scanning for every code commit."
    },
    {
      icon: <FiDatabase size={32} />,
      title: "CI/CD Pipeline",
      description: "Built-in continuous integration and deployment pipelines with customizable workflows."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Powerful Features for Engineering Teams</h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to build, ship, and maintain exceptional software
          </p>
        </motion.div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-dark-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-700"
            >
              <div className="text-primary-600 dark:text-primary-400 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;