"use client";
import AboutSection from "@/components/AboutSection";
import Certificate from "@/components/Certificate";
import ContactUs from "@/components/ContactUs";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Project from "@/components/Project";
import SkillsSection from "@/components/SkillsSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const links = document.querySelectorAll("a[href^='#']");
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      });
    });
  }, []);

  return (
    <main className="flex min-h-screen flex-col bg-[#0F172A] scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <Project />
      <Certificate />
      <ContactUs />
    </main>
  );
}
