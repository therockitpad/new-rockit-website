import React, { useState } from 'react';
import { FaMap, FaPhone, FaEnvelope } from 'react-icons/fa';
import * as emailjs from 'emailjs-com';

const Contact = ({ contactRef }) => {
    const [ contactForm, setContactForm ] = useState({
        name    : '',
        email   : '',
        subject : '',
        message : ''
    });

    const handleChange = (event) => {
        setContactForm({
            ...contactForm,
            [event.target.name]: event.target.value
        });
    };

    emailjs.init('user_0SCAtdThM1Wlm28DDifYm');

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('emailexpendable4', 'template_yg72hhv', {
            subject : contactForm.subject,
            email   : contactForm.email,
            name    : contactForm.name,
            message : contactForm.message
        });
    };

    return (
        <section
            className="bg-light"
            id="contact-section"
            data-aos="fade-up"
            data-aos-delay="100"
            ref={contactRef}
        >
            <div className="container">
                <div className="row my-5 pt-3">
                    <div className="col-12 text-center">
                        <h2 className="section-title h1 text-primary mb-3">
                            Contact Us
                        </h2>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col-md-4 text-center">
                        <p className="mb-4 text-center">
                            <FaMap className="d-block h4 text-primary mx-auto" />
                            <span>Herndon, VA</span>
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p className="mb-4">
                            <FaPhone className="d-block h4 text-primary mx-auto" />
                            <a href="tel:+1-540-339-7563" className="text-dark">
                                +1 540 339 7563
                            </a>
                        </p>
                    </div>
                    <div className="col-md-4 text-center">
                        <p className="mb-0">
                            <FaEnvelope className="d-block h4 text-primary mx-auto" />
                            <a
                                href="mailto:nitinkumar@rockitpad.com"
                                className="text-dark"
                            >
                                nitinkumar@rockitpad.com
                            </a>
                        </p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 mb-5">
                        <form className="p-5 bg-white" onSubmit={handleSubmit}>
                            <h2 className="h4 text-black mb-5">Contact Form</h2>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label
                                        className="text-black"
                                        htmlFor="fname"
                                    >
                                        Full Name
                                    </label>
                                    <input
                                        name="name"
                                        type="text"
                                        id="name"
                                        placeholder="Full Name..."
                                        className="form-control"
                                        value={contactForm['name']}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label
                                        name="email"
                                        className="text-black"
                                        htmlFor="email"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        placeholder="Your e-mail..."
                                        className="form-control"
                                        value={contactForm['email']}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label
                                        className="text-black"
                                        htmlFor="subject"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        name="subject"
                                        type="subject"
                                        placeholder="Subject..."
                                        id="subject"
                                        className="form-control"
                                        value={contactForm['subject']}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <div className="row form-group">
                                <div className="col-md-12">
                                    <label
                                        className="text-black"
                                        htmlFor="message"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        cols="30"
                                        rows="7"
                                        className="form-control"
                                        placeholder="Write your message..."
                                        value={contactForm['message']}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <div className="row form-group">
                                <div className="col-md-2">
                                    <input
                                        type="submit"
                                        value="Send Message"
                                        className="btn btn-primary btn-md text-white"
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
