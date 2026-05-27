import React, { useState, useEffect, useRef } from "react";
import BlogsData from "../../data/BlogsData.jsx";
import AnimateAppear from "../animations/AnimateAppear.jsx";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

const Blogs = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth < 640) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(getCardsPerView());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const extendedBlogs = [...BlogsData, ...BlogsData, ...BlogsData];

  useEffect(() => {
    setCurrentIndex(BlogsData.length);
  }, []);

  const handleTransitionEnd = () => {
    if (!isTransitioning) return;

    if (currentIndex >= BlogsData.length * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(BlogsData.length);
      }, 0);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(BlogsData.length);
      }, 0);
    } else {
      setIsTransitioning(false);
    }
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const cardWidth = 100 / cardsPerView;
  const translateX = currentIndex * cardWidth;

  const handleBlogClick = (slug) => {
    navigate(`/blogs/${slug}`);
    window.scrollTo(0, 0);
  };

  return (
    <section className=" bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 bg-white p-8 rounded-lg">
        <AnimateAppear>
          <h2 className="text-2xl text-center md:text-5xl font-extrabold text-gray-700 mb-3">
            Read Our Latest <span className="text-[#19587e]">Blogs</span>
          </h2>
          <p className="text-base text-center md:text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Stay updated with the latest industry insights, product guides, and
            innovations in electrical solutions.
          </p>
        </AnimateAppear>

        <AnimateAppear>
          <div className="relative px-12 md:px-16">
            <button
              onClick={handlePrev}
              className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#004068] text-[#004068] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>

            <div className="overflow-hidden py-1">
              <div
                ref={sliderRef}
                className="flex my-10"
                style={{
                  transform: `translateX(-${translateX}%)`,
                  transition: isTransitioning
                    ? "transform 0.7s ease-in-out"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedBlogs.map((blog, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${cardWidth}%` }}
                  >
                    <div
                      onClick={() => handleBlogClick(blog.slug)}
                      className={`${
                        index % 2 === 0 ? "bg-[#eaf4fb]" : "bg-[#ebfbee]"
                      } hover:-translate-y-3 border-1 border-gray-300 shadow-md cursor-pointer group transition-all duration-300 rounded-2xl overflow-hidden h-full`}
                    >
                      <div className="relative h-50 overflow-hidden bg-white">
                        <img
                        loading="lazy" 
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
                        />
                      </div>
                      <div className="p-6 border-t-1 border-gray-200 ">
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-[#004068] transition-colors">
                          {blog.title}
                        </h3>
                        <p className="text-gray-600 text-base line-clamp-3 leading-relaxed mb-4">
                          {blog.metaDescription}
                        </p>
                        <span className="text-[#004068] font-semibold text-sm group-hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#004068] text-[#004068] hover:text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>
          </div>
        </AnimateAppear>
        <div className="text-center">
          <button
            onClick={() => navigate("/blogs")}
            className="cursor-pointer px-6 py-3 bg-[#004068] hover:bg-[#00273f] text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
          >
            View All Our Blogs
            <FaArrowUpRightFromSquare className="text-base inline ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blogs;
