import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function BlogbannerComponent({ pageTitle, pageImage }) {
  return (
    <section className="inner-banner-area">
      <Image
        src={`/${pageImage}`}
        width={1920}
        height={375}
        loading="lazy"
        decoding="async"
        alt={pageTitle}
      />
      <div className="inner-banner-content">
        <div className="page-container">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
            {pageTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
