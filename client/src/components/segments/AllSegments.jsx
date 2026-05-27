import React, { useLayoutEffect, useRef, useEffect, useState } from "react";
import { FiArrowRight } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import AnimateAppear from "../animations/AnimateAppear";
import IndustriesData from "../../data/IndustriesData";

gsap.registerPlugin(ScrollTrigger);

const getSegmentUrl = (title = "") => {
  if (title.includes("Solar")) return "solar-power";
  if (title.includes("Hydro")) return "hydro-power";
  if (title.includes("Wind")) return "wind-energy";
  if (title.includes("Data")) return "data-centers";
  if (title.includes("Tunnel")) return "tunnel";
  if (title.includes("Airport")) return "airport";
  if (title.includes("Transmission")) return "power-transmission-distribution-substation";
  if (title.includes("Steel")) return "steel-industry";
  if (title.includes("Metro")) return "metro&railways";

  return title
    .toLowerCase()
    .replace(/[^a-z0-9&]+/g, "-")
    .replace(/(^-|-$)+/g, "");
};

const SegmentCard = ({ item }) => {
  const navigate = useNavigate();
  const Icon = item.icon;

  return (
   <div className="bg-white rounded-[2rem] shadow-lg shadow-gray-300 transition-all duration-500 overflow-hidden group flex flex-col border border-slate-100 flex-1 will-change-transform transform-gpu">
      <div className="relative overflow-hidden">
        <img
         loading = "lazy"
          src={item.image}
          alt={item.title}
          className="w-full h-52 sm:h-56 md:h-60 object-cover transition-transform duration-700 group-hover:scale-105 will-change-transform"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase shadow-sm">
          Segment Powered
        </div>
      </div>

      <div className="p-4 sm:p-5 md:p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-11 h-11 bg-[#eaf7ff] rounded-xl flex items-center justify-center text-[#19587e] text-xl shrink-0 group-hover:bg-[#19587e] group-hover:text-white transition-colors duration-300">
            {Icon ? <Icon /> : null}
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-extrabold text-gray-800 group-hover:text-[#19587e] transition-colors leading-tight">
            {item.title}
          </h2>
        </div>

        <p className="text-[#0e466a99] text-sm leading-relaxed mb-5">
          {item.description}
        </p>

        {item.clients?.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-5 max-h-[2rem] overflow-hidden">
            {item.clients.map((c, i) => (
              <span
                key={i}
                className="px-3 py-1 text-[11px] font-semibold bg-blue-50 text-[#19587e] rounded-md hover:bg-[#19587e] hover:text-white transition-all duration-300 cursor-default"
              >
                {c.client}
              </span>
            ))}
          </div>
        )}

        <div className="mt-auto">
          <button
            onClick={() => navigate(`/segments/${getSegmentUrl(item.title)}`)}
            className="inline-flex cursor-pointer items-center justify-center gap-2 px-5 py-2.5 bg-[#19587e] text-white rounded-xl font-bold text-sm hover:bg-[#113d58] transition-all duration-300 shadow-md hover:shadow-xl hover:scale-105 active:scale-95  will-change-transform transform-gpu"
          >
            View Details
            <FiArrowRight className="text-base" />
          </button>
        </div>
      </div>
    </div>
  );
};

