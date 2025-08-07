import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 to-gray-900 text-amber-200 py-6 border-t border-gray-500">
      <div className="container mx-auto px-4 flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-8">
        <motion.a
          href="https://x.com/programingralph"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="hover:text-white transition-colors"
        >
          <FaTwitter size={28} />
        </motion.a>
        <motion.a
          href="https://github.com/programingralph"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="hover:text-white transition-colors"
        >
          <FaGithub size={28} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/raphaelseverino/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
          className="hover:text-white transition-colors"
        >
          <FaLinkedin size={28} />
        </motion.a>
      </div>
      <div className="mt-4 text-sm text-center text-amber-300">
        © {new Date().getFullYear()} Raphael Severino. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;