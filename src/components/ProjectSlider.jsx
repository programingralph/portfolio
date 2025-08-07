import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { motion } from 'framer-motion';

const projects = [
  {
    name: "Book review",
    description: "A responsive web app built with React that allows book reviews",
    image: "bookreviewdemo.png",
    url: "https://reviewyourbooks.netlify.app/",
  },
  {
    name: "Task Brisker",
    description: "A task manager app built with React",
    image: "taskbrisker.png",
    url: "https://taskbrisker.netlify.app/",
  },
  {
    name: "Game Price Finder",
    description: "A video game price finder app using API made with React",
    image: "pricefinderapp.png",
    url: "https://cheapestgameprice.netlify.app/",
  },
];

const ProjectSlider = () => {
  return (
    <section className="py-12 bg-gray-700">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl font-bold text-center text-teal-300 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          My Projects
        </motion.h2>
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          centeredSlides={true} // Center the slides
          initialSlide={1} // Start on the second slide (zero-based index)
          navigation
          pagination={{ clickable: true }}
          // autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: true },
            768: { slidesPerView: 3, centeredSlides: true },
            1024: { slidesPerView: 3, centeredSlides: true }, // Limit to 3 slides max to match project count
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center">
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <motion.div
                  className="bg-gradient-to-r from-gray-400 to-gray-600 shadow-lg rounded-lg overflow-hidden cursor-pointer max-w-xs w-full"
                  whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-amber-100">
                      {project.name}
                    </h3>
                    <p className="text-amber-200 mt-2">{project.description}</p>
                  </div>
                </motion.div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectSlider;