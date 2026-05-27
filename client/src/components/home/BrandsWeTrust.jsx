import React, { useEffect, useRef, useState } from "react";
import { TopBrands, AllBrands } from "../../data/BrandsData";
import AnimateAppear from "../animations/AnimateAppear";
import { useNavigate } from "react-router-dom";

const useGsap = () => {
  const [gsapLoaded, setGsapLoaded] = useState(false);

  useEffect(() => {
    if (window.gsap) {
      setGsapLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js";
    script.async = true;
    script.onload = () => setGsapLoaded(true);
    document.body.appendChild(script);
  }, []);

  return gsapLoaded;
};

const MarqueeRow = ({
  data,
  duration = 20,
  reverse = false,
  isGsapReady,
  rowClass = "",
  imgStyle = {},
  clickable = false,
}) => {
  const rowRef = useRef(null);
  const containerRef = useRef(null);
  const tlRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (
      !isGsapReady ||
      !rowRef.current ||
      !containerRef.current ||
      !window.gsap
    )
      return;

    const row = rowRef.current;
    const rowWidth = row.scrollWidth / 2;

    window.gsap.set(row, { x: reverse ? -rowWidth : 0 });

    tlRef.current = window.gsap.to(row, {
      x: reverse ? 0 : -rowWidth,
      ease: "none",
      duration,
      repeat: -1,
    });

    return () => {
      tlRef.current && tlRef.current.kill();
    };
  }, [isGsapReady, duration, reverse, data]);

  const handleMouseEnter = () => {
    if (tlRef.current) tlRef.current.timeScale(0.7);
  };

  const handleMouseLeave = () => {
    if (tlRef.current) tlRef.current.timeScale(1);
  };

  const handleBrandClick = (url) => {
    if (clickable && url) {
      navigate(url);
    }
  };

  const loopedData = [...data, ...data];

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden w-full py-4 flex relative select-none ${rowClass}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        ref={rowRef}
        className="flex items-center gap-3 md:gap-4 px-4 md:px-8 whitespace-nowrap w-fit"
      >
        {loopedData.map((brand, index) => (
          <div
            key={`${brand.alt}-${index}`}
            className={`relative flex-shrink-0 border border-gray-400 flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 ${
              clickable && brand.url ? "cursor-pointer" : ""
            } h-[90px] w-[120px] md:h-auto md:w-auto`}
            style={imgStyle}
            onClick={() => handleBrandClick(brand.url)}
          >
            <img
            loading="lazy" 
              src={brand.src}
              alt={brand.alt}
              className="max-w-full max-h-full object-contain pointer-events-none"
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const BrandsWeTrust = () => {
  const isGsapReady = useGsap();
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="w-full bg-gray-50 text-center px-4 py-10 overflow-hidden font-sans">
      <AnimateAppear>
        <h2 className="text-2xl md:text-5xl font-extrabold text-gray-700 mb-8 md:mb-12">
          Authorized Channel<span className="text-[#19587e]"> Partner Of</span>
        </h2>
      </AnimateAppear>

      <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-2">
        <AnimateAppear
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 50%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 50%, black 90%, transparent)",
          }}
        >
          <>
            <MarqueeRow
              data={TopBrands}
              duration={isMobile ? 55 : 20}
              isGsapReady={isGsapReady}
              rowClass="h-30"
              imgStyle={{ height: "120px", width: "140px" }}
              clickable={true}
            />
            <MarqueeRow
              data={AllBrands}
              duration={isMobile ? 55 : 30}
              isGsapReady={isGsapReady}
              rowClass="h-30"
              imgStyle={{ height: "90px", width: "120px" }}
              clickable={false}
            />
          </>
        </AnimateAppear>
      </div>
    </div>
  );
};

export default BrandsWeTrust;
