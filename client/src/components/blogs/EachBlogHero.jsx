import React from "react";
import Meta from "../Meta";

const EachBlogHero = ({ image, title }) => {
  return (
    <section className="w-full bg-white">
      <Meta title={title} />
      <div className="w-full pt-16">
        <div className="w-full h-[240px] sm:h-[360px] md:h-[520px] lg:h-[calc(100vh-4rem)] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default EachBlogHero;
