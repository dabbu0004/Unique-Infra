import React, { useEffect } from "react";
import AllProducts from "../components/products/AllProducts";

const ProductsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <AllProducts />
    </div>
  );
};
export default ProductsPage;
