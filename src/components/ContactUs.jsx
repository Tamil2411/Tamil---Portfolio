import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^A-Za-z ]/g, ""); // only alphabets + space
    e.target.value = value;
  };

  const handleNumberChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, ""); // only numbers
    e.target.value = value;
  };

  const handleEmailChange = (e) => {
    let value = e.target.value.toLowerCase(); // force lowercase
    setEmail(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailPattern = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email (must contain @ and . in correct format, lowercase only).");
      return;
    }
    alert("Form submitted successfully ✅");
  };

  return (
    <section
      id="contactus"
     className="scroll-mt-5 bg-[#1C1F35] min-h-[100vh] text-white py-12 px-4 sm:px-8 md:px-12 lg:px-20"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-10 sm:mb-12">
          Get in <span className="text-blue-400">Touch</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 items-start">
          {/* Left Form */}
          <form 
            onSubmit={handleSubmit} 
            className="bg-[#0F172A] p-6 sm:p-8 rounded-2xl shadow-lg text-center"
          >
            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Name"
                onInput={handleNameChange}
                required
                className="w-full px-4 py-2 rounded-md bg-[#1C1F35] text-white text-sm sm:text-base border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                placeholder="Your Number"
                onInput={handleNumberChange}
                required
                className="w-full px-4 py-2 rounded-md bg-[#1C1F35] text-white text-sm sm:text-base border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={handleEmailChange}
                required
                className="w-full px-4 py-2 rounded-md bg-[#1C1F35] text-white text-sm sm:text-base border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <textarea
                placeholder="Your Message"
                required
                rows="4"
                className="w-full px-4 py-2 rounded-md bg-[#1C1F35] text-white text-sm sm:text-base border border-gray-600 focus:outline-none focus:ring-1 focus:ring-blue-400"
              ></textarea>
            </div>

            <button
              type="submit"
                 className="items-center font-semibold px-6 py-3 text-[#0F172A] bg-blue-400 rounded-full border border-transparent shadow-[0_4px_20px] shadow-[#3ABEF9]/40 hover:bg-transparent hover:text-white hover:border-[#3ABEF9] transition duration-300"
            >
              Send Message
            </button>
          </form>

          {/* Right Info */}
          <div className="flex flex-col justify-center space-y-6 text-sm sm:text-base">
            <p className="leading-relaxed max-w-2xl mx-auto">
              I am always open to new opportunities and interesting projects.
              I also enjoy meeting new people and sharing ideas.
              If you would like to work together, discuss something creative, or just say hello,
              I would be happy to hear from you. You can reach me by email or connect with me on
              <b> LinkedIn </b> and <b>GitHub</b>. Let’s stay in touch and create something good together.
            </p>

            <div className="flex items-center gap-3">
              <FaMapMarkerAlt className="text-blue-400 text-lg sm:text-xl" />
              <span>Tenkasi, Tamil Nadu</span>
            </div>

            <div className="flex items-center gap-3">
              <FaPhone className="text-blue-400 text-lg sm:text-xl" />
              <span>+91 8072482601</span>
            </div>

            <div className="flex items-center gap-3">
              <FaEnvelope className="text-blue-400 text-lg sm:text-xl" />
              <span>2004tamilselvan@gmail.com</span>
            </div>

            <div className="flex gap-4 mt-2">
              <a
                href="https://www.linkedin.com/in/tamil-selvan-t-34a779294/"
                className="text-lg sm:text-xl border border-blue-400 bg-[#0F172A] p-3 sm:p-4 rounded-full text-blue-400 hover:bg-blue-400 hover:text-[#0F172A] hover:shadow-[0_6px_25px] hover:shadow-[#3ABEF9]/60 transition duration-300"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://github.com/Tamil2411"
                className="text-lg sm:text-xl border border-blue-400 bg-[#0F172A] p-3 sm:p-4 rounded-full text-blue-400 hover:bg-blue-400 hover:text-[#0F172A] hover:shadow-[0_6px_25px] hover:shadow-[#3ABEF9]/60 transition duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="mailto:2004tamilselvan@gmail.com"
                className="text-lg sm:text-xl border border-blue-400 bg-[#0F172A] p-3 sm:p-4 rounded-full text-blue-400 hover:bg-blue-400 hover:text-[#0F172A] hover:shadow-[0_6px_25px] hover:shadow-[#3ABEF9]/60 transition duration-300"
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
