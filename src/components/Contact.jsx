'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    qualification: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, mobile, qualification, message } = formData;
    if (!name || !email || !mobile || !qualification || !message) {
      alert('Please fill all the fields!');
      return;
    }

    alert('Your form has been submitted ✅');
    
    setFormData({
      name: '',
      email: '',
      mobile: '',
      qualification: '',
      message: '',
    });
  };

  return (
    <section
      id="contact"
      className="bg-[#1C1F35] h-[100vh] text-white py-16 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 2xl:px-40"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 sm:mb-12">
          Contact <span className="text-blue-400">Me</span>
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter Your Name"
            className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter Your Mail Id"
            className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            placeholder="Enter Your Mobile Number"
            className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Enter Your Highest Qualification"
            className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Your Message Here..."
            rows={5}
            className="bg-[#0F172A] text-white p-4 sm:p-5 rounded-lg focus:outline-none focus:ring focus:ring-blue-400 sm:col-span-2"
            required
          ></textarea>

          <div className=" sm:col-span-2 text-center mt-4">
            <button
              type="submit"
              className="bg-blue-400 text-[#0F172A] py-2 px-10 rounded-full shadow-[0_0_12px_3px_rgba(255,255,255,0.30)] hover:text-white hover:bg-[#0F172A] hover:border-2 hover:border-white transition-all duration-300"
            >
              Submit
            </button>
          </div>
         
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
