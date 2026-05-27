import React from "react";
import image from "../../assets/companyProfile.webp";
import brochureUrl from "../../assets/UISPPL Brochure.pdf";
import AnimateAppear from "../animations/AnimateAppear";

const BrandsCompanyProfile = () => {
  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "UISPPL Brochure.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="w-full px-4 py-1 lg:px-2 bg-white">
      <AnimateAppear
        animation="pulse"
        delay={0.5}
        className="max-w-6xl mx-auto"
      >
        <div className="bg-gradient-to-bl from-[#cdeaff] via-[#f5fff5] to-white rounded-2xl shadow-md p-6 hover:scale-102 duration-300 transition-all">
          <div className="flex flex-col lg:flex-row items-center justify-center">
            <AnimateAppear
              animation="pulse"
              delay={0.5}
              className="flex-1 flex w-fit justify-center lg:justify-center"
            >
              <div className="w-fit h-92 lg:h-110 flex items-center justify-center">
                <img
                loading="lazy" 
                  src={image}
                  alt="Company Brochure"
                  className="w-full h-full object-cover hover:scale-105 duration-300 transition-all"
                />
              </div>
            </AnimateAppear>

            <AnimateAppear
              animation="pulse"
              delay={0.5}
              className="flex-1 text-center lg:text-left"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-700 mb-6 leading-tight">
                Company <span className="text-[#19587e]">Profile</span>
              </h2>
              <p className="text-base md:text-lg text-gray-700 mb-8 leading-relaxed text-justify">
                We are a trusted source for industrial-grade electrical
                products, offering dependable service, expert guidance, and
                seamless supply to help businesses build safe and efficient
                power systems.
              </p>
              <button
                onClick={handleDownloadBrochure}
                className="cursor-pointer bg-[#004068] hover:bg-[#00273f] transition-all duration-300 
                           text-white font-semibold text-lg px-10 py-4 rounded-lg shadow-md 
                           hover:shadow-xl hover:scale-105"
              >
                View Brochures
              </button>
            </AnimateAppear>
          </div>
        </div>
      </AnimateAppear>
    </section>
  );
};

export default BrandsCompanyProfile;
