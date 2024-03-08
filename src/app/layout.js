"use client";
import "./globals.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
    if (window) {
      $(document).ready(function () {
        $(".mobile-menu").click(function () {
          $("nav").slideToggle("slow");
        });
      });
      $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
          $(".header").addClass("header-fixed");
        } else {
          $(".header").removeClass("header-fixed");
        }
      });
    }
  }, []);
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Home</title>
        <script
          src="https://code.jquery.com/jquery-3.7.1.min.js"
          async
        ></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
