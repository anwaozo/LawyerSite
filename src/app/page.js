import Image from "next/image";
import styles from "./page.module.css";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <header className="header">
			<div className="page-container">
				<div className="header-block">
					<a className="logo" href="#">
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
							<li>
								<a href="#">about us</a>
							</li>
							<li>
								<a href="#">contact us</a>
							</li>
							<li>
								<a href="#">blog</a>
							</li>
							<li>
								<a href="#">services</a>
							</li>
							<li>
								<a href="#">team</a>
							</li>
						</ul>
					</nav>
				</div>
			</div>
		</header>

		{/* <!-- Home Section --> */}
		<section className="home-banner-area">
			<div className="page-container">
				<div className="home-banner-content">
					<div className="home-social-media" data-aos="fade-up">
						<a
							href="#"
							data-aos="fade-right"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							<img
								src="/images/icons/linkedin.svg"
								alt="linkedin"
							/>
						</a>
						<a
							href="#"
							data-aos="fade-right"
							data-aos-delay="300"
							data-aos-duration="1500"
						>
							<img
								src="/images/icons/instagram.svg"
								alt="instagram"
							/>
						</a>
						<a
							href="#"
							data-aos="fade-right"
							data-aos-delay="400"
							data-aos-duration="1500"
						>
							<img
								src="/images/icons/facebook.svg"
								alt="facebook"
							/>
						</a>
						<a
							href="#"
							data-aos="fade-right"
							data-aos-delay="500"
							data-aos-duration="1500"
						>
							<img src="/images/icons/extra.svg" alt="" />
						</a>
					</div>
					<div className="banner-content">
						<h1
							data-aos="fade-left"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							Experienced
						</h1>
						<h2
							data-aos="fade-left"
							data-aos-delay="300"
							data-aos-duration="1500"
						>
							Trusted Legal Counsel
						</h2>
						<p
							data-aos="fade-left"
							data-aos-delay="400"
							data-aos-duration="1500"
						>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla, ut commodo diam libero vitae
							erat.
						</p>
						<a
							className="btn btn-primary"
							data-aos="fade-up"
							data-aos-delay="600"
							data-aos-duration="1500"
							>Call for consultation</a
						>
					</div>
				</div>
				<div className="home-banner-photo">
					<img
						src="/images/home-banner.jpg"
						width="1920"
						height="395"
						alt=""
						loading="lazy"
						decoding="async"
						data-aos="zoom-in"
						data-aos-delay="300"
						data-aos-duration="1500"
					/>
				</div>
			</div>
		</section>

		{/* <!-- About Section --> */}
		<section className="about-area">
			<div className="page-container">
				<div className="row">
					<div className="col-6">
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
								Our team of accomplished attorneys brings a
								wealth of legal knowledge and expertise across
								various practice areas. Whether you need
								assistance with personal injury claims, family
								matters, business disputes, or other legal
								issues, we have the skills to represent your
								interests effectively.
							</p>
							<a
								className="btn btn-primary"
								data-aos="fade-right"
								data-aos-delay="400"
								data-aos-duration="1500"
								>Read More</a
							>
						</div>
					</div>
					<div className="col-6">
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

		{/* <!-- Legal Practice Section --> */}
		<section className="legal-practice-area">
			<div className="page-container">
				<div className="legal-practice-block">
					<header>
						<h4
							data-aos="fade-down"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							Our Legal Practices
						</h4>
						<a
							data-aos="fade-down"
							data-aos-delay="400"
							data-aos-duration="1500"
							>More practices</a
						>
					</header>
					<div className="row">
						<div
							className="col-4"
							data-aos="fade-right"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="/images/icons/family-law.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<p>FAMILY LAW</p>
							</div>
						</div>
						<div
							className="col-4"
							data-aos="fade-right"
							data-aos-delay="300"
							data-aos-duration="1500"
						>
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="/images/icons/workers-law.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<p>WORKERS LAW</p>
							</div>
						</div>
						<div
							className="col-4"
							data-aos="fade-right"
							data-aos-delay="400"
							data-aos-duration="1500"
						>
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="/images/icons/corporate-law.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<p>CORPORATE LAW</p>
							</div>
						</div>
						<div
							className="col-4"
							data-aos="fade-right"
							data-aos-delay="500"
							data-aos-duration="1500"
						>
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="/images/icons/criminal-law.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<p>CRIMINAL LAW</p>
							</div>
						</div>
						<div
							className="col-4"
							data-aos="fade-right"
							data-aos-delay="600"
							data-aos-duration="1500"
						>
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="/images/icons/business-litigation.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<p>BUSINESS LITIGATION</p>
							</div>
						</div>
						<div
							className="col-4"
							data-aos="fade-right"
							data-aos-delay="700"
							data-aos-duration="1500"
						>
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="/images/icons/employment-law.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<p>EMPLOYMENT LAW</p>
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
						<button
							className="tablinks"
							onclick="openCity(event, 'budgeting')"
						>
							Budgeting
						</button>
						<button
							className="tablinks"
							onclick="openCity(event, 'execution')"
						>
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
								Neque porro quisquam est, qui dolorem ipsum quia
								dolor sit amet, consectetur, adipisci velit, sed
								quSed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque
								laudantium, toNemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed
								quia consequuntur ma Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore Ut enim ad minim
								veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo con
								Excepteur sint occaecat cupidatat non proident,
								sunt in culpa qui officia deserunt mollit anim
								id es
							</p>
						</div>
						<div id="case-analysis" className="tabcontent">
							<p>
								Neque porro quisquam est, qui dolorem ipsum quia
								dolor sit amet, consectetur, adipisci velit, sed
								quSed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque
								laudantium, toNemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed
								quia consequuntur ma Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore Ut enim ad minim
								veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo con
								Excepteur sint occaecat cupidatat non proident
							</p>
						</div>
						<div id="budgeting" className="tabcontent">
							<p>
								Neque porro quisquam est, qui dolorem ipsum quia
								dolor sit amet, consectetur, adipisci velit, sed
								quSed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque
								laudantium, toNemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed
								quia consequuntur ma Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore Ut enim ad minim
								veniam, quis nostrud exercitation ullamco
								laboris nisi ut aliquip ex ea commodo con
							</p>
						</div>
						<div id="execution" className="tabcontent">
							<p>
								Neque porro quisquam est, qui dolorem ipsum quia
								dolor sit amet, consectetur, adipisci velit, sed
								quSed ut perspiciatis unde omnis iste natus
								error sit voluptatem accusantium doloremque
								laudantium, toNemo enim ipsam voluptatem quia
								voluptas sit aspernatur aut odit aut fugit, sed
								quia consequuntur ma Lorem ipsum dolor sit amet,
								consectetur adipiscing elit, sed do eiusmod
								tempor incididunt ut labore Ut enim ad minim
								veniam, quis nostrud exercitation ullamco
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
						<a
							data-aos="fade-down"
							data-aos-delay="400"
							data-aos-duration="1500"
							>Learn more about us</a
						>
					</header>
					<div className="row">
						<div
							className="col-4"
							data-aos="zoom-in"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							<div className="colleagues-item">
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
							<div className="colleagues-item">
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
							<div className="colleagues-item">
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

		{/* <!-- Evelution Section --> */}
		<section className="evalution-area">
			<div className="page-container">
				<div className="row">
					<div className="col-6">
						<h4
							data-aos="fade-right"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							You can get case evaluation from us
						</h4>
					</div>
					<div className="col-6">
						<div className="evalution-info">
							<div
								className="evalution-item"
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
									<a href="tel:(209) 555-0104"
										>(209) 555-0104</a
									>
								</div>
							</div>
							<div
								className="evalution-item"
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
									<p>
										8502 Preston Rd. Inglewood, Maine 98380
									</p>
								</div>
							</div>
							<div
								className="evalution-item"
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
				</div>
			</div>
		</section>

		{/* <!-- Posts Section --> */}
		<section className="post-area">
			<div className="page-container">
				<div className="post-block">
					<header>
						<h4
							data-aos="fade-down"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							Our Posts
						</h4>
						<a
							data-aos="fade-down"
							data-aos-delay="400"
							data-aos-duration="1500"
							>Read more posts</a
						>
					</header>
					<div className="row">
						<div className="col-6">
							<div
								className="post-left-photo"
								data-aos="fade-right"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<img
									src="/images/post-one.jpg"
									loading="lazy"
									decoding="async"
									alt=""
								/>
								<div className="post-left-content">
									<span>BUSINESS</span>
									<p>
										How to own a Copyright for your product
									</p>
									<h6>12/10/2023</h6>
								</div>
							</div>
						</div>
						<div className="col-3">
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
									<p>
										How to own a Copyright for your product
									</p>
									<h6>12/10/2023</h6>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		{/* <!-- Testimonial Section --> */}
		<div className="testimonial-area">
			<div className="page-container">
				<div className="row">
					<div className="col-6">
						<h3
							data-aos="fade-right"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							What out clients say <span>about us</span>
						</h3>
					</div>
					<div className="col-6">
						<div
							className="author-block"
							data-aos="fade-left"
							data-aos-delay="300"
							data-aos-duration="1500"
						>
							<div className="author-photo">
								<img src="/images/testimonial.png" alt="" />
							</div>
							<div className="author-info">
								<h5>Brooklyn Simmons</h5>
								<h6>President of Sales</h6>
							</div>
							<div className="author-content">
								<p>
									“Amet minim mollit non deserunt ullamco est
									sit aliqua dolor do amet sint. Velit officia
									consequat duis enim velit mollit.
									Exercitation veniam consequat.”
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

		{/* <!-- Testimonial Section --> */}
		<div className="eveluation-form-area">
			<div className="page-container">
				<div className="row">
					<div className="col-6">
						<div
							className="evaluation-form-box"
							data-aos="fade-right"
							data-aos-delay="200"
							data-aos-duration="1500"
						>
							<h3>Get free evaluation</h3>
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
										type="text"
										className="inputs"
										placeholder="Phone"
									/>
								</div>
								<div className="form-group">
									<input
										type="email"
										className="inputs"
										placeholder="Your email"
									/>
								</div>
								<div className="form-group">
									<textarea
										className="inputs"
										placeholder="Briefly describe.."
									></textarea>
								</div>
								<button type="submit" className="btn-submit">
									Send message
								</button>
							</form>
						</div>
					</div>
					<div className="col-6">
						<h4
							data-aos="fade-left"
							data-aos-delay="300"
							data-aos-duration="1500"
						>
							Our Professional Expert Law Team Is Always Ready To
							Serve You
						</h4>
					</div>
				</div>
			</div>
		</div>

		<footer className="footer">
			<div className="page-container">
				<a className="footer-logo">
					<img
						src="/images/Logo.png"
						width=""
						height=""
						loading="lazy"
						decoding="async"
						alt="Logo"
					/>
				</a>
				<div className="footer-menu">
					<a>Teams</a>
					<a>Privacy Policy</a>
					<a>Contact</a>
					<a>Services</a>
					<a>About</a>
					<a>Blog</a>
				</div>
				<div className="footer-social-media">
					<a>
						<div className="icon-box">
							<img src="/images/icons/ftr-linkedin.svg" alt="" />
						</div>
						<p>linkedin</p>
						<img
							src="/images/right-arrow.svg"
							className="arrow-right"
							alt=""
						/>
					</a>
					<a>
						<div className="icon-box">
							<img
								src="/images/icons/ftr-instagram.svg"
								alt=""
							/>
						</div>
						<p>instagram</p>
						<img
							src="/images/right-arrow.svg"
							className="arrow-right"
							alt=""
						/>
					</a>
					<a>
						<div className="icon-box">
							<img src="/images/icons/ftr-facebook.svg" alt="" />
						</div>
						<p>facebook</p>
						<img
							src="/images/right-arrow.svg"
							className="arrow-right"
							alt=""
						/>
					</a>
					<a>
						<div className="icon-box">
							<img src="/images/icons/ftr-twitter.svg" alt="" />
						</div>
						<p>twitter x</p>
						<img
							src="/images/right-arrow.svg"
							className="arrow-right"
							alt=""
						/>
					</a>
				</div>
				<p className="tagline">
					Template Designed by <span>Apperr Designs</span>
				</p>
			</div>
		</footer>
    </React.Fragment>
  );
}
