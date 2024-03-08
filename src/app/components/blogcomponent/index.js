import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { pageTitle, pageImage, posts } from "../../../../service-cms/blogs";
import EvaluationFormComponent from "../../shared/evaluationFormSection";

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

export default function BlogComponent({ author }) {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BlogbannerComponent pageTitle={pageTitle} pageImage={pageImage} />
      <BlogpostComponent posts={posts} author={author} />
      <EvaluationFormComponent />
      <FooterComponent />
    </React.Fragment>
  );
}
