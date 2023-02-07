import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Faq from '../components/Faq';
import {
	MailIcon,
	LightningBoltIcon,
} from '@heroicons/react/outline'; 
import Link from 'next/link';

const faq = [
    {
        id: 1, 
        question: "What is your refund policy?",
        answer: "If you re unhappy with your purchase for any reason, email us within 90 days and we ll refund you in full, no questions asked."
    },
    {
        id: 2,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Doloremque placeat repellendus dolorum veniam ipsum neque saepe delectus necessitatibus est"
    },
    {
        id: 3,
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit?",
        answer: "Doloremque placeat repellendus dolorum veniam ipsum neque saepe delectus necessitatibus est"
    }
]
const supportLinks = [
	{
		name: 'Email Us',
		href: 'mailto:deerx.dev@gmail.com?subject=DeerX Support',
		description:
			'Email us with your questions and we will make sure to respond ASAP. Best suited for complex questions.',
		actionText: 'Send Email',
		icon: MailIcon,
	},
	{
		name: 'Direct Message Us',
		href: 'https://www.instagram.com/deerx_denison/',
		description:
			'Send us a direct message to our Instagram page and we will make sure to response ASAP. Best suited for quick questions.',
		actionText: 'Direct Message',
		icon: LightningBoltIcon,
	},
];


const Qa:NextPage = () => {
    
  return (
    <>
    <header>
        <Header/>
        <div className="relative mt-24 max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-wide text-denison-red md:text-5xl lg:text-6xl">
                Support
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-blue-gray-300">
                Need help with using the application? Contact us!
            </p>
        </div>
    </header>
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="max-w-md mx-auto py-20 px-4 sm:py-32 sm:max-w-3xl lg:max-w-7xl lg:px-8"
    >
        <h2 className="sr-only" id="contact-heading">
            Email us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-2 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
                <div
                    key={link.name}
                    className="flex flex-col bg-white rounded-2xl shadow-xl"
                >
                    <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                        <div className="absolute top-0 p-5 inline-block bg-gray rounded-xl shadow-lg transform -translate-y-1/2">
                            <link.icon
                                className="h-6 w-6 text-denison-red"
                                aria-hidden="true"
                            />
                        </div>
                        <h3 className="text-xl font-medium text-denison-red">
                            {link.name}
                        </h3>
                        <p className="mt-4 text-base text-pink">{link.description}</p>
                    </div>
                    <div className="p-6 bg-gray rounded-bl-2xl rounded-br-2xl md:px-8 text-denison-red text-base font-medium hover:cursor-pointer hover:underline">
                        <Link href={link.href} passHref>
                            <div>
                                {link.actionText}
                                <span aria-hidden="true"> &rarr;</span>
                            </div>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </section>
    <section
        className="max-w-md mx-auto pb-20 px-4 divide-y-2 divide-pink sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
        aria-labelledby="faq-heading"
    >
        <h2
            className="text-3xl font-extrabold text-denison-red"
            id="faq-heading"
        >
            Frequently asked questions
        </h2>
        <div className="w-full px-4 pt-16">
        <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
            {faq.map(blog => {
                return(
                    <><Faq content = {blog}/></>
                )
            })}
        </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Qa;