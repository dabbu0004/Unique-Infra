import React, { useCallback, useMemo, useState } from "react";
import BlogsData from "../../data/BlogsData";
import { HiArrowNarrowRight } from "react-icons/hi";
import AnimateAppear from "../animations/AnimateAppear";

const BlogsGrid = () => {
  const [visibleCount, setVisibleCount] = useState(6);

  const handleBlogClick = useCallback((slug) => {
    window.location.href = `/blogs/${slug}`;
  }, []);

  const loadMoreBlogs = useCallback(() => {
    setVisibleCount((prevCount) => prevCount + 3);
  }, []);

  const visibleBlogs = useMemo(
    () => BlogsData.slice(0, visibleCount),
    [visibleCount],
  );

  const hasMoreBlogs = visibleCount < BlogsData.length;

  const blogCards = useMemo(
    () =>
      visibleBlogs.map((blog) => (
        <div
          key={blog.id}
          className="blog-card group bg-white rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-md hover:scale-102 transition-all duration-500 border-1 border-gray-200 hover:border-[#0575af]/20 flex-none w-full md:w-[calc(33.333%-1.5rem)] max-w-sm"
          onClick={() => handleBlogClick(blog.slug)}
        >
          <div className="blog-image-container bg-[#def0fb] h-55 overflow-hidden relative">
            <img
              src={blog.image}
              alt={blog.title}
              loading="lazy"
              className="w-full h-full object-cover group-hover:scale-102 transition-all duration-500"
            />
          </div>

          <div className="p-3">
            <h3 className="text-xl text-left font-bold mb-3 group-hover:text-[#0575af] transition-all duration-300 text-[#022e4e] line-clamp-2">
              {blog.title}
            </h3>
            <p className="text-[#0e466a99] text-justify text-sm leading-relaxed line-clamp-3">
              {blog.metaDescription}
            </p>
            <div className="mt-4 flex items-center text-[#0575af] font-medium text-sm group-hover:translate-x-2 transition-all duration-300">
              <span>Read More</span>
              <HiArrowNarrowRight className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      )),
    [visibleBlogs, handleBlogClick],
  );

  return (
    <div className="blogs-main-container min-h-screen bg-gradient-to-b from-[#eaf7ff] via-white to-[#e0f3ff]">
      <div className="max-w-7xl mx-auto px-4 py-20 md:pt-40 text-center">
        <AnimateAppear>
          <div className="mb-12 md:mb-16">
            <p className="text-xs md:text-sm font-semibold tracking-[0.25em] md:tracking-[0.35em] text-[#19587e] mb-3 md:mb-4">
              INSIGHTS & KNOWLEDGE
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4">
              Our Latest <span className="text-[#19587e]">Blogs</span>
            </h1>
            <p className="text-sm md:text-base lg:text-lg text-[#0e466a99] max-w-3xl mx-auto">
              Stay updated with industry insights, safety protocols, and the
              latest developments in petroleum products and services.
            </p>
          </div>
        </AnimateAppear>
        <div className="flex flex-wrap justify-center gap-6">{blogCards}</div>

        {hasMoreBlogs && (
          <div className="mt-4">
            <button
              onClick={loadMoreBlogs}
              className="bg-[#004068] cursor-pointer text-white px-6 py-2 text-base rounded-md font-semibold hover:bg-[#00273f] transition-all duration-300 shadow-md hover:shadow-lg hover:scale-105 flex items-center mx-auto"
            >
              <span>Load More Blogs</span>
              <HiArrowNarrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogsGrid;
