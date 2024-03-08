import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { pageTitle, pageImage } from "../../../service-cms/services";

const HeaderComponent = dynamic(() => import("../shared/header"), {
  ssr: true,
});

const PageBannerComponent = dynamic(() => import("../shared/pageBanner"), {
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
      <PageBannerComponent pageImage={pageImage} pageTitle={pageTitle} />
      <ServicepostComponent />
      <FooterComponent />
    </React.Fragment>
  );
}
