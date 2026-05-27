import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaPhoneAlt } from "react-icons/fa";

const PhoneButton = () => {
  const phoneNumber = "92170 30961";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handlePhoneClick = () => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      onClick={handlePhoneClick}
      aria-label="Call Us"
      title="Call Us"
      className="fixed border-white border lg:hidden z-[9999] bg-[#0c486e] hover:bg-[#05395a] text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg cursor-pointer flex items-center justify-center hover:scale-110 transition-all duration-300 active:scale-95"
      style={{
        left: "calc(0.75rem + env(safe-area-inset-left))",
        bottom: "calc(0.75rem + env(safe-area-inset-bottom))",
        touchAction: "manipulation",
      }}
    >
      <FaPhoneAlt className="text-2xl md:text-4xl" />
    </button>,
    document.body
  );
};

export default PhoneButton;
