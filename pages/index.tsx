import type { NextPage } from 'next';
import React from 'react';
import Footer from '../components/Footer';
import Image from 'next/image';

import Header from '../components/Header';
import Hero from '../components/Hero';

const Home: NextPage = () => {
	return (
		<div className="bg-gray">
			<header><Header /></header>
			<main>
				<Hero />
				<div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24 grid md:grid-cols-2 sm:grid-cols-1'>
					<div>									
						<Image
						height={180}
						width={180}
						className="block lg:hidden h-8 w-auto"
						src="/logo.svg"
						alt="Deer X Application Logo"
						/>
					</div>
					<div className='flex flex-col items-start'>
						<div className='text-5xl text-denison-red font-bold mb-4'>DeerX who?</div>
						<div className='mb-4 font-medium'>We are a dedicated, creative, and talented team at Denison University.</div>
						<div className='mb-7 font-medium'>DeerX is an E-commerce marketplace app helping Denison students sell and buy 
						dorm goods, books, personal items, and more. DeerX app is now avaible on AppStore, later on Google Play and 
						our official website.
						</div>
					</div>
				</div>
			</main>
			<footer>
				<Footer />
			</footer>
		</div>
	);
};

export default Home;
