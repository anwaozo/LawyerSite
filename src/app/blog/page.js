import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const BlogComponent = dynamic(() => import("../components/blogcomponent"), {
  ssr: true,
});

export default function BlogMainComponent() {
  return <BlogComponent />;
}
