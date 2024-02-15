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
							src="./images/Logo.png"
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
					<div className="home-social-media">
						<a href="#">
							<img
								src="./images/icons/linkedin.svg"
								alt="linkedin"
							/>
						</a>
						<a href="#">
							<img
								src="./images/icons/instagram.svg"
								alt="instagram"
							/>
						</a>
						<a href="#">
							<img
								src="./images/icons/facebook.svg"
								alt="facebook"
							/>
						</a>
						<a href="#">
							<img src="./images/icons/extra.svg" alt="" />
						</a>
					</div>
					<div className="banner-content">
						<h1>Experienced</h1>
						<h2>Trusted Legal Counsel</h2>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Suspendisse varius enim in eros elementum
							tristique. Duis cursus, mi quis viverra ornare, eros
							dolor interdum nulla, ut commodo diam libero vitae
							erat.
						</p>
						<a className="btn btn-primary">Call for consultation</a>
					</div>
				</div>
				<div className="home-banner-photo">
					<img
						src="./images/home-banner.jpg"
						width="1920"
						height="395"
						alt=""
						loading="lazy"
						decoding="async"
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
							<h4>Your Legal Partner in Every Step</h4>
							<p>
								Our team of accomplished attorneys brings a
								wealth of legal knowledge and expertise across
								various practice areas. Whether you need
								assistance with personal injury claims, family
								matters, business disputes, or other legal
								issues, we have the skills to represent your
								interests effectively.
							</p>
							<a className="btn btn-primary">Read More</a>
						</div>
					</div>
					<div className="col-6">
						<div className="about-info">
							<div className="about-info-item">
								<h6>12</h6>
								<p>Team members</p>
							</div>
							<div className="about-info-item">
								<h6>32</h6>
								<p>Cases won</p>
							</div>
							<div className="about-info-item">
								<h6>20</h6>
								<p>Happy clients</p>
							</div>
							<div className="about-info-item">
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
						<h4>Our Legal Practices</h4>
						<a>More practices</a>
					</header>
					<div className="row">
						<div className="col-4">
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="./images/icons/family-law.svg"
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
						<div className="col-4">
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="./images/icons/workers-law.svg"
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
						<div className="col-4">
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="./images/icons/corporate-law.svg"
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
						<div className="col-4">
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="./images/icons/criminal-law.svg"
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
						<div className="col-4">
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="./images/icons/business-litigation.svg"
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
						<div className="col-4">
							<div className="legal-item">
								<div className="legal-icon">
									<img
										src="./images/icons/employment-law.svg"
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
					<div className="verticle-tab">
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
					<div className="tabcontent-inner">
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
    </React.Fragment>
  );
}
