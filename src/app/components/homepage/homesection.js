import Image from "next/image";
import React from "react";
import { heroSection } from "../../services/homePage";

export default function Homesectioncomponent() {
  console.log(heroSection);
  const {
    heroImage,
    styledHeading,
    heading,
    description,
    sectionLink,
    socialMediaIcons,
  } = heroSection;
  return (
    <section className="home-banner-area">
      <div className="page-container">
        <div className="home-banner-content">
          <div className="home-social-media">
            {socialMediaIcons?.map((item) => (
              <a
                key={item?.iconPath}
                href="#"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img src={item?.icon} alt="linkedin" />
              </a>
            ))}
          </div>
          <div className="banner-content">
            <h1
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {styledHeading}
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              {heading}
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              {description}
            </p>
            <a
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              {sectionLink?.linkLabel}
            </a>
          </div>
        </div>
        <div className="home-banner-photo">
          <img
            src={heroImage}
            width="1920"
            height="395"
            alt=""
            loading="lazy"
            decoding="async"
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="1500"
          />
        </div>
      </div>
    </section>
  );
}
