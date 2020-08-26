import React from 'react';
import { Container } from 'react-bootstrap';
import { FaLinkedinIn } from 'react-icons/fa';

import './Footer.css';

const Footer = () => {
	return (
		<footer className="site-footer">
			<Container className="py-5">
				<div className="row">
					<div className="col-md-9">
						<div className="row">
							<div className="col-md-5">
								<div className="h4 text-light my-3">About Us</div>
								<p className="text-muted">
									RockIT combines deep technical expertise with creative design to provide a truly
									unique experience that will make your brand stand out.
								</p>
							</div>
							<div className="col-md-3 ml-auto">
								<div className="h4 text-light my-3">Quick Links</div>
								<ul className="list-unstyled">
									<li>
										<a href="#about-section" className="smoothscroll text-muted">
											About Us
										</a>
									</li>
									<li>
										<a href="#site-section" className="smoothscroll text-muted">
											Services
										</a>
									</li>
									<li>
										<a href="#contact-section" className="smoothscroll text-muted">
											Contact
										</a>
									</li>
								</ul>
							</div>
							<div className="col-md-3">
								<div className="h4 text-light my-3">Follow Us</div>
								<a href="https://www.linkedin.com/company/rockit-co" className="pl-3 pr-3">
									<FaLinkedinIn className="text-muted" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="row pt-5 mt-5 text-center">
					<div className="col-md-12">
						<div className="border-top pt-5">
							<p className="text-muted">
								Copyright &copy;{new Date().getFullYear()} All rights reserved | RockIT LLC
							</p>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
