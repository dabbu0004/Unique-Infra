import React from "react";
import { Link } from "react-router-dom";
import AnimateAppear from "../animations/AnimateAppear";

const AboutHero = () => {
  return (
    <section className="h-[40vh] lg:h-[60vh] pt-10 lg:pt-20 flex flex-col items-center justify-center m-auto relative bg-gradient-to-t from-[#e8f6ff] via-[#f5fff5] to-white ">
      <AnimateAppear
        animation="pulse"
        className="max-w-6xl m-auto px-4 md:px-6 text-center flex flex-col items-center justify-center"
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl hover:scale-110 transition-all duration-300 font-bold text-gray-700 mb-4">
          About <span className="text-[#19587e]">Us</span>
        </h1>
        <nav className="flex items-center justify-center space-x-2 text-sm md:text-base text-gray-600">
          <Link
            to="/"
            className="hover:text-blue-600 transition-colors duration-200"
          >
            Home
          </Link>
          <span>/</span>
          <span className="text-gray-400">About us</span>
        </nav>
      </AnimateAppear>
    </section>
  );
};

export default AboutHero;
