'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaLinkedin, FaGithub, FaEnvelope, FaDownload } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="home" className="flex items-center justify-center h-[100vh] bg-[#0F172A] text-white px-4 sm:px-6 md:px-10 pt-24 pb-12">
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 max-w-6xl w-full mx-auto">
        
        <motion.div
          className="text-center md:text-left"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-lg sm:text-xl mb-2 font-medium">Hello, I am</h2>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-2">Tamil Selvan T</h1>
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4">
            I'm a <span className="text-blue-400">Full Stack Developer</span>
          </h3>
          <p className="text-sm sm:text-base lg:text-lg mb-6">
            Turning innovative ideas into seamless web experiences by connecting Front-End and Back-End technologies.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start gap-5 mb-6">
            <a
              href="https://www.linkedin.com/in/tamil-selvan-t-34a779294/"
              className="text-xl border border-blue-400 p-4 bg-[#0F172A] rounded-full text-blue-400 hover:bg-blue-400 hover:text-[#0F172A] hover:shadow-[0_6px_25px] hover:shadow-[#3ABEF9]/60 transition duration-300"
              aria-label="LinkedIn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/Tamil2411"
              className="text-xl border border-blue-400 bg-[#0F172A] p-4 rounded-full text-blue-400 hover:bg-blue-400 hover:text-[#0F172A] hover:shadow-[0_6px_25px] hover:shadow-[#3ABEF9]/60 transition duration-300"
              aria-label="GitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>

            <a
              href="mailto:2004tamilselvan@gmail.com"
              className="text-xl border border-blue-400 bg-[#0F172A] p-4 rounded-full text-blue-400 hover:bg-blue-400 hover:text-[#0F172A] hover:shadow-[0_6px_25px] hover:shadow-[#3ABEF9]/60 transition duration-300"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
          </div>

          {/* Resume Download Button */}
          <div className="flex justify-center md:justify-start">
            <a
              href="/Images/Tamil resume.pdf"
              download
              className="inline-flex items-center px-6 py-3 text-[#0F172A] bg-blue-400 rounded-full border border-transparent shadow-[0_4px_20px] shadow-[#3ABEF9]/40 hover:bg-transparent hover:text-white hover:border-[#3ABEF9] transition duration-300"
            >
              <FaDownload className="mr-2" /> Download Resume
            </a>
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: 'spring', stiffness: 100, damping: 10, duration: 1.2 }}
        >
          <div className="rounded-full border-4 border-white w-[220px] h-[220px] sm:w-[250px] sm:h-[250px] lg:w-[350px] lg:h-[350px] overflow-hidden relative shadow-lg">
            <Image
              src="/Images/img5.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-full"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
