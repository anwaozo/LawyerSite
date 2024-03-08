import Image from "next/image";
import React from "react";
import { footerInfo } from "../../../service-cms/applicationFragments";
import Link from "next/link";

export default function FooterComponent() {
  // console.log(attributes,"check")
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="page-container">
          <Link href="/" className="footer-logo">
            <img
              src={logo}
              width=""
              height=""
              loading="lazy"
              decoding="async"
              alt="Logo"
            />
          </Link>
          <div className="footer-menu">
            {quickMenu?.map((item) => (
              <Link key={item?.linkLabel} href={item?.linkPath}>
                {item?.linkLabel}
              </Link>
            ))}
          </div>
          <div className="footer-social-media">
            {socialMenu?.map((item) => (
              <Link key={item?.linkLabel} href={item?.linkPath}>
                <div className="icon-box">
                  <img src={item?.linkIcon} alt={item?.linkLabel} />
                </div>
                <p>{item?.linkLabel}</p>
                <img
                  src="/images/right-arrow.svg"
                  className="arrow-right"
                  alt=""
                />
              </Link>
            ))}
          </div>
          <p className="tagline">
            {copyrightText.copyright1} <span>{copyrightText.copyright2}</span>
          </p>
        </div>
      </footer>
    </React.Fragment>
  );
}
