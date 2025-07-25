"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-[#1C1F35]  text-white min-h-screen flex items-center justify-center px-4 py-16"
    >
      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="max-w-6xl w-full text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8">
          About <span className="text-blue-400">Me</span>
        </h2>
        <div className="text-base sm:text-lg md:text-xl leading-relaxed mx-auto max-w-4xl text-justify px-2 sm:px-4">
          <p>
            I’m an Electronics and Communication Engineering graduate with a passion for web development. 
            As a Full Stack Developer, I build responsive and user-friendly web apps using HTML, CSS, JavaScript, React, Next.js, Tailwind CSS, and Bootstrap. 
            On the backend, I work with Java and have basic knowledge of Spring Boot and Node.js, along with experience in MongoDB and MySQL databases. 
            I completed a Master’s in Full Stack Java Development and a 3-month internship at Meithee Tech Pvt Ltd, where I contributed to two live projects in an Agile environment. 
            I enjoy solving real-world problems with clean code and am eager to keep learning and growing as a developer.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default AboutSection;
