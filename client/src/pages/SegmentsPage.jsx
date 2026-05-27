import React, { useEffect } from "react";
import AllSegments from "../components/segments/AllSegments";
import SignatureProject from "../components/segments/SignatureProject";
import ContactHero from "../components/contact/ContactHero";
import OurClients from "../components/home/Clients";

const SegmentsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <AllSegments />
       <div style={{ isolation: "isolate", position: "relative", zIndex: 1 }}>
      <SignatureProject />
      <OurClients />
      <ContactHero />
       </div>
    </>
  );
};

export default SegmentsPage;
