import Image from "next/image";
import React from "react";
import { collegueSection } from "../../../../service-cms/homePage";
import Link from "next/link";

export default function Homecolleguecomponent() {
  const { title, sectionLink, ourCollegues } = collegueSection;

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
              {title}
            </h4>
            <Link
              href={sectionLink.linkPath}
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              {sectionLink.linkLabel}
            </Link>
          </header>
          <div className="row">
            {ourCollegues.map((collegue, index) => (
              <div
                key={collegue.slug}
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay={
                  index === 0 ? "200" : index === 1 ? "400" : "600"
                }
                data-aos-duration="1500"
              >
                <div className="colleagues-item">
                  <Image
                    src={`/${collegue.collegueImage}`}
                    width={368}
                    height={451}
                    loading="lazy"
                    decoding="async"
                    alt={collegue.collegueName}
                  />
                  <div className="colleagues-info">
                    <h6>{collegue.collegueName}</h6>
                    <p>{collegue.occupation}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
