import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import BlogsData from "../../data/BlogsData.jsx";

const ReadMoreBlogs = ({ currentBlogSlug }) => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sliderRef = useRef(null);

  const otherBlogs = BlogsData.filter((blog) => blog.slug !== currentBlogSlug);

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

  const extendedBlogs = [...otherBlogs, ...otherBlogs, ...otherBlogs];

  useEffect(() => {
    setCurrentIndex(otherBlogs.length);
  }, [otherBlogs.length]);

  const handleTransitionEnd = () => {
    if (!isTransitioning) return;

    if (currentIndex >= otherBlogs.length * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(otherBlogs.length);
      }, 0);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(otherBlogs.length);
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
    <section className="py-16 bg-gradient-to-br from-[#f0f8ff] to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-700 mb-3">
            Read More of Our Latest{" "}
            <span className="text-[#0575af]">Blogs</span>
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
            Explore more industry insights and product guides
          </p>
        </div>
        <div className="relative px-2 sm:px-10 md:px-16">
          <button
            onClick={handlePrev}
            className="absolute cursor-pointer left-1 sm:left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#0575af] text-[#0575af] hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Previous"
          >
            <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>

          <div className="overflow-hidden py-4">
            <div
              ref={sliderRef}
              className="flex"
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
                  className="flex-shrink-0 px-2 sm:px-3"
                  style={{ width: `${cardWidth}%` }}
                >
                  <div
                    onClick={() => handleBlogClick(blog.slug)}
                    className="bg-white hover:shadow-md cursor-pointer group transition-all duration-300 rounded-xl overflow-hidden h-full border border-gray-200 hover:-translate-y-2"
                  >
                    <div className="relative h-44 sm:h-48 overflow-hidden">
                      <img
                      loading="lazy" 
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-full bg-[#def0fb] object-cover group-hover:scale-110 transition-all duration-500"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-lg md:text-xl font-bold text-[#0a4d6e] mb-3 line-clamp-2 group-hover:text-[#0575af] transition-colors">
                        {blog.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 leading-relaxed">
                        {blog.description}
                      </p>
                      <div className="mt-4">
                        <span className="text-[#0575af] font-semibold text-sm group-hover:underline">
                          Read More →
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handleNext}
            className="absolute cursor-pointer right-1 sm:right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#0575af] text-[#0575af] hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            aria-label="Next"
          >
            <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReadMoreBlogs;
