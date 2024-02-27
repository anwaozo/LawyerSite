
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../shared/header"), {
  ssr: true,
});

const ServicebannerComponent = dynamic(() => import("./servicebanner"), {
  ssr: true,
});
const ServicepostComponent = dynamic(() => import("./servicepost"), {
  ssr: true,
});

const FooterComponent = dynamic(() => import("../shared/footer"), {
  ssr: true,
});

export default function ServiceComponent() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <ServicebannerComponent />
      <ServicepostComponent />
      <FooterComponent />
    </React.Fragment>
  );
}