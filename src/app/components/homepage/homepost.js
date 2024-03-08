"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { ourPostsSection } from "../../../../service-cms/homePage";
import { format } from "date-fns";

export default function HomepostComponent() {
  const { title, sectionLink, posts } = ourPostsSection;
  console.log(posts);
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
              {title}
            </h4>
            <Link
              href={sectionLink.linkPath}
              data-aos="fade-down"
              data-aos-delay="400"
              data-aos-duration="1500"
              onClick={() => {
                router.push(ourPostsSection.sectionLink.linkPath);
              }}
            >
              {sectionLink.linkLabel}
            </Link>
          </header>
          <div className="row">
            {posts.map((post, index) =>
              index === 0 ? (
                <div className="col-6" key={post.slug}>
                  <Link href={`/blogdetails?slug=${post.slug}`}>
                    <div
                      className="post-left-photo"
                      data-aos="fade-right"
                      data-aos-delay="200"
                      data-aos-duration="1500"
                    >
                      <img
                        src={post.thumbnailImage}
                        loading="lazy"
                        decoding="async"
                        alt={post.title}
                      />
                      <div className="post-left-content">
                        <span>{post.blogType}</span>
                        <p>{post.title}</p>
                        <h6>{format(new Date(post.date), "dd/MM/yyyy")}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ) : (
                <div className="col-3" key={post.slug}>
                  <Link href={`/blogdetails?slug=${post.slug}`}>
                    <div
                      className="post-right-wrapper"
                      data-aos="fade-left"
                      data-aos-delay="400"
                      data-aos-duration="1500"
                    >
                      <div className="post-right-photo">
                        <img
                          src={post.thumbnailImage}
                          loading="lazy"
                          decoding="async"
                          alt={post.title}
                        />
                      </div>
                      <div className="post-right-content">
                        <span>{post.blogType}</span>
                        <p>{post.title}</p>
                        <h6>{format(new Date(post.date), "dd/MM/yyyy")}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
