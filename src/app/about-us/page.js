
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../shared/header"), {
  ssr: true,
});

const AboutussubComponent = dynamic(() => import("./aboutussub"), {
  ssr: true,
});


const FooterComponent = dynamic(() => import("../shared/footer"), {
  ssr: true,
});

export default function AboutusComponent() {
  return (
    <React.Fragment>
      <HeaderComponent />
      <AboutussubComponent />
      <FooterComponent />
    </React.Fragment>
  );
}