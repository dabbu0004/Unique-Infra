import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import { FiArrowRight, FiZap, FiShield, FiTag, FiX, FiBox, FiChevronDown } from "react-icons/fi";
import { MdVerified } from "react-icons/md";
import { FaSearch, FaFilter } from "react-icons/fa";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import BrandsPageData, {
  OtherBrandsData,
  TopBrandsData,
} from "../../data/BrandsPageData";
import AnimateAppear from "../animations/AnimateAppear";

const BASE_CATEGORIES = ["Electrical", "Automation", "Tools & Tackles", "Mechanical", "Lubricants", "Safety"];
const INITIAL_VISIBLE_PRODUCTS = 9;
const PRODUCTS_LOAD_STEP = 6;

const BrandsProducts = () => {
  const [visibleProducts, setVisibleProducts] = useState(INITIAL_VISIBLE_PRODUCTS);
  const navigate = useNavigate();
  const location = useLocation();

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);
  const [showOtherBrands, setShowOtherBrands] = useState(false);

  const { slug } = useParams();
  const brandData = slug ? BrandsPageData.find((brand) => brand.slug?.toLowerCase() === slug?.toLowerCase()) : null;

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

  useEffect(() => {
    setVisibleProducts(INITIAL_VISIBLE_PRODUCTS);
  }, [searchTerm, selectedCategories, slug]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [slug, location.pathname]);

  if (!brandData) {
    return (
      <section className="bg-gray-50 pt-8 pb-8">
        <div className="max-w-7xl mx-auto px-4 pt-8">
          <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-slate-100 mt-20">
            <FaSearch className="text-4xl text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[#004068] mb-2">Brand not found</h3>
            <p className="text-slate-500 mb-6">
              This brand page is not available right now.
            </p>
            <button
              onClick={() => navigate("/brands")}
              className="px-6 py-3 bg-[#004068] text-white rounded-lg font-semibold hover:bg-[#00273f] transition cursor-pointer"
            >
              Go to Brands
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  const topBrandsList = TopBrandsData;
  const otherBrandsList = OtherBrandsData;
  
  
 const safeProducts = (brandData?.products?.length > 0 ? brandData.products : null) || brandData?.AllProductsDetails?.products || [];

  let brandCats = brandData.category || brandData.categories || ["Electrical"];
  if (!Array.isArray(brandCats)) brandCats = [brandCats];
  let brandMainCategory = brandCats[0] || "Electrical";
  if (brandMainCategory.toLowerCase() === "mechenical") brandMainCategory = "Mechanical";

  const filteredProducts = safeProducts.filter((product) => {
    const searchLower = searchTerm.toLowerCase().trim();
    const pTitle = (product.title || product.name || "").toLowerCase();

    const matchesSearch =
      !searchTerm ||
      pTitle.includes(searchLower) ||
      (product.category && product.category.toLowerCase().includes(searchLower)) ||
      (product.description &&
        (Array.isArray(product.description)
          ? product.description[0].toLowerCase().includes(searchLower)
          : product.description.toLowerCase().includes(searchLower)));

    const matchesCategory =
      selectedCategories.length === 0 ||
      selectedCategories.includes(brandMainCategory) ||
      selectedCategories.includes(product.category);

    return matchesSearch && matchesCategory;
  });

  const totalProducts = filteredProducts.length;
  const hasMoreProducts = visibleProducts < totalProducts;

  const handleCategoryToggle = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
    setVisibleProducts(INITIAL_VISIBLE_PRODUCTS);
  };
  
  const handleBrandToggle = (toggledBrand) => {
    setIsMobileFilterOpen(false);
    
    if (toggledBrand.slug === slug) {
      navigate("/products");
    } else {
      navigate(`/brands/${toggledBrand.slug}`);
    }
  };

  const handleViewMore = () => {
    setVisibleProducts((prev) => prev + PRODUCTS_LOAD_STEP);
  };

  const generateSlug = (name) => {
    return (name || "").toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
  };

  const getProductSlug = (product) => product.slug || generateSlug(product.title || product.name);

  return (
    <section className="bg-gray-50 pt-8 pb-8">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-10 md:mb-16">
          <AnimateAppear key={`header-${slug}`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4 mt-8 md:mt-10">
              View Our <span className="text-[#19587e]">{brandData.name} Range</span>
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#0e466a99] max-w-3xl mx-auto leading-relaxed">
              {brandData.description}
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
              onClick={() => {
                setSearchTerm("");
                navigate(location.pathname, { replace: true });
              }}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 cursor-pointer"
            >
              <FiX className="text-lg" />
            </button>
          )}
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="md:hidden w-full flex items-center justify-center gap-2 bg-white border border-slate-200 py-3 rounded-lg shadow-sm text-gray-700 font-semibold cursor-pointer"
          >
            <FaFilter className="text-[#0577b5]" />
            {isMobileFilterOpen ? "Hide Filters" : "Show Filters"}
          </button>

          <aside
            className={`w-full md:w-1/4 lg:w-1/5 shrink-0 bg-white rounded-2xl border border-slate-100 shadow-sm p-6 ${isMobileFilterOpen ? "block" : "hidden md:block"} md:sticky md:top-24`}
          >
            <AnimateAppear key={`filter-${slug}`}>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold text-[#004068] flex items-center gap-2">
                  <FaFilter className="text-[#0577b5] text-sm" /> Filters
                </h2>
                {(selectedCategories.length > 0 || searchTerm) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSearchTerm("");
                      navigate(location.pathname, { replace: true });
                    }}
                    className="text-xs text-red-500 cursor-pointer font-semibold hover:text-red-700 transition flex items-center gap-1"
                  >
                    <FiX /> Clear
                  </button>
                )}
              </div>
              <div className="mb-8">
                <h3 className="text-sm font-bold text-slate-700 uppercase tracking-widest mb-4 border-b border-slate-100 pb-2 flex items-center gap-2">
                  <HiOutlineOfficeBuilding className="text-[#0577b5]" /> Brands
                </h3>
                <div className="flex flex-col gap-3">
              
                  {topBrandsList.map((b, i) => (
                    <label key={i} className="flex items-center gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        checked={b.slug === slug}
                        onChange={() => handleBrandToggle(b)}
                        className="w-4 h-4 rounded border-gray-300 text-[#19587e] focus:ring-[#19587e] cursor-pointer"
                      />
                      <span className="text-slate-600 text-sm group-hover:text-[#0577b5] transition font-medium">
                        {b.name}
                      </span>
                    </label>
                  ))}

                  {otherBrandsList.length > 0 && (
                    <div className="mt-2 border-t border-slate-100 pt-2">
                      <button 
                        onClick={() => setShowOtherBrands(!showOtherBrands)}
                        className="flex items-center justify-between w-full text-sm font-bold text-slate-700 hover:text-[#0577b5] transition-colors cursor-pointer py-1"
                      >
                        <span className="flex items-center gap-2">
                          <HiOutlineOfficeBuilding className="text-[#0577b5] hidden md:block" />
                          <span>OTHER BRANDS </span>
                        </span>
                        <FiChevronDown className={`transition-transform duration-300 ${showOtherBrands ? 'rotate-180' : ''}`} />
                      </button>
                      
                      <div className={`flex flex-col gap-3 pl-2 overflow-hidden transition-all duration-300 ease-in-out ${showOtherBrands ? "max-h-60 mt-3 overflow-y-auto border-l-2 border-slate-200 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" : "max-h-0"}`}>
                        {otherBrandsList.map((b, i) => (
                          <label key={i} className="flex items-center gap-3 cursor-pointer group">
                            <input
                              type="checkbox"
                              checked={b.slug === slug}
                              onChange={() => handleBrandToggle(b)}
                              className="w-4 h-4 rounded border-gray-300 text-[#19587e] focus:ring-[#19587e] cursor-pointer"
                            />
                            <span className="text-slate-600 text-sm group-hover:text-[#0577b5] transition font-medium">
                              {b.name}
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
                  {filteredProducts.length}
                </span>{" "}
                products
              </p>
              <p className="text-xs text-[#0577b5] font-semibold">
                {selectedCategories.length > 0 ? selectedCategories.length + 1 : 1} filter(s) active
              </p>
            </div>

            {filteredProducts.length > 0 ? (
              <>
                <div className="flex flex-wrap -mx-3">
                  {filteredProducts.slice(0, visibleProducts).map((product, index) => {
                    const descText = Array.isArray(product.description)
                      ? product.description[0]
                      : product.description;

                    const productCategory = product.category || brandMainCategory || "Product";
                    const displayTitle = product.title || product.name;
                    const productSlug = getProductSlug(product);

                    let displayImage = product.images && product.images.length > 0 ? product.images[0] : product.image;
                    
                    if (!displayImage && brandData.products && brandData.products.length > 0) {
      
                      const fallbackProd = brandData.products.find((p) => p.title === displayTitle || p.name === displayTitle || p.slug === product.slug) || brandData.products[index];
                      if (fallbackProd) {
                        displayImage = fallbackProd.images && fallbackProd.images.length > 0 ? fallbackProd.images[0] : fallbackProd.image;
                      }
                    }

                    if (!displayImage) {
                      displayImage = brandData.heroImage || brandData.logo;
                    }

                    return (
                      <div
                        key={`${brandData.name}-${productSlug}-${index}`}
                        className="w-full md:w-1/2 lg:w-1/3 px-3 mb-6 flex animate-fade-in"
                      >
                        <Link
                          to={`/product/${productSlug}`}
                          onClick={(e) => {
                            if (!productSlug) {
                              e.preventDefault();
                              navigate("/products");
                            }
                          }}
                          className="w-full flex flex-col bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md hover:border-slate-200 transition-all duration-300 group overflow-hidden"
                        >
                          <div className="relative w-full h-48 bg-slate-50 flex items-center justify-center overflow-hidden border-b border-slate-100">
                            <img
                            loading="lazy" 
                              src={displayImage}
                              alt={displayTitle}
                              className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#004068] text-[10px] font-bold px-2.5 py-1.5 rounded-full shadow-md border border-blue-100">
                              <MdVerified className="text-sm text-[#004068]" />
                              {brandData.name}
                            </div>
                          </div>

                          <div className="px-2 pt-3 pb-1 border-b border-slate-100">
                            <h3 className="text-base font-bold text-[#004068] leading-snug line-clamp-2 h-[2.75rem] group-hover:text-[#0577b5] transition">
                              {displayTitle}
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
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={handleViewMore}
                      className="hover:scale-105 transition-all duration-300 cursor-pointer px-8 py-3 bg-[#19587e] text-white font-semibold rounded-lg hover:bg-[#134863] shadow-md hover:shadow-xl"
                    >
                      View More Products
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="bg-white rounded-2xl shadow-md p-12 text-center border border-slate-100 mt-0">
                <FaSearch className="text-4xl text-slate-300 mx-auto mb-4" />
                <AnimateAppear key={`noproducts-${slug}`}>
                  <h3 className="text-xl font-bold text-[#004068] mb-2">
                    {safeProducts.length === 0 
                      ? "Products Coming Soon" 
                      : "No products match your search"}
                  </h3>
                  <p className="text-slate-500 mb-6">
                    {safeProducts.length === 0 
                      ? `We are currently updating our catalog for ${brandData.name}. Please check out our other brands!` 
                      : "Try searching with different keywords or clearing your filters."}
                  </p>
                  <button
                    onClick={() => {
                      setSearchTerm("");
                      setSelectedCategories([]);
                      if (safeProducts.length === 0) {
                        navigate("/products", { replace: true });
                      }
                    }}
                    className="px-6 py-3 bg-[#004068] text-white rounded-lg font-semibold hover:bg-[#00273f] transition flex items-center gap-2 mx-auto cursor-pointer"
                  >
                    {safeProducts.length === 0 ? (
                      <> <FiArrowRight /> Explore All Products </>
                    ) : (
                      <> <FiX /> Clear All Filters </>
                    )}
                  </button>
                </AnimateAppear>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandsProducts;