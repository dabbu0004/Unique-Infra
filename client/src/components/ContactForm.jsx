import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { HiChevronDown } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import BrandsPageData from "../data/BrandsPageData";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../utils/handleUtils";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const ContactForm = ({ productTitle, productBrand }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    location: "",
    brands: [],
    products: [],
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showBrandDropdown, setShowBrandDropdown] = useState(false);
  const [showProductDropdown, setShowProductDropdown] = useState(false);
  const [availableProducts, setAvailableProducts] = useState([]);

  const brandDropdownRef = useRef(null);
  const productDropdownRef = useRef(null);
  useEffect(() => {
    if (!productBrand) return;
    const cleanBrandQuery = productBrand.trim().toLowerCase();
    const matchedBrandObj = BrandsPageData.find(
      (b) => b.name.trim().toLowerCase() === cleanBrandQuery
    );
    
    const finalBrandName = matchedBrandObj ? matchedBrandObj.name : productBrand.trim();

    setFormData((prev) => {
      if (prev.brands.includes(finalBrandName)) return prev;
      return {
        ...prev,
        brands: [...prev.brands, finalBrandName],
      };
    });
  }, [productBrand]);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        brandDropdownRef.current &&
        !brandDropdownRef.current.contains(event.target)
      ) {
        setShowBrandDropdown(false);
      }
      if (
        productDropdownRef.current &&
        !productDropdownRef.current.contains(event.target)
      ) {
        setShowProductDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  useEffect(() => {
    if (formData.brands.length > 0) {
      const products = [];

      formData.brands.forEach((brandName) => {
        const brand = BrandsPageData.find((b) => b.name === brandName);

        if (brand) {
          brand.products.forEach((product) => {
            const pTitle = product.title || product.name;
            products.push({
              brandName: brand.name,
              productName: pTitle,
              displayName: `${brand.name} - ${pTitle}`,
            });
          });
        }
      });

      setAvailableProducts(products);
      const validProducts = formData.products.filter((selectedProduct) =>
        products.some((p) => p.displayName === selectedProduct)
      );

      if (validProducts.length !== formData.products.length) {
        setFormData((prev) => ({ ...prev, products: validProducts }));
      }
    } else {
      setAvailableProducts([]);
      setFormData((prev) => ({ ...prev, products: [] }));
    }
  }, [formData.brands]);
  useEffect(() => {
    if (!productTitle || availableProducts.length === 0) return;

    const cleanTitle = productTitle.trim().toLowerCase();
    const match = availableProducts.find(
      (p) => p.productName?.trim().toLowerCase() === cleanTitle
    );

    if (!match) return;

    setFormData((prev) => {
      if (prev.products.includes(match.displayName)) return prev;
      return {
        ...prev,
        products: [...prev.products, match.displayName],
      };
    });
  }, [availableProducts, productTitle]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleBrandToggle = (brandName) => {
    setFormData((prev) => {
      const isSelected = prev.brands.includes(brandName);
      return {
        ...prev,
        brands: isSelected
          ? prev.brands.filter((b) => b !== brandName)
          : [...prev.brands, brandName],
      };
    });
  };

  const handleProductToggle = (productDisplayName) => {
    setFormData((prev) => {
      const isSelected = prev.products.includes(productDisplayName);
      return {
        ...prev,
        products: isSelected
          ? prev.products.filter((p) => p !== productDisplayName)
          : [...prev.products, productDisplayName],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formData.name ||
      !formData.companyName ||
      !formData.email ||
      !formData.phone ||
      !formData.location
    ) {
      handleWarning("Please fill all the required fields.");
      return;
    }
    if (formData.brands.length === 0) {
      handleWarning("Please select at least one brand.");
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/query/querypost`,
        {
          name: formData.name,
          companyName: formData.companyName,
          email: formData.email,
          phone: formData.phone,
          location: formData.location,
          brands: formData.brands,
          products: formData.products,
          message: formData.message || "",
        },
      );

      if (res.data.success) {
        handleSuccess(
          "Thank you for your query! We will get back to you soon.",
        );
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          location: "",
          brands: [],
          products: [],
          message: "",
        });
        setTimeout(() => {
          navigate("/thankyou");
        }, 500);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      handleError(
        error.response?.data?.message ||
          "Failed to submit query. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "9217030961";
    const subject = productTitle || (formData.products.length > 0 ? formData.products[0] : "your products");
    const message = `Hi Team, I need Assistance regarding ${subject}. Could you Please Assist?`;
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  const handlePhoneClick = () => {
    const phoneNumber = "9217030961";
    window.open(`tel:${phoneNumber}`, "_self");
  };

  return (
    <div className="bg-[#daedf9ad] hover:bg-[#f3faff] hover:border-1 hover:border-gray-200 hover:scale-105 transition-all duration-300 p-8 rounded-2xl shadow-md w-full max-w-xl">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-2">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Your Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0577b5] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Company Name *
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0577b5] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your company name"
          />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0577b5] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="your@email.com"
            />
          </div>
          <div className="flex-1">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              disabled={isSubmitting}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0577b5] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              placeholder="+91 XXXXX XXXXX"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Location *
          </label>
          <input
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            disabled={isSubmitting}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0577b5] focus:border-transparent outline-none transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Enter your city"
          />
        </div>

        <div className="relative" ref={brandDropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Brand(s) *
          </label>
          <div
            onClick={() =>
              !isSubmitting && setShowBrandDropdown(!showBrandDropdown)
            }
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              isSubmitting
                ? "cursor-not-allowed bg-gray-100"
                : "cursor-pointer bg-transparent"
            } flex items-center justify-between focus:ring-2 focus:ring-[#0577b5]`}
          >
            <span className="text-gray-700">
              {formData.brands.length > 0
                ? `${formData.brands.length} brand(s) selected`
                : "Select brands"}
            </span>
            <HiChevronDown
              className={`transition-transform ${
                showBrandDropdown ? "rotate-180" : ""
              }`}
            />
          </div>
          {showBrandDropdown && !isSubmitting && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {BrandsPageData.map((brand) => (
                <div
                  key={brand.id}
                  onClick={() => handleBrandToggle(brand.name)}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                >
                  <input
                    type="checkbox"
                    checked={formData.brands.includes(brand.name)}
                    onChange={() => {}}
                    className="cursor-pointer"
                  />
                  <span className="text-gray-700">{brand.name}</span>
                </div>
              ))}
            </div>
          )}
          {formData.brands.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.brands.map((brand) => (
                <span
                  key={brand}
                  className="px-3 py-1 bg-[#004068] text-white text-sm rounded-full flex items-center gap-2"
                >
                  {brand}
                  <button
                    type="button"
                    onClick={() => !isSubmitting && handleBrandToggle(brand)}
                    disabled={isSubmitting}
                    className="cursor-pointer text-white hover:text-gray-200 disabled:cursor-not-allowed"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>

        <div className="relative" ref={productDropdownRef}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Product(s)
          </label>
          <div
            onClick={() => {
              if (formData.brands.length > 0 && !isSubmitting) {
                setShowProductDropdown(!showProductDropdown);
              }
            }}
            className={`w-full px-3 py-2 border border-gray-300 rounded-md ${
              formData.brands.length > 0 && !isSubmitting
                ? "cursor-pointer bg-transparent"
                : "cursor-not-allowed bg-gray-100"
            } flex items-center justify-between focus:ring-2 focus:ring-[#0577b5]`}
          >
            <span
              className={
                formData.brands.length > 0 && !isSubmitting
                  ? "text-gray-700"
                  : "text-gray-400"
              }
            >
              {formData.products.length > 0
                ? `${formData.products.length} product(s) selected`
                : formData.brands.length > 0
                  ? "Select products"
                  : "Select brands first"}
            </span>
            <HiChevronDown
              className={`transition-transform ${
                showProductDropdown ? "rotate-180" : ""
              }`}
            />
          </div>
          {showProductDropdown &&
            availableProducts.length > 0 &&
            !isSubmitting && (
              <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto">
                {availableProducts.map((product, idx) => (
                  <div
                    key={idx}
                    onClick={() => handleProductToggle(product.displayName)}
                    className="px-3 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <input
                      type="checkbox"
                      checked={formData.products.includes(product.displayName)}
                      onChange={() => {}}
                      className="cursor-pointer"
                    />
                    <span className="text-gray-700 text-sm">
                      {product.displayName}
                    </span>
                  </div>
                ))}
              </div>
            )}
          {formData.products.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-2">
              {formData.products.map((product) => (
                <span
                  key={product}
                  className="px-3 py-1 bg-[#004068] text-white text-xs rounded-full flex items-center gap-2"
                >
                  {product}
                  <button
                    type="button"
                    onClick={() =>
                      !isSubmitting && handleProductToggle(product)
                    }
                    disabled={isSubmitting}
                    className="cursor-pointer text-white hover:text-gray-200 disabled:cursor-not-allowed"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          )}
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Project Requirements
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            disabled={isSubmitting}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#0577b5] focus:border-transparent outline-none transition-all resize-vertical disabled:bg-gray-100 disabled:cursor-not-allowed"
            placeholder="Tell us about your project requirements..."
          ></textarea>
        </div>
        <div className="text-xs text-gray-500 mb-4">
          By submitting this form, you agree to the processing of personal data
          according to our{" "}
          <button
            type="button"
            onClick={() => {
              navigate("/privacy-policy");
            }}
            disabled={isSubmitting}
            className="underline cursor-pointer text-blue-900 hover:text-blue-950 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Privacy Policy
          </button>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="cursor-pointer text-lg w-full bg-[#004068] hover:bg-[#00273f] text-white py-2 px-6 rounded-full font-semibold hover:scale-105 transition-all duration-300 shadow-sm disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
        >
          {isSubmitting ? "Submitting..." : "Submit Query"}
          {!isSubmitting && <FiArrowRight className="text-lg" />}
        </button>
        <div className="flex flex-row gap-2 mt-2 w-full">
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className="cursor-pointer flex-1 flex items-center justify-center gap-1 sm:gap-2 text-sm  md:text-lg bg-[#25D366] hover:bg-[#1ebd57] text-white py-2 rounded-xl font-normal hover:scale-105 transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            <FaWhatsapp className="text-xl md:text-xl" />
            Buy on Chat
          </button>

          <button
            type="button"
            onClick={handlePhoneClick}
            className="cursor-pointer flex-1 flex items-center justify-center gap-1 sm:gap-2 text-sm md:text-lg md:text-3xl tracking-tighter sm:tracking-normal bg-[#0577b5] hover:bg-[#046194] text-white py-0 rounded-xl font-normal hover:scale-105 transition-all duration-300 shadow-sm whitespace-nowrap"
          >
            <FaPhoneAlt className="text-base md:text-xl" />
             9217030961
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;