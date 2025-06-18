import React from 'react';
import { FiMail, FiPhone, FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi';

const Contact = () => {
  return (
    <section className="py-20 bg-dark-bg dark:bg-dark-bg text-white dark:text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-pink-400 text-transparent bg-clip-text">Get In Touch</h2>
          <p className="text-lg text-gray-300 mb-2">Let's discuss how we can help your business grow</p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-pink-400 mx-auto mb-2"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="text-3xl font-bold mb-4">Contact Information</h3>
            <p className="mb-8 text-gray-300">Reach out to us through any of the following channels or fill out the form, and we'll get back to you as soon as possible.</p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <span className="bg-blue-700 p-3 rounded-full"><FiMail size={24} /></span>
                <div>
                  <div className="font-bold">Email Us</div>
                  <a href="mailto:mohammadalaydi6@gmail.com" className="text-gray-200 hover:underline hover:text-primary-500">mohammadalaydi6@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className="bg-blue-700 p-3 rounded-full"><FiPhone size={24} /></span>
                <div>
                  <div className="font-bold">Call Us</div>
                  <a href="tel:+201096938701" className="text-gray-200 hover:underline hover:text-primary-500">+201096938701</a>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="font-bold mb-2">Follow Us</div>
              <div className="flex space-x-4">
                <button type="button" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors hover:text-primary-500"><FiLinkedin size={20} /></button>
                <button type="button" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors hover:text-primary-500"><FiTwitter size={20} /></button>
                <button type="button" className="bg-gray-800 hover:bg-blue-700 p-2 rounded-full transition-colors hover:text-primary-500"><FiGithub size={20} /></button>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-dark-card rounded-xl p-8 shadow-lg">
            <h3 className="text-3xl font-bold mb-6">Send Us a Message</h3>
            <form className="space-y-6">
              <div>
                <label className="block font-semibold mb-2">Your Name *</label>
                <input type="text" placeholder="Your Name" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Your Email *</label>
                <input type="email" placeholder="Your Email" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Subject</label>
                <input type="text" placeholder="Subject" className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" />
              </div>
              <div>
                <label className="block font-semibold mb-2">Message *</label>
                <textarea placeholder="Your message..." className="w-full px-4 py-3 rounded-lg bg-gray-900 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500" rows={5}></textarea>
              </div>
              <button type="submit" className="w-full py-3 bg-gradient-to-r from-blue-600 to-pink-500 text-white font-bold rounded-lg hover:from-blue-700 hover:to-pink-600 transition-colors">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 