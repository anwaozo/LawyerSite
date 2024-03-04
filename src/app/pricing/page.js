import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../shared/header"), {
  ssr: true,
});

const PricingbannerComponent = dynamic(() => import("./pricingbanner"), {
  ssr: true,
});
const PricingpostComponent = dynamic(() => import("./pricingpost"), {
  ssr: true,
});

const FooterComponent = dynamic(() => import("../shared/footer"), {
  ssr: true,
});

export default function PricingComponent() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <PricingbannerComponent />
      <PricingpostComponent />
      <FooterComponent />
    </React.Fragment>
  );
}