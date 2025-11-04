import { ArrowBigDown } from "lucide-react";
import React, { useEffect, useState } from "react";

const HeroSection = () => {
  const [arrowDisplay, setArrowDisplay] = useState(true);

  useEffect(() => {
    const handleArrowDown = () => {
      setArrowDisplay(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleArrowDown);
  }, [arrowDisplay]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-40">
        <div className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            <span className="mr-1 opacity-0 animate-fade-in text-xl md:text-3xl ">
              Hello!{" "}
            </span>

            <span className="mr-1  opacity-0 animate-fade-in text-xl md:text-3xl ">
              Welcome to{" "}
            </span>
            <br />

            <span className="mr-1 mt-2 ">
              <span className="text-primary opacity-0 animate-fade-in-delay-1">
                PTech
              </span>{" "}
              <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1">
                Innovations
              </span>
            </span>
          </h1>
          <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            We create stellar web experiences with modern technologies.
            Specializing in full-stack web development, we build interfaces that
            are both beautiful and functional.
          </p>
          <div className="pt-4 opacity-0 animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View Our Projects
            </a>
          </div>
        </div>
      </div>

      {arrowDisplay ? (
        ""
      ) : (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
          <span className="text-sm text-muted-foreground ">Scroll</span>
          <ArrowBigDown className="h-5 w-5 text-primary" />
        </div>
      )}
    </section>
  );
};

export default HeroSection;
