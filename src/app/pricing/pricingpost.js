import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";

export default function PricingpostComponent() {
  return (
    <main>
			{/* <!-- Pricing Section --> */}
			<section class="pricing-block">
				<div class="page-container">
					<div class="row">
						<div class="col-4">
							<div
								class="pricing-item"
								data-aos="zoom-in"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<div class="pricing-content">
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
						<div class="col-4">
							<div
								class="pricing-item"
								data-aos="zoom-in"
								data-aos-delay="400"
								data-aos-duration="1500"
							>
								<div class="pricing-content">
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
						<div class="col-4">
							<div
								class="pricing-item"
								data-aos="zoom-in"
								data-aos-delay="600"
								data-aos-duration="1500"
							>
								<div class="pricing-content">
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
			<section class="eveluation-form-area">
				<div class="page-container">
					<div class="row">
						<div class="col-6">
							<div
								class="evaluation-form-box"
								data-aos="fade-right"
								data-aos-delay="200"
								data-aos-duration="1500"
							>
								<h3>Get in touch</h3>
								<form>
									<div class="form-group">
										<input
											type="text"
											class="inputs"
											placeholder="Your full name"
										/>
									</div>
									<div class="form-group">
										<input
											type="email"
											class="inputs"
											placeholder="me@company.com"
										/>
									</div>
									<div class="form-group">
										<textarea
											class="inputs"
											placeholder="Your message..."
										></textarea>
									</div>
									<button type="submit" class="btn-submit">
										Send message
									</button>
								</form>
							</div>
						</div>
						<div class="col-6">
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
