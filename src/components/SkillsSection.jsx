"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML", icon: "/icons/html.png" },
  { name: "CSS", icon: "/icons/css.png" },
  { name: "JavaScript", icon: "/icons/javascript.png" },
  { name: "React", icon: "/icons/react.png" },
  { name: "Bootstrap", icon: "/icons/bootstrap.png" },
  { name: "Next.js", icon: "/icons/nextjs1.png" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.png" },
  { name: "MySQL", icon: "/icons/mysql.png" },
  { name: "MongoDB", icon: "/icons/mongodb.png" },
  { name: "Java", icon: "/icons/java.png" },
  { name: "Spring boot(basics)", icon: "/icons/springboot.png" },
  { name: "Node.js(basics)", icon: "/icons/nodejs.png" },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="bg-[#0F172A] text-white py-16 mt-3 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10">
          Technical <span className="text-blue-400">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: "easeOut",
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              className="bg-[#0F172A] rounded-lg p-6 flex flex-col items-center justify-center shadow-[0_0_12px_3px_rgba(255,255,255,0.30)] hover:shadow-[0_0_18px_4px_rgba(58,190,249,0.4)] hover:bg-blue-400 transition duration-300"
            >
              <div className="w-20 h-15 relative mb-4">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <p className="mt-2 text-lg font-medium">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
