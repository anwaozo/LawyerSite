import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function HometestimonialComponent() {
  return (
    <React.Fragment>
      <div className="testimonial-area">
        <div className="page-container">
          <div className="row">
            <div className="col-6">
              <h3
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                What out clients say <span>about us</span>
              </h3>
            </div>
            <div className="col-6">
              <div
                className="author-block"
                data-aos="fade-left"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                <div className="author-photo">
                  <img src="/images/testimonial.png" alt="" />
                </div>
                <div className="author-info">
                  <h5>Brooklyn Simmons</h5>
                  <h6>President of Sales</h6>
                </div>
                <div className="author-content">
                  <p>
                    “Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Testimonial Section --> */}
      <div className="eveluation-form-area">
        <div className="page-container">
          <div className="row">
            <div className="col-6">
              <div
                className="evaluation-form-box"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <h3>Get free evaluation</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="inputs"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <input type="text" className="inputs" placeholder="Phone" />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="inputs"
                      placeholder="Your email"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="inputs"
                      placeholder="Briefly describe.."
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
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                Our Professional Expert Law Team Is Always Ready To Serve You
              </h4>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
