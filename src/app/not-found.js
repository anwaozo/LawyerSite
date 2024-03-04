"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";

const HeaderComponent = dynamic(() => import("./shared/header"), {
  ssr: true,
});

// const NotfoundmainComponent = dynamic(() => import("./notfoundmain"), {
//   ssr: true,
// });

const FooterComponent = dynamic(() => import("./shared/footer"), {
  ssr: true,
});

export default function NotFound() {
    const router = useRouter();
  return (
    <React.Fragment>
      <HeaderComponent />
      <main>
        <section class="not-found-area">
          <div class="page-container">
            <div class="not-found-block">
              <img
                src="/images/not-found-photo.png"
                loading="lazy"
                decoding="async"
                alt=""
              />
              <h1>404</h1>
              <h5>We couldn&apos;t find that page, Go back home</h5>
              <h6>OR</h6>
              <div class="not-found-menu">
                <ul>
                  <li>
                    <a href="#">Team</a>
                  </li>
                  <li>
                    <a href="services.html">Services</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>

      <FooterComponent />
    </React.Fragment>
  );
}
