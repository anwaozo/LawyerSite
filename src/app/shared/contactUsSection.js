import React from "react";
import { contactUsSection } from "../../../service-cms/applicationFragments";

export default function ContactUsComponent() {
  const {
    title,
    contactInfo: { phoneDetail, address, emailDetail },
  } = contactUsSection;
  return (
    <section className="contact-info-area">
      <div className="page-container">
        <div className="contact-info-block">
          <div
            className="contact-info-item"
            data-aos="fade-left"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="icon-box">
              <img
                src={phoneDetail.icon}
                loading="lazy"
                decoding="async"
                alt={phoneDetail.title}
              />
            </div>
            <div className="content-box">
              <span>{phoneDetail.title}</span>
              <a href={`tel:${phoneDetail.phoneNumber}`}>
                {phoneDetail.phoneNumber}
              </a>
            </div>
          </div>
          <div
            className="contact-info-item"
            data-aos="fade-left"
            data-aos-delay="400"
            data-aos-duration="1500"
          >
            <div className="icon-box">
              <img
                src={address.icon}
                loading="lazy"
                decoding="async"
                alt={address.title}
              />
            </div>
            <div className="content-box">
              <span>{address.title}</span>
              <p>{address.address}</p>
            </div>
          </div>
          <div
            className="contact-info-item"
            data-aos="fade-left"
            data-aos-delay="600"
            data-aos-duration="1500"
          >
            <div className="icon-box">
              <img
                src={emailDetail.icon}
                loading="lazy"
                decoding="async"
                alt={emailDetail.title}
              />
            </div>
            <div className="content-box">
              <span>{emailDetail.title}</span>
              <a href={`mailto:${emailDetail.email}`}>{emailDetail.email}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
