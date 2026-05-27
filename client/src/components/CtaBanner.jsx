import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimateAppear from "./animations/AnimateAppear";

const CtaBanner = () => {
  const navigate = useNavigate();

  const ctaFeatures = [
    "✓ Electrical Supplies",
    "✓ Automation Products",
    "✓ Tools & Tackles",
    "✓ Mechanical Components",
  ];

  return (
    <AnimateAppear delay={0.2}>
      <div className="relative text-center md:m-auto md:my-10 flex justify-center max-w-6xl w-full overflow-hidden lg:rounded-3xl border border-gray-700 bg-gradient-to-br from-[#031928] via-[#0a2c3d] to-[#031928] p-10 lg:p-12 shadow-2xl hover:shadow-[#19587e]/20 hover:scale-[1.02] transition-all duration-300">
        <div className="relative z-10 flex flex-col lg:flex-row items-center gap-10">
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-3xl md:text-3xl font-bold text-white tracking-tight mb-4">
              Best Industrial Supply Company in India{" "}
            </h3>
            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-2xl md:pr-2">
              Partner with India's trusted source for electrical cables,
              automation, motors, and industrial equipment. Genuine products
              from top brands with expert support and fast delivery.
            </p>
          </div>

          <div className="flex-1 w-full">
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {ctaFeatures.map((f) => (
                <div
                  key={f}
                  className="group/feat flex-1 min-w-xs flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center hover:border-gray-400/40 hover:bg-gray-200/15 transition-all duration-300"
                >
                  <span className="text-xs md:text-sm text-gray-300 group-hover/feat:text-white transition-colors">
                    {f}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center lg:items-start gap-5">
            <div className="text-4xl md:text-5xl font-extrabold text-white">
              Get Quote
            </div>
            <p className="text-xs uppercase tracking-widest text-gray-300">
              Expert Consultation Available
            </p>
            <button
              onClick={() => {
                navigate("/contact");
              }}
              className="cursor-pointer inline-flex items-center gap-2 text-lg font-bold bg-gradient-to-r from-[#19587e] to-[#2a7a9f] text-white px-6 py-3 rounded-lg hover:shadow-lg hover:shadow-[#19587e]/50 hover:scale-105 transition-all duration-300"
            >
              <FaPhoneAlt className="w-5 h-5" />
              Talk to Sales
            </button>
            <ul className="mt-2 lg:flex-col md:flex space-x-4 text-base text-gray-300 text-left space-y-2">
              <li>• 24/7 Support</li>
              <li>• Fast Delivery</li>
              <li>• Best Price Guarantee</li>
            </ul>
          </div>
        </div>
      </div>
    </AnimateAppear>
  );
};

export default CtaBanner;
