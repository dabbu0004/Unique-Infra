import React, {
  useEffect,
  useRef,
  useState,
  useLayoutEffect,
  useMemo,
  useCallback,
} from "react";
import { gsap } from "gsap";
import certificatesData from "../../data/CertificatesData";
import AnimateAppear from "../animations/AnimateAppear";

const SPACING = 420;
const VISIBLE_RANGE = 1;
const AUTOPLAY_DELAY = 2000;
const PAUSE_AFTER_INTERACTION = 1000;
const ROTATION_Y = 45;

const Certificates = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [orientations, setOrientations] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const cardRefs = useRef([]);
  const total = certificatesData.length;
  const autoplayRef = useRef();
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const pauseTimeoutRef = useRef();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    const debouncedCheckMobile = () => {
      clearTimeout(window._certResizeTimeout);
      window._certResizeTimeout = setTimeout(checkMobile, 150);
    };
    checkMobile();
    window.addEventListener("resize", debouncedCheckMobile);
    return () => {
      window.removeEventListener("resize", debouncedCheckMobile);
      clearTimeout(window._certResizeTimeout);
    };
  }, []);

  useEffect(() => {
    const loadOrientations = async () => {
      const results = await Promise.all(
        certificatesData.map(({ image }) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => {
              const isPortrait = img.height > img.width;
              resolve({
                isPortrait,
                aspectRatio: img.width / img.height,
              });
            };
            img.onerror = () => resolve({ isPortrait: true, aspectRatio: 0.7 });
            img.src = image;
          });
        })
      );
      setOrientations(results);
    };
    loadOrientations();
  }, []);

  const startAutoplay = () => {
    clearInterval(autoplayRef.current);
    autoplayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
    }, AUTOPLAY_DELAY);
  };

  const stopAutoplay = () => {
    clearInterval(autoplayRef.current);
  };

  const resumeAutoplayAfterPause = () => {
    stopAutoplay();
    clearTimeout(pauseTimeoutRef.current);
    pauseTimeoutRef.current = setTimeout(() => {
      startAutoplay();
    }, PAUSE_AFTER_INTERACTION);
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      stopAutoplay();
      clearTimeout(pauseTimeoutRef.current);
    };
  }, [total]);

  useLayoutEffect(() => {
    if (!total || orientations.length === 0) return;

    certificatesData.forEach((_, idx) => {
      let offset = idx - currentIndex;
      if (offset > total / 2) offset -= total;
      if (offset < -total / 2) offset += total;

      const isCenter = offset === 0;
      const absOffset = Math.abs(offset);

      const inVisibleRange = absOffset <= VISIBLE_RANGE + 0.5;

      const x = offset * SPACING;
      const z = isCenter ? 0 : -150;
      const rotateY = isCenter ? 0 : offset * -ROTATION_Y;
      const scale = isCenter ? 1.15 : 0.85;

      let opacity = 0;
      if (inVisibleRange) {
        opacity = isCenter ? 1 : Math.max(0, 1 - absOffset * 0.4);
      }

      const blur = isCenter ? 0 : 3;
      const zIndex = isCenter ? 100 : 50;

      gsap.to(cardRefs.current[idx], {
        x,
        z,
        rotateY,
        scale,
        opacity,
        filter: `blur(${blur}px) brightness(${isCenter ? 1.05 : 0.75})`,
        zIndex,
        pointerEvents: absOffset <= VISIBLE_RANGE ? "auto" : "none",
        duration: 0.8,
        ease: "power3.out",
      });
    });
  }, [currentIndex, total, orientations]);

  const goToSlide = useCallback(
    (index) => {
      setCurrentIndex(index);
      resumeAutoplayAfterPause();
    },
    [resumeAutoplayAfterPause]
  );

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current - touchEndX.current > 50) {
      goToSlide((currentIndex + 1) % total);
    }
    if (touchStartX.current - touchEndX.current < -50) {
      goToSlide((currentIndex - 1 + total) % total);
    }
  };

  const getMobileSize = () => {
    if (!isMobile) return null;
    const screenWidth = window.innerWidth;
    const padding = 32;
    const maxWidth = screenWidth - padding;
    const width = Math.min(280, maxWidth);
    const height = Math.min(400, width * 1.4);
    return { width, height };
  };

  const mobileSize = getMobileSize();
  const containerHeight = isMobile ? "460px" : "580px";

  const defaultOrientation = useMemo(
    () => ({ isPortrait: true, aspectRatio: 0.7 }),
    []
  );

  return (
    <section className="relative overflow-hidden bg-gradient-to-bl from-[#cdeaff] via-[#f5fff5] to-white py-10">
      <AnimateAppear>
        <div className="relative max-w-6xl mx-auto px-4 md:px-6 text-center">
          <p className="text-xs md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] text-[#004068] mb-3 md:mb-4">
            CERTIFICATIONS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-700">
            Honours & <span className="text-[#19587e]">Global Compliance</span>
          </h2>
          <p className="mt-3 md:mt-4 text-sm md:text-base lg:text-lg text-gray-700 max-w-5xl mx-auto px-2">
            Independently validated credentials demonstrating our commitment to
            safety and performance.
          </p>
        </div>
      </AnimateAppear>
      <div
        className="relative mt-8 md:mt-16 select-none"
        onMouseEnter={stopAutoplay}
        onMouseLeave={resumeAutoplayAfterPause}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="max-w-[100vw] mx-auto overflow-hidden">
          <div
            className="relative flex items-center justify-center transition-all duration-700"
            style={{
              height: containerHeight,
              perspective: "2000px",
              perspectiveOrigin: "center center",
            }}
          >
            {certificatesData.map(({ id, image }, idx) => {
              const orientation = orientations[idx] || defaultOrientation;
              const isPortrait = orientation.isPortrait;

              const cardWidth = isMobile
                ? `${mobileSize?.width || 280}px`
                : isPortrait
                ? "350px"
                : "500px";

              const imageHeight = isMobile
                ? "350px"
                : isPortrait
                ? "450px"
                : "350px";

              return (
                <div
                  key={id}
                  ref={(el) => (cardRefs.current[idx] = el)}
                  className="absolute will-change-transform cursor-pointer"
                  style={{
                    transform: "translateX(0px) translateZ(-200px) scale(0)",
                    opacity: 0,
                    transformStyle: "preserve-3d",
                  }}
                  onClick={() => goToSlide(idx)}
                >
                  <div
                    className="relative"
                    style={{
                      width: cardWidth,
                    }}
                  >
                    <div className="group bg-white border-1 border-white/80 overflow-hidden transition-all duration-300">
                      <div className="relative">
                        <img
                          src={image}
                          alt="Certificate"
                          loading="lazy"
                          className="w-full object-contain object-center transition-all duration-300 group-hover:scale-105"
                          style={{ height: imageHeight }}
                          draggable="false"
                        />
                        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      </div>
                    </div>
                    <div className="absolute -bottom-12 inset-x-4 h-32 bg-gradient-radial from-[#0575af4d] to-transparent rounded-[50%] blur-2xl opacity-60 pointer-events-none" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
