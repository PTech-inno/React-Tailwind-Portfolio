import React from "react";
import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import SkillsSection from "../components/SkillsSection";
import ProjectSection from "../components/ProjectSection";
import Contact from "../components/Contact";
import { ArrowUp } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* themetoggle */}
      <ThemeToggle />
      {/* background effects */}
      <StarBackground />

      {/* navbar */}
      <Navbar />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectSection />
        <Contact />
      </main>
      <footer>
        <p className="text-sm mb-2">
          &copy; {new Date().getFullYear()} PTech Innovations. All rights reserved.
        </p>
        <button> <a href="#hero"><ArrowUp/></a></button>
      </footer>
    </div>
  );
};

export default Home;
