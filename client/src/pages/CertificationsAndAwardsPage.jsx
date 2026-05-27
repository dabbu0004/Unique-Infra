import React, { useEffect } from "react";
import Certificates from "../components/home/Certificates";

const CertificationsAndAwardsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-34">
      <Certificates />
    </div>
  );
};

export default CertificationsAndAwardsPage;
