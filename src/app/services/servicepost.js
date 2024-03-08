import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { services } from "../../../service-cms/services";
import EvaluationFormComponent from "../shared/evaluationFormSection";
import ContactUsComponent from "../shared/contactUsSection";
import Link from "next/link";

export default function ServicepostComponent() {
  return (
    <main className="inner-service-wrapper">
      {/* <!-- Service Section --> */}
      <section className="service-feature">
        <div className="page-container">
          <div className="row">
            {services.map((item, i) => (
              <div className="col-6" key={item.slug}>
                <Link href={`/services-details?slug=${item.slug}`}>
                  <div
                    className="feature-wrap"
                    data-aos={`fade-${(i + 1) % 2 === 0 ? "left" : "right"}`}
                    data-aos-delay="200"
                    data-aos-duration="1500"
                  >
                    <div className="feature-icon">
                      <img
                        src={item.featuredicon}
                        width=""
                        height=""
                        loading="lazy"
                        decoding="async"
                        alt={item.title}
                      />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.shortDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Testimonial Section --> */}
      <EvaluationFormComponent />

      {/* <!-- Social Section --> */}
      <ContactUsComponent />
    </main>
  );
}
