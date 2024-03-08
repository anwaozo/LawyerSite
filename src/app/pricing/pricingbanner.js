import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function PricingbannerComponent({ pageImage, pageTitle }) {
  return (
    <section class="inner-banner-area">
      <Image
        src={`/${pageImage}`}
        width={1920}
        height={375}
        loading="lazy"
        decoding="async"
        alt={pageTitle}
      />
    </section>
  );
}
