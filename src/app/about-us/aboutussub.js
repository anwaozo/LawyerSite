import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function AboutussubComponent() {
  return (
    <main className="inner-about-wrapper">
      {/* <!-- About Area Section --> */}
      <section className="about-area">
        <div className="page-container">
          <div className="row">
            <div className="col-12">
              <div className="about-content-block">
                <h4
                  data-aos="fade-right"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  Your Legal Partner in Every Step
                </h4>
                <p
                  data-aos="fade-right"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  Our team of accomplished attorneys brings a wealth of legal
                  knowledge and expertise across various practice areas. Whether
                  you need assistance with personal injury claims, family
                  matters, business disputes, or other legal issues, we have the
                  skills to represent your interests effectively.
                </p>
              </div>
              <div className="about-info">
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                  data-aos-duration="1500"
                >
                  <h6>12</h6>
                  <p>Team members</p>
                </div>
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="300"
                  data-aos-duration="1500"
                >
                  <h6>32</h6>
                  <p>Cases won</p>
                </div>
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="400"
                  data-aos-duration="1500"
                >
                  <h6>20</h6>
                  <p>Happy clients</p>
                </div>
                <div
                  className="about-info-item"
                  data-aos="zoom-in"
                  data-aos-delay="500"
                  data-aos-duration="1500"
                >
                  <h6>2</h6>
                  <p>Branches</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Verticle Tab Section --> */}
      <section className="verticle-tab-area">
        <div className="page-container">
          <div className="tab-block">
            <div
              className="verticle-tab"
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <button
                className="tablinks"
                onclick="openCity(event, 'discovery-call')"
                id="defaultOpen"
              >
                Discovery call
              </button>
              <button
                className="tablinks"
                onclick="openCity(event, 'case-analysis')"
              >
                Case analysis
              </button>
              <button className="tablinks" onclick="openCity(event, 'budgeting')">
                Budgeting
              </button>
              <button className="tablinks" onclick="openCity(event, 'execution')">
                Execution
              </button>
            </div>
            <div
              className="tabcontent-inner"
              data-aos="fade-left"
              data-aos-delay="300"
              data-aos-duration="1500"
            >
              <div id="discovery-call" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo con Excepteur sint
                  occaecat cupidatat non proident, sunt in culpa qui officia
                  deserunt mollit anim id es
                </p>
              </div>
              <div id="case-analysis" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo con Excepteur sint
                  occaecat cupidatat non proident
                </p>
              </div>
              <div id="budgeting" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo con
                </p>
              </div>
              <div id="execution" className="tabcontent">
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet, consectetur, adipisci velit, sed quSed ut perspiciatis
                  unde omnis iste natus error sit voluptatem accusantium
                  doloremque laudantium, toNemo enim ipsam voluptatem quia
                  voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur ma Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit, sed do eiusmod tempor incididunt ut labore Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Colleagues Section --> */}
      <section className="colleagues-area">
        <div className="page-container">
          <div className="colleagues-block">
            <header>
              <h4
                data-aos="fade-down"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Meet our learned colleagues
              </h4>
            </header>
            <div className="row">
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <div className="colleagues-item modalButton">
                  <img
                    src="/images/albert-flores.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Albert Flores</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
                <div className="colleagues-item modalButton">
                  <img
                    src="/images/ralph-edwards.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Ralph Edwards</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/courtney-henry.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Courtney Henry</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/albert-flores.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Albert Flores</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/ralph-edwards.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Ralph Edwards</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/courtney-henry.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Courtney Henry</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>

              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/albert-flores.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Albert Flores</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="400"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/ralph-edwards.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Ralph Edwards</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
              <div
                className="col-4"
                data-aos="zoom-in"
                data-aos-delay="600"
                data-aos-duration="1500"
              >
              <div className="colleagues-item modalButton">
                  <img
                    src="/images/courtney-henry.png"
                    width="368"
                    height="451"
                    loading="lazy"
                    decoding="async"
                    alt=""
                  />
                  <div className="colleagues-info">
                    <h6>Courtney Henry</h6>
                    <p>Lawyer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Testimonial Section --> */}
      <section className="eveluation-form-area">
        <div className="page-container">
          <div className="row">
            <div className="col-6">
              <div
                className="evaluation-form-box"
                data-aos="fade-right"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                <h3>Get in touch</h3>
                <form>
                  <div className="form-group">
                    <input
                      type="text"
                      className="inputs"
                      placeholder="Your full name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="inputs"
                      placeholder="me@company.com"
                    />
                  </div>
                  <div className="form-group">
                    <textarea
                      className="inputs"
                      placeholder="Your message..."
                    ></textarea>
                  </div>
                  <button type="submit" className="btn-submit">Send message</button>
                </form>
              </div>
            </div>
            <div className="col-6">
              <h4
                data-aos="fade-left"
                data-aos-delay="200"
                data-aos-duration="1500"
              >
                Our Professional Expert Law Team Is Always Ready To Serve You
              </h4>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Social Section --> */}
      <section className="contact-info-area">
        <div className="page-container">
          <div className="contact-info-block">
            <div
              className="contact-info-item"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1500"
            >
              <div className="icon-box">
                <img
                  src="/images/phone.svg"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </div>
              <div className="content-box">
                <span>Call us on</span>
                <a href="tel:(209) 555-0104">(209) 555-0104</a>
              </div>
            </div>
            <div
              className="contact-info-item"
              data-aos="fade-left"
              data-aos-delay="400"
              data-aos-duration="1500"
            >
              <div className="icon-box">
                <img
                  src="/images/location.svg"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </div>
              <div className="content-box">
                <span>Locate us at</span>
                <p>8502 Preston Rd. Inglewood, Maine 98380</p>
              </div>
            </div>
            <div
              className="contact-info-item"
              data-aos="fade-left"
              data-aos-delay="600"
              data-aos-duration="1500"
            >
              <div className="icon-box">
                <img
                  src="/images/email.svg"
                  loading="lazy"
                  decoding="async"
                  alt=""
                />
              </div>
              <div className="content-box">
                <span>Mail us on</span>
                <a href="mailto:sara.cruz@example.com4"
                  >sara.cruz@example.com</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
