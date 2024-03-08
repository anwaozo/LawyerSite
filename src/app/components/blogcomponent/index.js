import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
// import {
//   pageTitle, pageImage, posts,
// } from "../../service-cms/blogs";

const HeaderComponent = dynamic(() => import("../../shared/header"), {
  ssr: true,
});

const BlogbannerComponent = dynamic(() => import("./blogbanner"), {
  ssr: true,
});
const BlogpostComponent = dynamic(() => import("./blogpost"), {
  ssr: true,
});

const FooterComponent = dynamic(() => import("../../shared/footer"), {
  ssr: true,
});

export default function BlogComponent() {
  // console.log("hello world")
  // console.log(pageTitle, pageImage, posts,"blogs")
  return (
    <React.Fragment>
      <HeaderComponent />
      <BlogbannerComponent />
      <BlogpostComponent />
      <FooterComponent />
    </React.Fragment>
  );
}
