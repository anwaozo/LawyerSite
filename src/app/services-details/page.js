
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../shared/header"), {
  ssr: true,
});

const ServicedetailsbannerComponent = dynamic(() => import("./servicebanner"), {
  ssr: true,
});
const ServicedetailspostComponent = dynamic(() => import("./servicepost"), {
  ssr: true,
});

const FooterComponent = dynamic(() => import("../shared/footer"), {
  ssr: true,
});

export default function ServiceDetailsComponent() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServicedetailsbannerComponent />
      <ServicedetailspostComponent />
      <FooterComponent />
    </React.Fragment>
  );
}