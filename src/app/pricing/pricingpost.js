import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function PricingpostComponent() {
  return (
    <main>
			{/* <!-- Pricing Section --> */}
			<section className="pricing-block">
				<div className="page-container">
					<div className="row">
						<div className="col-4">
							<div
								className="pricing-item"
								data-aos="zoom-in"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<div className="pricing-content">
									<h5>Subscription 1</h5>
									<p>
										Neque porro quisquam est, qui dolorem
										ipsum quia dolor sit amet, consectetur,
										adipisci velit, sed quSed ut
										perspiciatis unde omnis iste natus error
										sit voluptatem accusantium doloremque
										laudantium.
									</p>
									<h6>$599/mo</h6>
									<a href="#">Get Started</a>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div
								className="pricing-item"
								data-aos="zoom-in"
								data-aos-delay="400"
								data-aos-duration="1500"
							>
								<div className="pricing-content">
									<h5>Subscription 2</h5>
									<p>
										toNemo enim ipsam voluptatem quia
										voluptas sit aspernatur aut odit aut
										fugit, sed quia consequuntur ma Lorem
										ipsum dolor sit amet, consectetur
										adipiscing elit,consectetur adipiscing
										elit,
									</p>
									<h6>$599/mo</h6>
									<a href="#">Get Started</a>
								</div>
							</div>
						</div>
						<div className="col-4">
							<div
								className="pricing-item"
								data-aos="zoom-in"
								data-aos-delay="600"
								data-aos-duration="1500"
							>
								<div className="pricing-content">
									<h5>Subscription 3</h5>
									<p>
										sed do eiusmod tempor incididunt ut
										labore Ut enim ad minim veniam, quis
										nostrud exercitation ullamco laboris
										nisi ut aliquip ex ea commodo
										conconsectetur adipiscing elit,
									</p>
									<h6>$599/mo</h6>
									<a href="#">Get Started</a>
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
									<button type="submit" className="btn-submit">
										Send message
									</button>
								</form>
							</div>
						</div>
						<div className="col-6">
							<h4
								data-aos="fade-left"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								Our Professional Expert Law Team Is Always Ready
								To Serve You
							</h4>
						</div>
					</div>
				</div>
			</section>
		</main>
  );
}
