import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function HomepostComponent() {
  return (
    <section className="post-area">
      <div className="page-container">
        <div className="post-block">
          <header>
            <h4
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              Our Posts
            </h4>
            <a
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              Read more posts
            </a>
          </header>
          <div className="row">
            <div className="col-6">
              <div
                className="post-left-photo"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img
                  src="/images/post-one.jpg"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
                <div className="post-left-content">
                  <span>BUSINESS</span>
                  <p>How to own a Copyright for your product</p>
                  <h6>12/10/2023</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="post-right-wrapper"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="post-right-photo">
                  <img
                    src="/images/post-two.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="post-right-content">
                  <span>PERSONAL AFFAIRS</span>
                  <p>Choosing Next of Kin</p>
                  <h6>12/10/2023</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="post-right-wrapper"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
                <div className="post-right-photo">
                  <img
                    src="/images/post-three.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="post-right-content">
                  <span>BUSINESS</span>
                  <p>How to own a Copyright for your product</p>
                  <h6>12/10/2023</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
