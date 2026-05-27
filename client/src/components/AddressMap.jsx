import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const AddressMap = () => {
  const address = "B30, Block B, Sector 60, Noida, Uttar Pradesh 201309, India";
  const API_KEY = "AIzaSyCgNEq1xSPkgj-H_99kscSOQTRQnYiLHHo";
  const encodedAddress = encodeURIComponent(address);
  const embedSrc = `https://www.google.com/maps/embed/v1/place?key=${API_KEY}&q=${encodedAddress}`;
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl lg:text-5xl font-bold text-[#013752] mb-2 flex items-center justify-center gap-3">
          <FaMapMarkerAlt className="text-[#004068]" />
          <span>Our Address On Map</span>
        </h2>
        <a
          href={googleMapsLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-3 text-[#004068] hover:text-[#013752] font-semibold underline underline-offset-4"
        >
          Open in Google Maps
        </a>
      </div>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-start">
        <div className="w-full bg-white rounded-2xl shadow-sm overflow-hidden border border-[#b6d6e6]">
          <iframe
            src={embedSrc}
            className="w-full h-64 md:h-[40rem]"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location Map"
          />
        </div>
      </div>
    </div>
  );
};

export default AddressMap;
