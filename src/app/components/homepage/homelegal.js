import Image from "next/image";
import React from "react";
import { legalPracticesSection } from "../../../../service-cms/homePage";
import Link from "next/link";

export default function Homelegalcomponent() {
  // console.log(legalPracticesSection);
  const { title, sectionImage, sectionLink, legalPractices } =
    legalPracticesSection;
  return (
    <section className="legal-practice-area">
      <div className="page-container">
        <div className="legal-practice-block">
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
              {sectionLink?.linkLabel}
            </Link>
          </header>
          <div className="row">
            {legalPractices.map((p, i) => (
              <div
                key={p.slug}
                className="col-4"
                data-aos="fade-right"
                data-aos-delay={`${200 + i * 100}`}
                data-aos-duration="1500"
              >
                <Link href={`/services-details?slug=${p.slug}`}>
                  <div className="legal-item">
                    <div className="legal-icon">
                      <img
                        src={p.featuredicon}
                        width=""
                        height=""
                        loading="lazy"
                        decoding="async"
                        alt={p.title}
                      />
                    </div>
                    <p>{p.title}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
