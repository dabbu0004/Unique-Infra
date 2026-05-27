import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import Meta from "../Meta";
import ContactForm from "../ContactForm";
import AnimateAppear from "../animations/AnimateAppear";

const KeyFeatures = ({ features }) => {
  if (!features || !features.length) return null;
  return (
    <div className="my-6">
      <div className="font-semibold text-base mb-2">Key Features:</div>
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {features.map((feature, idx) => (
          <li key={idx} className="mb-1">
            <span className="block font-semibold">{feature.title}:</span>
            <span className="block font-normal">{feature.desc}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const EachProductHero = ({ product }) => {
  const [selectedImage, setSelectedImage] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [product]);

  const handleImageChange = (index) => setSelectedImage(index);
  const handlePrevImage = () =>
    setSelectedImage(
      selectedImage === 0 ? product.images.length - 1 : selectedImage - 1,
    );
  const handleNextImage = () =>
    setSelectedImage(
      selectedImage === product.images.length - 1 ? 0 : selectedImage + 1,
    );

  if (!product || !product.category || !product.title) {
    return null;
  }

  const renderFormattedText = (text, index = 0) => {
    if (typeof text === "string" && text.includes(":")) {
      const [boldPart, restOfText] = text.split(/:(.*)/s);
      return (
        <p key={index}>
          <span className="font-bold text-gray-900">{boldPart}:</span>
          {restOfText}
        </p>
      );
    }
    return <p key={index}>{text}</p>;
  };
  const extractedBrandRaw = product.slug ? product.slug.split("-")[0] : "";
  const formattedBrand =
    extractedBrandRaw.charAt(0).toUpperCase() + extractedBrandRaw.slice(1);
  const finalBrand = product.brand || formattedBrand;

  return (
    <>
      <Meta
        title={product.metaTitle || product.title}
        description={product.metaDescription || product.description?.[0]}
        keywords={product.metaKeywords}
      />
      <section className="bg-gray-50  py-2">
        <div className="mx-auto px-4 mt-6 md:px-10 lg:px-20">
          <nav className="flex items-center space-x-2 text-sm text-gray-600 mb-6">
            <Link to="/" className="hover:text-blue-600">
              Home
            </Link>
            <FaChevronRight size={12} />
            <Link to="/products" className="hover:text-blue-600">
              Products
            </Link>
            <FaChevronRight size={12} />
            <Link
              to={`/products?category=${encodeURIComponent(product.category)}`}
              className="hover:text-blue-600"
            >
              {product.category}
            </Link>
            <FaChevronRight size={12} />
            <span className="text-gray-700 font-medium line-clamp-1">
              {product.title}
            </span>
          </nav>

          <div className="flex flex-col lg:flex-row gap-6 lg:gap-10">
            <div className="w-full lg:w-3/5 xl:w-2/3">
              <AnimateAppear>
                <div className="bg-white rounded-lg shadow-sm p-4 md:p-8">
                  <div className="flex flex-col-reverse md:flex-row gap-4">
                    {product.images?.length > 1 && (
                      <div className="flex flex-row md:flex-col gap-2 overflow-x-auto md:overflow-visible [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                        {product.images.map((image, index) => (
                          <button
                            key={index}
                            onClick={() => handleImageChange(index)}
                            className={`w-20 h-20 cursor-pointer border-2 rounded-lg overflow-hidden transition flex-shrink-0 ${selectedImage === index
                                ? "border-blue-600"
                                : "border-gray-200 hover:border-gray-400"
                              }`}
                          >
                            <img
                             loading = "lazy"
                              src={image}
                              alt={`${product.title} - ${index + 1}`}
                              className="w-full h-full object-contain"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                    <div className="relative flex-1 bg-gray-100 rounded-lg overflow-hidden flex items-center justify-center">
                      <img
                       loading = "lazy"
                        src={
                          product.images?.[selectedImage] ||
                          "/placeholder-product.jpg"
                        }
                        alt={product.title}
                        className="w-full h-120 object-contain  transition"
                      />
                      {product.images?.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute cursor-pointer left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
                          >
                            <FaChevronLeft size={20} />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute cursor-pointer right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-lg transition"
                          >
                            <FaChevronRight size={20} />
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 mt-6">
                    {product.title}
                  </h2>
                  {product.description && (
                    <div className="mt-2 space-y-2 text-base text-gray-600 leading-relaxed">
                      {Array.isArray(product.description) ? (
                        product.description.map((para, index) =>
                          renderFormattedText(para, index),
                        )
                      ) : (
                        renderFormattedText(product.description)
                      )}
                    </div>
                  )}

                  {product.specifications && (
                    <div className="mt-6">
                      <div className="flex flex-col gap-6">
                        {Array.isArray(product.specifications) ? (
                          product.specifications.map((specObj, idx) => (
                            <div key={idx} className="overflow-x-auto">
                              {specObj.title && (
                                <div className="font-semibold text-base mb-2">
                                  {specObj.title}
                                </div>
                              )}
                              <table className="min-w-full border border-gray-300 rounded-lg">
                                <tbody>
                                  {Object.entries(specObj)
                                    .filter(([key]) => key !== "title")
                                    .map(([key, value]) => (
                                      <tr key={key} className="odd:bg-gray-50">
                                        <td className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap border-b border-gray-300 w-1/3">
                                          {key}
                                        </td>
                                        <td className="px-4 py-2 text-gray-600 border-b border-l border-gray-300">
                                          {value}
                                        </td>
                                      </tr>
                                    ))}
                                </tbody>
                              </table>
                            </div>
                          ))
                        ) : (
                          <div className="overflow-x-auto">
                            <table className="min-w-full border border-gray-200 rounded-lg">
                              <tbody>
                                {Object.entries(product.specifications).map(
                                  ([key, value]) => (
                                    <tr key={key} className="even:bg-gray-50">
                                      <td className="px-4 py-2 font-medium text-gray-700 whitespace-nowrap border-b border-gray-200 w-1/3">
                                        {key}
                                      </td>
                                      <td className="px-4 py-2 text-gray-600 border-b border-gray-200">
                                        {value}
                                      </td>
                                    </tr>
                                  ),
                                )}
                              </tbody>
                            </table>
                          </div>
                        )}
                      </div>
                      {product.keyFeatures && (
                        <KeyFeatures features={product.keyFeatures} />
                      )}
                    </div>
                  )}
                </div>
              </AnimateAppear>

            </div>

            <div className="w-full lg:w-2/5 xl:w-1/3">
              <div className="sticky top-24">
                <AnimateAppear>
                  <ContactForm
                    productTitle={product.title || product.name}
                    productBrand={finalBrand}
                  />
                </AnimateAppear>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EachProductHero;