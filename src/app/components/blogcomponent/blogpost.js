import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function BlogpostComponent() {
  return (
    <main className="inner-post-wrapper">
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
