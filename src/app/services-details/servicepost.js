import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import ContactUsComponent from "../shared/contactUsSection";
import Link from "next/link";

export default function ServicedetailspostComponent({
  service,
  otherServices,
}) {
  return (
    <main className="inner-service-details-wrapper">
      {/* <!-- Testimonial Section --> */}
      <section className="eveluation-form-area">
        <div className="page-container">
          <div className="row">
            <div className="col-6">
              <p
                className="form-content"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                {service.detailedDescription || service.shortDescription}
              </p>
            </div>
            <div className="col-6">
              <div
                className="evaluation-form-box"
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <h3>Resolve Disputes</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="inputs"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="inputs"
                      placeholder="Your email address"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="inputs"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">
                    Send message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Service Section --> */}
      <section className="service-feature">
        <div className="page-container">
          <div className="row">
            <div className="col-12">
              <h3
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Other Services
              </h3>
            </div>
            {otherServices.map((s, i) => (
              <div className="col-6" key={s.title}>
                <Link href={`/services-details?slug=${s.slug}`}>
                  <div
                    className="feature-wrap"
                    data-aos={`fade-${i === 0 ? "right" : "left"}`}
                    data-aos-delay="200"
                    data-aos-duration="1500"
                  >
                    <div className="feature-icon">
                      <img
                        src={s.featuredicon}
                        width=""
                        height=""
                        loading="lazy"
                        decoding="async"
                        alt=""
                      />
                    </div>
                    <h4>{s.title}</h4>
                    <p>{s.shortDescription}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <!-- Social Section --> */}
      <ContactUsComponent />
    </main>
  );
}
