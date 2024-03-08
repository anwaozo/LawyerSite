"use client";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { headerInfo } from "../../../service-cms/applicationFragments";

export default function HeaderComponent() {
  const router = useRouter();
  const currentPath = usePathname();
  const { logo, menu } = headerInfo;
  return (
    <React.Fragment>
      <header className="header">
        <div className="page-container">
          <div className="header-block">
            <a
              className="logo clickable"
              onClick={() => {
                router.push("/");
              }}
            >
              <img
                src={logo}
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
                  <li
                    key={item?.linkLabel}
                    className={`pe-auto ${
                      currentPath === item?.linkPath ? "active" : "clickable"
                    }`}
                  >
                    <a
                      onClick={() => {
                        router.push(item?.linkPath);
                      }}
                    >
                      {item?.linkLabel}
                    </a>
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
