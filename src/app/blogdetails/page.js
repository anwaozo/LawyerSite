import Image from "next/image";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { getPost, getRecommendedBlogs } from "../../../service-cms/blogs";

const BlogdetailsComponent = dynamic(
  () => import("../components/blogdetailscomponent"),
  {
    ssr: true,
  }
);

export default function BlogdetailsmainComponent({ searchParams }) {
  console.log(searchParams);
  const blog = useMemo(() => getPost(searchParams.slug), [searchParams.slug]);
  const recommendedBlogs = useMemo(() => getRecommendedBlogs(), []);
  return (
    <BlogdetailsComponent blog={blog} recommendedBlogs={recommendedBlogs} />
  );
}
