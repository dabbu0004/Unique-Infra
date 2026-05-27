import React from "react";
import { FaLeaf, FaLightbulb, FaUsers, FaBuilding } from "react-icons/fa";
import AnimateAppear from "../animations/AnimateAppear";

const Mission = () => {
  const missionData = {
    title: "Our Mission",
    description: (
      <>
        We are moving forward with a mission to empower industries with
        future-ready solutions, improving efficiency and driving long-term
        growth. As the{" "}
        <span className="font-bold underline">
          best industrial supply company in India
        </span>
        , we are committed to providing high-quality products with reliable
        service, technical skills and on-time delivery. We wish to streamline
        procurement, strengthen operations and create trust with consistency,
        transparency and a customer-first approach. Our mission is driven by the
        desire to elevate industrial performance across every sector.
      </>
    ),
    mainImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    overlayImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        icon: <FaLeaf className="w-5 h-5 text-green-600" />,
        title: "Delivering value through dependable industrial solutions",
      },
      {
        icon: <FaLightbulb className="w-5 h-5 text-green-600" />,
        title: "Ensuring smooth operations with timely support",
      },
      {
        icon: <FaUsers className="w-5 h-5 text-green-600" />,
        title: "Building trust through consistent, quality service",
      },
      {
        icon: <FaBuilding className="w-5 h-5 text-green-600" />,
        title: "Driving growth with industry-aligned innovations",
      },
    ],
  };

  return (
    <section className="py-10 bg-gradient-to-bl from-[#cdeaff] via-[#f5fff5] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <AnimateAppear className="w-full lg:w-1/2 relative">
            <div className="w-full h-96 relative">
              <img
              loading="lazy" 
                src={missionData.mainImage}
                alt="Construction planning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            <div className="absolute top-20 -right-10 w-50 h-60">
              <img
              loading="lazy" 
                src={missionData.overlayImage}
                alt="Construction workers"
                className="w-full h-full object-cover rounded-xl border-10 border-white"
              />
            </div>
          </AnimateAppear>

          <AnimateAppear
            delay={0.5}
            className="w-full lg:w-[60%]"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              {missionData.title}
            </h2>

            <p className="text-gray-700 leading-normal mb-8 text-base text-justify">
              {missionData.description}
            </p>

            <div className="space-y-4">
              {missionData.features.map((feature, index) => (
                <AnimateAppear key={index} delay={0.4 + index * 0.1} y={20}>
                <div key={index} className="flex items-center space-x-3">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="text-gray-700 text-sm font-medium">
                    {feature.title}
                  </span>
                </div>
                </AnimateAppear>
              ))}
            </div>
          </AnimateAppear>
        </div>
      </div>
    </section>
  );
};

export default Mission;
