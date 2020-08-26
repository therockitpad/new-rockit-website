import React from 'react';
import { Helmet } from 'react-helmet';

import Cover from '../components/Cover/Cover';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
	return (
		<div>
			<Helmet>
				<title>RockIT | Digital Brand Management</title>
			</Helmet>
			<Cover />
		</div>
	);
}
