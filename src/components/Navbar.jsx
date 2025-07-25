"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  const navLinks = [
    { title: "Home", path: "#home" },
    { title: "About", path: "#about" },
    { title: "Skills", path: "#skills" },
    {title:"Project", path: "#project"},
    { title: "Certificate", path: "#certificate" },
    { title: "Contact", path: "#contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-50 bg-[#0F172A] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold tracking-wide">Portfolio</h1>
          </div>

          
          <div className="hidden md:flex space-x-8 text-lg font-medium">
            {navLinks.map((link) => (
              <a
                key={link.path}
                href={link.path}
                className="hover:text-blue-400 transition-colors duration-300"
              >
                {link.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Items */}
      {isOpen && (
        <div className="md:hidden bg-[#0F172A] px-4 pb-4 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              className="block text-white text-base hover:text-violet-400"
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
