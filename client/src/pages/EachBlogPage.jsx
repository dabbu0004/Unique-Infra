import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import BlogsData from "../data/BlogsData.jsx";
import EachBlogHero from "../components/blogs/EachBlogHero.jsx";
import EachBlogContent from "../components/blogs/EachBlogContent.jsx";
import ReadMoreBlogs from "../components/blogs/ReadMoreBlogs.jsx";
import NotFound from "../components/404_page.jsx";

const EachBlogPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const blog = BlogsData.find((blog) => blog.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <NotFound />
     
    );
  }

  return (
    <div>
      <EachBlogHero image={blog.image} title={blog.title} />
      <EachBlogContent content={blog.content} />
      <ReadMoreBlogs currentBlogSlug={slug} />
    </div>
  );
};

export default EachBlogPage;
