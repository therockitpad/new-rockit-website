import React from 'react';

import './Cover.css';

const Cover = ({ contactRef }) => {
	const toElement = (ref) => {
		if (!ref) return;
		const element = ref.current.getBoundingClientRect().top + window.scrollY;

		window.scroll({
			top: element,
			behavior: 'smooth'
		});
	};
	return (
		<div className="hero-image" id="home-section">
			<a href="#" onClick={() => toElement(contactRef)} className="btn btn-primary mr-2 mb-2 get-in-touch">
				Get In Touch
			</a>
			<div className="mouse-icon">
				<div className="wheel" />
			</div>
		</div>
	);
};

export default Cover;