const AllSegments = () => {
  const [navbarOffset, setNavbarOffset] = useState(0);
  const sectionRef = useRef(null);
  const pinRef = useRef(null);
  const horizontalViewportRef = useRef(null);
  const horizontalTrackRef = useRef(null);

  const desktopTlRef = useRef(null);
  const resizeRafRef = useRef(null);

  useEffect(() => {
    const syncOffset = () => {
      const raw = getComputedStyle(document.documentElement)
        .getPropertyValue("--navbar-offset")
        .trim();
      const value = Number.parseFloat(raw) || 0;
      setNavbarOffset(value);
    };

    syncOffset();
    window.addEventListener("navbar-offset-change", syncOffset);
    window.addEventListener("resize", syncOffset);

    return () => {
      window.removeEventListener("navbar-offset-change", syncOffset);
      window.removeEventListener("resize", syncOffset);
    };
  }, []);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        const section = sectionRef.current;
        const pin = pinRef.current;
        const viewport = horizontalViewportRef.current;
        const track = horizontalTrackRef.current;

        if (!section || !pin || !viewport || !track) return;

        const killDesktop = () => {
          if (desktopTlRef.current) {
            if (desktopTlRef.current.scrollTrigger)
              desktopTlRef.current.scrollTrigger.kill();
            desktopTlRef.current.kill();
            desktopTlRef.current = null;
          }
        };

        const build = () => {
          killDesktop();

          const maxX = Math.max(track.scrollWidth - viewport.clientWidth, 0);
          gsap.set(track, { x: 0, force3D: true });

          if (maxX <= 0) {
            ScrollTrigger.refresh();
            return;
          }

          desktopTlRef.current = gsap.timeline({
            scrollTrigger: {
              trigger: section,
              start: () => {
                const raw = getComputedStyle(document.documentElement)
                  .getPropertyValue("--navbar-offset")
                  .trim();
                const offset = Number.parseFloat(raw) || 0;
                return `top+=${offset} top`;
              },
              end: () => {
                const raw = getComputedStyle(document.documentElement)
                  .getPropertyValue("--navbar-offset")
                  .trim();
                const offset = Number.parseFloat(raw) || 0;
                return `top+=${offset + maxX} top`;
              },
              pin,
              pinSpacing: true,
              scrub: 1.5,
              anticipatePin: 1,
              invalidateOnRefresh: true,
              fastScrollEnd: true,
              preventOverlaps: true, 
            },
          });

          desktopTlRef.current.to(track, { x: -maxX, ease: "none", force3D: true  }, 0);

          ScrollTrigger.refresh();
        };

        const waitForImagesAndBuild = () => {
          const images = Array.from(section.querySelectorAll("img"));
          const pending = images.filter((img) => !img.complete);

          if (pending.length === 0) {
            build();
            return;
          }

          let loaded = 0;
          const done = () => {
            loaded += 1;
            if (loaded >= pending.length) build();
          };

          pending.forEach((img) => {
            img.addEventListener("load", done, { once: true });
            img.addEventListener("error", done, { once: true });
          });
        };

        waitForImagesAndBuild();

        const onResize = () => {
          if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
          resizeRafRef.current = requestAnimationFrame(build);
        };

        window.addEventListener("resize", onResize);

        return () => {
          window.removeEventListener("resize", onResize);
          if (resizeRafRef.current) cancelAnimationFrame(resizeRafRef.current);
          killDesktop();
        };
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);
  const renderSegmentCards = (prefix, wrapperClassName) => {

    const itemClass = prefix === "desk" 
      ? "basis-[calc((100%-1.5rem)/2)] max-w-[calc((100%-1.5rem)/2)] shrink-0 pb-3"
      : "w-full pb-3 flex"; 

    return (
      <div className={wrapperClassName}>
        {IndustriesData.map((item, i) => (
          <div
            key={`${prefix}-${i}`}
            className={itemClass}
          >
            <SegmentCard item={item} />
          </div>
        ))}
      </div>
    );
  };

  const desktopHero = (
    <AnimateAppear>
      <h1 className="text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
        Powering the <span className="text-[#19587e]">Connected Journey</span>
      </h1>
      <p className="text-base lg:text-lg text-[#0e466a99] max-w-3xl mx-auto">
        Discover how our advanced electrical distribution solutions integrate
        seamlessly across vital industrial segments.
      </p>
    </AnimateAppear>
  );

  const mobileHero = (
    <AnimateAppear>
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-700 mb-4">
        Powering the <span className="text-[#19587e]">Connected Journey</span>
      </h1>
      <p className="text-base text-[#0e466a99]">
        Discover how our advanced electrical distribution solutions integrate
        seamlessly across vital industrial segments.
      </p>
    </AnimateAppear>
  );

  return (
    <div className="bg-gradient-to-b md:pb-0 from-[#eaf7ff] via-white to-[#e0f3ff]">
      <section ref={sectionRef} className="hidden md:block relative">
        <div
          ref={pinRef}
          className="h-fit w-full flex flex-col overflow-hidden"
        >
          <div
            className="text-center pb-6 px-6 shrink-0 transition-[padding] duration-300"
            style={{ paddingTop: `${navbarOffset + 16}px` }}
          >
            {desktopHero}
          </div>

          <div className="flex-1 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
              <div ref={horizontalViewportRef} className="overflow-hidden">
                <div ref={horizontalTrackRef}>
                  {renderSegmentCards(
                    "desk",
                    "flex items-start gap-6 pt-3 will-change-transform",
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="block md:hidden">
        <div
          className="max-w-2xl mx-auto px-4 pb-16 transition-[padding] duration-300"
          style={{ paddingTop: `${navbarOffset + 16}px` }}
        >
          <div className="text-center mb-10">
            {mobileHero}
          </div>
          {renderSegmentCards("mob", "flex flex-col gap-6")}
        </div>
      </section>
    </div>
  );
};

export default AllSegments;