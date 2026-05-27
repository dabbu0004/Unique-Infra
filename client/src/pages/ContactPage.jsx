import React, { useEffect } from "react";
import AddressMap from "../components/AddressMap";
import ContactHero from "../components/contact/ContactHero";

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="py-30">
      <ContactHero />
      <AddressMap />
    </div>
  );
};

export default ContactPage;
