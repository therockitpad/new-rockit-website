import React from 'react';
import { ImCheckmark } from 'react-icons/im';

import aboutUsImage from './images/about-us.jpg';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <section id="about-section" data-aos="fade-up" data-aos-delay="100">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-12 text-center">
                        <h2 className="mb-3 h1 text-primary">About Us</h2>
                    </div>
                </div>
                <div className="row about-us-content">
                    <div className="col-lg-6 mb-5 px-auto">
                        <img
                            src={aboutUsImage}
                            alt="about us"
                            className="img-fluid mx-auto"
                        />
                    </div>
                    <div className="col-lg-5 ml-auto">
                        <div className="mb-4 px-auto">
                            <h3 className="h3 mb-4 text-black">
                                Elevate Your Brand
                            </h3>
                            <p className="lead">
                                RockIT combines deep technical expertise with
                                creative design to provide a truly unique
                                experience that will make your brand stand out.
                            </p>
                        </div>

                        <div className="mb-4 lead px-auto">
                            <ul className="about-us-list">
                                <li>
                                    <ImCheckmark className="about-us-checkmark" />Custom
                                    Web Pages and SEO
                                </li>
                                <li>
                                    <ImCheckmark className="about-us-checkmark" />Social
                                    Media Management
                                </li>
                                <li>
                                    <ImCheckmark className="about-us-checkmark" />Digital
                                    Marketing
                                </li>
                                <li>
                                    <ImCheckmark className="about-us-checkmark" />Graphic
                                    Design
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
