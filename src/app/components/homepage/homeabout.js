import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { legalTeamSection } from "../../service-cms/homePage";

export default function HomeaboutComponent() {
  console.log(legalTeamSection);
  const { title, subHeading, sectionLink, sectionInfo } = legalTeamSection;
  return (
    <section className="about-area">
      <div className="page-container">
        <div className="row">
          <div className="col-6">
            <div className="about-content-block">
              <h4
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                {title}
              </h4>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                {subHeading}
              </p>
              <a
                className="btn btn-primary"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                {sectionLink?.linkLabel}
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              {sectionInfo?.map((info) => (
                <div
                  key={info?.title}
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <h6>{info?.displayedNumber}</h6>
                  <p>{info?.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
