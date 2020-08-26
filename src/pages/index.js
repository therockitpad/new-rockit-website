import React from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';

import AboutUs from '../components/AboutUs/AboutUs';
import Cover from '../components/Cover/Cover';
import Footer from '../components/Footer/Footer';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

AOS.init();

export default function Home() {
	return (
		<div>
			<Helmet>
				<title>RockIT | Digital Brand Management</title>
			</Helmet>
			<Cover />
			<AboutUs />
			<Footer />
		</div>
	);
}
