"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";

export default function AboutAreaSection({ legalPartnerSection }) {
  const { title, subHeading, sectionInfo, sectionLink } = legalPartnerSection;
  useEffect(() => {
    var a = 0;
    if (window) {
      var oTop = $("#counter").offset().top - window.innerHeight;
      if (a == 0 && $(window).scrollTop() > oTop) {
        $(".counter-value").each(function () {
          var $this = $(this),
            countTo = $this.attr("data-count");
          $({
            countNum: $this.text(),
          }).animate(
            {
              countNum: countTo,
            },

            {
              duration: 3000,
              easing: "swing",
              step: function () {
                $this.text(Math.floor(this.countNum));
              },
              complete: function () {
                $this.text(this.countNum);
              },
            }
          );
        });
        a = 1;
      }
    }
  }, []);
  return (
    <section className="about-area">
      <div className="page-container">
        <div className="row">
          <div className="col-12">
            <div className="about-content-block">
              <h4
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                {title}
              </h4>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                {subHeading}
              </p>
            </div>
            <div className="about-info">
              {sectionInfo.map((s, i) => (
                <div
                  key={s.title}
                  className="about-info-item"
                  data-aos="zoom-in"
                  id="counter"
                  data-aos-delay={`${200 + i * 100}`}
                  data-aos-duration="1500"
                >
                  <h6 className="counter-value" data-count={s?.displayedNumber}>
                    0
                  </h6>
                  <p>{s.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
