import React from 'react';
import { Link } from 'react-scroll';

import './Cover.css';

const Cover = () => (
    <section className="hero-image" id="home-section">
        <Link
            className="btn btn-primary mr-2 mb-2 get-in-touch"
            to="contact-section"
            spy={true}
            smooth={true}
            duration={500}
            offset={-200}
        >
            Get In Touch
        </Link>
        <div className="mouse-icon">
            <div className="wheel" />
        </div>
    </section>
);

export default Cover;
