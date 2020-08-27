import React from 'react';
import { FaMap, FaPhone, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
	return (
		<section class="site-section bg-light" id="contact-section" data-aos="fade">
			<div class="container">
				<div class="row mb-5">
					<div class="col-12 text-center">
						<h2 class="section-title h1 text-primary mb-3">Contact Us</h2>
					</div>
				</div>
				<div class="row mb-5">
					<div class="col-md-4 text-center">
						<p class="mb-4 text-center">
							<FaMap className="d-block h4 text-primary mx-auto" />
							<span>Herndon, VA</span>
						</p>
					</div>
					<div class="col-md-4 text-center">
						<p class="mb-4">
							<FaPhone className="d-block h4 text-primary mx-auto" />
							<a href="tel:+1-540-339-7563" className="text-dark">
								+1 540 339 7563
							</a>
						</p>
					</div>
					<div class="col-md-4 text-center">
						<p class="mb-0">
							<FaEnvelope className="d-block h4 text-primary mx-auto" />
							<a href="mailto:nitinkumar@rockitpad.com" className="text-dark">
								nitinkumar@rockitpad.com
							</a>
						</p>
					</div>
				</div>
				<div class="row">
					<div class="col-md-12 mb-5">
						<form class="p-5 bg-white" nethod="post" action="contact.php" enctype="multipart/form-data">
							<h2 class="h4 text-black mb-5">Contact Form</h2>

							<div class="row form-group">
								<div class="col-md-12">
									<label class="text-black" for="fname">
										Full Name
									</label>
									<input
										name="name"
										type="text"
										id="name"
										placeholder="Full Name..."
										class="form-control"
									/>
								</div>
							</div>

							<div class="row form-group">
								<div class="col-md-12">
									<label name="email" class="text-black" for="email">
										Email
									</label>
									<input type="email" id="email" placeholder="Your e-mail..." class="form-control" />
								</div>
							</div>

							<div class="row form-group">
								<div class="col-md-12">
									<label class="text-black" for="subject">
										Subject
									</label>
									<input
										name="subject"
										type="subject"
										placeholder="Subject..."
										id="subject"
										class="form-control"
									/>
								</div>
							</div>

							<div class="row form-group">
								<div class="col-md-12">
									<label class="text-black" for="message">
										Message
									</label>
									<textarea
										name="message"
										id="message"
										cols="30"
										rows="7"
										class="form-control"
										placeholder="Write your message..."
									/>
								</div>
							</div>
							<div class="row form-group">
								<div class="col-md-2">
									<input
										type="submit"
										value="Send Message"
										class="btn btn-primary btn-md text-white"
									/>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Contact;
