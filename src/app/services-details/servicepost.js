import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function ServicedetailspostComponent() {
  return (
    <main className="inner-service-details-wrapper">
			{/* <!-- Testimonial Section --> */}
			<section className="eveluation-form-area">
				<div className="page-container">
					<div className="row">
						<div className="col-6">
							<p
								className="form-content"
								data-aos="fade-right"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
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
						<div className="col-6">
							<div
								className="evaluation-form-box"
								data-aos="fade-left"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<h3>Resolve Disputes</h3>
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
											placeholder="Your email address"
										/>
									</div>
									<div className="form-group">
										<textarea
											className="inputs"
											placeholder="Your message..."
										></textarea>
									</div>
									<button type="submit" className="btn-submit">
										Send message
									</button>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* <!-- Service Section --> */}
			<section className="service-feature">
				<div className="page-container">
					<div className="row">
						<div className="col-12">
							<h3
								data-aos="fade-down"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								Other Services
							</h3>
						</div>
						<div className="col-6">
							<div
								className="feature-wrap"
								data-aos="fade-right"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<div className="feature-icon">
									<img
										src="/images/icons/criminal-law.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<h4>DISPUTE RESOLUTION</h4>
								<p>
									Our team of legal professionals in Counsel&apos;s
									Litigation and Dispute Resolution division
									is committed to delivering strategic
									advocacy and efficient representation in
									legal conflicts. With a wealth of expertise
									across diverse litigation cases, we
									skillfully navigate our clients through the
									intricacies of the legal proceedings.
								</p>
							</div>
						</div>
						<div className="col-6">
							<div
								className="feature-wrap"
								data-aos="fade-left"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<div className="feature-icon">
									<img
										src="/images/icons/business-litigation.svg"
										width=""
										height=""
										loading="lazy"
										decoding="async"
										alt=""
									/>
								</div>
								<h4>CORPORATE AND COMMERCIAL LAW</h4>
								<p>
									Our team of legal professionals in Counsel&apos;s
									Litigation and Dispute Resolution division
									is committed to delivering strategic
									advocacy and efficient representation in
									legal conflicts. With a wealth of expertise
									across diverse litigation cases, we
									skillfully navigate our clients through the
									intricacies of the legal proceedings.
								</p>
							</div>
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
