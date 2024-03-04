import Image from "next/image";
import React from "react";


export default function Homecolleguecomponent() {
  return (
    <section className="colleagues-area">
        <div className="page-container">
          <div className="colleagues-block">
            <header>
              <h4
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Meet our learned colleagues
              </h4>
              <a
                data-aos="fade-down"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                Learn more about us
              </a>
            </header>
            <div className="row">
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="colleagues-item">
                  <Image
                    src="/images/albert-flores.png"
                    width={368}
                    height={451}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Albert Flores</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="colleagues-item">
                  <Image
                    src="/images/ralph-edwards.png"
                    width={368}
                    height={451}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Ralph Edwards</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
                <div className="colleagues-item">
                  <Image
                    src="/images/courtney-henry.png"
                    width={368}
                    height={451}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Courtney Henry</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
}
