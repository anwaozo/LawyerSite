import Image from "next/image";
import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { services } from "../../../service-cms/services";
import { getService, getOtherServices } from "../../../service-cms/services";

const HeaderComponent = dynamic(() => import("../shared/header"), {
  ssr: true,
});

const ServicedetailsbannerComponent = dynamic(() => import("./servicebanner"), {
  ssr: true,
});

const PageBannerComponent = dynamic(() => import("../shared/pageBanner"), {
  ssr: true,
});

const ServicedetailspostComponent = dynamic(() => import("./servicepost"), {
  ssr: true,
});

const FooterComponent = dynamic(() => import("../shared/footer"), {
  ssr: true,
});

export default function ServiceDetailsComponent({ searchParams }) {
  console.log(searchParams);
  const service = useMemo(
    () => getService(searchParams.slug),
    [searchParams.slug]
  );
  const otherServices = useMemo(
    () => getOtherServices(searchParams.slug),
    [searchParams.slug]
  );
  return (
    <React.Fragment>
      <HeaderComponent />
      <PageBannerComponent
        pageTitle={service.title}
        pageImage={service.featuredImage}
      />
      <ServicedetailspostComponent
        service={service}
        otherServices={otherServices}
      />
      <FooterComponent />
    </React.Fragment>
  );
}
