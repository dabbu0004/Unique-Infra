import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { FaWhatsapp } from "react-icons/fa";

const WhatsApp = () => {
  const phoneNumber = "+919217030961";
  const message = "Hello, I would like to know more about your services!";

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  if (!mounted) return null;

  return createPortal(
    <button
      type="button"
      onClick={handleWhatsAppClick}
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className="fixed border-white border z-[9999] bg-green-500 hover:bg-green-600 text-white w-12 h-12 md:w-14 md:h-14 rounded-full shadow-lg cursor-pointer flex items-center justify-center hover:scale-110 transition-all duration-300 active:scale-95"
      style={{
        right: "calc(0.75rem + env(safe-area-inset-right))",
        bottom: "calc(0.75rem + env(safe-area-inset-bottom))",
        touchAction: "manipulation",
      }}
    >
      <FaWhatsapp className="text-2xl md:text-4xl" />
    </button>,
    document.body
  );
};

export default WhatsApp;
