"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function CollegueSection({ collegueSectionTitle, collegues }) {
  const [showModal, setShowModal] = useState(null);
  return (
    <>
      <section className="colleagues-area">
        <div className="page-container">
          <div className="colleagues-block">
            <header>
              <h4
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                {collegueSectionTitle}
              </h4>
            </header>
            <div className="row">
              {collegues.map((c, i) => (
                <div
                  key={c.slug}
                  className="col-4"
                  data-aos="zoom-in"
                  data-aos-delay={`${200 + (i % 3) * 200}`}
                  data-aos-duration="1500"
                >
                  <div
                    className="colleagues-item modalButton"
                    onClick={(e) => {
                      e.stopPropagation();
                      setShowModal(c);
                    }}
                  >
                    <Image
                      src={`/${c.collegueImage}`}
                      width={368}
                      height={451}
                      loading="lazy"
                      decoding="async"
                      alt={c.collegueName}
                    />
                    <div className="colleagues-info">
                      <h6>{c.collegueName}</h6>
                      <p>{c.occupation}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {showModal && (
        <main
          className="inner-about-wrapper"
          onClick={() => {
            setShowModal(null);
          }}
        >
          <div id="modalBox" className="modal">
            <div className="modal-content modal-animate">
              <figure>
                <Image
                  src={`/${showModal.collegueImage}`}
                  width={1200}
                  height={1362}
                  loading="lazy"
                  decoding="async"
                  alt={showModal.collegueName}
                />
              </figure>
              <div className="content-wrap">
                <div className="post-name">{showModal.occupation}</div>
                <h5>{showModal.collegueName}</h5>
                <p>{showModal.description}</p>
                <div className="Specialties">
                  <h6>Specialties:</h6>
                  {showModal.specialities.map((s) => (
                    <div key={s} className="Specialties-item">
                      {s}
                    </div>
                  ))}
                </div>
                <div className="social-box">
                  {showModal.socialIcons.map((s) => (
                    <a key={s.iconPath} href="#" className="icon-box">
                      <img src={s.icon} alt={s.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      )}
    </>
  );
}
