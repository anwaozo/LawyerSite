import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { footerInfo } from "../../service-cms/applicationFragments";

export default function HomefooterComponent() {
  const {
    logo,
    copyright: { copyright1: copyrightText1, copyright2: copyrightText2 },
    quickMenu,
    socialMenu,
  } = footerInfo;
  return (
    <footer className="footer">
      <div className="page-container">
        <a className="footer-logo">
          <img
            src={logo}
            width=""
            height=""
            loading="lazy"
            decoding="async"
            alt="Logo"
          />
        </a>
        <div className="footer-menu">
          {quickMenu?.map((item) => (
            <a key={item?.linkLabel}>{item?.linkLabel}</a>
          ))}
        </div>
        <div className="footer-social-media">
          {socialMenu?.map((item) => (
            <a key={item?.linkLabel}>
              <div className="icon-box">
                <img src={item?.linkIcon} alt={item?.linkLabel} />
              </div>
              <p>{item?.linkLabel}</p>
              <img
                src="/images/right-arrow.svg"
                className="arrow-right"
                alt=""
              />
            </a>
          ))}
        </div>
        <p className="tagline">
          {copyrightText1} <span>{copyrightText2}</span>
        </p>
      </div>
    </footer>
  );
}
