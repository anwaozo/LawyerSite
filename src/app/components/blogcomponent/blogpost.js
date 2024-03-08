import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { format } from "date-fns";
import Link from "next/link";

export default function BlogpostComponent({ posts, author }) {
  return (
    <main className="inner-post-wrapper">
      <section className="post-area">
        <div className="page-container">
          <div className="row">
            {posts
              .filter((post) => (author ? post.author.slug === author : true))
              .map((post, i) => (
                <div key={post.slug} className="col-4">
                  <Link href={`/blogdetails?slug=${post.slug}`}>
                    <div
                      className="post-wrapper post-block clickable"
                      data-aos="fade-right"
                      data-aos-delay={`${200 + (i % 3) * 200}`}
                      data-aos-duration="1500"
                    >
                      <div className="post-photo">
                        <img
                          src={post.thumbnailImage}
                          loading="lazy"
                          decoding="async"
                          alt={post.title}
                        />
                      </div>
                      <div className="post-content">
                        <span>{post.blogType}</span>
                        <p>{post.title}</p>
                        <h6>{format(new Date(post.date), "dd/MM/yyyy")}</h6>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </section>
    </main>
  );
}
