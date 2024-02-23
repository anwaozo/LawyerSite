import Image from "next/image";
import React from "react";
import { headerInfo } from "../services/homePage";

export default function HeaderComponent() {
  const { logo: logoUrl, menu } = headerInfo;
  return (
    <React.Fragment>
      <header className="header">
        <div className="page-container">
          <div className="header-block">
            <a className="logo" href="#">
              <img
                src={logoUrl}
                width=""
                height=""
                loading="lazy"
                decoding="async"
                alt="Logo"
              />
            </a>
            <nav>
              <ul>
                {menu?.map((item) => (
                  <li key={item?.linkLabel}>
                    <a href="#">{item?.linkLabel}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
