import type { NextPage } from 'next';
import React from 'react';
import Footer from '../components/Footer';

import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<div className="bg-gray">
			<header>{/* <Header /> */}</header>
			<main>
				<Hero />
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
