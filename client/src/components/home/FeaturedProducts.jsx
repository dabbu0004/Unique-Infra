import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { gsap } from "gsap";
import BrandsPageData from "../../data/BrandsPageData";
import AnimateAppear from "../animations/AnimateAppear";

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const sectionRef = useRef(null);
  const categoriesRef = useRef(null);
  const categoryScrollRef = useRef(null);
  const gridRef = useRef(null);

  const generateSlug = (name) => {
    return (name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  };

  const { allFeaturedProducts, activeBrands } = useMemo(() => {
    const brandsWithProducts = BrandsPageData.filter(b => b.products && b.products.length > 0);
    const products = brandsWithProducts.flatMap(brand => {
      return brand.products.map(product => {
        const pTitle = product.title || product.name;
        const pImage = (product.images && product.images.length > 0) ? product.images[0] : product.image;
        const pSlug = product.slug || generateSlug(pTitle);

        return {
          name: pTitle,
          category: brand.name,
          brandUrl: `/brands/${brand.slug}`,
          image: pImage
        };
      });
    });

    return { allFeaturedProducts: products, activeBrands: brandsWithProducts };
  }, []);

  const categories = ["All", ...activeBrands.map(b => b.name)];

  useEffect(() => {
    setFilteredProducts(allFeaturedProducts);
  }, [allFeaturedProducts]);

  useEffect(() => {
    let filtered = allFeaturedProducts;

    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (product) => product.category === selectedCategory
      );
    }

    setFilteredProducts(filtered);
  }, [selectedCategory, allFeaturedProducts]);

  useEffect(() => {
    const elements = [categoriesRef.current];

    gsap.set(elements, { opacity: 0, y: 30 });

    gsap.to(elements, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      const cards = gridRef.current.children;
      gsap.set(cards, { opacity: 0, scale: 0.9 });
      gsap.to(cards, {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });
    }
  }, [filteredProducts]);

  useEffect(() => {
    checkScrollButtons();
  }, []);

  const checkScrollButtons = () => {
    if (categoryScrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        categoryScrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const handleScroll = (direction) => {
    if (categoryScrollRef.current) {
      const scrollAmount = 150;
      const newScrollLeft =
        direction === "left"
          ? categoryScrollRef.current.scrollLeft - scrollAmount
          : categoryScrollRef.current.scrollLeft + scrollAmount;

      categoryScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: "smooth",
      });

      setTimeout(checkScrollButtons, 300);
    }
  };

  const renderFeaturedProducts = () => {
    let featuredProducts = [];

    const fillToFiveProducts = (products) => {
      if (products.length === 0) {
        return [];
      }

      const filledProducts = [...products];
      let repeatIndex = 0;

      while (filledProducts.length < 5) {
        filledProducts.push(products[repeatIndex % products.length]);
        repeatIndex += 1;
      }

      return filledProducts.slice(0, 5);
    };

    if (selectedCategory === "All") {
      const brandsToShow = activeBrands.slice(0, 5).map(b => b.name);
      brandsToShow.forEach((brandName) => {
        const product = allFeaturedProducts.find((p) => p.category === brandName);
        if (product) featuredProducts.push(product);
      });
      if (featuredProducts.length < 5) {
        const extraProducts = allFeaturedProducts.filter(p => !featuredProducts.includes(p));
        featuredProducts = fillToFiveProducts([...featuredProducts, ...extraProducts]);
      }
    } else {
      featuredProducts = fillToFiveProducts(filteredProducts.slice(0, 5));
    }

    if (featuredProducts.length === 0) {
      return (
        <div className="w-full text-center py-12">
          <p className="text-gray-500 text-lg">No products found</p>
        </div>
      );
    }

    return (
      <div className="w-full flex flex-col lg:flex-row gap-4 md:gap-6">
        
        {/* --- LEFT SIDE: 4 SMALL PRODUCTS --- */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {featuredProducts.slice(0, 2).map((product, index) => (
              <Link
                to={product.brandUrl}
                key={index}
                className="bg-white shadow-md border-1 border-gray-300 w-full sm:w-1/2 flex-1 group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden p-4 flex justify-center items-center">
                  <img
                    src={product.image || "/placeholder.jpg"}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 mix-blend-multiply"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#031928] to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold text-base mb-1 truncate whitespace-normal line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-xs md:text-sm">{product.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            {featuredProducts.slice(2, 4).map((product, index) => (
              <Link
                to={product.brandUrl}
                key={index + 2}
                className="bg-white shadow-md border-1 border-gray-300 w-full sm:w-1/2 flex-1 group relative rounded-xl overflow-hidden transition-all duration-300 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden p-4 flex justify-center items-center">
                  <img
                    src={product.image || "/placeholder.jpg"}
                    alt={product.name}
                    loading="lazy"
                    className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 mix-blend-multiply"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#031928] to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <h3 className="text-white font-semibold text-base mb-1 truncate whitespace-normal line-clamp-2 leading-tight">
                      {product.name}
                    </h3>
                    <p className="text-gray-200 text-xs md:text-sm">{product.category}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* --- RIGHT SIDE: 1 LARGE PRODUCT --- */}
        <div className="w-full lg:w-1/3 xl:w-[30%] flex mt-4 lg:mt-0">
          {featuredProducts[4] && (
            <Link
              to={featuredProducts[4].brandUrl}
              className="border border-gray-300 shadow-md w-full flex flex-col group relative bg-white rounded-xl overflow-hidden transition-all duration-300 cursor-pointer min-h-[250px] sm:min-h-[350px] lg:min-h-full"
            >
              <div className="absolute inset-0 w-full h-full p-6 pb-24 flex items-center justify-center overflow-hidden">
                <img
                  src={featuredProducts[4].image || "/placeholder.jpg"}
                  alt={featuredProducts[4].name}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-110 transition-all duration-500 mix-blend-multiply"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#031928] via-transparent to-transparent opacity-70 group-hover:opacity-90 transition-all duration-300 flex items-end">
                <div className="p-6 w-full">
                  <h3 className="text-white font-semibold text-lg md:text-xl mb-2 whitespace-normal break-words leading-tight">
                    {featuredProducts[4].name}
                  </h3>
                  <p className="text-gray-200 text-sm md:text-base">
                    {featuredProducts[4].category}
                  </p>
                </div>
              </div>
            </Link>
          )}
        </div>

      </div>
    );
  };

  const renderedProducts = useMemo(
    () => renderFeaturedProducts(),
    [selectedCategory, filteredProducts]
  );

  return (
    <section
      ref={sectionRef}
      className="w-full bg-gradient-to-bl from-[#e8f6ff] via-[#f5fff5] to-white py-12 px-4 md:px-8 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto text-center mb-8">
        <AnimateAppear>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-gray-700 mb-6">
            Explore Our{" "}
            <span className="text-[#19587e]">Featured Products</span>
          </h2>
        </AnimateAppear>

        {/* 🔥 FIXED RESPONSIVE SCROLLER 🔥 */}
        <div ref={categoriesRef} className="mb-8 md:mb-12 relative w-full px-2 sm:px-6 md:px-10 lg:px-20">
          <div className="relative flex items-center justify-center w-full">
            
            {showLeftArrow && (
              <button
                onClick={() => handleScroll("left")}
                className="absolute left-0 z-10 bg-white shadow-md rounded-full p-2 md:p-2.5 hover:bg-gray-100 transition-colors top-1/2 -translate-y-1/2"
                aria-label="Scroll left"
              >
                <FaChevronLeft className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
              </button>
            )}

            <div
              ref={categoryScrollRef}
              onScroll={checkScrollButtons}
              className="flex gap-3 sm:gap-4 md:gap-5 overflow-x-auto scrollbar-hide scroll-smooth py-2 px-8 sm:px-10 md:px-12 w-full"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`cursor-pointer px-4 md:px-5 py-2 md:py-2.5 rounded-lg text-xs md:text-sm font-semibold transition-all duration-300 whitespace-nowrap flex-shrink-0 shadow-sm ${
                    selectedCategory === category
                      ? "bg-[#004068] hover:bg-[#00273f] text-white scale-105 shadow-md"
                      : "bg-white text-gray-700 border border-gray-200 hover:border-[#004068] hover:text-[#004068]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {showRightArrow && (
              <button
                onClick={() => handleScroll("right")}
                className="absolute right-0 z-10 bg-white shadow-md rounded-full p-2 md:p-2.5 hover:bg-gray-100 transition-colors top-1/2 -translate-y-1/2"
                aria-label="Scroll right"
              >
                <FaChevronRight className="w-3 h-3 md:w-4 md:h-4 text-gray-700" />
              </button>
            )}
            
          </div>
        </div>

        <div ref={gridRef} className="mb-12">
          {renderedProducts}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;