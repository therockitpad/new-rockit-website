import React, { useState, useEffect } from 'react';
import { FaTimesCircle, FaBars } from 'react-icons/fa';

import './Navbar.css';

const Navbar = ({ refs }) => {
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

	const [ homeRef, aboutUsRef, servicesRef, contactRef ] = refs;

	const toElement = (ref) => {
		if (!ref) return;
		console.log(ref);
		const element = ref.current.getBoundingClientRect().top + window.scrollY;

		window.scroll({
			top: element,
			behavior: 'smooth'
		});
	};

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
									<a href="#void" onClick={() => toElement(homeRef)} className="nav-link px-4">
										Home
									</a>
								</li>
								<li className="nav-item">
									<a href="#void" onClick={() => toElement(aboutUsRef)} className="nav-link px-4">
										About Us
									</a>
								</li>
								<li className="nav-item">
									<a href="#void" onClick={() => toElement(servicesRef)} className="nav-link px-4">
										Services
									</a>
								</li>
								<li className="nav-item">
									<a href="#void" onClick={() => toElement(contactRef)} className="nav-link px-4">
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
						<a href="#void" onClick={() => toElement(homeRef)} className="h3">
							Home
						</a>
					</li>
					<li>
						<a href="#void" onClick={() => toElement(aboutUsRef)} className="h3">
							About Us
						</a>
					</li>
					<li>
						<a href="#void" onClick={() => toElement(servicesRef)} className="h3">
							Services
						</a>
					</li>
					<li>
						<a href="#void" onClick={() => toElement(contactRef)} className="h3">
							Contact
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Navbar;
