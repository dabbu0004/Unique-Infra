import React, { useState } from "react";
import InstagramContent from "../blogs/InstagramContent";
import { useNavigate } from "react-router-dom";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const InstagramSection = () => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState(false);
  if (hasError) return null;
  return (
    <div className="bg-[#e0f3ff] pb-12">
      <InstagramContent limit={6} onError={() => setHasError(true)} />
      <div className="text-center mt-2">
        <button
          onClick={() => navigate("/blogs")}
          className="cursor-pointer px-8 py-3 bg-[#004068] hover:bg-[#00273f] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
          View All Social Insights
          <FaArrowUpRightFromSquare className="text-base inline ml-2" />
        </button>
      </div>
    </div>
  );
};

export default InstagramSection;
