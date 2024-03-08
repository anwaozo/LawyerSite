"use client";
import React from "react";
import dynamic from "next/dynamic";

const HomemainComponent = dynamic(() => import("./components/homepage/index"), {
  ssr: true,
});

export default function Home() {
  return <HomemainComponent />;
}
