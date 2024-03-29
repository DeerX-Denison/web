import React from 'react'
import type { NextPage } from 'next'
import DeviceCardsIcon from '../components/icon/DeviceCardsIcon';
import DeviceClockIcon from '../components/icon/DeviceClockIcon';
import DeviceListIcon from '../components/icon/DeviceListIcon';
import DeviceUserIcon from '../components/icon/DeviceUserIcon';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FeatureContent from '../components/FeatureContent';
import listing from '../public/image/listing.png';
import chat from '../public/image/chat.png';
import createItem from '../public/image/create-item.png';
import likedItem from '../public/image/liked-item.png';
import menu from '../public/image/menu.png';

const features = [
  {
    name: 'List of products',
    description:
      'Find out your products in our market platform and look for what you need.',
    icon: DeviceCardsIcon,
  },
  {
    name: 'Trade in real-time',
    description:
      'Get insider tips on big stock moves and act on them within seconds.',
    icon: DeviceClockIcon,
  },
  {
    name: 'Profit from your network',
    description:
      'Invite new insiders to get tips faster and beat even other Pocket users.',
    icon: DeviceListIcon,
  },
  {
    name: 'Encrypted and anonymized',
    description:
      'Cutting-edge security technology that even the NSA doesn’t know about keeps you hidden.',
    icon: DeviceUserIcon,
  },
];

const stacks = [
  {
    position: 1,
    image: listing,
  },
  {
    position: 2,
    image: chat,
  },
  {
    position: 3,
    image: createItem,
  },
  {
    position: 4,
    image: likedItem,
  },
  {
    position: 5,
    image: menu,
  },
]

const Feature:NextPage = () => {
  return (
    <>
    <header><Header/></header>
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-denison-red">
            Now is the time to build your portfolio.
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            With typical market returns, you have to start young to secure your
            future. With Pocket, it’s never too late to build your nest egg.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg: gap-x-10 lg:max-w-none lg:px-10 lg:grid-cols-2"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8"
            >
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-semibold text-dark-red">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
        <div> 
          {stacks.map((stack)=>{
            return (
              <FeatureContent key={stack.position} position={stack.position} image={stack.image}/>
            )
          })}
        </div>
      </div>
    </section>
    <Footer underline={true}/>
    </>
  )
}

export default Feature;