import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../../shared/header"), {
  ssr: true,
});

const ContactdetailsbannerComponent = dynamic(
  () => import("./contactdetailsbanner"),
  {
    ssr: true,
  }
);
const ContactdetailsmainComponent = dynamic(
  () => import("./contactdetailsmain"),
  {
    ssr: true,
  }
);

const FooterComponent = dynamic(() => import("../../shared/footer"), {
  ssr: true,
});

export default function ContactdetailsComponent() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <ContactdetailsbannerComponent />
      <ContactdetailsmainComponent />
      <FooterComponent />
    </React.Fragment>
  );
}
