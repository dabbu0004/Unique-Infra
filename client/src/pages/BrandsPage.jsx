import React, { useEffect } from "react";
import AllBrands from "../components/brands/AllBrands";

const BrandsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <AllBrands />
    </div>
  );
};

export default BrandsPage;
