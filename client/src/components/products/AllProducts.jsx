import React, { useState, useMemo, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaSearch, FaFilter } from "react-icons/fa";
import { FiArrowRight, FiZap, FiShield, FiBox, FiTag, FiX, FiChevronDown } from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import AnimateAppear from "../animations/AnimateAppear";
import BrandsPageData, {
  OtherBrandsData,
  TopBrandsData,
} from "../../data/BrandsPageData";

// 🔥 PERMANENT CATEGORIES FOR SIDEBAR 🔥
const BASE_CATEGORIES = ["Electrical", "Automation", "Tools & Tackles", "Mechanical", "Lubricants", "Safety"];
const PRODUCTS_PER_PAGE = 9;

const AllProducts = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showOtherBrands, setShowOtherBrands] = useState(false);
  const [visibleProducts, setVisibleProducts] = useState(PRODUCTS_PER_PAGE);
  const hasMountedScrollRef = useRef(false);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get("category");
    if (cat) {
      const decoded = decodeURIComponent(cat);
      setSelectedCategories([decoded.trim()]);
      setSearchTerm("");
      setIsMobileFilterOpen(true);
    }
  }, [location.search]);
  

  const productsWithBrands = useMemo(() => {
    return BrandsPageData.flatMap((brandData) => {
      if (!brandData || !brandData.products) return [];
      
      const safeBrandName = (brandData.name || "Unknown Brand").trim();
      
      // Extract brand category robustly
      let brandCats = brandData.category || brandData.categories || ["Electrical"];
      if (!Array.isArray(brandCats)) brandCats = [brandCats];
      let mainBrandCat = brandCats[0] || "Electrical";
      if (mainBrandCat.toLowerCase() === "mechenical") mainBrandCat = "Mechanical";

      return brandData.products.map((product) => {
        return { 
          ...product, 
          brand: safeBrandName,
          brandMainCategory: mainBrandCat, // Links the product to Automation, Electrical, etc.
          title: (product.title || product.name || "Unknown Product").trim(),
          category: (product.category || "").trim()
        };
      });
    });
  }, []);

  const topBrands = TopBrandsData.map((brand) => (brand.name || "").trim()).filter(Boolean);
  const otherBrands = OtherBrandsData.map((brand) => (brand.name || "").trim()).filter(Boolean);

  const filteredProducts = productsWithBrands.filter((product) => {
    const searchLower = searchTerm.toLowerCase().trim();
    
    const pTitle = (product.title || "").toLowerCase();
    const pCategory = (product.category || "").toLowerCase();
    const pBrand = (product.brand || "").toLowerCase();

    const matchesSearch =
      !searchLower ||
      pTitle.includes(searchLower) ||
      pCategory.includes(searchLower) ||
      pBrand.includes(searchLower);

    const matchesBrand =
      selectedBrands.length === 0 || selectedBrands.includes(product.brand);
      
    // 🔥 FILTER FIX: Matches if User clicks "Automation" (brandMainCategory) OR "Solar Panel" (product category)
    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(product.brandMainCategory) ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesBrand && matchesCategory;
  });

  useEffect(() => {
    setVisibleProducts(PRODUCTS_PER_PAGE);
  }, [searchTerm, selectedBrands, selectedCategories]);

  useEffect(() => {
    if (!hasMountedScrollRef.current) {
      hasMountedScrollRef.current = true;
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedBrands, selectedCategories]);

  const visibleFilteredProducts = filteredProducts.slice(0, visibleProducts);
  const hasMoreProducts = visibleProducts < filteredProducts.length;

  const handleBrandToggle = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + PRODUCTS_PER_PAGE);
  };

  return (
    <div className="bg-gray-50 pb-20">
      <div className="max-w-7xl mx-auto px-4 py-12 md:pt-38 pt-20">
        <div className="text-center mb-10 md:mb-16">
          <AnimateAppear>
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] text-[#19587e] mb-3 md:mb-4">
              DISCOVER OUR RANGE
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
              All <span className="text-[#19587e]">Products</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#0e466a99] max-w-3xl mx-auto">
              Here you can find all the products we offer. Click on each product
              to know more about it and its specifications.
            </p>
          </AnimateAppear>
        </div>

        <div className="relative w-full mb-8">
          <FaSearch className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 text-base" />
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-white rounded-lg border border-slate-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0577b5] text-gray-700 transition"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm("")}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
            >
              <FiX className="text-lg" />
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-lg shadow-sm text-gray-700 font-semibold"
          >
            <FaFilter className="text-[#0577b5]" />
            {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>

          <aside className={`w-full md:w-1/4 lg:w-1/5 shrink-0 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ${isMobileFilterOpen ? "block" : "hidden md:block"} md:sticky md:top-24`}>
            <AnimateAppear>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#004068] flex items-center gap-2">
                <FaFilter className="text-[#0577b5] text-sm" /> Filters
              </h2>
              {(selectedBrands.length > 0 || selectedCategories.length > 0 || searchTerm) && (
                <button
                  onClick={() => {
                    setSelectedBrands([]);
                    setSelectedCategories([]);
                    setSearchTerm("");
                  }}
                  className="text-xs text-red-500 cursor-pointer font-semibold hover:text-red-700 transition flex items-center gap-1"
                >
                  <FiX /> Clear All
                </button>
              )}
            </div>

            <div className="mb-8">
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <HiOutlineOfficeBuilding className="text-[#0577b5]" /> Brands
              </h3>
              <div className="flex flex-col gap-3">
                {topBrands.map((brand, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandToggle(brand)}
                      className="w-4 h-4 rounded border-gray-300 text-[#19587e] focus:ring-[#19587e] cursor-pointer"
                    />
                    <span className="text-slate-600 text-sm group-hover:text-[#0577b5] transition font-medium">
                      {brand}
                    </span>
                  </label>
                ))}

                {otherBrands.length > 0 && (
                  <div className="mt-2 border-t border-slate-100 pt-2">
                    <button 
                      onClick={() => setShowOtherBrands(!showOtherBrands)}
                      className="flex items-center justify-between w-full text-sm font-bold text-slate-700 hover:text-[#0577b5] transition-colors cursor-pointer py-1"
                    >
                        <span className="flex items-center gap-2">
                                                <HiOutlineOfficeBuilding className="text-[#0577b5]" />
                                                <span>OTHER BRANDS </span>
                                              </span>
                      <FiChevronDown className={`transition-transform duration-300 ${showOtherBrands ? 'rotate-180' : ''}`} />
                    </button>
                    
                    <div className={`flex flex-col gap-3 pl-2 overflow-hidden transition-all duration-300 ease-in-out ${showOtherBrands ? "max-h-60 mt-3 overflow-y-auto border-l-2 border-slate-200 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" : "max-h-0"}`}>
                      {otherBrands.map((brand, i) => (
                        <label key={i} className="flex items-center gap-3 cursor-pointer group">
                          <input
                            type="checkbox"
                            checked={selectedBrands.includes(brand)}
                            onChange={() => handleBrandToggle(brand)}
                            className="w-4 h-4 rounded border-gray-300 text-[#19587e] focus:ring-[#19587e] cursor-pointer"
                          />
                          <span className="text-slate-600 text-sm group-hover:text-[#0577b5] transition font-medium">
                            {brand}
                          </span>
                        </label>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                <FiBox className="text-[#0577b5]" /> Categories
              </h3>
              <div className="flex flex-col gap-3">
                {BASE_CATEGORIES.map((category, i) => (
                  <label key={i} className="flex items-center gap-3 cursor-pointer group">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => handleCategoryToggle(category)}
                      className="w-4 h-4 rounded border-gray-300 text-[#19587e] focus:ring-[#19587e] cursor-pointer"
                    />
                    <span className="text-slate-600 text-sm group-hover:text-[#0577b5] transition font-medium">
                      {category}
                    </span>
                  </label>
                ))}
              </div>
            </div>
          </AnimateAppear>
          </aside>

          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-slate-500 font-medium">
                Showing{" "}
                <span className="font-bold text-[#004068]">
                  {Math.min(visibleFilteredProducts.length, filteredProducts.length)}
                </span>{" "}
                of {filteredProducts.length} products
              </p>
              {(selectedBrands.length > 0 || selectedCategories.length > 0) && (
                <p className="text-xs text-[#0577b5] font-semibold">
                  {selectedBrands.length + selectedCategories.length} filter(s)
                  active
                </p>
              )}
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="flex flex-wrap -mx-3">
                {visibleFilteredProducts.map((product, index) => {
                  const descText = Array.isArray(product.description)
                    ? product.description[0]
                    : product.description;
                    
                  const displayImage = product.images ? product.images[0] : product.image;
                  const productCategory = product.category || product.brandMainCategory || "Product";
                  
                  const generatedSlug = product.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
                  const productSlug = product.slug || generatedSlug;

                  return (
                    <div
                      key={`${product.brand}-${productSlug}-${index}`}
                      className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 flex animate-fade-in"
                    >
                      <Link
                        to={`/product/${productSlug}`}
                        className="w-full flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group overflow-hidden"
                      >
                        <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
                          <img
                           loading = "lazy"
                            src={displayImage || "/placeholder.jpg"}
                            alt={product.title}
                            className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#004068] text-[10px] font-bold px-2.5 py-1.5 rounded-full shadow-md border border-blue-100">
                            <MdVerified className="text-sm text-[#004068]" />
                            {product.brand}
                          </div>
                        </div>

                        <div className="px-2 pt-3 pb-1 border-b border-slate-100">
                          <h3 className="text-base font-bold text-[#004068] leading-snug line-clamp-2 h-[2.75rem] group-hover:text-[#0577b5] transition">
                            {product.title}
                          </h3>
                        </div>

                        <div className="p-2 flex flex-col flex-1">
                          <p className="text-sm text-slate-500 line-clamp-2 mb-1 leading-relaxed">
                            {descText || "Explore product details and specifications."}
                          </p>

                          <div className="flex flex-wrap gap-2 mb-1">
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                              <FiShield className="text-[#0577b5] shrink-0" />
                              Industrial Grade
                            </div>
                            <div className="flex items-center gap-1.5 text-[10px] font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-2.5 py-1.5">
                              <FiZap className="text-[#0577b5] shrink-0" />
                              In Stock
                            </div>
                          </div>

                          <div className="mt-auto flex items-center justify-between pt-1 border-t border-slate-100">
                            <span className="flex items-center gap-1.5 text-xs font-bold text-[#0577b5] bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg">
                              <FiTag className="shrink-0" />
                              {productCategory}
                            </span>
                            <span className="flex items-center gap-1 text-xs font-semibold text-[#004068] group-hover:text-[#0577b5] transition">
                              View Details
                              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </div>
                  );
                })}
                </div>

                {hasMoreProducts && (
                  <div className="mt-8 flex justify-center">
                    <button
                      onClick={handleViewMore}
                      className="px-6 py-3 bg-[#004068] text-white rounded-lg font-semibold hover:bg-[#00273f] transition flex items-center gap-2 cursor-pointer"
                    >
                      View More Products
                      <FiArrowRight />
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-slate-100">
                <FaSearch className="text-4xl text-slate-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-[#004068] mb-2">
                  No products found
                </h3>
                <p className="text-slate-500 mb-6">
                  Try searching with different keywords or clearing your filters.
                </p>
                <button
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedBrands([]);
                    setSelectedCategories([]);
                  }}
                  className="mt-6 px-6 py-3 bg-[#004068] text-white rounded-lg font-semibold hover:bg-[#00273f] transition flex items-center gap-2 mx-auto cursor-pointer"
                >
                  <FiX /> Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProducts;