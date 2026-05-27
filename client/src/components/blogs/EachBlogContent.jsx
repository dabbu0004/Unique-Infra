import React from "react";

const EachBlogContent = ({ content }) => {
  if (!content || !content.sections) return null;

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-16 bg-white">
      <div className="prose prose-lg max-w-none">
        {content.sections.map((section, idx) => {
          switch (section.type) {
            case "heading2":
              return (
                <h2
                  key={idx}
                  className="text-3xl md:text-4xl font-bold text-[#013752] mb-6 mt-12 first:mt-0"
                >
                  {section.content}
                </h2>
              );
            case "heading3":
              return (
                <h3
                  key={idx}
                  className="text-2xl md:text-3xl font-semibold text-[#002f46] mb-2 mt-8"
                >
                  {section.content}-
                </h3>
              );
            case "paragraph":
              return (
                <p
                  key={idx}
                  className="text-lg text-gray-700 mb-2 leading-relaxed text-justify"
                >
                  {section.content}
                </p>
              );
            case "list":
              return (
                <div key={idx} className="mb-8">
                  <ul className="space-y-4">
                    {section.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-3 bg-[#ffffff] rounded-lg"
                      >
                        <span className="text-[#023954] text-xl">•</span>
                        <div>
                          <span className="font-semibold text-[#023954] text-lg block mb-1">
                            {item.title}
                          </span>
                          <span className="text-gray-700 text-base">
                            {item.description}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            default:
              return null;
          }
        })}
      </div>
    </section>
  );
};

export default EachBlogContent;
