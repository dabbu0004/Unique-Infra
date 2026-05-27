import React from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import founder from "../../assets/team/founder.webp";
import AnimateAppear from "../animations/AnimateAppear";

const MeetTheFounder = () => {
  const founderData = {
    name: "Bhupendra Singh",
    title: "Chairman & Managing Director",
    company: "Unique Infra & Sustainable Power Pvt. Ltd.",
    image: founder,
    message: {
      content:
        "Every business grows only when the people inside it grow. I am proud of my team of 35+ who show up every day with dedication, ownership, and a hunger to improve. At UNIQUE Infra, we don’t just supply material — we deliver commitment. And that commitment starts with the people standing beside me. Teamwork builds turnover. Culture builds legacy.",
      signature: "Warm Regards,",
      name: "Bhupendra Singh",
    },
  };

  return (
    <section className="py-6 bg-gray-50">
      <AnimateAppear>
        <div className="bg-[#cde9fa] max-w-7xl mx-auto px-4 md:px-10 hover:scale-102 transition-all group duration-300 md:rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row h-auto lg:h-[450px]">
            <div className="w-full lg:w-1/2 h-64 md:h-80 lg:h-full p-4 md:p-8 md:pb-0 flex items-center justify-center">
              <img
               loading = "lazy"
                src={founderData.image}
                alt={founderData.name}
                className="w-full h-full object-contain rounded group-hover:translate-y-2 group-hover:scale-110 transition-all duration-300"
              />
            </div>
            <div className="w-full lg:w-[75%] h-auto lg:h-full mr-5 p-4 md:p-8 flex flex-col justify-center relative">
              <h2 className="text-2xl md:text-4xl lg:text-5xl px-2 text-gray-800 font-bold text-left lg:ml-8 py-6">
                Message from <span className="text-[#19587e]">C.M.D.</span>
              </h2>
              <div className="space-y-4 md:space-y-6">
                <div className="relative">
                  <div className="flex flex-col md:flex-row">
                    <span className="text-2xl md:text-2xl hidden md:block text-gray-700 mb-2 lg:mb-0 lg:mr-4 lg:mt-1 self-start">
                      <FaQuoteLeft />
                    </span>
                    <div className="flex-1 relative">
                      <p className="text-gray-600 text-sm md:text-base font-normal leading-relaxed text-justify">
                        {founderData.message.content}
                        <span className="absolute lg:right-22 hidden md:block bottom-0 text-xl md:text-2xl text-gray-700 md:ml-2">
                          <FaQuoteRight />
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="pt-4 md:pt-6 pl-0 md:pl-12 clear-both">
                  <p className="text-[#19587e] font-bold text-xl md:text-2xl mb-1">
                    {founderData.message.name}
                  </p>
                  <p className="text-gray-500 font-medium text-sm md:text-base">
                    {founderData.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimateAppear>
    </section>
  );
};

export default MeetTheFounder;
