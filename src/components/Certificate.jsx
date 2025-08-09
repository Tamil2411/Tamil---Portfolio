import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const certificate = [
  { pic: "/icons/certificate1.png" },
  { pic: "/icons/certificate2.png" },
  { pic: "/icons/certificate3.png"}
];

const Certificate = () => {
  return (
    <section id="certificate" className="bg-[#0F172A] min-h-screen text-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          My <span className="text-blue-400">Certificates</span>
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificate.map((item, index) => (
            <motion.div
              key={index}
              className="transition-transform mt-10 duration-300 hover:scale-105 flex justify-center items-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-[400px]">
                <Image
                  src={item.pic}
                  alt={`certificate-${index}`}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificate;
