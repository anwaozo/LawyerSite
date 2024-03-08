"use client";
import Image from "next/image";
import React from "react";
import { collegueSection } from "../../service-cms/homePage";
import { useRouter } from "next/navigation";

export default function Homecolleguecomponent() {
  const router = useRouter();
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
              {collegueSection.title}
            </h4>
            <a
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
              onClick={() => {
                router.push(collegueSection.sectionLink.linkPath);
              }}
            >
              {collegueSection.sectionLink.linkLabel}
            </a>
          </header>
          <div className="row">
            {collegueSection.ourCollegues.map((val,i)=>(<div
              className="col-4"
              data-aos="zoom-in"
              data-aos-delay={`${i*2+100}`}
              data-aos-duration="1500"
              key={i}
            >
              <div className="colleagues-item">
                <img
                  src={val.collegueImage}
                  width="368"
                  height="451"
                  // loading="lazy"
                  // decoding="async"
                  alt=""
                />
                <div className="colleagues-info">
                  <h6>{val.collegueName}</h6>
                  <p>{val.occupation}</p>
                </div>
              </div>
            </div>))}
            {/* <div
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
