import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function BlogdetailsmainComponent() {
  return (
    <main className="blog-details-wrapper">
      <section className="blog-detail-area">
        <div className="blog-container">
          <h2
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            Choosing Next of Kin
          </h2>
          <div
            className="lawyer-block"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="lawyer-photo">
              <img
                src="/images/lawyer-photo.png"
                width="60"
                height="60"
                loading="lazy"
                decoding="async"
                alt=""
              />
            </div>
            <div className="lawyer-content">
              <h3>Albert Flores</h3>
              <p>Lawyer</p>
            </div>
          </div>
          <div className="blog-content">
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Successfully maneuvering through the complex terrain of corporate
              and commercial law demands a deep comprehension of business
              operations. We provide guidance in areas spanning entity
              establishment, contract composition, and navigating mergers and
              acquisitions. Our aim is to empower clients to make well-informed
              choices, mitigate potential risks, and seize advantages within an
              intensely competitive business environment.
            </p>
            <h4
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              When To Choose
            </h4>
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Successfully maneuvering through the complex terrain of corporate
              and commercial law demands a deep comprehension of business
              operations. We provide guidance in areas spanning entity
              establishment, contract composition, and navigating mergers and
              acquisitions. Our aim is to empower clients to make well-informed
              choices, mitigate potential risks, and seize advantages within an
              intensely competitive business environment.
            </p>
          </div>
          <div className="blog-button-block">
            <a
              className="btn btn-primary btn-see-more"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              See more from Albert Flores
            </a>
            <a
              className="btn btn-primary btn-see-all"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              See all from ----------
            </a>
          </div>
        </div>
      </section>
      <section className="recommended-area">
        <div className="page-container">
          <h2>Recommended</h2>
          <section className="post-area">
            <div className="page-container">
              <div className="row">
                <div className="col-4">
                  <div
                    className="post-wrapper post-block"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1500"
                  >
                    <div className="post-photo">
                      <img
                        src="/images/blog-default-one.png"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <div className="post-content">
                      <span>PERSONAL AFFAIRS</span>
                      <p>Choosing Next of Kin</p>
                      <h6>12/10/2023</h6>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="post-wrapper"
                    data-aos="fade-right"
                    data-aos-delay="400"
                    data-aos-duration="1500"
                  >
                    <div className="post-photo">
                      <img
                        src="/images/blog-default-two.png"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <div className="post-content">
                      <span>BUSINESS</span>
                      <p>How to own a Copyright for your product</p>
                      <h6>12/10/2023</h6>
                    </div>
                  </div>
                </div>
                <div className="col-4">
                  <div
                    className="post-wrapper"
                    data-aos="fade-right"
                    data-aos-delay="600"
                    data-aos-duration="1500"
                  >
                    <div className="post-photo">
                      <img
                        src="/images/blog-default-two.png"
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <div className="post-content">
                      <span>BUSINESS</span>
                      <p>How to own a Copyright for your product</p>
                      <h6>12/10/2023</h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
