"use client";
import Image from "next/image";
import React, { useState } from "react";
import { bussinessInformationSection } from "../../../service-cms/applicationFragments";

export default function BussinessInformationSection() {
  const [section, setSection] = useState(bussinessInformationSection[0].title);
  return (
    <section className="verticle-tab-area">
      <div className="page-container">
        <div className="tab-block">
          <div
            className="verticle-tab"
            data-aos="fade-right"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            {bussinessInformationSection.map((item) => (
              <button
                key={item.title}
                className={`tablinks ${section === item.title ? "active" : ""}`}
                onClick={() => setSection(item.title)}
                id="defaultOpen"
              >
                {item.title}
              </button>
            ))}
          </div>
          <div
            className="tabcontent-inner"
            data-aos="fade-left"
            data-aos-delay="300"
            data-aos-duration="1500"
          >
            {bussinessInformationSection.map(
              (item) =>
                section === item.title && (
                  <div
                    id={item.title.toLowerCase().split(" ").join("-")}
                    className="tabcontent"
                    key={item.title}
                  >
                    <p>{item.content}</p>
                  </div>
                )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
