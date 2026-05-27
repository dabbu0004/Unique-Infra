import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Thankyou = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "AW-17847861414",
      });
    }
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 1000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-3xl md:text-5xl text-gray-700 font-semibold font-serif">
        Thank You!
      </h2>
    </div>
  );
};

export default Thankyou;
