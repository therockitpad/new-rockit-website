import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaBars } from 'react-icons/fa';
import { Link } from 'react-scroll';

import './Navbar.css';

const Navbar = () => {
    const [ scrollPosition, setScrollPosition ] = useState(0);
    const [ sidebar, setSidebar ] = useState(false);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <header className="header">
                <nav
                    className={`navbar navbar-expand-lg fixed-top ${scrollPosition >
                    50
                        ? 'active'
                        : ''}`}
                >
                    <div className="container">
                        <a href="#home-section" className="navbar-brand px-3">
                            RockIT
                        </a>

                        <div
                            id="navbarSupportedContent"
                            className="collapse navbar-collapse"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active">
                                    <Link
                                        className="nav-link px-4"
                                        to="home-section"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-200}
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link px-4"
                                        to="about-section"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-200}
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link px-4"
                                        to="services-section"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-200}
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link
                                        className="nav-link px-4"
                                        to="contact-section"
                                        spy={true}
                                        smooth={true}
                                        duration={500}
                                        offset={-200}
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                        <div id="menu-open" onClick={() => setSidebar(true)}>
                            <FaBars
                                className={`${scrollPosition > 50
                                    ? 'active'
                                    : ''} menu-open-logo h3`}
                            />
                        </div>
                    </div>
                </nav>
            </header>
            <div
                id={`collapsable-navbar`}
                className={`${sidebar ? 'open' : ''}`}
            >
                <ul>
                    <li>
                        <FaTimesCircle
                            className="h3"
                            onClick={() => setSidebar(false)}
                        />
                    </li>
                    <li>
                        <Link
                            className="h3"
                            to="home-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="h3"
                            to="about-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="h3"
                            to="services-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                        >
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="h3"
                            to="contact-section"
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-150}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
