import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

const ContactComponent = dynamic(() => import("../components/contactcomponent"), {
  ssr: true,
});

export default function ContactMainComponent() {
  return <ContactComponent />;
}
