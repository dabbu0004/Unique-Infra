import React, { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { IoSadOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import BrandsPageData from "../../data/BrandsPageData";
import Meta from "../Meta";
const BrandsHero = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const nextSectionRef = useRef(null);
  const brandData = BrandsPageData.find((brand) => brand.slug === slug);

  if (!brandData) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-b from-[#e8f6ff] via-[#f5fff5] to-white px-4">
        <div className="text-center max-w-md">
          <div className="mb-6">
            <IoSadOutline className="mx-auto h-24 w-24 text-gray-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-800 mb-4">
            Brand Not Found
          </h1>
          <p className="text-gray-600 mb-8 text-sm md:text-base">
            Sorry, we couldn't find the brand you're looking for. It may have
            been moved or doesn't exist.
          </p>
          <button
            onClick={() => navigate("/")}
            className="bg-[#004068] hover:bg-[#00273f] transition-all duration-300
                     text-white cursor-pointer inline-flex items-center px-6 py-3 rounded-md font-semibold 
                     shadow-md"
          >
            <IoArrowBack className="mr-2 w-5 h-5" />
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleImageClick = () => {
    if (nextSectionRef.current) {
      nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-fit pt-16 lg:min-h-screen w-full">
    <Meta
            title={`${brandData.metaTitle}`}
            description={brandData.metaDescription}
          />
      <img
      loading="lazy" 
        src={brandData.heroImage}
        alt={brandData.name}
        className="w-full h-full object-contain cursor-pointer"
        onClick={handleImageClick}
        title="Click to see more"
      />
      <div ref={nextSectionRef} />
    </div>
  );
};

export default BrandsHero;
