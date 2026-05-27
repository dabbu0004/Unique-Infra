import React, { useEffect } from "react";
import BrandsHero from "../components/brands/BrandsHero";
import BrandsProducts from "../components/brands/BrandsProducts";
import CtaBanner from "../components/CtaBanner";
import BrandsCompanyProfile from "../components/brands/BrandsCompanyProfile";
import BrandsFaq from "../components/brands/BrandsFaq";

const EachBrandPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <BrandsHero />
      <BrandsProducts />
      <CtaBanner />
      <BrandsCompanyProfile />
      <BrandsFaq />
    </div>
  );
};

export default EachBrandPage;
