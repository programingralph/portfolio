import React from 'react';
import {motion}  from 'framer-motion';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-gray-400 to-gray-600 text-amber-200 py-6 shadow-lg">
      <div className="container mx-auto text-center">
        <motion.h1
          className="text-5xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Raphael Severino
        </motion.h1>
        <motion.p
          className="text-xl mt-2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Software Developer | Problem Solver | Innovator
        </motion.p>
      </div>
    </header>
  );
};

export default Header;