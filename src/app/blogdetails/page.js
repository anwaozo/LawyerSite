import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const BlogdetailsComponent = dynamic(
  () => import("../components/blogdetailscomponent"),
  {
    ssr: true,
  }
);

export default function BlogdetailsmainComponent() {
  return <BlogdetailsComponent />;
}
