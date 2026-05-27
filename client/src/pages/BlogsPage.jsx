import React, { useEffect } from "react";
import BlogsGrid from "../components/blogs/BlogsGrid";
import InstagramContent from "../components/blogs/InstagramContent";
import Meta from "../components/Meta";

const BlogsPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Meta
        title="News & Blogs - UISPPL"
        description="Read the latest blogs on electrical products, industry trends, and project insights from UISPPL."
      />
      <BlogsGrid />
      <InstagramContent />
    </div>
  );
};

export default BlogsPage;
