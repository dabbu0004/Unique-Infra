import { useEffect, useRef } from "react";
import gsap from "gsap";
import milestonesData from "../../data/MilestonesData";

const Milestones = () => {
  const containerRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      {
        opacity: 0,
        y: 40,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.25,
        ease: "power3.out",
      }
    );
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <section className="w-full bg-gradient-to-bl from-[#e8f6ff] via-[#f5fff5] to-white flex flex-col items-center pt-40 py-16">
      <div className="w-full max-w-6xl flex flex-col gap-12 px-4 relative">
        <div className="absolute left-6 top-6 bottom-6 w-1 bg-gray-300 z-0" />
        {milestonesData.map((item, index) => (
          <div
            key={index}
            ref={(el) => (containerRef.current[index] = el)}
            className="flex flex-row gap-6 items-start relative z-10"
          >
            <div className="flex flex-col items-center">
              <div className="w-5 h-5 bg-[#19587e] rounded-full mt-3 z-10" />
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-3xl lg:text-5xl font-bold text-[#19587e]">
                {item.year}
              </h3>
              <ul className="flex flex-col gap-2 text-gray-700">
                {item.description.map((text, i) => (
                  <li key={i} className="leading-relaxed">
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Milestones;
