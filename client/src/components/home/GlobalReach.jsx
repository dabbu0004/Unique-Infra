import React from "react";
import { HiLocationMarker } from "react-icons/hi";
import worldMapImg from "../../assets/worldMap.webp";
import AnimateAppear from "../animations/AnimateAppear";
const globalReachData = {
  leftColumn: [
    "India",
    "Ethiopia",
    "Kenya",
    "Uganda",
    "Rwanda",
    "Mozambique",
    "Zambia",
    "Senegal",
    "Ivory Coast",
  ],
  rightColumn: [
    "Congo",
    "Djibouti",
    "Mali",
    "Nigeria",
    "Sierra Leone",
    "Nepal",
    "Bhutan",
    "Vietnam",
    "Bangladesh",
  ],
};

const GlobalReach = () => {
  return (
    <section className="py-10">
      <div className="max-w-7xl mx-auto px-4 md:px-0 border-1 border-gray-100 rounded-3xl shadow-md ">
        <div className="relative bg-white p-6 md:p-10 mb-12">
          <AnimateAppear>
            <h2 className="text-3xl md:text-5xl text-center font-extrabold text-gray-700 mb-3">
              Our Global <span className="text-[#19587e]">Reach</span>
            </h2>
            <p className="text-base md:text-lg text-center text-gray-600 max-w-3xl mx-auto">
              Delivering quality electrical solutions across continents
            </p>
          </AnimateAppear>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <AnimateAppear className="w-full lg:w-1/5  flex flex-col gap-3">
              {globalReachData.leftColumn.map((country, idx) => (
                <div
                  key={idx}
                  className="flex items-center my-2 gap-3 bg-[#e8f5e9] hover:bg-[#c8e6c9] hover:scale-105 transition-all duration-300 p-3 rounded-lg"
                >
                  <HiLocationMarker className="text-[#2e7d32] text-xl flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-base md:text-lg">
                    {country}
                  </span>
                </div>
              ))}
            </AnimateAppear>
            <AnimateAppear>
              <div className="w-full lg:w-full flex items-center justify-center">
                <img
                 loading = "lazy" 
                  src={worldMapImg}
                  alt="World Map"
                  className="w-full h-auto object-contain hover:scale-105 transition-all duration-300"
                />
              </div>
            </AnimateAppear>
            <AnimateAppear className="w-full lg:w-1/5  flex flex-col gap-3">
              {globalReachData.rightColumn.map((country, idx) => (
                <div
                  key={idx}
                  className="flex items-center my-2 gap-3 bg-[#e3f2fd] hover:bg-[#bbdefb] hover:scale-105 transition-all duration-300 p-3 rounded-lg"
                >
                  <HiLocationMarker className="text-[#1565c0] text-xl flex-shrink-0" />
                  <span className="text-gray-800 font-medium text-base md:text-lg">
                    {country}
                  </span>
                </div>
              ))}
            </AnimateAppear>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
