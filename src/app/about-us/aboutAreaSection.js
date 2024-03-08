import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function AboutAreaSection({ legalPartnerSection }) {
  const { title, subHeading, sectionInfo, sectionLink } = legalPartnerSection;
  return (
    <section className="about-area">
      <div className="page-container">
        <div className="row">
          <div className="col-12">
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
            </div>
            <div className="about-info">
              {sectionInfo.map((s, i) => (
                <div
                  key={s.title}
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay={`${200 + i * 100}`}
                  data-aos-duration="1500"
                >
                  <h6>{s.displayedNumber}</h6>
                  <p>{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
