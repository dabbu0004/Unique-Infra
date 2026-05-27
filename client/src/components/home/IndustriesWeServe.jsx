import React, { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateAppear from "../animations/AnimateAppear";
import IndustriesData from "../../data/IndustriesData";
gsap.registerPlugin(ScrollTrigger);

const IndustriesWeServe = () => {
  const sectionRef = useRef(null);
  const cardsContainerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".industries-heading", {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const autoSwipeTimer = setInterval(() => {
      if (!animating) {
        setAnimating(true);
        setCurrentIndex((prev) => (prev + 1) % IndustriesData.length);
        setTimeout(() => setAnimating(false), 700);
      }
    }, 5000);

    return () => clearInterval(autoSwipeTimer);
  }, [animating]);

  const handleNext = () => {
    if (!animating) {
      setAnimating(true);
      setCurrentIndex((prev) => (prev + 1) % IndustriesData.length);
      setTimeout(() => setAnimating(false), 700);
    }
  };

  const handlePrev = () => {
    if (!animating) {
      setAnimating(true);
      setCurrentIndex(
        (prev) => (prev - 1 + IndustriesData.length) % IndustriesData.length
      );
      setTimeout(() => setAnimating(false), 700);
    }
  };

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  const getCardStyle = (cardPosition, index) => {
    if (cardPosition === 0) {
      return {
        transform: "translateX(-50%) scale(1)",
        opacity: 1,
        zIndex: 30,
        left: "50%",
      };
    }

    if (cardPosition === 1) {
      return {
        transform: "translateX(-50%) scale(0.95)",
        opacity: 0.7,
        zIndex: 20,
        left: "calc(50% + 200px)",
      };
    }

    if (cardPosition === 2) {
      return {
        transform: "translateX(-50%) scale(0.9)",
        opacity: 0.5,
        zIndex: 10,
        left: "calc(50% + 400px)",
      };
    }

    if (cardPosition < 0) {
      return {
        transform: "translateX(-50%) scale(0.9)",
        opacity: 0,
        zIndex: 0,
        left: "calc(50% - 200px)",
      };
    }

    return {
      transform: "translateX(-50%) scale(0.85)",
      opacity: 0,
      zIndex: 0,
      left: `calc(50% + ${cardPosition * 200}px)`,
    };
  };

  const getCardStyleDesktop = (cardPosition, index) => {
    if (cardPosition === 0) {
      return {
        transform: "translateX(-50%) scale(1)",
        opacity: 1,
        zIndex: 30,
        left: "50%",
      };
    }

    if (cardPosition === 1) {
      return {
        transform: "translateX(-50%) scale(0.95)",
        opacity: 0.7,
        zIndex: 20,
        left: "calc(50% + 280px)",
      };
    }

    if (cardPosition === 2) {
      return {
        transform: "translateX(-50%) scale(0.9)",
        opacity: 0.5,
        zIndex: 10,
        left: "calc(50% + 560px)",
      };
    }

    if (cardPosition < 0) {
      return {
        transform: "translateX(-50%) scale(0.9)",
        opacity: 0,
        zIndex: 0,
        left: "calc(50% - 280px)",
      };
    }

    return {
      transform: "translateX(-50%) scale(0.85)",
      opacity: 0,
      zIndex: 0,
      left: `calc(50% + ${cardPosition * 280}px)`,
    };
  };

  return (
    <div ref={sectionRef} className="w-full py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <AnimateAppear>
          <h2 className="text-3xl md:text-5xl text-center font-extrabold text-gray-700 mb-4">
            Industries <span className="text-[#19587e]">We Power</span>
          </h2>
          <p className="text-sm md:text-base mx-auto text-center text-gray-700 mb-10">
            From Construction to Technology who we serve and how.
          </p>
        </AnimateAppear>
        <AnimateAppear>
          <div className="relative flex items-center justify-center md:justify-start md:gap-12 lg:gap-16">
            <div className="hidden md:flex flex-col gap-4 z-40">
              <button
                onClick={handlePrev}
                disabled={animating}
                className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 ${
                  !animating
                    ? "border-gray-300 hover:border-gray-900 hover:scale-110 cursor-pointer"
                    : "border-gray-200 opacity-50 cursor-not-allowed"
                }`}
                aria-label="Previous card"
              >
                <FaChevronLeft className="text-gray-900" />
              </button>

              <button
                onClick={handleNext}
                disabled={animating}
                className={`w-12 h-12 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 ${
                  !animating
                    ? "border-gray-300 hover:border-gray-900 hover:scale-110 cursor-pointer"
                    : "border-gray-200 opacity-50 cursor-not-allowed"
                }`}
                aria-label="Next card"
              >
                <FaChevronRight className="text-gray-900" />
              </button>
            </div>
            <div
              ref={cardsContainerRef}
              className="relative flex-1 flex justify-center md:justify-start items-center touch-pan-y select-none"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative w-full max-w-[350px] md:max-w-none md:w-[500px] mx-auto md:mx-0 flex justify-center items-center min-h-[420px] md:min-h-[500px]">
                {IndustriesData.map((industry, index) => {
                  let cardPosition = index - currentIndex;
                  if (cardPosition < -1) {
                    cardPosition = IndustriesData.length + cardPosition;
                  } else if (cardPosition > IndustriesData.length - 2) {
                    cardPosition = cardPosition - IndustriesData.length;
                  }

                  const style =
                    window.innerWidth < 768
                      ? getCardStyle(cardPosition, index)
                      : getCardStyleDesktop(cardPosition, index);

                  return (
                    <div
                      key={index}
                      className="absolute w-full max-w-[350px] md:max-w-[400px] transition-all duration-700 ease-out pointer-events-none"
                      style={style}
                    >
                      <div
                        className={`w-full h-[380px] md:h-[450px] border rounded-2xl p-0 bg-white shadow-lg transition-all duration-700 flex flex-col ${
                          cardPosition === 0
                            ? "border-gray-900"
                            : "border-gray-200"
                        }`}
                      >
                        <div className="mb-4 md:mb-2 transition-transform duration-300">
                          <img
                           loading = "lazy"
                            src={industry.image}
                            alt={industry.title}
                            className="w-full h-40 md:h-52 object-cover rounded-t-2xl"
                          />
                        </div>

                        <h3 className="text-2xl md:text-3xl px-4 font-bold text-gray-700 mb-3 md:mb-4 leading-tight">
                          {industry.title}
                        </h3>

                        <p className="text-sm md:text-base px-4 text-gray-600 leading-relaxed flex-grow">
                          {industry.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </AnimateAppear>
      </div>
    </div>
  );
};

export default IndustriesWeServe;
