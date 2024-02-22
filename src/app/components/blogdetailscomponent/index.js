import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../../shared/header"), {
  ssr: true,
});

const BlogdetailsbannerComponent = dynamic(
  () => import("./blogdetailsbanner"),
  {
    ssr: true,
  }
);
const BlogdetailsmainComponent = dynamic(() => import("./blogdetailsmain"), {
  ssr: true,
});
const BlogdetailstestimonialComponent = dynamic(
  () => import("./blogdetailstestimonial"),
  {
    ssr: true,
  }
);

const FooterComponent = dynamic(() => import("../../shared/footer"), {
  ssr: true,
});

export default function BlogdetailsComponent() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <BlogdetailsbannerComponent />
      <BlogdetailsmainComponent />
      <BlogdetailstestimonialComponent />
      <FooterComponent />
    </React.Fragment>
  );
}
