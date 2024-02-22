import Image from "next/image";
import React from "react";


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
                You can get case evaluation from us
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
                      src="/images/phone.svg"
                      loading="lazy"
                      decoding="async"
                      alt=""
                    />
                  </div>
                  <div className="content-box">
                    <span>Call us on</span>
                    <a href="tel:(209) 555-0104">(209) 555-0104</a>
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
                      src="/images/location.svg"
                      loading="lazy"
                      decoding="async"
                      alt=""
                    />
                  </div>
                  <div className="content-box">
                    <span>Locate us at</span>
                    <p>8502 Preston Rd. Inglewood, Maine 98380</p>
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
                      src="/images/email.svg"
                      loading="lazy"
                      decoding="async"
                      alt=""
                    />
                  </div>
                  <div className="content-box">
                    <span>Mail us on</span>
                    <a href="mailto:sara.cruz@example.com4">
                      sara.cruz@example.com
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
