import React, { useState, useMemo } from "react";
import {
  FiArrowRight,
  FiSearch,
  FiX,
  FiZap,
  FiShield,
  FiGlobe,
} from "react-icons/fi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import BrandsPageData from "../../data/BrandsPageData";
import AnimateAppear from "../animations/AnimateAppear";

const BRAND_CATEGORIES = [
  "Electrical",
  "Automation",
  "Tools & Tackles",
  "Mechanical",
  "Lubricants",
  "Safety",
];

const getBrandCategories = (brand) => {
  if (Array.isArray(brand.categories) && brand.categories.length > 0) {
    return brand.categories;
  }

  if (Array.isArray(brand.category) && brand.category.length > 0) {
    return brand.category;
  }

  if (typeof brand.category === "string" && brand.category.trim()) {
    return [brand.category.trim()];
  }

  if (typeof brand.categories === "string" && brand.categories.trim()) {
    return [brand.categories.trim()];
  }

  return [];
};

const AllBrands = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const brands = useMemo(
    () =>
      BrandsPageData.filter((brand) => brand && brand.name && brand.description).map(
        (brand) => ({
          ...brand,
          normalizedCategories: getBrandCategories(brand),
        }),
      ),
    [],
  );

  const allCategories = BRAND_CATEGORIES;

  const filteredBrands = useMemo(() => {
    return brands.filter((brand) => {
      const matchesSearch =
        !searchQuery ||
        brand.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        brand.normalizedCategories.some((cat) =>
          cat.toLowerCase().includes(searchQuery.toLowerCase()),
        );

      const matchesCategory =
        selectedCategories.length === 0 ||
        brand.normalizedCategories.some((cat) => selectedCategories.includes(cat));
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategories, brands]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category],
    );
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategories([]);
  };

  return (
    <div className="min-h-screen bg-gray-50 md:pt-16 pb-24">
      <div className="max-w-7xl mx-auto px-2 py-16">
        <AnimateAppear>
          <div className="text-center max-w-3xl mx-auto mt-10 mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
              Our Partner <span className="text-[#19587e]">Brands</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#0e466a99] max-w-3xl mx-auto">
              Connect with the world's leading manufacturers of electrical
              infrastructure, automation, and lighting solutions.
            </p>
          </div>
        </AnimateAppear>
       <AnimateAppear>
        <div className="mb-16 bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
          <div className="mb-8">
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Search Brand
            </label>
            <div className="relative">
              <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl" />
              <input
                type="text"
                placeholder="Search by brand name, category or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-lg text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#0577b5] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <FiX className="text-lg" />
                </button>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-900 mb-3">
              Filter by Category
            </label>
            <div className="flex flex-wrap gap-2">
              {allCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => toggleCategory(category)}
                  className={`px-4 cursor-pointer py-2 rounded-lg font-semibold text-sm transition-all duration-300 ${
                    selectedCategories.includes(category)
                      ? "bg-[#0577b5] text-white shadow-md"
                      : "bg-slate-100 text-slate-700 border border-slate-200 hover:border-[#0577b5] hover:text-[#0577b5]"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          {(searchQuery || selectedCategories.length > 0) && (
            <button
              onClick={clearFilters}
              className="mt-5 text-sm font-semibold text-[#0577b5] hover:text-[#045a94] flex items-center gap-2 transition-colors"
            >
              <FiX className="text-lg" /> Clear all filters
            </button>
          )}
        </div>
        </AnimateAppear>
        <AnimateAppear>
        {(searchQuery || selectedCategories.length > 0) && (
          <div className="mb-8 text-center">
            <p className="text-slate-600 font-semibold">
              Found{" "}
              <span className="text-[#0577b5]">{filteredBrands.length}</span> of{" "}
              <span className="text-[#0577b5]">{brands.length}</span> brands
            </p>
          </div>
        )}
        </AnimateAppear>

        {filteredBrands.length === 0 && (
          <div className="text-center py-16">
            <p className="text-xl font-semibold text-slate-600 mb-3">
              No brands found
            </p>
            <p className="text-slate-500 mb-6">
              Try adjusting your search or filters
            </p>
            <button
              onClick={clearFilters}
              className="px-6 py-3 bg-[#0577b5] text-white font-semibold rounded-lg hover:bg-[#045a94] transition-all"
            >
              Clear Filters
            </button>
          </div>
        )}
         <AnimateAppear>
        {filteredBrands.length > 0 && (
          <div className="flex flex-wrap gap-8 w-full mx-auto">
            {filteredBrands.map((brand) => (
              <div
                key={brand.id}
                className="w-full md:w-[calc(50%-1rem)] bg-white rounded-2xl border border-slate-100 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col group overflow-hidden"
              >
                <div className="h-56 w-full relative overflow-hidden">
                  <img
                  loading="lazy" 
                    src={brand.heroImage}
                    alt={brand.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm text-[#004068] text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-blue-100">
                    <MdVerified className="text-base text-[#004068]" />
                    Authorized Partner
                  </div>
                </div>
                <div className="px-5 pt-4 pb-1 border-b border-slate-100">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#004068]">
                    {brand.name}
                  </h3>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <div className="flex flex-wrap gap-3 mb-4">
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                      <FiGlobe className="text-[#0577b5] text-sm shrink-0" />
                      Global Manufacturer
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                      <FiShield className="text-[#0577b5] text-sm shrink-0" />
                      ISO Certified
                    </div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-slate-600 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2">
                      <HiOutlineOfficeBuilding className="text-[#0577b5] text-sm shrink-0" />
                      Industrial Grade
                    </div>
                  </div>
                  <div className="border-t border-slate-100 mb-4" />
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-4 flex-1 line-clamp-2">
                    {brand.description}
                  </p>
                     {/* {brand.categories && brand.categories.length > 0 && (
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-2">
                        <FiBox className="text-[#0577b5] text-sm" />
                        <span className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                          Product Lines
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {brand.categories.map((category, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1.5 text-xs font-semibold text-[#0577b5] bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-100 transition-colors cursor-default"
                          >
                            {category}
                          </span>
                        ))}
                      </div>
                    </div>
                  )} */}
                  <button
                    onClick={() => navigate(`/brands/${brand.slug}`)}
                    className="w-full cursor-pointer mt-auto bg-[#004068] text-white font-semibold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-all hover:bg-[#00273f] hover:shadow-sm active:scale-95 group/btn"
                  >
                    <FiZap className="text-base group-hover/btn:animate-pulse" />
                    Explore Products
                    <FiArrowRight className="text-lg transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        </AnimateAppear>
      </div>
    </div>
  );
};

export default AllBrands;
