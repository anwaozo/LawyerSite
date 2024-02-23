"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function HeaderComponent() {
  const router = useRouter();
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
                <li className="clickable">
                  <a>about us</a>
                </li>
                <li className="active">
                  <a
                    onClick={() => {
                      router.push("/contact-us");
                    }}
                  >
                    contact us
                  </a>
                </li>
                <li className="clickable">
                  <a
                    onClick={() => {
                      router.push("/blog");
                    }}
                  >
                    blog
                  </a>
                </li>
                <li className="clickable">
                  <a>services</a>
                </li>
                <li className="clickable">
                  <a>team</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </React.Fragment>
  );
}
