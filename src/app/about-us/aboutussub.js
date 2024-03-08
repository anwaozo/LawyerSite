import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import AboutAreaSection from "./aboutAreaSection";
import BussinessInformationSection from "../shared/bussinessInformationSection";
import CollegueSection from "./collegueSection";
import { collegueSectionTitle, collegues } from "../../../service-cms/aboutUs";
import { legalPartnerSection } from "../../../service-cms/applicationFragments";
import EvaluationFormComponent from "../shared/evaluationFormSection";
import ContactUsComponent from "../shared/contactUsSection";

export default function AboutussubComponent() {
  // console.log(showModal);
  return (
    <main
      className="inner-about-wrapper"
      // onClick={() => {
      //   setShowModal(false);
      // }}
    >
      {/* <!-- About Area Section --> */}
      <AboutAreaSection legalPartnerSection={legalPartnerSection} />
      {/* <!-- Verticle Tab Section --> */}
      <BussinessInformationSection />
      {/* <!-- Colleagues Section --> */}
      <CollegueSection
        collegueSectionTitle={collegueSectionTitle}
        collegues={collegues}
      />
      {/* <!-- Testimonial Section --> */}
      <EvaluationFormComponent />
      {/* <!-- Social Section --> */}
      <ContactUsComponent />
    </main>
  );
}
