import React, { useEffect } from "react";
import AboutHero from "../components/about/AboutHero";
import AboutUsSection from "../components/about/AboutUsSection";
import OurProcess from "../components/about/OurProcess";
import WhyChooseUs from "../components/about/WhyChooseUs";
import Mission from "../components/about/Mission";
import Vision from "../components/about/Vision";
import ContactHero from "../components/contact/ContactHero";
const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AboutHero />
      <AboutUsSection />
      <WhyChooseUs />
      <OurProcess />
      <Mission />
      <Vision />
      <ContactHero />
    </div>
  );
};

export default AboutPage;
