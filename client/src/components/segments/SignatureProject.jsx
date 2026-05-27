import React from "react";
import AnimateAppear from "../animations/AnimateAppear";
import projectImage from "../../assets/parliament.webp";

function SignatureProject() {
  return (
    <div className="bg-white overflow-hidden flex flex-col relative z-10 isolate">
      <div className="w-full max-w-7xl mx-auto md:px-0 px-4 py-12 flex flex-col flex-1">
        <div className="text-center shrink-0">
          <AnimateAppear>
            <p className="text-xs md:text-sm font-semibold tracking-[0.35em] text-[#19587e] mb-4 uppercase">
              Achievement
            </p>
            <h1 className="text-3xl md:text-5xl font-bold text-gray-700 mb-4 tracking-tight">
              Our Signature <span className="text-[#19587e]">Projects</span>
            </h1>
            <p className="text-base md:text-lg text-[#0e466a99] max-w-3xl mx-auto">
              Collaborations that speak of truth and performance
            </p>
          </AnimateAppear>
        </div>
        <div className="w-full flex-1 flex justify-center pb-16 md:pb-2">
          <AnimateAppear className="w-full">
            <div className="relative w-full max-w-7xl mx-auto mt-6 md:mt-10">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100%] md:w-[90%] aspect-square -z-10 pointer-events-none"></div>
              <div className="absolute -inset-2 md:-inset-8 -z-10 bg-gradient-to-r from-amber-600/10 via-yellow-400/15 to-amber-600/10 blur-2xl md:blur-3xl rounded-3xl"></div>
              <div className="relative z-10">
                <div className="bg-[#cfac55] p-1 md:p-2">
                  <div className="bg-gradient-to-br from-[#8a6327] via-[#f7d683] to-[#7a551e] p-3 md:p-6 lg:p-8 shadow-inner">
                    <div className="bg-[#d4aa42] p-1 md:p-2 shadow-sm">
                      <div className="relative w-full h-[350px] md:h-[700px] lg:h-[850px] bg-slate-800 overflow-hidden group">
                        <img
                         loading = "lazy"
                          src={projectImage}
                          alt="Signature Project Building"
                          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent pointer-events-none"></div>
                        <div className="absolute bottom-4 right-4 text-right z-10">
                          <h3 className="text-white text-2xl md:text-5xl font-serif">
                            New Parliament House
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-[7px] left-1/2 transform -translate-x-1/2 bg-[#161b22] border border-[#c59b48] px-6 py-2 shadow-lg z-20">
                  <p className="text-[#f7d683] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap">
                    Delivered in a Record Time
                  </p>
                </div>
              </div>
            </div>
          </AnimateAppear>
        </div>
      </div>
    </div>
  );
}

export default SignatureProject;
