import React, { useEffect, useRef } from "react";
import {
  HiOutlineMail,
  HiOutlinePhone,
  HiOutlineLocationMarker,
} from "react-icons/hi";
import { gsap } from "gsap";
import ContactForm from "../ContactForm";

const officeData = [
  {
    title: "Corporate",
    address: "B30, Block-B, Sector-60, Noida, Uttar Pradesh 201301",
    phone: "+91 92170 30961",
    email: "info@uisppl.com",
  },
  {
    title: "WareHouse",
    address: "C59, Block-C, Sector-57, Noida, Uttar Pradesh 201301",
    phone: "+91 92170 30961",
    email: "info@uisppl.com",
  },
];

const ContactHero = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const leftElement = leftRef.current;
    const rightElement = rightRef.current;
    const sectionElement = sectionRef.current;

    let observer;
    if (leftElement && rightElement && sectionElement) {
      gsap.set([leftElement, rightElement], { opacity: 0, y: 40 });

      observer = new window.IntersectionObserver(
        (entries) => {
          if (entries[0].isIntersecting) {
            gsap.to(leftElement, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.1,
            });
            gsap.to(rightElement, {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.3,
            });
            observer.disconnect();
          }
        },
        { threshold: 0.2 },
      );
      observer.observe(sectionElement);
    }

    return () => {
      if (observer) observer.disconnect();
      if (leftElement && rightElement) {
        gsap.killTweensOf([leftElement, rightElement]);
      }
    };
  }, []);

  const getMapsLink = (address) =>
    `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      address,
    )}`;

  const getTelLink = (phone) => {
    const digits = phone.replace(/[^\d+]/g, "");
    return `tel:${digits}`;
  };

  return (
    <section
      ref={sectionRef}
      className="w-full flex items-center justify-center px-4 py-10 md:px-8 lg:px-20 bg-white"
    >
      <div className="flex flex-col lg:flex-row items-center justify-evenly w-full gap-10 lg:gap-2 max-w-7xl">
        <div ref={leftRef} className="w-full lg:w-1/2 flex flex-col gap-10">
          {officeData.map((office) => (
            <div key={office.title} className="bg-white rounded-xl p-6 mb-4">
              <h3 className="text-4xl font-bold text-[#19587e] mb-2">
                {office.title} <span className="text-gray-700">Office</span>
              </h3>
              <div className="flex items-start gap-3 mb-2">
                <HiOutlineLocationMarker className="text-[#19587e] w-6 h-6 mt-1" />
                <a
                  href={getMapsLink(office.address)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 text-lg hover:underline"
                >
                  {office.address}
                </a>
              </div>
              <div className="flex items-start gap-3 mb-2">
                <HiOutlinePhone className="text-[#19587e] w-6 h-6 mt-1" />
                <a
                  href={getTelLink(office.phone)}
                  className="text-gray-700 text-lg hover:underline"
                >
                  {office.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <HiOutlineMail className="text-[#19587e] w-6 h-6 mt-1" />
                <a
                  href={`mailto:${office.email}`}
                  className="text-gray-700 text-lg hover:underline"
                >
                  {office.email}
                </a>
              </div>
            </div>
          ))}
        </div>
        <div
          ref={rightRef}
          className="w-full lg:w-1/2 flex items-center justify-center"
        >
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
