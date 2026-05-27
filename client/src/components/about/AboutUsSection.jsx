import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/warehouseImage.webp";
import AnimateAppear from "../animations/AnimateAppear";
const AboutUsSection = () => {
  const aboutData = {
    image: img1,
    paragraphs: [
      "Unique Infra & Sustainable Power Pvt. Ltd. (UISPPL) is built on one simple but important principle: industries become stronger only when they have trustworthy partners who know their requirements. We at Unique Infra, the best industrial supply company in India, are committed to improving operational efficiency, minimizing downtime, and ultimately, adding great value to every project. Our team, with years of on-ground experience, works to ensure that every client gets the right solution, prompt delivery, and constant support throughout their journey with us.",
      "Over the years, we have served numerous sectors with great accuracy and honesty. With modern electrical components and automation systems, we empower the infrastructure and manufacturing sectors. Being an exclusive electrical & automation products supplier, we have a broad portfolio backed by quality assurance, competitive pricing, and a customer-first approach. Whether you need a reliable industrial product supplier or an experienced industrial material distributor, Unique Infra enhances your operations with consistency, reliability, and service that truly makes a difference.",
    ],
    buttonText: "Connect with us today!",
    buttonLink: "/contact",
  };

  return (
    <section className="py-8 sm:py-10 bg-white">
      <AnimateAppear>
      <div
        className="bg-[#cde9fa] max-w-7xl mx-auto p-4 sm:p-6 md:p-10 rounded-2xl sm:rounded-3xl"
      >
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-10 lg:gap-12">
          <div className="w-full lg:w-1/2">
            <div className="relative overflow-hidden rounded-2xl sm:rounded-3xl group h-[240px] sm:h-[320px] md:h-[420px] lg:h-[700px]">
              <img
                src={aboutData.image}
                alt="Team working together"
                loading="lazy" 
                className="w-full h-full object-cover transition-all duration-300 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <div className="space-y-4 sm:space-y-6">
              {aboutData.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg text-justify transition-all duration-300 hover:text-[#19587e]"
                >
                  {paragraph}
                </p>
              ))}

              <div>
                <Link
                  to={aboutData.buttonLink}
                  className="bg-[#004068] hover:bg-[#00273f] text-white hover:scale-105 transition-all duration-300 cursor-pointer inline-flex items-center px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-md font-semibold shadow-lg text-sm md:text-base"
                >
                  {aboutData.buttonText}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      </AnimateAppear>
    </section>
  );
};

export default AboutUsSection;
