import Image from "next/image";
import React from "react";

export default function HeaderComponent() {
  return (
    <React.Fragment>
      <header className="header">
        <div className="page-container">
          <div className="header-block">
            <a className="logo" href="#">
              <img
                src="/images/Logo.png"
                width=""
                height=""
                loading="lazy"
                decoding="async"
                alt="Logo"
              />
            </a>
            <nav>
              <ul>
                <li>
                  <a href="#">about us</a>
                </li>
                <li>
                  <a href="#">contact us</a>
                </li>
                <li>
                  <a href="#">blog</a>
                </li>
                <li>
                  <a href="#">services</a>
                </li>
                <li>
                  <a href="#">team</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
