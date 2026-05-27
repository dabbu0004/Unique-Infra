import React, { useState, useEffect, useRef, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navbarData } from "../data/NavbarData";
import { 
  FiChevronDown, 
  FiMenu, 
  FiX, 
  FiSearch, 
  FiChevronRight, 
  FiChevronLeft 
} from "react-icons/fi";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const MANUAL_PRODUCT_SUBCATEGORIES = {
  Electrical: ["Wire & Cables", "Insulater", "Light & Highmast", "Jointing Kit", "Fans", "LV MOTORS", "Lugs","Glands", "Cables"],
  Automation: ["Industrial Automation", "Connectors", "Conductor", "IGBT"],
  "Tools & Tackles": ["Hand Tools", "Power Tools", "Measuring Tools", "Tool Kit", "Instrument Meter"],
  Mechanical: ["Motors", "Pipes", "Valves", "Conduit Pipe"],
  Lubricants: ["Solutions", "Wax"],
  Safety: ["Safety & Jackets", "ARC Suit", "Fire Equipments"],
};

const Navbar = () => {
  const [activeMegaMenu, setActiveMegaMenu] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [showNavbar, setShowNavbar] = useState(true);
  

  const [mobileMenuPath, setMobileMenuPath] = useState([{ id: 'main', title: 'Menu' }]);
  const [isMobileAllBrandsOpen, setIsMobileAllBrandsOpen] = useState(false); 

  const [selectedSegment, setSelectedSegment] = useState(
    navbarData.menuItems.find((item) => item.id === "segments")
      ?.segmentsLinks?.[0] || null,
  );

  const navigate = useNavigate();

  const productsMenuItem = useMemo(
    () => navbarData.menuItems.find((item) => item.id === "products") || null,
    [],
  );

  const aggregatedProductCategories = useMemo(() => {
    return (
      productsMenuItem?.categories?.map((cat) => {
        const manualItems = MANUAL_PRODUCT_SUBCATEGORIES[cat.name] || [];
        return {
          ...cat,
          brands: manualItems.map((subCategory) => ({ product: subCategory })),
        };
      }) || []
    );
  }, [productsMenuItem]);

  const lastScrollYRef = useRef(0);
  const scrollDirectionRef = useRef(null);
  const tickingRef = useRef(false);
  const lastOffsetRef = useRef(null);

  useEffect(() => {
    const SCROLLED_ON = 120;
    const SCROLLED_OFF = 80;
    const HIDE_DELTA = 10;
    const SHOW_DELTA = 10;

    const handleScroll = () => {
      if (tickingRef.current) return;
      tickingRef.current = true;
      requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const lastY = lastScrollYRef.current;
        const diff = currentScrollY - lastY;

        if (currentScrollY >= SCROLLED_ON) {
          setIsScrolled((prev) => (prev ? prev : true));
        } else if (currentScrollY <= SCROLLED_OFF) {
          setIsScrolled((prev) => (prev ? false : prev));
          setShowNavbar(true);
          scrollDirectionRef.current = null;
        }

        if (currentScrollY > SCROLLED_OFF) {
          if (diff > HIDE_DELTA && scrollDirectionRef.current !== "down") {
            scrollDirectionRef.current = "down";
            setShowNavbar((prev) => (prev ? false : prev));
          } else if (
            diff < -SHOW_DELTA &&
            scrollDirectionRef.current !== "up"
          ) {
            scrollDirectionRef.current = "up";
            setShowNavbar((prev) => (prev ? prev : true));
          }
        }
        lastScrollYRef.current = currentScrollY;
        tickingRef.current = false;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const syncNavbarOffset = () => {
      const isDesktop = window.innerWidth >= 1024;
      let offset = 0;
      if (showNavbar) {
        if (isDesktop) offset = isScrolled ? 100 : 140;
        else offset = 64;
      }
      if (lastOffsetRef.current === offset) return;
      lastOffsetRef.current = offset;
      document.documentElement.style.setProperty("--navbar-offset", `${offset}px`);
      window.dispatchEvent(new Event("navbar-offset-change"));
    };

    syncNavbarOffset();
    window.addEventListener("resize", syncNavbarOffset);
    return () => window.removeEventListener("resize", syncNavbarOffset);
  }, [showNavbar, isScrolled]);

  useEffect(() => {
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleMenuHover = (menuId, hasMegaMenu) => {
    if (hasMegaMenu) {
      setActiveMegaMenu(menuId);
      if (menuId === "products") setSelectedCategory(aggregatedProductCategories?.[0] || null);
      if (menuId === "brands") {
        const brandsItem = navbarData.menuItems.find((item) => item.id === "brands");
        setSelectedBrand(brandsItem?.brandCategories?.[0] || null);
      }
    }
  };

  const handleMenuClick = (e, item) => {
    if (item.hasMegaMenu) {
      if (activeMegaMenu === item.id) handleMenuLeave();
      else {
        e.preventDefault();
        handleMenuHover(item.id, true);
      }
    } else {
      handleMenuLeave();
    }
  };

  const handleMenuLeave = () => {
    setActiveMegaMenu(null);
    setSelectedCategory(null);
    setSelectedBrand(null);
  };

  const handleCategoryHover = (category) => setSelectedCategory(category);
  const handleBrandHover = (brand) => setSelectedBrand(brand);
  const handleSegmentHover = (segment) => setSelectedSegment(segment);
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      handleMobileMenuClose();
    }
  };

  const toggleMobileMenu = () => {
    if (isMobileMenuOpen) {
      handleMobileMenuClose();
    } else {
      setMobileMenuPath([{ id: 'main', title: 'Menu' }]);
      setIsMobileAllBrandsOpen(false); 
      setIsMobileMenuOpen(true);
      document.body.style.overflow = "hidden";
    }
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "auto";
    setTimeout(() => {
      setMobileMenuPath([{ id: 'main', title: 'Menu' }]);
      setIsMobileAllBrandsOpen(false); 
    }, 300);
  };

  const navigateMobilePanel = (id, title, data) => {
    setMobileMenuPath((prev) => [...prev, { id, title, data }]);
  };

  const handleMobileBack = () => {
    setMobileMenuPath((prev) => prev.slice(0, -1));
  };

  const renderMobilePanelContent = (panel) => {
    if (panel.id === 'main') {
      return (
        <div className="flex flex-col h-full bg-white">
          <div className="flex flex-col py-2 mt-2">
            {navbarData.menuItems.map((item) => (
              item.hasMegaMenu ? (
                <div
                  key={item.id}
                  className="flex items-stretch border-b border-gray-50 hover:bg-gray-50 transition-colors"
                >
                  <Link
                    to={item.link}
                    onClick={handleMobileMenuClose}
                    className="flex-1 flex items-center px-6 py-4 text-gray-800 font-semibold active:bg-gray-100"
                  >
                    {item.title}
                  </Link>
                  <button
                    onClick={() => navigateMobilePanel(item.id, item.title, item)}
                    className="flex items-center justify-center px-6 py-4 text-gray-400 hover:text-[#0577b5] active:bg-gray-100 border-l border-gray-100"
                    aria-label={`Open ${item.title} submenu`}
                  >
                    <FiChevronRight className="text-xl" />
                  </button>
                </div>
              ) : (
                <Link
                  key={item.id}
                  to={item.link}
                  onClick={handleMobileMenuClose}
                  className="block px-6 py-4 border-b border-gray-50 text-gray-800 font-semibold hover:bg-gray-50 active:bg-gray-100 transition-colors"
                >
                  {item.title}
                </Link>
              )
            ))}
          </div>
          <div className="mt-auto p-6 bg-gray-50/50 border-t border-gray-100">
            <button
              onClick={() => {
                handleMobileMenuClose();
                navigate(navbarData.ctaButton.link);
              }}
              className="flex w-full items-center justify-center bg-[#004068] hover:bg-[#00273f] text-white px-4 py-3.5 rounded-xl text-sm font-semibold transition-colors shadow-md"
            >
              <FaPhoneAlt className="text-white mr-2" />
              {navbarData.ctaButton.text}
            </button>
            <div className="flex items-center justify-center gap-5 mt-6">
              {navbarData.socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-10 h-10 flex items-center justify-center ${social.color} text-white rounded-full shadow-sm`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      );
    }

    if (panel.id === 'company') {
      return (
        <div className="flex flex-col py-2">
          {panel.data.companyLinks.map((link) => (
            <Link
              key={link.title}
              to={link.link}
              onClick={handleMobileMenuClose}
              className="block px-6 py-4 border-b border-gray-100 text-gray-700 font-medium hover:bg-gray-50 active:bg-gray-100"
            >
              {link.title}
            </Link>
          ))}
        </div>
      );
    }

    if (panel.id === 'brands') {
      const topBrandSlugs = panel.data.brandCategories.map(b => b.slug);
      const filteredOtherBrands = panel.data.allBrands.filter(b => !topBrandSlugs.includes(b.slug));

      return (
        <div className="flex flex-col py-2">
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 font-bold text-xs tracking-wider text-[#0577b5] sticky top-0 z-10">
            TOP BRANDS
          </div>
          {panel.data.brandCategories.map((brand) => (
            <Link
              key={brand.name}
              to={`/brands/${brand.slug}`}
              onClick={handleMobileMenuClose}
              className="flex items-center gap-4 px-6 py-3.5 border-b border-gray-100 text-gray-800 font-medium hover:bg-gray-50"
            >
       
              <div className="w-10 h-10 bg-white border border-gray-100 rounded-lg p-1 shadow-sm flex items-center justify-center shrink-0">
                <img loading="lazy"  src={brand.logo || brand.image || navbarData.logo.src} className="w-full h-full object-contain mix-blend-multiply" alt={brand.name} />
              </div>
              <span className="flex-1 truncate">{brand.name}</span>
            </Link>
          ))}
          
          {filteredOtherBrands.length > 0 && (
            <>
              <div className="bg-gray-50 border-y border-gray-100 mt-2 sticky top-0 z-10">
                <button 
                  onClick={() => setIsMobileAllBrandsOpen(!isMobileAllBrandsOpen)}
                  className="flex items-center justify-between w-full px-6 py-3 font-bold text-xs tracking-wider text-[#0577b5]"
                >
                  OTHER BRANDS
                  <FiChevronDown className={`text-lg transition-transform duration-300 ${isMobileAllBrandsOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              
              <div className={`flex flex-col transition-all duration-300 overflow-hidden ${isMobileAllBrandsOpen ? 'max-h-[3000px]' : 'max-h-0'}`}>
                {filteredOtherBrands.map((brand) => (
                  <Link
                    key={brand.name}
                    to={`/brands/${brand.slug}`}
                    onClick={handleMobileMenuClose}
         
                    className="flex items-center gap-4 px-6 py-3 border-b border-gray-100 text-gray-700 font-medium hover:bg-gray-50"
                  >
                    <div className="w-8 h-8 bg-white border border-gray-100 rounded-md p-1 shadow-sm flex items-center justify-center shrink-0">
                      <img loading="lazy"  src={brand.logo || brand.image || navbarData.logo.src} className="w-full h-full object-contain mix-blend-multiply" alt={brand.name} />
                    </div>
                    <span className="flex-1 truncate">{brand.name}</span>
                  </Link>
                ))}
              </div>
            </>
          )}
        </div>
      );
    }

    if (panel.id === 'products') {
      return (
        <div className="flex flex-col py-2">
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 font-bold text-xs tracking-wider text-[#0577b5] sticky top-0">
            PRODUCT CATEGORIES
          </div>
          {aggregatedProductCategories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => navigateMobilePanel('products_sub', cat.name, cat)}
      
              className="flex w-full items-center justify-between px-6 py-4 border-b border-gray-100 text-gray-800 font-medium hover:bg-gray-50 active:bg-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-50/50 flex items-center justify-center shrink-0">
                  <img  loading="lazy"  src={cat.image} className="w-5 h-5 object-contain mix-blend-multiply opacity-80" alt={cat.name} />
                </div>
                <span>{cat.name}</span>
              </div>
              <FiChevronRight className="text-gray-400 text-lg" />
            </button>
          ))}
        </div>
      );
    }

    if (panel.id === 'products_sub') {
      const category = panel.data;
      return (
        <div className="flex flex-col py-2 h-full">
          <div className="px-6 py-3 bg-gray-50 border-b border-gray-100 font-bold text-xs tracking-wider text-[#0577b5] sticky top-0">
            {category.name.toUpperCase()} SUBCATEGORIES
          </div>
          <div className="flex-1 overflow-y-auto">
            {category.brands && category.brands.length > 0 ? (
              category.brands.map((subCat, idx) => (
      
                <div key={idx} className="px-6 py-4 border-b border-gray-100 text-gray-700 flex items-center gap-3 bg-white">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0577b5] shrink-0"></span>
                  <span className="leading-snug">{subCat.product}</span>
                </div>
              ))
            ) : (
              <div className="px-6 py-6 text-gray-400 italic text-sm text-center bg-gray-50/30">
                More categories coming soon.
              </div>
            )}
          </div>
          <div className="p-6 border-t border-gray-100 bg-white shrink-0 mt-auto">
            <button
              onClick={() => {
                handleMobileMenuClose();
                navigate(`/products?category=${encodeURIComponent(category.name)}`);
              }}
              className="w-full py-3.5 bg-[#004068] text-white hover:bg-[#0577b5] hover:text-white transition-colors rounded-xl font-bold text-sm shadow-sm"
            >
              View All {category.name} Products
            </button>
          </div>
        </div>
      );
    }

    if (panel.id === 'segments') {
      return (
        <div className="flex flex-col py-2">
          {panel.data.segmentsLinks.map((segment) => (
            <Link
              key={segment.title}
              to={segment.link}
              onClick={handleMobileMenuClose}
              className="px-6 py-4 border-b border-gray-100 text-gray-700 font-medium block hover:bg-gray-50 active:bg-gray-100"
            >
              {segment.title}
            </Link>
          ))}
        </div>
      );
    }

    return null;
  };

  const renderCompanyMegaMenu = (item) => (
    <div
      onMouseEnter={() => setActiveMegaMenu(item.id)}
      onMouseLeave={handleMenuLeave}
      className="fixed left-0 right-0 top-16 lg:top-25 w-screen bg-white z-50 animate-mega open-origin"
    >
      <div className="w-full px-6 md:px-0">
        <div className="flex flex-col lg:flex-row gap-16 justify-center shadow-lg py-8 border-b border-gray-100">
          <div className="w-full lg:w-fit lg:pr-12 border-b lg:border-b-0 lg:border-r border-gray-300 pb-4 lg:pb-0">
            <div className="flex flex-col">
              {item.companyLinks?.map((link, i) => (
                <Link
                  key={i}
                  to={link.link}
                  onClick={handleMenuLeave}
                  className="py-2 px-3 text-lg font-medium text-gray-500 hover:text-black hover:font-bold hover:bg-gray-50 rounded-lg transition-all duration-200"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-black mb-2">About Us</h3>
            <p className="text-gray-600 text-lg mb-3 leading-relaxed">
              We partner with leading global manufacturers to deliver reliable
              electrical, automation, safety and industrial solutions. Our team
              helps enterprises plan, procure and deploy at scale with quality
              and speed.
            </p>
            <div className="flex gap-4">
              <Link
                to="/about"
                onClick={handleMenuLeave}
                className="px-5 py-2.5 bg-[#004068] hover:bg-[#00273f] text-white rounded-md text-sm font-semibold hover:scale-105 transition-all duration-300 shadow-md"
              >
                Learn More
              </Link>
              <button
                onClick={() => navigate("/contact")}
                className="px-5 py-2.5 border-2 border-[#004068] text-[#004068] rounded-md text-sm font-semibold hover:bg-[#004068] hover:text-white transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderBrandsMegaMenu = (item) => {
    const displayBrand = selectedBrand || item.brandCategories?.[0] || item.allBrands?.[0] || null;
    const topBrandCount = item.brandCategories?.length || 0;
    const remainingBrands = item.allBrands?.slice(topBrandCount) || [];
    const brandColumns = [];

    for (let index = 0; index < remainingBrands.length; index += 9) {
      brandColumns.push(remainingBrands.slice(index, index + 9));
    }

    return (
      <div
        onMouseEnter={() => setActiveMegaMenu(item.id)}
        onMouseLeave={handleMenuLeave}
        className="fixed px-30 left-0 right-0 top-16 lg:top-25 w-screen bg-white z-50 animate-mega open-origin tablet-portrait-mega"
      >
        <div className="w-full">
          <div className="flex">
            <div className="w-90 tablet-portrait-side-column">
              <div className="p-0">
                <div className="flex items-center gap-1 p-2 border-b border-gray-300">
                  <span className="text-lg font-semibold text-gray-700">→</span>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Top Brands
                  </h3>
                </div>
                <div className="space-y-1 py-2 ml-10 tablet-portrait-side-list">
                  {item.brandCategories?.map((brand, i) => (
                    <Link
                      key={i}
                      to={`/brands/${brand.slug}`}
                      onMouseEnter={() => handleBrandHover(brand)}
                      onClick={handleMenuLeave}
                      className={`block p-2 w-fit text-base text-gray-800 rounded-md cursor-pointer
                    ${displayBrand?.name === brand.name
                          ? "bg-white text-gray-800 font-bold"
                          : "hover:text-black"
                        }`}
                      style={{ margin: "0.25rem 0" }}
                    >
                      {brand.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 tablet-portrait-main-column">
              <div className="p-0">
                <div className="flex items-center gap-1 p-2 border-b border-gray-300">
                  <span className="text-lg font-semibold text-gray-700">→</span>
                  <h3 className="text-lg font-semibold text-gray-700">
                    All Brands
                  </h3>
                </div>
                <div className="flex gap-0 px-3 h-full border-gray-300 border-r border-l bg-gray-50 pb-22 tablet-portrait-center-panel">
                  {brandColumns.map((brandColumn, columnIndex) => (
                    <div key={columnIndex} className="flex-1 space-y-0">
                      {brandColumn.map((brand) => (
                        <Link
                          key={brand.slug}
                          to={`/brands/${brand.slug}`}
                          onMouseEnter={() => handleBrandHover(brand)}
                          onClick={handleMenuLeave}
                          className={`block p-2 w-fit text-base text-gray-600 rounded-md cursor-pointer tablet-portrait-list-item
                    ${displayBrand?.name === brand.name
                              ? "bg-white text-gray-800 font-bold"
                              : "hover:text-black"
                            }`}
                          style={{ margin: "0.25rem 0" }}
                        >
                          {brand.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="border-t border-gray-300 mt-11">
              <div className="flex flex-col h-full bg-white p-5 mx-auto">
                {displayBrand?.slug && (
                  <>
                    <div className="text-center">
                      <div
                        className="border-1 hover:scale-110 transition-all duration-300 border-gray-300 m-5 ml-10 rounded-3xl mb-3 cursor-pointer tablet-portrait-preview-card"
                        onClick={() => {
                          handleMenuLeave();
                          navigate(
                            displayBrand?.slug
                              ? `/brands/${displayBrand.slug}`
                              : "/brands",
                          );
                        }}
                      >
                        <img
                          src={
                            displayBrand.logo ||
                            displayBrand.image ||
                            navbarData.logo.src
                          }
                          loading="lazy" 
                          alt={displayBrand.name}
                          className="border-transparent w-70 h-60 object-contain rounded-lg tablet-portrait-preview-image"
                        />
                        <h4 className="text-lg font-medium text-gray-800 py-2">
                          {displayBrand.name || "Industrial"}
                        </h4>
                      </div>
                    </div>

                    <div className="text-center border-gray-400 pt-2 ml-5">
                      <p className="text-gray-600 mb-2 font-medium">
                        Need Sales Support?
                      </p>
                      <button
                        onClick={() => navigate("/contact")}
                        className="cursor-pointer text-sm w-fit px-5 py-2 bg-[#004068] hover:bg-[#00273f] text-white rounded-md font-semibold hover:scale-105 transition-all duration-300 shadow-md"
                      >
                        Talk To Sales
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderProductsMegaMenu = (item) => {
    const categoriesToRender = item.id === "products" ? aggregatedProductCategories : item.categories || [];
    return (
      <div
        onMouseEnter={() => setActiveMegaMenu(item.id)}
        onMouseLeave={handleMenuLeave}
        className="fixed px-30 left-0 right-0 top-16 lg:top-25 w-screen bg-white z-50 animate-mega open-origin tablet-portrait-mega"
      >
        <div className="w-full">
          <div className="flex items-start">
            <div className="w-90 tablet-portrait-side-column">
              <div className="p-0">
                <div className="flex items-center gap-1 p-2 border-b border-gray-300">
                  <span className="text-lg font-semibold text-gray-700">→</span>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Category
                  </h3>
                </div>
                <div className="space-y-1 py-2 ml-10 tablet-portrait-side-list">
                  {categoriesToRender.map((category, i) => (
                    <button
                      key={i}
                      onMouseEnter={() => handleCategoryHover(category)}
                      onClick={() => {
                        handleMenuLeave();
                        navigate(`/products?category=${encodeURIComponent(category.name)}`);
                      }}
                      className={`block w-full text-left p-2 text-base text-gray-700 rounded-md cursor-pointer
                        ${selectedCategory?.name === category.name
                          ? "bg-white text-gray-800 font-bold"
                          : "hover:text-black"
                        }`}
                      style={{ margin: "0.25rem 0" }}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex-1 tablet-portrait-main-column">
              <div className="p-0">
                <div className="flex items-center gap-1 p-2 border-b border-gray-300">
                  <span className="text-lg font-semibold text-gray-700">→</span>
                  <h3 className="text-lg font-semibold text-gray-700">
                    Categorized Products
                  </h3>
                </div>
                <div className="flex pt-2 gap-0 px-3 h-full border-gray-300 border-r border-l bg-white pb-32 tablet-portrait-center-panel">
                  <div className="flex-1 space-y-0">
                    {selectedCategory && selectedCategory.brands?.length > 0 ? (
                      <>
                        {selectedCategory.brands.slice(0, 5).map((subCat, i) => (
                          <div
                            key={i}
                            className="block p-2 px-4 text-base text-gray-800 rounded-md tablet-portrait-list-item"
                            style={{ margin: "0.25rem 0" }}
                          >
                            <span className="text-gray-600">— {subCat.product}</span>
                          </div>
                        ))}
                      </>
                    ) : (
                      <div className="p-4 text-gray-400 italic text-sm">
                        More categorized products coming soon.
                      </div>
                    )}
                  </div>
                  <div className="flex-1 space-y-0">
                    {selectedCategory && selectedCategory.brands?.length > 5 && (
                      <>
                        {selectedCategory.brands.slice(5).map((subCat, i) => (
                          <div
                            key={i}
                            className="block p-2 px-4 text-md text-gray-800 rounded-md tablet-portrait-list-item"
                            style={{ margin: "0.25rem 0" }}
                          >
                            <span className="text-gray-600">— {subCat.product}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-11 self-start">
              <div className="flex flex-col bg-white p-5 mx-auto">
                {selectedCategory && (
                  <>
                    <div className="text-center">
                      <div
                        className="border-1 hover:scale-110 transition-all duration-300 border-gray-300 m-5 ml-10 rounded-3xl p-1 mb-3 cursor-pointer group tablet-portrait-preview-card"
                        onClick={() => {
                          handleMenuLeave();
                          navigate(`/products?category=${encodeURIComponent(selectedCategory.name)}`);
                        }}
                      >
                        <img
                          src={selectedCategory.image || navbarData.logo.src}
                          alt={selectedCategory.name}
                          loading="lazy" 
                          className="border-transparent w-70 h-60 object-contain rounded-lg tablet-portrait-preview-image"
                        />
                        <h4 className="text-lg pb-1 font-medium text-gray-800 group-hover:text-[#0577b5] transition-colors">
                          View all {selectedCategory.name}
                        </h4>
                      </div>
                    </div>
                    <div className="text-center border-gray-400 pt-2 ml-5">
                      <p className="text-gray-600 mb-2 font-medium">Need Sales Support?</p>
                      <button
                        onClick={() => {
                          handleMenuLeave();
                          navigate("/contact");
                        }}
                        className="cursor-pointer text-sm w-fit px-5 py-2 bg-[#004068] hover:bg-[#00273f] text-white rounded-md font-semibold hover:scale-105 transition-all duration-300 shadow-md"
                      >
                        Talk To Sales
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderSegmentsMegaMenu = (item) => {
    const validClients = [];

    return (
      <div
        onMouseEnter={() => setActiveMegaMenu(item.id)}
        onMouseLeave={handleMenuLeave}
        className="fixed px-30 left-0 right-0 top-16 lg:top-25 w-screen bg-white z-50 animate-mega open-origin tablet-portrait-mega"
      >
        <div className="w-full">
          <div className="flex">
            <div className="w-90 tablet-portrait-side-column">
              <div className="p-0">
                <div className="flex items-center gap-1 p-2 border-b border-gray-300">
                  <span className="text-lg font-semibold text-gray-700">→</span>
                  <h3 className="text-lg font-semibold text-gray-700">Segments</h3>
                </div>
                <div className="space-y-1 py-2 ml-10 tablet-portrait-side-list">
                  {item.segmentsLinks?.map((segment, i) => (
                    <Link
                      key={i}
                      to={segment.link}
                      onMouseEnter={() => handleSegmentHover(segment)}
                      onClick={() => { handleMenuLeave(); }}
                      className={`block p-2 w-fit text-base text-gray-800 rounded-md cursor-pointer
                      ${selectedSegment?.title === segment.title
                          ? "bg-white text-gray-800 font-bold"
                          : "hover:text-black"
                        }`}
                      style={{ margin: "0.25rem 0" }}
                    >
                      {segment.title}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex-1 tablet-portrait-main-column">
              <div className="p-0">
                <div className="flex items-center gap-1 p-2 border-b border-gray-300">
                  <span className="text-lg font-semibold text-gray-700">→</span>
                 
                </div>
                <div className="flex gap-0 px-3 py-3 border-gray-300 border-r border-l bg-white tablet-portrait-center-panel tablet-portrait-segment-panel">
                  <div className="flex-1 space-y-0 tablet-portrait-segment-column">
                    {validClients.slice(0, 10).map((c, i) => (
                      <div key={i} className="block p-2 px-4 text-base text-gray-600 rounded-md tablet-portrait-list-item" style={{ margin: "0.25rem 0" }}>
                        <span className="text-gray-600">— {c.client}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex-1 space-y-0 tablet-portrait-segment-column">
                    {validClients.length > 10 && (
                      <>
                        {validClients.slice(10).map((c, i) => (
                          <div key={i} className="block p-2 px-4 text-base text-gray-600 rounded-md tablet-portrait-list-item" style={{ margin: "0.25rem 0" }}>
                            <span className="text-gray-600">— {c.client}</span>
                          </div>
                        ))}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-300 mt-11 self-start">
              <div className="flex flex-col bg-white p-5 mx-auto">
                {selectedSegment && (
                  <>
                    <div className="text-center">
                      <div
                        className="hover:scale-110 transition-all duration-300 overflow-hidden border-1 border-gray-300 m-5 ml-10 rounded-3xl mb-3 cursor-pointer tablet-portrait-preview-card"
                        onClick={() => { handleMenuLeave(); navigate(selectedSegment.link); }}
                      >
                        <img src={selectedSegment.image} loading="lazy"  alt={selectedSegment.title} className="w-70 h-60 object-cover tablet-portrait-preview-image" />
                        <h4 className="text-lg font-medium text-gray-800  py-2 text-center" style={{ wordBreak: "break-word" }}>
                          {selectedSegment.title}
                        </h4>
                      </div>
                    </div>
                    <div className="text-center border-gray-400 pt-2 ml-5">
                      <p className="text-gray-600 mb-2 font-medium">Need Sales Support?</p>
                      <button
                        onClick={() => { handleMenuLeave(); navigate("/contact"); }}
                        className="cursor-pointer text-sm w-fit px-5 py-2 bg-[#004068] hover:bg-[#00273f] text-white rounded-md font-semibold hover:scale-105 transition-all duration-300 shadow-md"
                      >
                        Talk To Sales
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const renderMegaMenu = (item) => {
    switch (item.megaMenuType) {
      case "company": return renderCompanyMegaMenu(item);
      case "brands": return renderBrandsMegaMenu(item);
      case "products": return renderProductsMegaMenu(item);
      case "segments": return renderSegmentsMegaMenu(item);
      default: return null;
    }
  };

  return (
    <>
      <div className={`hidden lg:block w-full bg-[#1a3a52] text-white fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center gap-6 text-base">
              <a href={`tel:${navbarData.topbar.contact.phone}`} className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <FaPhoneAlt className="w-3 h-3" />
                <span>Have a question? Call us now at {navbarData.topbar.contact.phone}</span>
              </a>
              <a href={`mailto:${navbarData.topbar.contact.email}`} className="flex items-center gap-2 hover:text-gray-200 transition-colors">
                <FaEnvelope className="w-3 h-3" />
                <span>{navbarData.topbar.contact.email}</span>
              </a>
            </div>

            <div className="flex items-center gap-3">
              {navbarData.topbar.socialMedia.map((social) => {
                const Icon = social.icon;
                return (
                  <a key={social.id} href={social.link} target="_blank" rel="noopener noreferrer" className={`w-7 h-7 flex items-center justify-center ${social.color} rounded-full transition-all duration-300`} aria-label={social.label}>
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <nav
        onMouseLeave={handleMenuLeave}
        className={`fixed left-0 right-0 w-full bg-white z-50 border-b
          ${isScrolled ? "shadow-lg border-gray-200 top-0" : "border-gray-100 top-0 lg:top-10"}
          ${showNavbar ? "translate-y-0" : "-translate-y-full"}
          transition-all duration-300 ease-in-out`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-10">
          <div className="flex items-center justify-between h-18 lg:h-25">
            <Link to="/" className="flex h-16 lg:h-20 items-center shrink-0">
              <img src={navbarData.logo.src} loading="lazy"   alt={navbarData.logo.alt} className="h-full w-auto object-cover" />
            </Link>
            <div className="hidden lg:flex flex-1 justify-center">
              <div className="flex items-center">
                {navbarData.menuItems.map((item) => (
                  <div key={item.id} className="relative" onMouseEnter={() => handleMenuHover(item.id, item.hasMegaMenu)}>
                    <Link
                      to={item.link}
                      onClick={(e) => handleMenuClick(e, item)}
                      className={`flex items-center px-4 py-8 text-gray-700 hover:text-black hover:font-bold font-normal text-base transition-colors duration-200 whitespace-nowrap ${activeMegaMenu === item.id ? "text-black" : ""}`}
                    >
                      {item.title}
                      {item.hasMegaMenu && (
                        <FiChevronDown className={`ml-2 w-4 h-4 transition-transform duration-200 ${activeMegaMenu === item.id ? "rotate-180" : ""}`} />
                      )}
                    </Link>
                    {item.hasMegaMenu && activeMegaMenu === item.id && renderMegaMenu(item)}
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => navigate(navbarData.ctaButton.link)}
              className="m-2 hidden cursor-pointer lg:flex items-center bg-[#004068] hover:bg-[#00273f] text-white p-2 rounded-md text-sm md:text-base font-semibold hover:scale-105 transition-all duration-300 shadow-md"
              style={{ whiteSpace: "nowrap" }}
            >
              <FaPhoneAlt className="text-white mr-2" />
              {navbarData.ctaButton.text}
            </button>
            <button onClick={toggleMobileMenu} className="lg:hidden inline-flex items-center justify-center w-10 h-10 bg-gray-50 rounded-lg border border-gray-200 text-[#004068] cursor-pointer" aria-label="Toggle menu">
              {isMobileMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>
        {activeMegaMenu && <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out pointer-events-none" style={{ top: isScrolled ? "6.25rem" : "8.75rem" }} />}
      </nav>
      <div
        className={`lg:hidden fixed inset-0 bg-black/60 z-[60] transition-opacity duration-300 ${
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={handleMobileMenuClose}
      />
      <div
        className={`lg:hidden fixed top-0 right-0 h-[100dvh] w-[85%] sm:w-[70%] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-4 border-b border-gray-100 bg-white shrink-0 shadow-sm z-20">
          {mobileMenuPath.length > 1 ? (
            <button onClick={handleMobileBack} className="text-[#0577b5] flex items-center gap-1 font-bold text-sm tracking-wide bg-blue-50/50 px-3 py-1.5 rounded-lg active:scale-95 transition-transform cursor-pointer">
              <FiChevronLeft className="text-lg" /> Back
            </button>
          ) : (
            <img src={navbarData.logo.src}  loading="lazy"  alt="Logo" className="h-8 object-contain" />
          )}
          <button onClick={handleMobileMenuClose} className="p-2 bg-gray-50 rounded-full text-gray-600 hover:bg-gray-200 transition-colors cursor-pointer">
            <FiX className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-hidden relative bg-white">
          <div
            className="flex h-full transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${(mobileMenuPath.length - 1) * 100}%)` }}
          >
            {mobileMenuPath.map((panel, index) => (
              <div key={index} className="w-full h-full shrink-0 overflow-y-auto bg-white flex flex-col pb-6">
                {renderMobilePanelContent(panel)}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes megaDropBounce { 0%   { opacity: 0; transform: scaleY(0.85); } 60%  { opacity: 1; transform: scaleY(1.02); } 80%  { transform: scaleY(0.995); } 100% { transform: scaleY(1); } }
        .animate-mega { animation: megaDropBounce .4s ease-out both; }
        .open-origin { transform-origin: top; }
        @keyframes panelSlideIn { from { opacity: 0; transform: translateY(-8px); } to   { opacity: 1; transform: translateY(0); } }
        .animate-panel { animation: panelSlideIn .2s ease-out both; }
        .animate-collapse { animation: fadeIn .2s ease-out both; }
        @keyframes fadeIn { from { opacity: 0; } to   { opacity: 1; } }

        @media (min-width: 1024px) and (max-width: 1100px) and (min-height: 1300px) and (max-height: 1400px) {
          .tablet-portrait-mega { padding-left: 2.5rem; padding-right: 2.5rem; }
          .tablet-portrait-side-column { width: 13rem; min-width: 13rem; flex: 0 0 13rem; }
          .tablet-portrait-main-column { flex: 1 1 auto; min-width: 0; }
          .tablet-portrait-side-list { margin-left: 1rem; }
          .tablet-portrait-center-panel { padding-left: 0.75rem; padding-right: 0.75rem; }
          .tablet-portrait-list-item { width: 100%; max-width: 100%; font-size: 0.95rem; line-height: 1.25rem; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; white-space: normal; word-break: break-word; }
          .tablet-portrait-preview-card { margin-left: 0.75rem; margin-right: 0; width: 17rem; }
          .tablet-portrait-preview-image { width: 17rem; }
          .tablet-portrait-segment-panel { max-height: 32rem; overflow: hidden; }
          .tablet-portrait-segment-column { overflow: hidden; }
        }
      `}</style>
    </>
  );
};

export default Navbar;