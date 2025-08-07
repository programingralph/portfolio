import React from 'react';
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';


const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-400 to-gray-600 text-amber-200 py-6">
      <div className="container mx-auto flex justify-center space-x-8">
        <motion.a
          href="https://x.com/programingralph"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <FaTwitter size={28} />
        </motion.a>
        <motion.a
          href="https://github.com/programingralph"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <FaGithub size={28} />
        </motion.a>
        <motion.a
          href="https://www.linkedin.com/in/raphaelseverino/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.2, rotate: 5 }}
          transition={{ duration: 0.3 }}
        >
          <FaLinkedin size={28} />
        </motion.a>
      </div>
    </footer>
  );
};

export default Footer;