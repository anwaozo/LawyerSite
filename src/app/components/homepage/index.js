"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const HeaderComponent = dynamic(() => import("../../shared/header"));

const HomesectionComponent = dynamic(() => import("./homesection"));

const HomeaboutComponent = dynamic(() => import("./homeabout"));

const Homelegalcomponent = dynamic(() => import("./homelegal"));

const Homeverticalcomponent = dynamic(() => import("./homevertical"));

const Homecolleguecomponent = dynamic(() => import("./homecollegue"));

const Homeevaluationcomponent = dynamic(() => import("./homeevaluation"));

const HomepostComponent = dynamic(() => import("./homepost"));

const HometestimonialComponent = dynamic(() => import("./hometestimonial"));

const HomefooterComponent = dynamic(() => import("./homefooter"));

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
