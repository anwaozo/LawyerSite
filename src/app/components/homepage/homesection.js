import Image from "next/image";
import React from "react";


export default function Homesectioncomponent() {
  return (
    <section className="home-banner-area">
      <div className="page-container">
        <div className="home-banner-content">
          <div className="home-social-media">
            <a
              href="#"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <img src="/images/icons/linkedin.svg" alt="linkedin" />
            </a>
            <a
              href="#"
              data-aos="fade-right"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              <img src="/images/icons/instagram.svg" alt="instagram" />
            </a>
            <a
              href="#"
              data-aos="fade-right"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <img src="/images/icons/facebook.svg" alt="facebook" />
            </a>
            <a
              href="#"
              data-aos="fade-right"
              data-aos-delay="500"
              data-aos-duration="1500"
            >
              <img src="/images/icons/extra.svg" alt="" />
            </a>
          </div>
          <div className="banner-content">
            <h1
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Experienced
            </h1>
            <h2
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              Trusted Legal Counsel
            </h2>
            <p
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
            <a
              className="btn btn-primary"
              data-aos="fade-up"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              Call for consultation
            </a>
          </div>
        </div>
        <div className="home-banner-photo">
          <img
            src="/images/home-banner.jpg"
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
