import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";
import BrandsPageData from "../../data/BrandsPageData";

const BrandsFaq = () => {
  const { slug } = useParams();
  const brandData = BrandsPageData.find((brand) => brand.slug === slug);
  const [activeIndex, setActiveIndex] = useState(null);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!brandData) return null;

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const renderPointWithBoldTitle = (point) => {
    if (typeof point === "string" && point.includes(":")) {
      const [boldTitle, ...rest] = point.split(":");
      const description = rest.join(":");
      return (
        <>
          <strong className="font-bold text-gray-900">{boldTitle}:</strong> {description}
        </>
      );
    }
    return point;
  };

  return (
    <section className="w-full px-4 py-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-2xl py-8 md:py-12">
    
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-700 mb-4 leading-tight">
              <span className="text-[#19587e]">{brandData.title}</span>
            </h2>
            {brandData.subtitle && (
              <p className="text-xs md:text-sm text-gray-700 font-medium mb-4">
                {brandData.subtitle}
              </p>
            )}
            
            {brandData.detailedDescription && (
              Array.isArray(brandData.detailedDescription) ? (
                brandData.detailedDescription.map((desc, index) => (
                  <p key={index} className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                    {desc}
                  </p>
                ))
              ) : (
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                  {brandData.detailedDescription}
                </p>
              )
            )}
          </div>
          {brandData.weSuppply && brandData.weSuppply.points && (
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                {brandData.weSuppply.title}
              </h3>
              <ul className="space-y-2">
                {brandData.weSuppply.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#034a76] mr-2 mt-1">•</span>
                    <span className="text-xs md:text-sm text-gray-700">
                      {renderPointWithBoldTitle(point)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {brandData.additionalInfo && (
            <div className="mb-8">
              {!Array.isArray(brandData.additionalInfo) && brandData.additionalInfo.title ? (
                <>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                    {brandData.additionalInfo.title}
                  </h3>
                  {brandData.additionalInfo.detailedDescription && brandData.additionalInfo.detailedDescription.map((desc, idx) => (
                    <p key={`add-desc-${idx}`} className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                      {desc}
                    </p>
                  ))}
                  {brandData.additionalInfo.points && (
                    <ul className="space-y-2">
                      {brandData.additionalInfo.points.map((point, index) => (
                        <li key={`add-point-${index}`} className="flex items-start">
                          <span className="text-[#034a76] mr-2 mt-1">•</span>
                          <span className="text-xs md:text-sm text-gray-700">
                            {renderPointWithBoldTitle(point)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                Array.isArray(brandData.additionalInfo) && brandData.additionalInfo.map((info, index) => (
                  <p key={index} className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                    {info}
                  </p>
                ))
              )}
            </div>
          )}

          {brandData.whyChoose && brandData.whyChoose.points && (
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                {brandData.whyChoose.title}
              </h3>
              <ul className="space-y-2">
                {brandData.whyChoose.points.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-[#034a76] mr-2 mt-1">•</span>
                    <span className="text-xs md:text-sm text-gray-700">
                      {renderPointWithBoldTitle(point)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {brandData.trustedSupplier && (
            <div className="mb-10">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                {brandData.trustedSupplier.title}
              </h3>
              {brandData.trustedSupplier.description && (
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-4">
                  {brandData.trustedSupplier.description}
                </p>
              )}
              {brandData.trustedSupplier.Weprovide && brandData.trustedSupplier.Weprovide.points && (
                <div className="mb-4">
                  <h4 className="text-base font-bold text-gray-800 mb-3">
                    {brandData.trustedSupplier.Weprovide.title}
                  </h4>
                  <ul className="space-y-2">
                    {brandData.trustedSupplier.Weprovide.points.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#034a76] mr-2 mt-1">•</span>
                        <span className="text-xs md:text-sm text-gray-700">
                          {renderPointWithBoldTitle(point)}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {brandData.trustedSupplier.footerText && (
                <p className="text-xs md:text-sm text-gray-600 leading-relaxed mt-4">
                  {brandData.trustedSupplier.footerText}
                </p>
              )}
            </div>
          )}

          {brandData.AllProductsDetails && brandData.AllProductsDetails.products && (
            <div className="mb-12">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
                Detailed Product Specifications
              </h3>
              <div className="space-y-8">
                {brandData.AllProductsDetails.products.map((prod, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                    <h4 className="text-base font-bold text-[#19587e] mb-2">{prod.title}</h4>
                    {prod.description && (
                      <p className="text-xs md:text-sm text-gray-700 mb-4 leading-relaxed">
                        {prod.description}
                      </p>
                    )}
                  
                    {prod.specifications && (
                      <div className="mb-4">
                        <h5 className="font-semibold text-gray-900 mb-2">Specifications:</h5>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {Object.entries(prod.specifications).map(([key, value], idx) => (
                            <li key={idx} className="flex items-start text-xs md:text-sm text-gray-700">
                              <span className="text-[#034a76] mr-2 mt-1">•</span>
                              <span><strong className="text-gray-900">{key}:</strong> {value}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    {prod.applications && prod.applications.length > 0 && (
                      <div>
                        <h5 className="font-semibold text-gray-900 mb-2">Applications:</h5>
                        <ul className="list-disc pl-5 space-y-1">
                          {prod.applications.map((app, idx) => (
                            <li key={idx} className="text-xs md:text-sm text-gray-700">
                              {app}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {brandData.faqs && brandData.faqs.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6">
                Frequently Asked Questions (FAQs)
              </h3>
              <div className="space-y-4">
                {brandData.faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-all duration-300"
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-50 transition-colors duration-200"
                    >
                      <span className="font-semibold text-2rem text-gray-800 pr-4">
                        {index + 1}. {faq.question}
                      </span>
                      <FiChevronDown
                        className={`flex-shrink-0 w-5 h-5 text-[#034a76] transition-transform duration-300 ${
                          activeIndex === index || hoveredIndex === index
                            ? "rotate-180"
                            : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${
                        activeIndex === index || hoveredIndex === index
                          ? "max-h-96"
                          : "max-h-0"
                      }`}
                    >
                      <div className="p-4 pt-0 text-xs md:text-sm text-gray-600 leading-relaxed">
                        {faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {brandData.contactCTA && (
            <div className="bg-white rounded-lg p-6 border-l-4 border-[#034a76] shadow-sm">
              <p className="text-xs md:text-sm text-gray-700 leading-relaxed">
                {brandData.contactCTA}
              </p>
            </div>
          )}

        </div>
      </div>
    </section>
  );
};

export default BrandsFaq;