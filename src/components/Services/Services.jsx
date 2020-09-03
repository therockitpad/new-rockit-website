import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

import image1 from './images/features-1.jpg';
import image2 from './images/features-2.jpg';
import image3 from './images/features-3.jpg';
import image4 from './images/features-4.jpg';
import './Services.css';

const images = [ image1, image2, image3, image4 ];

const Services = () => {
	return (
		<section id="site-section">
			<div className="row mb-5">
				<div className="col-12 text-center">
					<h2 className="mb-3 h1 text-primary">Services</h2>
					<h4 className="lead">See what RockIT can do for you!</h4>
				</div>
			</div>
			<Container className="services-carousel">
				<Carousel className="servies-carousel-image">
					{images.map((image) => (
						<Carousel.Item>
							<img className="carousel-img d-block w-100" src={image} alt="First slide" />
						</Carousel.Item>
					))}
				</Carousel>
				<Carousel className="services-carousel-text-item">
					<Carousel.Item className="services-carousel-text-item">
						<h2 className="section-title mb-3 text-primary h2">Custom Websites</h2>
						<p className="lead">Design and build a unique website.</p>
						<p>
							We can create a website from scratch, or improve an existing website. We can also work with
							templates and sites such as wordpress and wix.
						</p>
					</Carousel.Item>
					<Carousel.Item className="services-carousel-text-item">
						<h2 className="section-title mb-3 text-primary h2">Social Media Management</h2>
						<p className="lead">Expand your outreach through social media.</p>
						<p>
							We can manage multiple social media accounts, handling everything from account setup to
							continual maintenance. We will post content daily and will create graphic content and videos
							on a monthly basis.
						</p>
					</Carousel.Item>
					<Carousel.Item className="services-carousel-text-item">
						<h2 className="section-title mb-3 text-primary h2">Digital Marketing</h2>
						<p className="lead">
							Vast array of tools and knowledge to help you achieve your marketing needs.
						</p>
						<p>
							Search Engine Optimization, Email campaigns, advertising, are just a few options available
							in our marketing arsenal. We can create innovative designs and content that will catch the
							eye of your audience, and will increase your brand engagement.{' '}
						</p>
					</Carousel.Item>
					<Carousel.Item className="services-carousel-text-item">
						<h2 className="section-title mb-3 text-primary h2">Graphic Design</h2>
						<p className="lead">Eye catching designs that will engage your audience.</p>
						<p>
							Custom images and videos help to captivate your audience and convey meaning. We can
							incorporate original designs to your website, social media, or marketing materials.
						</p>
					</Carousel.Item>
				</Carousel>
			</Container>
		</section>
	);
};

export default Services;
