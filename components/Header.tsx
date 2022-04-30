import React, { FC } from 'react';
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
	BookmarkAltIcon,
	CalendarIcon,
	ChartBarIcon,
	CursorClickIcon,
	MenuIcon,
	PhoneIcon,
	PlayIcon,
	RefreshIcon,
	ShieldCheckIcon,
	SupportIcon,
	ViewGridIcon,
	XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Image from 'next/image';
import Link from 'next/link';
const solutions = [
	{
		name: 'Analytics',
		description:
			'Get a better understanding of where your traffic is coming from.',
		href: '#',
		icon: ChartBarIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers in a more meaningful way.',
		href: '#',
		icon: CursorClickIcon,
	},
	{
		name: 'Security',
		description: "Your customers' data will be safe and secure.",
		href: '#',
		icon: ShieldCheckIcon,
	},
	{
		name: 'Integrations',
		description: "Connect with third-party tools that you're already using.",
		href: '#',
		icon: ViewGridIcon,
	},
	{
		name: 'Automations',
		description:
			'Build strategic funnels that will drive your customers to convert',
		href: '#',
		icon: RefreshIcon,
	},
];
const callsToAction = [
	{ name: 'Watch Demo', href: '#', icon: PlayIcon },
	{ name: 'Contact Sales', href: '#', icon: PhoneIcon },
];
const resources = [
	{
		name: 'Help Center',
		description:
			'Get all of your questions answered in our forums or contact support.',
		href: '#',
		icon: SupportIcon,
	},
	{
		name: 'Guides',
		description:
			'Learn how to maximize our platform to get the most out of it.',
		href: '#',
		icon: BookmarkAltIcon,
	},
	{
		name: 'Events',
		description:
			'See what meet-ups and other events we might be planning near you.',
		href: '#',
		icon: CalendarIcon,
	},
	{
		name: 'Security',
		description: 'Understand how we take your privacy seriously.',
		href: '#',
		icon: ShieldCheckIcon,
	},
];
const recentPosts = [
	{ id: 1, name: 'Boost your conversion rate', href: '#' },
	{
		id: 2,
		name: 'How to use search engine optimization to drive traffic to your site',
		href: '#',
	},
	{ id: 3, name: 'Improve your customer experience', href: '#' },
];

function classNames(...classes: string[]) {
	return classes.filter(Boolean).join(' ');
}

const Header: FC = () => {
	return <></>;
};
export default Header;
