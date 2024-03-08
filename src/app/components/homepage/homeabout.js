"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { legalPartnerSection } from "../../../../service-cms/applicationFragments";
import Link from "next/link";

export default function HomeaboutComponent() {
  // x`
  const { title, subHeading, sectionLink, sectionInfo } = legalPartnerSection;
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
              <Link
                href="/about-us"
                className="btn btn-primary"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                {sectionLink?.linkLabel}
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              {sectionInfo?.map((info, i) => (
                <div
                  key={info?.title}
                  className="about-info-item"
                  id="counter"
                  data-aos="zoom-in"
                  data-aos-delay={`${200 + i * 100}`}
                  data-aos-duration="1500"
                >
                  <h6
                    className="counter-value"
                    data-count={info?.displayedNumber}
                  >
                    0
                  </h6>
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
