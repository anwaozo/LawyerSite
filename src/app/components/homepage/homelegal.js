import Image from "next/image";
import React from "react";
import { legalPracticesSection } from "../../service-cms/homePage";

export default function Homelegalcomponent() {
  // console.log(legalPracticesSection);
  const { title, sectionImage, sectionLink, sectionInfo } =
    legalPracticesSection;
  return (
    <section className="legal-practice-area">
      <div className="page-container">
        <div className="legal-practice-block">
          <header>
            <h4
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {title}
            </h4>
            <a
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              {sectionLink?.linkLabel}
            </a>
          </header>
          <div className="row">
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="legal-item">
                <div className="legal-icon">
                  <img
                    src="/images/icons/family-law.svg"
                    width=""
                    height=""
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <p>FAMILY LAW</p>
              </div>
            </div>
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              <div className="legal-item">
                <div className="legal-icon">
                  <img
                    src="/images/icons/workers-law.svg"
                    width=""
                    height=""
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <p>WORKERS LAW</p>
              </div>
            </div>
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <div className="legal-item">
                <div className="legal-icon">
                  <img
                    src="/images/icons/corporate-law.svg"
                    width=""
                    height=""
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <p>CORPORATE LAW</p>
              </div>
            </div>
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <div className="legal-item">
                <div className="legal-icon">
                  <img
                    src="/images/icons/criminal-law.svg"
                    width=""
                    height=""
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <p>CRIMINAL LAW</p>
              </div>
            </div>
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              <div className="legal-item">
                <div className="legal-icon">
                  <img
                    src="/images/icons/business-litigation.svg"
                    width=""
                    height=""
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <p>BUSINESS LITIGATION</p>
              </div>
            </div>
            <div
              className="col-4"
              data-aos="fade-right"
              data-aos-delay="700"
              data-aos-duration="1500"
            >
              <div className="legal-item">
                <div className="legal-icon">
                  <img
                    src="/images/icons/employment-law.svg"
                    width=""
                    height=""
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <p>EMPLOYMENT LAW</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
