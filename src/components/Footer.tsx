// File: src/components/Footer.tsx
import React from 'react';
import { FiGithub, FiTwitter, FiLinkedin } from 'react-icons/fi';
import Logo from './Logo.tsx';

const Footer = () => {
  return (
    <footer className="bg-light-card dark:bg-dark-card text-light-text dark:text-dark-text pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Logo size={40} />
            </div>
            <p className="text-light-text-secondary dark:text-dark-text-secondary max-w-md">
              The complete platform for engineering teams to build, ship, and maintain better software faster.
            </p>
            <div className="flex space-x-4 mt-8">
              <button type="button" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiTwitter size={24} />
              </button>
              <button type="button" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiGithub size={24} />
              </button>
              <button type="button" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
                <FiLinkedin size={24} />
              </button>
            </div>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Product</h4>
            <ul className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Features</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Integrations</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Pricing</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Roadmap</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Changelog</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Resources</h4>
            <ul className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Documentation</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Guides</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Blog</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">API Status</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Help Center</button></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-6">Company</h4>
            <ul className="space-y-4 text-light-text-secondary dark:text-dark-text-secondary">
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">About</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Careers</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Contact</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Partners</button></li>
              <li><button type="button" className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Legal</button></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-light-text-secondary dark:text-dark-text-secondary">© {new Date().getFullYear()} Grow Software, Inc. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <button type="button" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Terms</button>
            <button type="button" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Privacy</button>
            <button type="button" className="text-light-text-secondary dark:text-dark-text-secondary hover:text-primary-600 dark:hover:text-primary-400 transition-colors">Cookies</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;