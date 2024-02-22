import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function HomefooterComponent() {
  return (

      <footer className="footer">
        <div className="page-container">
          <a className="footer-logo">
            <img
              src="/images/Logo.png"
              width=""
              height=""
              loading="lazy"
              decoding="async"
              alt="Logo"
            />
          </a>
          <div className="footer-menu">
            <a>Teams</a>
            <a>Privacy Policy</a>
            <a>Contact</a>
            <a>Services</a>
            <a>About</a>
            <a>Blog</a>
          </div>
          <div className="footer-social-media">
            <a>
              <div className="icon-box">
                <img src="/images/icons/ftr-linkedin.svg" alt="" />
              </div>
              <p>linkedin</p>
              <img
                src="/images/right-arrow.svg"
                className="arrow-right"
                alt=""
              />
            </a>
            <a>
              <div className="icon-box">
                <img src="/images/icons/ftr-instagram.svg" alt="" />
              </div>
              <p>instagram</p>
              <img
                src="/images/right-arrow.svg"
                className="arrow-right"
                alt=""
              />
            </a>
            <a>
              <div className="icon-box">
                <img src="/images/icons/ftr-facebook.svg" alt="" />
              </div>
              <p>facebook</p>
              <img
                src="/images/right-arrow.svg"
                className="arrow-right"
                alt=""
              />
            </a>
            <a>
              <div className="icon-box">
                <img src="/images/icons/ftr-twitter.svg" alt="" />
              </div>
              <p>twitter x</p>
              <img
                src="/images/right-arrow.svg"
                className="arrow-right"
                alt=""
              />
            </a>
          </div>
          <p className="tagline">
            Template Designed by <span>Apperr Designs</span>
          </p>
        </div>
      </footer>
    
  );
}
