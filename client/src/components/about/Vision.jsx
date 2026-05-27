import React from "react";
import { FaLeaf, FaLightbulb, FaUsers, FaBuilding } from "react-icons/fa";
import AnimateAppear from "../animations/AnimateAppear";

const Vision = () => {
  const visionData = {
    title: "Our Vision",
    description: (
      <>
        Our vision is to lead the path toward smarter, cleaner and more
        resilient industrial ecosystems. Being a leading{" "}
        <span className="font-bold underline">
          electrical &amp; automation products supplier
        </span>
        , we aim to introduce innovative technology, efficient materials, and
        sustainable power options to all projects. We want to be the preferred
        partner for industries seeking reliable supply, technical accuracy and
        long-term performance. We aspire to create an industry landscape powered
        by innovation and sustainability.
      </>
    ),
    mainImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    overlayImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    features: [
      {
        icon: <FaLeaf className="w-5 h-5 text-green-600" />,
        title: "Empowering industries with future-ready products",
      },
      {
        icon: <FaLightbulb className="w-5 h-5 text-green-600" />,
        title: "Encouraging efficient and sustainable operations",
      },
      {
        icon: <FaUsers className="w-5 h-5 text-green-600" />,
        title: "Supporting growth with modern engineering solutions",
      },
      {
        icon: <FaBuilding className="w-5 h-5 text-green-600" />,
        title: "Becoming India’s most trusted industrial partner",
      },
    ],
  };

  return (
    <section className="py-10 bg-gradient-to-br from-[#cdeaff] via-[#f5fff5] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          <AnimateAppear  className="w-full lg:w-[60%]">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-6">
              {visionData.title}
            </h2>
            <p className="text-gray-700 leading-normal mb-8 text-base text-justify">
              {visionData.description}
            </p>
            <div className="space-y-4">
              {visionData.features.map((feature, index) => (
                 <AnimateAppear key={index} delay={0.4 + index * 0.1} y={20}>
                <div  className="flex items-center space-x-3">
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <span className="text-gray-700 text-sm font-medium">
                    {feature.title}
                  </span>
                </div>
                </AnimateAppear>
              ))}
            </div>
          </AnimateAppear>

          <AnimateAppear delay={0.2} className="w-full lg:w-1/2 relative">
            <div className="w-full h-96 relative">
              <img
              loading="lazy" 
                src={visionData.mainImage}
                alt="Construction planning"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute top-20 -left-10 w-50 h-60">
              <img
              loading="lazy" 
                src={visionData.overlayImage}
                alt="Construction workers"
                className="w-full h-full object-cover rounded-xl border-10 border-white"
              />
            </div>
          </AnimateAppear>
        </div>
      </div>
    </section>
  );
};

export default Vision;
