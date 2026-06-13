import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import EachSegmentHero from "../components/segments/EachSegmentHero";
import OurClients from "../components/home/Clients";
import ContactHero from "../components/contact/ContactHero";
import CtaBanner from "../components/CtaBanner";

const EachSegmentPage = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [location.pathname]);

  return (
    <>
      <EachSegmentHero />
      <OurClients />
      <CtaBanner />
      <ContactHero />
    </>
  );
};

export default EachSegmentPage;
