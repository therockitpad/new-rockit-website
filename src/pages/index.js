import React from 'react';
import { Helmet } from 'react-helmet';
import AOS from 'aos';

import Navbar from '../components/Navbar/Navbar';
import AboutUs from '../components/AboutUs/AboutUs';
import Cover from '../components/Cover/Cover';
import Footer from '../components/Footer/Footer';
import Contact from '../components/Contact/Contact';
import Services from '../components/Services/Services';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'aos/dist/aos.css';

AOS.init();

export default function Home() {
	return (
		<div>
			<Helmet>
				<title>RockIT | Digital Brand Management</title>
			</Helmet>
			<Navbar />
			<Cover />
			<AboutUs />
			<Services />
			<Contact />
			<Footer />
		</div>
	);
}
