import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";


export default function ContactdetailsbannerComponent() {
  return (
    <section class="inner-banner-area">
			<Image
				src="/images/contact-banner.jpg"
				width={1920}
				height={375}
				loading="lazy"
				decoding="async"
				alt=""
			/>
			<div class="inner-banner-content">
				<div class="page-container">
					<h1
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="1500"
					>
						You can get free consultation and case evaluation from
						us
					</h1>
				</div>
			</div>
		</section>
  );
}