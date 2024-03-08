"use client";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { ourPostsSection } from "../../service-cms/homePage";
import { useRouter } from "next/navigation";

export default function HomepostComponent() {
  const router = useRouter();
  return (
    <section className="post-area">
      <div className="page-container">
        <div className="post-block">
          <header>
            <h4
              data-aos="fade-down"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              {ourPostsSection.title}
            </h4>
            <a
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
              onClick={() => {
                router.push(ourPostsSection.sectionLink.linkPath);
              }}
            >
              {ourPostsSection.sectionLink.linkLabel}
            </a>
          </header>
          <div className="row">
            {ourPostsSection.posts.map((val, i) => {
             const inputDate = new Date(val.date);
             const outputDate = `${inputDate.getMonth() + 1}/${inputDate.getDate()}/${inputDate.getFullYear()}`; 
              if(i==0){
                return(
                  <div className="col-6" key={i}>
              <div
                className="post-left-photo"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <img
                  src={val.thumbnailImage}
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
                <div className="post-left-content">
                  <span>{val.blogType}</span>
                  <p>{val.title}</p>
                  <h6>{outputDate}</h6>
                </div>
              </div>
            </div>
                )
              }else{
                return(
                  <div className="col-3"  key={i}>
              <div
                className="post-right-wrapper"
                data-aos="fade-left"
                data-aos-delay={`${i*2+100}`}
                data-aos-duration="1500"
              >
                <div className="post-right-photo">
                  <img
                    src={val.thumbnailImage}
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="post-right-content">
                <span>{val.blogType}</span>
                  <p>{val.title}</p>
                  <h6>{outputDate}</h6>
                </div>
              </div>
            </div>
                  )
              }
            })}
            
            {/* <div className="col-3">
              <div
                className="post-right-wrapper"
                data-aos="fade-left"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="post-right-photo">
                  <img
                    src="/images/post-two.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="post-right-content">
                  <span>PERSONAL AFFAIRS</span>
                  <p>Choosing Next of Kin</p>
                  <h6>12/10/2023</h6>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div
                className="post-right-wrapper"
                data-aos="fade-left"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
                <div className="post-right-photo">
                  <img
                    src="/images/post-three.jpg"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                </div>
                <div className="post-right-content">
                  <span>BUSINESS</span>
                  <p>How to own a Copyright for your product</p>
                  <h6>12/10/2023</h6>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
