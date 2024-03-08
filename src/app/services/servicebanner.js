import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { pageTitle, pageImage } from "../../../service-cms/services";

export default function ServicebannerComponent() {
  return (
    <section class="inner-banner-area">
      <Image
        src={`/${pageImage}`}
        width={1920}
        height={375}
        loading="lazy"
        decoding="async"
        alt=""
      />
      <div class="inner-banner-content">
        <div class="page-container">
          <h1 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1500">
            {pageTitle}
          </h1>
        </div>
      </div>
    </section>
  );
}
