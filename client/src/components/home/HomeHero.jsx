import React, { useEffect, useRef, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { gsap } from "gsap";
import HomeHeroData from "../../data/HomeHeroData";
import brochureUrl from "../../assets/UISPPL Brochure.pdf";

const HomeHero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const textWrapRef = useRef(null);
  const imgARef = useRef(null);
  const imgBRef = useRef(null);

  const [current, setCurrent] = useState(0);

  const activeIndex = useRef(0);
  const activeLayer = useRef(0);

  useEffect(() => {
    HomeHeroData.forEach(({ image }) => {
      const img = new Image();
      img.src = image;
    });
  }, []);

  useEffect(() => {
    gsap.fromTo(
      leftRef.current,
      { x: -80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out" }
    );

    gsap.fromTo(
      rightRef.current,
      { x: 80, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.9, ease: "power3.out", delay: 0.1 }
    );
  }, []);

  useEffect(() => {
    const imgA = imgARef.current;
    const imgB = imgBRef.current;

    gsap.set(imgA, { xPercent: 0 });
    gsap.set(imgB, { xPercent: 100 });

    const tl = gsap.timeline({ repeat: -1 });

    tl.to(
      {},
      {
        duration: 5,
        onComplete: () => {
          const nextIndex = (activeIndex.current + 1) % HomeHeroData.length;

          const currentImg = activeLayer.current === 0 ? imgA : imgB;
          const nextImg = activeLayer.current === 0 ? imgB : imgA;

          nextImg.src = HomeHeroData[nextIndex].image;

          gsap.set(nextImg, { xPercent: 100 });

          gsap.to(currentImg, {
            xPercent: -100,
            duration: 0.7,
            ease: "power2.inOut",
          });

          gsap.to(nextImg, {
            xPercent: 0,
            duration: 0.7,
            ease: "power2.inOut",
          });

          activeIndex.current = nextIndex;
          activeLayer.current = activeLayer.current === 0 ? 1 : 0;
          setCurrent(nextIndex);
        },
      }
    );

    return () => tl.kill();
  }, []);

  useEffect(() => {
    if (!textWrapRef.current) return;

    const words = textWrapRef.current.querySelectorAll(".word");

    gsap.killTweensOf(words);

    gsap.fromTo(
      words,
      { x: 40, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.45,
        stagger: 0.05,
        ease: "power3.out",
      }
    );
  }, [current]);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Unique Infra Corporate Brochure.pdf";
    link.click();
  };

  const splitWords = (text) =>
    text.split(" ").map((word, i) => (
      <span key={i} className="word inline-block mr-1 will-change-transform">
        {word}
      </span>
    ));

  return (
    <section className="relative w-full py-16 lg:pt-42 bg-gradient-to-tr from-[#cdeaff] via-[#f5fff5] to-white overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between w-full px-0 lg:px-10">
        <div
          ref={leftRef}
          className="w-full lg:w-[45%] flex flex-col items-center lg:items-start text-center lg:text-left"
        >
          <h2 className="text-2xl md:text-4xl font-extrabold text-gray-700 mb-4 leading-tight">
            <span ref={textWrapRef}>
              {splitWords(HomeHeroData[current].heading)}
            </span>
          </h2>

          <p className="text-base md:text-xl text-gray-700 mb-6 max-w-lg">
            {HomeHeroData[current].description}
          </p>

          <button
            onClick={handleDownloadBrochure}
            className="bg-[#004068] hover:bg-[#00273f] cursor-pointer text-white hover:scale-105 transition-all duration-300 inline-flex items-center px-6 py-3 rounded-md font-semibold shadow-lg"
          >
            <FaDownload className="mr-2" />
            Download Company Profile
          </button>

          <div className="mt-10 text-lg font-semibold text-gray-900">
            Powering Industrial | Progress Built for Scale | Reliable Supply
            Partners
          </div>
        </div>

        <div
          ref={rightRef}
          className="w-full lg:w-[55%] flex items-center justify-center"
        >
          <div className="w-full aspect-[16/9] lg:h-[480px] bg-[#eef8ff] rounded-none lg:rounded-4xl overflow-hidden relative">
            <img
             loading = "lazy"
              ref={imgARef}
              src={HomeHeroData[0].image}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              draggable="false"
            />
            <img
             loading = "lazy"
              ref={imgBRef}
              className="absolute inset-0 w-full h-full object-cover will-change-transform"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
