import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = () => {
  return (
    <section className="relative py-16 bg-gray-700 overflow-hidden shadow-xl border border-teal-700/30">
      {/* Teal Glow Background Accent */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-teal-500 opacity-20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-teal-400 opacity-10 blur-2xl" />
      </div>

      <div className="relative z-10 container mx-auto flex flex-col md:flex-row items-center px-6">
        <motion.img
          src="profilepic.jpg"
          alt="Profile of John Doe"
          className="w-52 h-52 rounded-full border-4 border-teal-300 shadow-lg mb-6 md:mb-0 md:mr-10 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-center md:text-left"
        >
          <h2 className="text-4xl font-extrabold text-teal-300 mb-4 tracking-tight drop-shadow-md">
            About Me
          </h2>
          <p className="text-teal-400 leading-relaxed max-w-lg text-lg">
            I’m a passionate software developer with a knack for building scalable web applications using cutting-edge technologies like React, Node.js, and TailwindCSS. I thrive on solving complex problems and delivering seamless user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;