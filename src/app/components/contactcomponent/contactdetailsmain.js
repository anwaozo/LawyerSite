import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function ContactdetailsmainComponent() {
  return (
    <main className="inner-post-wrapper">
      {/* <!-- Social Section --> */}
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
              className="contact-info-item"
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
              className="contact-info-item"
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
      </section>

      {/* <!-- Testimonial Section --> */}
      <section className="eveluation-form-area">
        <div className="page-container">
          <div className="row">
            <div className="col-6">
              <div
                className="evaluation-form-box"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <h3>Get in touch</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="inputs"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="inputs"
                      placeholder="me@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="inputs"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Send message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-6">
              <h4
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Our Professional Expert Law Team Is Always Ready To Serve You
              </h4>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
