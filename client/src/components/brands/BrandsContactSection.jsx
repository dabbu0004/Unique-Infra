import React, { useState } from "react";
import axios from "axios";
import {
  handleError,
  handleSuccess,
  handleWarning,
} from "../../utils/handleUtils";
import { useNavigate } from "react-router-dom";

const inputTheme =
  "w-full px-4 py-3 bg-transparent border-b-2 border-gray-400 focus:border-blue-900 focus:outline-none outline-none transition-all duration-300 text-gray-900 placeholder-gray-800 disabled:bg-gray-100 disabled:cursor-not-allowed";

const BrandsContactSection = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    phone: "",
    location: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
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
          brands: [],
          products: [],
          message: formData.message || "",
        }
      );

      if (res.data.success) {
        handleSuccess(
          "Thank you for your query! We will get back to you soon."
        );
        setFormData({
          name: "",
          companyName: "",
          email: "",
          phone: "",
          location: "",
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
          "Failed to submit query. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="w-full px-4 py-16 md:px-8 lg:px-20 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#daedf9ad] hover:bg-[#f3faff] rounded-2xl shadow-md p-8 md:p-12 border border-blue-300 hover:scale-102 duration-300 transition-all">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-700 mb-2 leading-tight">
              Get in Touch
              <span className="text-[#19587e]"> With Us</span>
            </h2>
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="What's your name? *"
                  className={inputTheme}
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="What's your Company Name? *"
                  className={inputTheme}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="What's your Phone Number? *"
                  className={inputTheme}
                  required
                />
              </div>
              <div className="flex-1">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="What's your Email? *"
                  className={inputTheme}
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="What's your Location? *"
                  className={inputTheme}
                  required
                />
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 lg-items-end">
              <div className="flex-1">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={isSubmitting}
                  placeholder="Your Message"
                  rows="2"
                  className={inputTheme + " resize-none"}
                />
              </div>
              <div className="flex justify-start">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="cursor-pointer bg-[#004068] hover:bg-[#00273f] transition-all duration-300 text-white font-semibold text-lg px-12 py-3 rounded-lg shadow-md hover:shadow-xl hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "SUBMITTING..." : "SUBMIT"}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BrandsContactSection;
