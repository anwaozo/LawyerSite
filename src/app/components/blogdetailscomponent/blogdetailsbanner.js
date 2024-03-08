import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function BlogdetailsbannerComponent({ blogImage, blogTitle }) {
  return (
    <section className="inner-banner-area">
      <Image
        src={`/${blogImage}`}
        width={1920}
        height={375}
        loading="lazy"
        decoding="async"
        alt={blogTitle}
      />
    </section>
  );
}
