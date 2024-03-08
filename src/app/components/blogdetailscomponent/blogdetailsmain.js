import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { format } from "date-fns";

export default function BlogdetailsmainComponent({ blog, recommendedBlogs }) {
  console.log(blog);
  const BodyComponent = blog.bodyComponent;
  return (
    <main className="blog-details-wrapper">
      <section className="blog-detail-area">
        <div className="blog-container">
          <h2
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            {blog.title}
          </h2>
          <div
            className="lawyer-block"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1500"
          >
            <div className="lawyer-photo">
              <Image
                src={`/${blog.author.collegueImage}`}
                width={60}
                height={60}
                loading="lazy"
                decoding="async"
                alt={blog.author.collegueName}
              />
            </div>
            <div className="lawyer-content">
              <h3>{blog.author.collegueName}</h3>
              <p>{blog.author.occupation}</p>
            </div>
          </div>
          <div className="blog-content">
            <BodyComponent />
          </div>
          <div className="blog-button-block">
            <Link
              href={`/blog?author=${blog.author.slug}`}
              className="btn btn-primary btn-see-more"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              See more from {blog.author.collegueName}
            </Link>
            <Link
              href="/blog"
              className="btn btn-primary btn-see-all"
              data-aos="fade-up"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              See all from ----------
            </Link>
          </div>
        </div>
      </section>
      <section className="recommended-area">
        <div className="page-container">
          <h2>Recommended</h2>
          <section className="post-area">
            <div className="page-container">
              <div className="row">
                {recommendedBlogs
                  .filter((v, i) => i < 3)
                  .map((blog, i) => (
                    <div className="col-4" key={blog.slug}>
                      <Link href={`/blogdetails?slug=${blog.slug}`}>
                        <div
                          className="post-wrapper post-block"
                          data-aos="fade-right"
                          data-aos-delay={`${200 + i * 200}`}
                          data-aos-duration="1500"
                        >
                          <div className="post-photo">
                            <img
                              src={blog.thumbnailImage}
                              loading="lazy"
                              decoding="async"
                              alt={blog.title}
                            />
                          </div>
                          <div className="post-content">
                            <span>{blog.blogType}</span>
                            <p>{blog.title}</p>
                            <h6>{format(new Date(blog.date), "dd/MM/yyyy")}</h6>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
