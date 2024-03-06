"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import dynamic from "next/dynamic";
import { legalTeamSection } from "../../service-cms/homePage";

export default function HomeaboutComponent() {
  console.log(legalTeamSection);
  useEffect(() => {
    var a = 0;
    if(window){
      $(window).scroll(function () {
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
      });
    }
    
  }, []);
  const { title, subHeading, sectionLink, sectionInfo } = legalTeamSection;
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
              <a
                className="btn btn-primary"
                data-aos="fade-right"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                {sectionLink?.linkLabel}
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about-info">
              {sectionInfo?.map((info) => (
                <div
                  key={info?.title}
                  className="about-info-item"
                  id="counter"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <h6 class="counter-value" data-count={info?.displayedNumber}>
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
