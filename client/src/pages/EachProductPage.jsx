import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EachProductHero from "../components/products/EachProductHero";
import BrandsPageData from "../data/BrandsPageData";
import NotFound from "../components/404_page.jsx";

const EachProductPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const product = BrandsPageData.flatMap((brandData) => brandData.products).find((item) => item.slug === slug);

  if (!product) {
    return (
      <NotFound />
    );
    
  }

  return (
    <div className="py-34">
      <EachProductHero product={product} />
    </div>
  );
};

export default EachProductPage;
