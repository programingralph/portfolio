import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  return (
    <header className="relative bg-gradient-to-r from-gray-400 to-gray-600 text-amber-200 py-10 shadow-xl overflow-hidden">
      {/* Ambient Teal Glow Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-teal-400 opacity-20 blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 container mx-auto text-center px-4">
        <motion.h1
          className="text-5xl font-orbitron font-bold tracking-wide drop-shadow-md text-amber-100"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Raphael Severino
        </motion.h1>

        <motion.p
          className="text-xl font-exo text-teal-100 mt-3 tracking-wide"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Developer &nbsp;|&nbsp; Problem Solver &nbsp;|&nbsp; Innovator
        </motion.p>
      </div>
    </header>
  );
};

export default Header;