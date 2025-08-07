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
    description: "A React-powered platform where book lovers can rate, review, and rediscover stories — all in a responsive, reader-friendly interface.",
    image: "bookreviewdemo.png",
    url: "https://reviewyourbooks.netlify.app/",
  },
  {
    name: "Task Brisker",
    description: "A no-nonsense task manager built with React — where retro aesthetics meet ruthless productivity.",
    image: "taskbrisker.png",
    url: "https://taskbrisker.netlify.app/",
  },
  {
    name: "Game Price Finder",
    description: "A deal-finding engine for gamers, built with React and fueled by live API data — because full price is for NPCs.",
    image: "pricefinderapp.png",
    url: "https://cheapestgameprice.netlify.app/",
  },
];

const ProjectSlider = () => {
  return (
    <section className="relative py-16 bg-gray-900 overflow-hidden">
      {/* Optional texture layer */}
      <div className="absolute inset-0 bg-[url('/texture.svg')] opacity-20 pointer-events-none z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.h2
          className="text-4xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-emerald-400 to-cyan-500 drop-shadow-lg mb-12"
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
          centeredSlides={true}
          initialSlide={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 2, centeredSlides: true },
            768: { slidesPerView: 3, centeredSlides: true },
            1024: { slidesPerView: 3, centeredSlides: true },
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index} className="flex justify-center items-center">
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="block">
                <motion.div
                  className="relative bg-white/10 backdrop-blur-md border border-white/20 shadow-xl rounded-xl overflow-hidden cursor-pointer w-full max-w-sm mx-auto transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 0 25px rgba(0,255,255,0.3)",
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Image with gradient overlay */}
                  <div className="relative">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-cover rounded-t-xl"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  </div>

                  {/* Text content */}
                  <div className="p-5">
                    <h3 className="text-xl font-semibold text-amber-100 drop-shadow-sm">
                      {project.name}
                    </h3>
                    <p className="text-amber-200 mt-2 text-sm leading-relaxed">
                      {project.description}
                    </p>
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