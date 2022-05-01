import {
	NewspaperIcon,
	MailIcon,
	LightningBoltIcon,
} from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';

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
const faqs = [
	{
		id: 1,
		question: 'What is DeerX?',
		answer:
			'DeerX is a mobile application that serves as an online marketplace for Denison students. If you want to buy stuff at a cheaper price, or you want to sell stuff instead of trashing it, DeerX is the app.',
	},
	{
		id: 2,
		question: 'Who is behind DeerX?',
		answer:
			'We are a group of Denison students just like you guys and gals. The developer team consists of CS majors, the business teams consists of DA and Econ majors, and the design team consists of Art majors',
	},
	{
		id: 3,
		question: 'How do I buy an item on DeerX?',
		answer:
			'To buy an item, sign in with your Denison email address, then message the seller and work with them to negotiate price, when and where to meet. DeerX does not charge a fee for each transaction. Every meaningful relationship made between Denison students is a gain for us.',
	},
	{
		id: 4,
		question: 'How do I sell an item on DeerX',
		answer:
			'To sell an item, sign in with your Denison email address and press the Store icon (located at center of the bottom tab bar). Here on the top right you will see a Plus to create a listing.',
	},
];

export default function Example() {
	return (
		<div className="bg-gray">
			<header className="relative pb-36 bg-gray">
				<div className="absolute inset-0">
					<div className="absolute inset-0 bg-gray" aria-hidden="true" />
				</div>
				<nav
					className="relative max-w-7xl mx-auto flex items-center justify-between pt-6 pb-2 px-4 sm:px-6 lg:px-8"
					aria-label="Global"
				>
					<div className="flex items-center flex-1">
						<div className="flex items-center justify-between w-full lg:w-auto">
							<a href="#">
								<span className="sr-only">Workflow</span>
								<Image
									src="/logo.svg"
									height={64}
									width={64}
									alt="Deer X Application Logo"
								/>
							</a>
						</div>
					</div>
				</nav>

				<div className="relative mt-24 max-w-md mx-auto px-4 pb-32 sm:max-w-3xl sm:px-6 md:mt-32 lg:max-w-7xl lg:px-8">
					<h1 className="text-4xl font-extrabold tracking-wide text-denison-red md:text-5xl lg:text-6xl">
						Support
					</h1>
					<p className="mt-6 max-w-3xl text-xl text-blue-gray-300">
						Need help with using the application? Contact us!
					</p>
				</div>
			</header>

			<main>
				{/* Cards */}
				<section
					className="-mt-32 max-w-md mx-auto relative z-10 px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8"
					aria-labelledby="contact-heading"
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

				{/* FAQ */}
				<section
					className="max-w-md mx-auto py-24 px-4 divide-y-2 divide-pink sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:py-32 lg:px-8"
					aria-labelledby="faq-heading"
				>
					<h2
						className="text-3xl font-extrabold text-denison-red"
						id="faq-heading"
					>
						Frequently asked questions
					</h2>
					<div className="mt-6 pt-10">
						<dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-8 md:gap-y-12">
							{faqs.map((faq) => (
								<div key={faq.id}>
									<dt className="text-lg font-medium text-denison-red">
										{faq.question}
									</dt>
									<dd className="mt-2 text-base text-pink">{faq.answer}</dd>
								</div>
							))}
						</dl>
					</div>
				</section>
			</main>
		</div>
	);
}
