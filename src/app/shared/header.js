"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { headerInfo } from "../../../service-cms/applicationFragments";
import Link from "next/link";

export default function HeaderComponent() {
  const router = useRouter();
  const currentPath = usePathname();
  const { logo, menu } = headerInfo;
  return (
    <React.Fragment>
      <header className="header">
        <div className="page-container">
          <div className="header-block">
            <Link className="logo clickable" href="/">
              <img
                src={logo}
                width=""
                height=""
                loading="lazy"
                decoding="async"
                alt="Logo"
              />
            </Link>
            <nav>
              <ul>
                {menu?.map((item) => (
                  <li
                    key={item?.linkLabel}
                    className={`pe-auto ${
                      currentPath === item?.linkPath ? "active" : "clickable"
                    }`}
                  >
                    <Link href={item?.linkPath}>{item?.linkLabel}</Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mobile-menu">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
