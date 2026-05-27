import React, { useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";
import { gsap } from "gsap";
import IndustriesData from "../../data/IndustriesData";
import brochureUrl from "../../assets/UISPPL Brochure.pdf";
import { MdSupportAgent } from "react-icons/md";
import NotFound from "../404_page";

const EachSegmentHero = () => {
  const { segmentName } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const currentSegment = IndustriesData.find((item) => item.id === segmentName);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, scale: 1.05 },
        { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      );
    }
  }, [segmentName]);

  const handleDownloadBrochure = () => {
    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = "Unique Infra Corporate Brochure.pdf";
    link.click();
  };

  if (!currentSegment) return <NotFound />;

  return (
    <div className="w-full flex flex-col font-sans bg-white overflow-x-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full min-h-[75vh] flex flex-col justify-center overflow-hidden pt-20 pb-12">
        <div ref={heroRef} className="absolute inset-0 z-0">
          <img
            loading="lazy"
            src={currentSegment.image}
            alt={currentSegment.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/30 to-transparent"></div>
        </div>

        <div className="relative z-10 w-full  md:mt-34 md:ml-10 max-w-8xl mx-auto px-4 md:px-8  text-[#004068]">
          <h1 className="text-3xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl">
            {currentSegment.heroTagline}{" "}
            <span className="text-[#5c903a]">{currentSegment.heroHighlight}</span>
          </h1>
          <p className="text-slate-900 text-lg md:text-2xl max-w-2xl font-semibold leading-relaxed mb-10 whitespace-pre-line">
            {currentSegment.heroSubtext}
          </p>
          <div className="flex flex-wrap md:mb-6 gap-4">
            <button className="bg-[#5c903a] hover:bg-[#4a7a2e] text-white px-8 py-4 rounded-md font-bold transition-all shadow-lg flex items-center gap-2 text-lg">
              Get a Quote <span className="text-xl">›</span>
            </button>
            <button className="bg- backdrop-blur-sm border border-[#004068] hover:bg-[#004068] cursor-pointer hover:text-white text-[#004068] px-8 py-4 rounded-md font-bold transition-all shadow-lg text-lg">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      {/* 2. FEATURES BAR */}
      {currentSegment.featuresBar && currentSegment.featuresBar.length > 0 && (
        <div className="w-full bg-[#0b2136] border-b-4 border-[#5c903a]">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center justify-between gap-6 md:gap-4">
              {currentSegment.featuresBar.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                  <div key={idx} className="flex items-center gap-3 text-white flex-1 min-w-[180px] justify-center md:justify-start border-r border-white/10 last:border-0 pr-4">
                    {Icon && <Icon className="text-[#5c903a] text-3xl shrink-0" />}
                    <span className="text-sm font-semibold uppercase tracking-wide leading-tight">{feat.title}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* 3. ABOUT SECTION */}
      {currentSegment.aboutSection && (
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="w-full lg:w-[40%]">
              <span className="text-[#5c903a] font-bold tracking-widest uppercase text-sm mb-2 block">
                {currentSegment.aboutSection.subtitle}
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-[#004068] mb-6">
                {currentSegment.aboutSection.title}
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                {currentSegment.aboutSection.desc1}
              </p>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                {currentSegment.aboutSection.desc2}
              </p>
              
              <div className="bg-gray-50 border border-[#5c903a] border-[2px] rounded-lg p-5 flex items-center gap-4">
                <div className="bg-white p-3 rounded-full shadow-sm">
                  {React.createElement(currentSegment.aboutSection.calloutIcon, { className: "text-[#5c903a] text-2xl" })}
                </div>
                <p className="font-semibold text-[#05111c] text-lg">
                  {currentSegment.aboutSection.calloutText}
                </p>
              </div>
            </div>
            <div className="w-full lg:w-[60%]">
              <div className="rounded-2xl overflow-hidden shadow-2xl relative">
                <img src={currentSegment.aboutSection.image} alt="About" className="w-full h-auto object-cover" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. KEY COMPONENTS GRID */}
      {currentSegment.keyComponents && currentSegment.keyComponents.items.length > 0 && ( 
        <section className="py-16 bg-gray-50 border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
            <span className="text-[#5c903a] font-bold tracking-widest uppercase text-sm mb-2 block">
              {currentSegment.keyComponents.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#004068] mb-12">
              {currentSegment.keyComponents.title}
              <div className="w-16 h-1 bg-[#5c903a] mx-auto mt-4 rounded"></div>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {currentSegment.keyComponents.items.map((item, idx) => {
                const ItemIcon = item.icon;
                return (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all flex flex-col items-center justify-center text-center gap-4 group">
                    <div className="text-[#004068] group-hover:text-[#0b2136] transition-colors">
                      {ItemIcon && <ItemIcon className="text-5xl" />}
                    </div>
                    <span className="font-bold text-[#05111c]">{item.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 5. SPECIAL OFFERINGS (e.g. Panels We Offer) */}
      {currentSegment.specialOfferings && (
        <section className="py-20 max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <span className="text-[#5c903a] font-bold tracking-widest uppercase text-sm mb-2 block">
              {currentSegment.specialOfferings.subtitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-[#004068] mb-4">
              {currentSegment.specialOfferings.title}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              {currentSegment.specialOfferings.desc}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
            {currentSegment.specialOfferings.cards.map((card, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-2xl shadow-sm hover:shadow-md border border-gray-200 flex flex-row p-5 md:p-6 transition-shadow items-stretch"
              >
                {/* Image on the Left */}
                <div className="w-[35%] shrink-0 pr-4 flex justify-center items-center">
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-auto object-contain max-h-48 drop-shadow-sm" 
                  />
                </div>

                {/* Content on the Right */}
                <div className="w-[65%] flex flex-col justify-center">
                  <h3 className="text-xl md:text-2xl font-bold text-[#004068] mb-2 leading-tight">
                    {card.title}
                  </h3>
                  
                  {/* Short green line under title */}
                  <div className="w-6 h-[2px] bg-[#5c903a] mb-4"></div>
                  
                  <ul className="space-y-3">
                    {card.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                        {/* Thin gray checkmark from the image */}
                        <svg 
                          className="w-4 h-4 mt-[2px] text-gray-500 shrink-0" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24" 
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                        </svg>
                        <span className="leading-tight">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <button className="bg-[#5c903a] hover:bg-[#4a7a2e] text-white px-8 py-3 rounded-md font-bold transition-all shadow-md inline-flex items-center gap-2">
              {currentSegment.specialOfferings.buttonText} <span className="text-xl">›</span>
            </button>
          </div>
        </section>
      )}

    {/* 6. DETAILED SOLUTIONS COLUMNS */}
      {currentSegment.detailedSolutions && currentSegment.detailedSolutions.length > 0 && (
        <section className="py-8 bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {currentSegment.detailedSolutions.map((sol, idx) => {
                const SolIcon = sol.icon;
                return (
                  <div 
                    key={idx} 
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-200 flex flex-col hover:shadow-md transition-shadow"
                  >
                    {/* Icon and Title Row */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-gray-600 shrink-0">
                        {SolIcon && <SolIcon className="text-4xl md:text-5xl" />}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-[#05111c] leading-tight">
                        {sol.title}
                      </h3>
                    </div>

                    {/* Description Text */}
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {sol.desc}
                    </p>

                    {/* Bottom Section: List (Left) & Product Image Box (Right) */}
                    <div className="flex justify-between items-end flex-1 mt-auto gap-2">
                      
                      {/* Features List */}
                      <ul className="space-y-3 z-10 w-[55%] pb-2">
                        {sol.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700 font-medium">
                            {/* Thin circled checkmark matching the image */}
                            <svg 
                              className="w-[18px] h-[18px] mt-[2px] text-gray-500 shrink-0" 
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24" 
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span className="leading-tight">{feat}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Product Image - No circle, contained in bottom right */}
                      {sol.image && (
                        <div className="w-[45%] h-32 md:h-40 flex items-end justify-end">
                          <img 
                            src={sol.image} 
                            alt={sol.title} 
                            className="max-w-full max-h-full object-contain object-bottom drop-shadow-md" 
                          />
                        </div>
                      )}
                      
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. WHY CHOOSE & WHERE USED */}
      {(currentSegment.whyChooseUs?.length > 0 || currentSegment.whereUsed?.length > 0) && (
        <section className="py-20 max-w-7xl  mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Why Choose */}
            {currentSegment.whyChooseUs?.length > 0 && (
              <div className="w-full lg:w-1/3">
                <h2 className="text-3xl font-extrabold text-[#004068] mb-8 text-center lg:text-left">
                  Why Choose Unique Infra?
                </h2>
                <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                  {currentSegment.whyChooseUs.map((item, idx) => {
                    const WIcon = item.icon;
                    return (
                      <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left gap-3">
                        <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600">
                          {WIcon && <WIcon className="text-2xl" />}
                        </div>
                        <h4 className="font-bold text-sm text-[#05111c]">{item.title}</h4>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Right: Where Used */}
            {currentSegment.whereUsed?.length > 0 && (
              <div className="w-full lg:w-2/3">
                <h2 className="text-3xl  font-extrabold text-[#004068] mb-8 text-center">
                  Where Our Solutions Are Used
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {currentSegment.whereUsed.map((item, idx) => (
                    <div key={idx} className="flex flex-col items-center text-center gap-4 group cursor-pointer">
                      <div className="w-full aspect-square rounded-xl overflow-hidden shadow-sm border border-gray-200">
                        <img 
                          src={item.image}  
                          alt={item.label} 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <span className="font-bold text-sm text-[#05111c] px-2">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </section>
      )}

      {/* 8. CTA FOOTER */}
      {currentSegment.cta && (
        <section className="bg-[#0b2136] pt-16">
          <div className="max-w-7xl mx-auto px-4 md:px-8 pb-12 flex flex-col md:flex-row items-center justify-between gap-8 border-b border-white/10">
            <div className="text-white max-w-2xl text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                {currentSegment.cta.title} <span className="text-[#5c903a]">{currentSegment.cta.highlight}</span>
              </h2>
              <p className="text-slate-300 text-lg">
                {currentSegment.cta.desc}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <button className="bg-[#5c903a] hover:bg-[#4a7a2e] text-white px-8 py-3 rounded font-bold transition-all flex items-center justify-center gap-2">
                Request a Quote <span>›</span>
              </button>
              <button className="bg-transparent border border-white hover:bg-white hover:text-[#0b2136] text-white px-8 py-3 rounded font-bold transition-all flex items-center justify-center gap-2">
                <MdSupportAgent className="text-xl" /> Call Now
              </button>
            </div>
          </div>

          {currentSegment.cta.features?.length > 0 && (
            <div className="bg-[#081828]">
              <div className="max-w-7xl mx-auto px-4 py-4">
                <div className="flex flex-wrap justify-between items-center gap-4">
                  {currentSegment.cta.features.map((feat, idx) => {
                    const CIcon = feat.icon;
                    return (
                      <div key={idx} className="flex items-center gap-3 text-slate-300 mx-auto md:mx-0">
                        {CIcon && <CIcon className="text-xl opacity-70" />}
                        <span className="text-sm font-semibold">{feat.title}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default EachSegmentHero;