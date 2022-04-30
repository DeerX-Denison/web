import { FC } from 'react';
import { ChevronRightIcon, StarIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faApple } from '@fortawesome/free-brands-svg-icons';
import Link from 'next/link';

const Hero: FC = () => {
	return (
		<div className="pb-8 sm:pb-12 lg:pb-12">
			<div className="pt-8 overflow-hidden sm:pt-12 lg:relative lg:py-48">
				<div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl lg:grid lg:grid-cols-2 lg:gap-24">
					<div>
						<div>
							<Image
								src="/logo.svg"
								alt="DeerX Logo"
								height={180}
								width={180}
							/>
						</div>
						<div className="mt-20">
							<div>
								<Link href="/change-log" passHref>
									<div className="inline-flex text-xs font-semibold text-denison-red tracking-wide uppercase hover:underline hover:cursor-pointer">
										<span className="pr-2.5 py-1">What&apos;s new</span>
										<span className="pr-2.5 py-1">
											Just shipped version 1.0.3
										</span>
									</div>
								</Link>
							</div>
							<div className="mt-6 sm:max-w-xl">
								<h1 className="text-4xl font-extrabold text-denison-red tracking-widest sm:text-5xl">
									DeerX
								</h1>
								<p className="mt-6 text-xl text-denison-red">
									A user experience focused, mobile marketplace app for Denison
									University students.
								</p>
							</div>

							<div className="mt-6">
								<Link
									href="https://apps.apple.com/us/app/deerx/id1598439145"
									passHref
								>
									<button
										type="button"
										className="inline-flex items-center px-6 py-3 border-2 border-denison-red shadow-sm text-base font-medium rounded-md text-denison-red bg-gray hover:border-pink hover:text-pink"
									>
										<FontAwesomeIcon
											icon={faApple}
											className="mr-2"
											size="2x"
										/>
										Download
									</button>
								</Link>
							</div>
						</div>
					</div>
				</div>

				<div className="sm:mx-auto sm:max-w-3xl sm:px-6">
					<div className="py-12 sm:relative sm:mt-12 sm:py-16 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
						<div className="hidden lg:block">
							<div className="absolute inset-y-0 left-1/2 w-screen bg-gray-50 rounded-l-3xl lg:left-80 lg:right-0 lg:w-full" />
							<svg
								className="absolute top-8 right-1/2 -mr-3 lg:m-0 lg:left-0"
								width={480}
								height={480}
								fill="none"
								viewBox="0 0 404 392"
							>
								<defs>
									<pattern
										id="837c3e70-6c3a-44e6-8854-cc48c737b659"
										x={0}
										y={0}
										width={20}
										height={20}
										patternUnits="userSpaceOnUse"
									>
										<rect
											x={0}
											y={0}
											width={4}
											height={4}
											className="text-pink"
											fill="currentColor"
										/>
									</pattern>
								</defs>
								<rect
									width={404}
									height={392}
									fill="url(#837c3e70-6c3a-44e6-8854-cc48c737b659)"
								/>
							</svg>
						</div>
						<div className="aspect-[ip12] hidden lg:block w-2/3 h-2/3 ml-40 max-w-xs max-h-80">
							<Image
								height={2159}
								width={1056}
								src="/landingPage.png"
								alt="Opening screen of Deer X Application"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Hero;
