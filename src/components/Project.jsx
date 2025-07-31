'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { FaLink } from 'react-icons/fa';

const project = [
  {
    photo: "/Images/restaturant.jpeg",
    title: "PizzaBurg Restaurant",
    desc: "A modern food delivery website built with Next.js, featuring responsive design and smooth user navigation.",
    link: "https://pizzaburg-website.vercel.app/"
  },
  {
    photo: "/Images/image-slider.jpeg",
    title: "Image Slider",
    desc: "A responsive image slider built using HTML, CSS, and JavaScript with smooth navigation controls.",
    link: "https://image-slider-ten-lake.vercel.app/"
  },
  {
    photo: "/Images/weatherapp.jpeg",
    title: "Weather App",
    desc: "A weather app built with React that shows real-time weather info based on user search.",
    link: "https://weather-app-gamma-indol-22.vercel.app/"
  },
  {
    photo: "/Images/image-search.jpeg",
    title: "Image Search Engine",
    desc: "A simple image search web app built using HTML, CSS, and JavaScript to find photos by keyword.",
    link: "https://image-search-engine-blush.vercel.app/"
  }
];

const Project = () => {
  return (
    <section
      id="project"
      className="bg-[#1C1F35] text-white py-15 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40"
      style={{ minHeight: "100vh" }}
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          My <span className="text-blue-400">Projects</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {project.map((item, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative group rounded-2xl overflow-hidden shadow-lg"
          >
            <img
              src={item.photo}
              alt={`Project ${index + 1}`}
              className="w-full h-[220px] sm:h-[260px] object-cover group-hover:scale-110 transition-transform duration-500"
            />
            {/* <h1 className="p-2 text-center text-white text-md">{item.title}</h1> */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-all duration-500"></div>

            {/* Hover content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500 text-center px-4">
              <h3 className="text-lg sm:text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-sm sm:text-base font-medium mb-4 max-w-[90%] sm:max-w-[90%] md:max-w-[80%]">
                {item.desc}
              </p>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#1C1F35] px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-400 hover:text-white transition"
              >
                <FaLink />
                View Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Project;

