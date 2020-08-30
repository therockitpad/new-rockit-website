import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaBars } from 'react-icons/fa';

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
				<nav className={`navbar navbar-expand-lg fixed-top ${scrollPosition > 50 ? 'active' : ''}`}>
					<div className="container">
						<a href="#home-section" className="navbar-brand px-3">
							RockIT
						</a>

						<div id="navbarSupportedContent" className="collapse navbar-collapse">
							<ul className="navbar-nav ml-auto">
								<li className="nav-item active">
									<a href="#home-section" className="nav-link px-4">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#about-section" className="nav-link px-4">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a href="#site-section" className="nav-link px-4">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a href="#contact-section" className="nav-link px-4">
										Contact
									</a>
								</li>
							</ul>
						</div>
						<div id="menu-open" onClick={() => setSidebar(true)}>
							<FaBars className={`${scrollPosition > 50 ? 'active' : ''} menu-open-logo h3`} />
						</div>
					</div>
				</nav>
			</header>
			<div id={`collapsable-navbar`} className={`${sidebar ? 'open' : ''}`}>
				<ul>
					<li>
						<FaTimesCircle className="h3" onClick={() => setSidebar(false)} />
					</li>
					<li>
						<a href="#home-section" className="h3">
							Home
						</a>
					</li>
					<li>
						<a href="#about-section" className="h3">
							About Us
						</a>
					</li>
					<li>
						<a href="#site-section" className="h3">
							Services
						</a>
					</li>
					<li>
						<a href="#contact-section" className="h3">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
