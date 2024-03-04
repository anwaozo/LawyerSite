import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function PricingbannerComponent() {
  return (
    <section class="inner-banner-area">
      <Image
        src="/images/pricing-banner.jpg"
        width={1920}
        height={375}
        loading="lazy"
        decoding="async"
        alt=""
      />
    </section>
  );
}
