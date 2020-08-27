import React, { useState, useEffect } from 'react';

import './Navbar.css';

const Navbar = () => {
	const [ scrollPosition, setScrollPosition ] = useState(0);

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
		<header className="header">
			<nav className={`navbar navbar-expand-lg fixed-top py-3 ${scrollPosition > 50 ? 'active' : ''}`}>
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
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
