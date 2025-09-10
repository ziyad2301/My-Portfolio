// src/components/Footer.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/ziyad2301' },
    { icon: <FaLinkedinIn />, href: 'https://www.linkedin.com/in/mohd-ziyad/' }
  ];

  return (
    <footer className="bg-dark-slate py-8 border-t border-gray-800">
      <div className="container mx-auto px-10 flex flex-col sm:flex-row justify-between items-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-gray-400 text-sm"
        >
          &copy; {new Date().getFullYear()} Mohammed Ziyad. All rights reserved.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center gap-6 mt-4 sm:mt-0"
        >
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary text-2xl transition-colors duration-300"
              whileHover={{ scale: 1.2, y: -2 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
