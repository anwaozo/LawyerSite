"use client";
import Image from "next/image";
import React from "react";
import { contactUsSection } from "../../service-cms/applicationFragments";

export default function Homeevaluationcomponent() {
  return (
    <section className="evalution-area">
      <div className="page-container">
        <div className="row">
          <div className="col-6">
            <h4
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {contactUsSection.title}
            </h4>
          </div>
          <div className="col-6">
            <div className="evalution-info">
              <div
                className="evalution-item"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="icon-box">
                  <img
                    src={contactUsSection.contactInfo.phoneDetail.icon}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="content-box">
                  <span>{contactUsSection.contactInfo.phoneDetail.title}</span>
                  <a
                    href={`tel:${contactUsSection.contactInfo.phoneDetail.phoneNumber}`}
                  >
                    {contactUsSection.contactInfo.phoneDetail.phoneNumber}
                  </a>
                </div>
              </div>
              <div
                className="evalution-item"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="icon-box">
                  <img
                    src={contactUsSection.contactInfo.address.icon}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="content-box">
                  <span>{contactUsSection.contactInfo.address.title}</span>
                  <p>{contactUsSection.contactInfo.address.address}</p>
                </div>
              </div>
              <div
                className="evalution-item"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
                <div className="icon-box">
                  <img
                    src={contactUsSection.contactInfo.emailDetail.icon}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="content-box">
                  <span>{contactUsSection.contactInfo.emailDetail.title}</span>
                  <a
                    href={`mailto:${contactUsSection.contactInfo.emailDetail.email}`}
                  >
                    {contactUsSection.contactInfo.emailDetail.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
