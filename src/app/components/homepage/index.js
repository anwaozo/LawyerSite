import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../../shared/header"), {
  ssr: true,
});

const HomesectionComponent = dynamic(() => import("./homesection"), {
  ssr: true,
});

const HomeaboutComponent = dynamic(() => import("./homeabout"), {
  ssr: true,
});

const Homelegalcomponent = dynamic(() => import("./homelegal"), {
  ssr: true,
});

const Homeverticalcomponent = dynamic(() => import("./homevertical"), {
  ssr: true,
});

const Homecolleguecomponent = dynamic(() => import("./homecollegue"), {
  ssr: true,
});

const Homeevaluationcomponent = dynamic(() => import("./homeevaluation"), {
  ssr: true,
});

const HomepostComponent = dynamic(() => import("./homepost"), {
  ssr: true,
});

const HometestimonialComponent = dynamic(() => import("./hometestimonial"), {
  ssr: true,
});

const HomefooterComponent = dynamic(() => import("./homefooter"), {
  ssr: true,
});

export default function Home() {
  return (
    <React.Fragment>
      <HeaderComponent />

      <HomesectionComponent />

      <HomeaboutComponent />

      <Homelegalcomponent />

      <Homeverticalcomponent />

      <Homecolleguecomponent />

      <Homeevaluationcomponent />

      <HomepostComponent />

      <HometestimonialComponent />

      <HomefooterComponent />
    </React.Fragment>
  );
}
