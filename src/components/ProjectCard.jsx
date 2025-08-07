import React from 'react';
import { motion } from 'framer-motion';

const ProjectCard = () => {
  return (
    <section className="py-12 bg-gray-700 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-4">
        <motion.img
          src="profilepic.jpg"
          alt="Profile of John Doe"
          className="w-52 h-52 rounded-full border-4 border-teal-300 mb-6 md:mb-0 md:mr-10 object-cover"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-teal-300 mb-4">About Me</h2>
          <p className="text-teal-500 leading-relaxed max-w-lg">
            I’m a passionate software developer with a knack for building scalable web applications using cutting-edge technologies like React, Node.js, and TailwindCSS. I thrive on solving complex problems and delivering seamless user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectCard;