import React from "react";
import {
  FaSearch,
  FaClipboardList,
  FaPalette,
  FaCogs,
  FaVial,
  FaRocket,
} from "react-icons/fa";
import img1 from "../../assets/office.webp";
import AnimateAppear from "../animations/AnimateAppear";
const OurProcess = () => {
  const processData = {
    description:
      "From concept to completion, UISPPL delivers top-notch Industrial Automation Solutions and Power Distribution Products for every project.",
    buttonText: "A glimpse of our recent work",
    image: img1,
    steps: [
      {
        icon: <FaSearch className="w-6 h-6 text-blue-500" />,
        title: "1. Requirement Assessment",
        description:
          "Our work starts with analysing your project requirements and identifying the specific infrastructure development materials and tools that will be necessary to maintain the operations.",
      },
      {
        icon: <FaClipboardList className="w-6 h-6 text-blue-500" />,
        title: "2. Product Sourcing",
        description:
          "We use our well-established supplier network to source high-quality equipment, components, and industrial automation solutions that are in line with the technical requirements.",
      },
      {
        icon: <FaPalette className="w-6 h-6 text-orange-500" />,
        title: "3. Solution Recommendation",
        description:
          "As a trusted industrial tools supplier in India, we direct our clients to the most reliable products, resulting in increased project efficiency and sustainability.",
      },
      {
        icon: <FaCogs className="w-6 h-6 text-blue-500" />,
        title: "4. Order Coordination & Fulfilment",
        description:
          "Our team manages procurement timelines, stock availability, and dispatch time to guarantee that all orders are delivered with precision, safety, and without delay.",
      },
      {
        icon: <FaVial className="w-6 h-6 text-gray-500" />,
        title: "5. Quality Assurance",
        description:
          "The quality of material shipped is strictly reviewed in advance to ensure you receive products that meet industry standards and operational requirements.",
      },
      {
        icon: <FaRocket className="w-6 h-6 text-red-500" />,
        title: "6. Post-Supply Support",
        description:
          "We also offer installation support, product documentation and ongoing assistance to ensure that you seamlessly incorporate the supplied materials and industrial automation solutions into your infrastructure.",
      },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-br from-[#cdeaff] via-[#f5fff5] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          <AnimateAppear className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-5xl font-extrabold text-gray-800 mb-3">
              Our Streamlined Process for Delivering Industrial Excellence
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8 text-lg">
              {processData.description}
            </p>
            <div className="relative group overflow-hidden rounded-3xl">
              <img
              loading="lazy" 
                src={processData.image}
                alt="Team working process"
                className="w-full h-110 object-cover transition-all duration-300 hover:scale-105"
              />
            </div>
          </AnimateAppear>
          <AnimateAppear className="w-full lg:w-1/2" delay={0.2} >
            <div className="space-y-1">
              {processData.steps.map((step, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-4 group transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:bg-[#eaf6ff] rounded-xl p-3"
                >
                  <div className="flex-shrink-0 mt-1">
                    <span className="inline-flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:text-[#19587e]">
                      {step.icon}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 transition-all duration-300 group-hover:text-[#19587e]">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-normal transition-all duration-300 group-hover:text-[#19587e]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </AnimateAppear>
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
