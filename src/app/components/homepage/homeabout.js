import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function HomeaboutComponent() {
  return (

    <section className="about-area">
        <div className="page-container">
          <div className="row">
            <div className="col-6">
              <div className="about-content-block">
                <h4
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Your Legal Partner in Every Step
                </h4>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  Our team of accomplished attorneys brings a wealth of legal
                  knowledge and expertise across various practice areas. Whether
                  you need assistance with personal injury claims, family
                  matters, business disputes, or other legal issues, we have the
                  skills to represent your interests effectively.
                </p>
                <a
                  className="btn btn-primary"
                  data-aos="fade-right"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  Read More
                </a>
              </div>
            </div>
            <div className="col-6">
              <div className="about-info">
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <h6>12</h6>
                  <p>Team members</p>
                </div>
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  <h6>32</h6>
                  <p>Cases won</p>
                </div>
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  <h6>20</h6>
                  <p>Happy clients</p>
                </div>
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <h6>2</h6>
                  <p>Branches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
}
