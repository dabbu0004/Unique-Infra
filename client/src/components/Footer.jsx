import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { CiLocationArrow1 } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import blackLinesBg from "../assets/blackLinesBg.webp";
import FooterData from "../data/FooterData";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../utils/handleUtils";

const Footer = () => {
  const navigate = useNavigate();
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ email: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email) {
      handleWarning("Please fill the email field.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/query/email`,
        {
          email: formData.email,
        },
      );

      if (res.data.success) {
        handleSuccess("Thank you for subscribing to our newsletter!");
        setFormData({
          email: "",
        });
        setTimeout(() => {
          navigate("/thankyou");
        }, 500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      handleError(
        error.response?.data?.message ||
          "Failed to submit email. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSocialClick = (socialLink) => {
    if (socialLink && socialLink !== "#") {
      window.open(socialLink, "_blank", "noopener,noreferrer");
    }
  };

  const getMapsLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;

  const getTelLink = (phone) => {
    const digits = phone.replace(/[^\d+]/g, "");
    return `tel:${digits}`;
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-[#daedf9d0] text-gray-900 overflow-hidden"
    >
      <div className="absolute right-0 top-0 h-auto md:w-1/2 z-0 pointer-events-none">
        <img
          src={blackLinesBg}
          className="w-full h-full object-cover opacity-5"
          alt="Background pattern"
          loading="lazy" 
        />
      </div>
      <div className="relative z-10 mx-auto px-4 lg:px-16 pt-10 lg:pt-12">
        <div
          className={`flex flex-col lg:flex-row gap-y-8 gap-x-8 items-center lg:items-start text-center lg:text-left transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="lg:w-1/4 w-full flex flex-col items-center lg:items-start">
            <div className="mb-3 w-full flex flex-col items-center lg:items-start">
              <Link to="/" className="mb-2 md:-ml-3">
                <img
                  src={FooterData.company.logo}
                  className="h-16 mx-auto lg:mx-0 object-contain"
                  alt="UISPPL Logo"
                  loading="lazy" 
                />
              </Link>
            </div>
            <p className="text-sm text-gray-700 leading-relaxed mb-4">
              {FooterData.company.description}
            </p>

            <form
              onSubmit={handleSubmit}
              className="flex flex-row items-center justify-center text-center gap-1 lg:gap-2 mb-6 w-full"
            >
              <input
                type="email"
                name="email"
                value={isSubmitting ? "Subscribing..." : formData.email}
                onChange={handleChange}
                placeholder={
                  isSubmitting ? "Subscribing..." : "Enter your email"
                }
                className="flex-1 px-3 py-1.5 text-sm rounded-lg bg-white text-gray-800 placeholder-gray-500 font-medium focus:outline-none focus:ring-2 focus:ring-gray-900 disabled:bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-500"
                required
                disabled={isSubmitting}
                readOnly={isSubmitting}
              />
              <button
                type="submit"
                className="w-8 h-8 shrink-0 cursor-pointer hover:scale-110 transition-all duration-300 bg-gray-900 rounded-full flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                disabled={isSubmitting}
                aria-label="Subscribe"
              >
                <CiLocationArrow1 className="text-lg text-white" />
              </button>
            </form>

            <div className="space-y-3 w-full flex flex-col items-start">
              <h4 className="text-lg font-bold text-gray-900">
                Contact UISPPL
              </h4>
              <div className="space-y-2 text-sm w-full">
                <div className="flex flex-row items-center gap-2 justify-start">
                  <FaPhoneAlt className="text-gray-700 text-sm flex-shrink-0" />
                  <a
                    href={getTelLink(FooterData.company.contact.phone)}
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium"
                  >
                    {FooterData.company.contact.phone}
                  </a>
                </div>
                <div className="flex flex-row items-center sm:items-start gap-2 justify-start">
                  <FaEnvelope className="text-gray-700 text-sm flex-shrink-0 mt-0.5" />
                  <a
                    href={`mailto:${FooterData.company.contact.email}`}
                    className="text-gray-700 hover:text-gray-900 transition-colors font-medium break-all"
                  >
                    {FooterData.company.contact.email}
                  </a>
                </div>
                {FooterData.company.contact.addresses.map((addr, idx) => (
                  <div
                    key={idx}
                    className="flex flex-row items-start gap-2 justify-start text-left"
                  >
                    <FaMapMarkerAlt className="text-gray-700 text-sm flex-shrink-0 mt-1" />
                    <a
                      href={getMapsLink(addr.value)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-700 hover:text-gray-900 transition-colors leading-relaxed font-medium hover:underline"
                    >
                      <span className="font-bold text-black">
                        {addr.title}:
                      </span>{" "}
                      {addr.value}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/4 w-full border-l-0 lg:border-l border-gray-300 pl-0 lg:pl-6 flex flex-col items-start">
            <h3 className="text-lg font-bold text-gray-900 mb-3">Top Brands</h3>
            <ul className="space-y-1.5 w-full flex flex-col items-start">
              {FooterData.topBrands.map((brand, index) => (
                <li key={index} className="w-full flex justify-start">
                  <Link
                    to={brand.link || "#"}
                    className="text-gray-700 hover:text-blue-700 hover:translate-x-1 w-full md:w-fit mx-auto md:mx-0 py-1 text-sm block text-left transition-all duration-300 font-medium"
                  >
                    {brand.name || brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/4 w-full pl-0 lg:pl-4 flex flex-col items-start">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Industries We Power
            </h3>
            <ul className="space-y-1.5 w-full flex flex-col items-start">
              {FooterData.industries.map((industry, index) => (
                <li key={index} className="w-full flex justify-start">
                  <Link
                    to={`segments/${industry.link}` || "#"}
                    className="text-gray-700 hover:text-blue-700 hover:translate-x-1 w-full md:w-fit mx-auto md:mx-0 py-1 text-sm block text-left transition-all duration-300 font-medium"
                  >
                    {industry.name || industry}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:w-1/4 w-full pl-0 lg:pl-4 flex flex-col items-start">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              Quick Links
            </h3>
            <ul className="space-y-1.5 w-full flex flex-col items-start">
              {FooterData.quickLinks.map((link, index) => (
                <li key={index} className="w-full flex justify-start">
                  <Link
                    to={link.link || "#"}
                    className="text-gray-700 hover:text-blue-700 hover:translate-x-1 w-full md:w-fit mx-auto md:mx-0 py-1 text-sm block text-left transition-all duration-300 font-medium"
                  >
                    {link.name || link}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 w-full flex flex-col items-start">
              <h4 className="text-lg font-bold text-gray-900 mb-3">
                Follow Us
              </h4>
              <div className="flex items-center justify-center gap-3">
                {FooterData.socialMedia.map((social, index) => (
                  <button
                    key={index}
                    onClick={() => handleSocialClick(social.link)}
                    className={`cursor-pointer w-9 h-9 hover:scale-110 ${social.color} rounded-full flex items-center justify-center transition-transform duration-300`}
                    title={social.name}
                    aria-label={`Follow us on ${social.name}`}
                  >
                    <span className="text-base text-white">{social.icon}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div
          className={`border-t border-gray-300 mt-8 py-5 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start lg:items-center text-xs text-gray-600 gap-3">
            <p className="font-medium">
              ©{new Date().getFullYear()} {FooterData.company.fullName}.
            </p>
            <p className="font-medium">
              Designed and Developed by{" "}
              <a
                className="text-[#004068] underline cursor-pointer hover:text-blue-800 font-bold"
                href="https://creativeoncoffee.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Creative On Coffee
              </a>
            </p>
            <div className="flex gap-4">
              <Link
                to="/privacy-policy"
                className="hover:text-gray-900 transition-colors font-medium"
              >
                Privacy Policy
              </Link>
              <span className="text-gray-400">|</span>
              <Link
                to="/terms-of-service"
                className="hover:text-gray-900 transition-colors font-medium"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
