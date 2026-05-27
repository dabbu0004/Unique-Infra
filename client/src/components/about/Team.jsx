import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import TeamData from "../../data/TeamData";
import AnimateAppear from "../animations/AnimateAppear";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const cardsRef = useRef([]);
  const bgColors = ["bg-[#eaf4fb]", "bg-[#ebfbee]"];

  return (
    <section className="py-16 md:py-36 md:pt-36 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <AnimateAppear
          once
          delay={0.2}
          className="text-center mb-16 mx-auto"
        >
          <h2 className="text-2xl md:text-5xl pt-8 font-extrabold leading-tight text-gray-700 mb-3">
            We are the people who make up <br />
            <span className="text-[#19587e]">
              Unique Infra & Sustainable Power Private Limited
            </span>
          </h2>
          <p className="text-gray-800 text-base mx-auto leading-relaxed">
            We hire great people and give them the resources and support to do
            their best work.
          </p>
        </AnimateAppear>
        <div className="flex flex-wrap justify-center gap-6">
          {TeamData.map((member, index) => (
            <div
             key={index}
              delay={0.4 + index * 0.1}
              y={50}
              className={`group shadow-md hover:shadow-lg hover:scale-105 rounded-3xl overflow-hidden transition-all duration-300 hover:translate-y-4 p-5 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] ${
                bgColors[index % 2]
              }`}
            >
              <div className="relative w-full h-92 overflow-hidden rounded-2xl mb-5 bg-white">
                <img
                loading="lazy" 
                  src={member.image}
                  alt={member.name}
                  className={`w-full h-full object-${member.objectFit} group-hover:translate-y-3 group-hover:scale-105 transition-transform duration-500`}
                />
              </div>

              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-black mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-400 font-medium">
                    {member.title}
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 hover:scale-110"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600 text-white hover:bg-red-700 transition-all duration-300 hover:scale-110"
                    aria-label={`Email ${member.name}`}
                  >
                    <MdEmail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
