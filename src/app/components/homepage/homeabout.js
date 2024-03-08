"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { legalPartnerSection } from "../../../../service-cms/applicationFragments";
import Link from "next/link";

export default function HomeaboutComponent() {
  useEffect(() => {
    var a = 0;
    if (window) {
      $(window).scroll(function () {
        var oTop = $("#counter").offset()?.top - window.innerHeight;
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
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
          $(".header").addClass("header-fixed");
        } else {
          $(".header").removeClass("header-fixed");
        }
      });
    }
  }, []);
  const { title, subHeading, sectionLink, sectionInfo } = legalPartnerSection;
  console.log(sectionInfo, "check");
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
                {title}
              </h4>
              <p
                data-aos="fade-right"
                data-aos-delay="300"
                data-aos-duration="1500"
              >
                {subHeading}
              </p>
              <Link
                href="/about-us"
                className="btn btn-primary"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                {sectionLink?.linkLabel}
              </Link>
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              {sectionInfo?.map((info, i) => (
                <div
                  key={info?.title}
                  className="about-info-item"
                  id="counter"
                  data-aos="zoom-in"
                  data-aos-delay={`${200 + i * 100}`}
                  data-aos-duration="1500"
                >
                  <h6
                    className="counter-value"
                    data-count={info?.displayedNumber}
                  >
                    0
                  </h6>
                  <p>{info?.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
