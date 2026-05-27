import React from "react";
import { FaCogs, FaEye, FaBullseye, FaHeadset } from "react-icons/fa";
import AnimateAppear from "../animations/AnimateAppear";

const WhyChooseUs = () => {
  const whyChooseUsData = {
    subtitle:
      "We deliver consistent, efficient, and sustainable solutions that power growth in manufacturing and construction.",
    features: [
      {
        icon: <FaCogs className="w-6 h-6" />,
        title: "Proficiency",
        description:
          "Our team of skilled professionals delivers top-quality solutions as the best industrial electrical supplier for infrastructure projects. We ensure every project succeeds.",
        keywords: [
          "best industrial electrical supplier for infrastructure projects",
        ],
      },
      {
        icon: <FaEye className="w-6 h-6" />,
        title: "Clarity",
        description:
          "Our clear and timely updates keep clients informed at every stage. It also helps in ensuring seamless and productive collaboration.",
      },
      {
        icon: <FaBullseye className="w-6 h-6" />,
        title: "Precision",
        description:
          "We prioritize industrial power solutions for manufacturing and construction with meticulous planning and accurate execution.",
        keywords: [
          "industrial power solutions for manufacturing and construction",
        ],
      },
      {
        icon: <FaHeadset className="w-6 h-6" />,
        title: "Support",
        description:
          "We provide reliable assistance for infrastructure development materials and commercial electrical solutions, ensuring smooth operations and complete client satisfaction.",
        keywords: [
          "infrastructure development materials",
          "commercial electrical solutions",
        ],
      },
    ],
  };

  return (
    <section className="py-10 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 bg-white p-8 rounded-lg">
        <AnimateAppear
          animation="fadeInUp"
          once
          delay={0.5}
          className="text-center mb-16 max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-5xl font-extrabold text-gray-700 mb-3">
            Why Choose UISPPL as Your{" "}
            <span className="text-[#19587e]">Industrial Solutions Partner</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            {whyChooseUsData.subtitle}
          </p>
        </AnimateAppear>

        <div className="flex flex-wrap gap-8 justify-center">
          {whyChooseUsData.features.map((feature, index) => (
            <AnimateAppear
              animation="pulse"
              key={index}
              delay={index * 0.15}
              className={`w-full md:w-[calc(50%-1rem)] ${
                index % 3 === 0 ? "bg-[#cde9fa]" : "bg-[#dffce5]"
              } hover:-translate-y-5 group transition-all duration-300 p-8 rounded-2xl relative pt-12`}
            >
              <div className="absolute -top-7 left-8">
                <div className="w-14 h-14 bg-white group-hover:scale-110 group-hover:bg-[#004068] group-hover:text-white transition-all duration-300 rounded-full flex items-center justify-center border-2 border-gray-200 text-[#004068]">
                  {feature.icon}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description
                    .split(feature.keywords?.[0] || "")
                    .map((part, i) => (
                      <span key={i}>
                        {part}
                        {i <
                          feature.description.split(feature.keywords?.[0] || "")
                            .length -
                            1 &&
                          feature.keywords?.[0] && (
                            <span className="font-semibold text-gray-800">
                              {feature.keywords[0]}
                            </span>
                          )}
                      </span>
                    ))}
                </p>
              </div>
            </AnimateAppear>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
