import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import EvaluationFormComponent from "../shared/evaluationFormSection";

export default function PricingpostComponent({ pricingList }) {
  return (
    <main>
      {/* <!-- Pricing Section --> */}
      <section class="pricing-block">
        <div class="page-container">
          <div class="row">
            {pricingList.map((p, i) => (
              <div class="col-4" key={`${200 + i * 200}`}>
                <div
                  class="pricing-item"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <div class="pricing-content">
                    <h5>{p.title}</h5>
                    <p>{p.description}</p>
                    <h6>${p.price}/mo</h6>
                    <a href={p.link.linkPath}>{p.link.linkLabel}</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Testimonial Section --> */}
      <EvaluationFormComponent />
    </main>
  );
}
