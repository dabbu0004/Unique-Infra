import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { HiLightBulb, HiUserGroup, HiSparkles } from "react-icons/hi";
import AnimateAppear from "../animations/AnimateAppear";

const WhoWeAre = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const sliderRef = useRef(null);

  const values = [
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Painstaking efforts and research behind every new development help us serve products that truly benefit humanity and the environment.",
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: "People First",
      description:
        "UISPPL has always placed a great emphasis on taking care of those who are associated with us as they are one of our greatest assets.",
    },
    {
      icon: <HiLightBulb className="w-8 h-8" />,
      title: "Empowerment",
      description:
        "Our team of experts and our workforce are our biggest assets. Empowering them every step of the way constantly helps us deliver only the best.",
    },
    {
      icon: <HiSparkles className="w-8 h-8" />,
      title: "Quality Excellence",
      description:
        "We maintain the highest standards in every product and service, ensuring reliability and durability that our clients can trust.",
    },
    {
      icon: <HiUserGroup className="w-8 h-8" />,
      title: "Sustainability",
      description:
        "Committed to environmental responsibility, we integrate sustainable practices in all our operations and product development.",
    },
  ];

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

  const extendedValues = [...values, ...values, ...values];

  useEffect(() => {
    setCurrentIndex(values.length);
  }, []);

  const handleTransitionEnd = () => {
    if (!isTransitioning) return;

    if (currentIndex >= values.length * 2) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(values.length);
      }, 0);
    } else if (currentIndex <= 0) {
      setIsTransitioning(false);
      setTimeout(() => {
        setCurrentIndex(values.length);
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

  const handleDotClick = (index) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex(values.length + index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning && !isPaused) {
        setIsTransitioning(true);
        setCurrentIndex((prev) => prev + 1);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [isTransitioning, isPaused]);

  const getActiveDotIndex = () => {
    return ((currentIndex % values.length) + values.length) % values.length;
  };

  const cardWidth = 100 / cardsPerView;
  const translateX = currentIndex * cardWidth;

  return (
    <section className="py-6 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6 bg-white p-6 rounded-lg text-center">
        <AnimateAppear>
          <h2 className="text-2xl md:text-5xl font-extrabold text-gray-700 mb-3">
            Who We <span className="text-[#19587e]">Are ?</span>
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-5xl mx-auto leading-relaxed">
            Unique Infra & Sustainable Power Pvt. Ltd.(founded in 2019) is the
            best industrial supply company/ supplier in India, offering quality
            and reliable solutions to Infrastructure, Manufacturing and
            Commercial projects with a strong focus on Performance, Compliance,
            and Long-term value.
          </p>
        </AnimateAppear>
        <div className="relative px-2 sm:px-12 md:px-16">
          <AnimateAppear>
            <button
              onClick={handlePrev}
              className="absolute hidden lg:block cursor-pointer lg:-left-15 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#004068] text-[#004068] hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Previous"
            >
              <FaChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>

            <div
              className="overflow-hidden"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div
                ref={sliderRef}
                className="flex my-6 md:my-16"
                style={{
                  transform: `translateX(-${translateX}%)`,
                  transition: isTransitioning
                    ? "transform 0.7s ease-in-out"
                    : "none",
                }}
                onTransitionEnd={handleTransitionEnd}
              >
                {extendedValues.map((value, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 px-2 sm:px-3"
                    style={{ width: `${cardWidth}%` }}
                  >
                    <div
                      className={`${
                        index % 2 === 0 ? "bg-[#cde9fa]" : "bg-[#dffce5]"
                      } hover:-translate-y-2 sm:hover:-translate-y-5 group transition-all duration-300 p-6 sm:p-10 lg:p-16 rounded-2xl relative h-full`}
                    >
                      <div className="absolute -top-6 sm:-top-7 left-4 sm:left-8">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white group-hover:scale-110 group-hover:bg-[#004068] group-hover:text-white transition-all duration-300 rounded-full flex items-center justify-center border-2 border-gray-200 text-[#004068]">
                          {value.icon}
                        </div>
                      </div>

                      <div className="h-full flex flex-col">
                        <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-3 sm:mb-4 mt-2">
                          {value.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed text-base flex-grow">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={handleNext}
              className="absolute hidden lg:block cursor-pointer lg:-right-15 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#004068] text-[#004068] hover:text-white p-2 sm:p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
              aria-label="Next"
            >
              <FaChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </AnimateAppear>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
