import React from 'react'
import type { NextPage } from 'next'
import Container from '../components/Container';
import DeviceArrowIcon from '../components/icon/DeviceArrowIcon';
import DeviceCardsIcon from '../components/icon/DeviceCardsIcon';
import DeviceClockIcon from '../components/icon/DeviceClockIcon';
import DeviceListIcon from '../components/icon/DeviceListIcon';
import DeviceLockIcon from '../components/icon/DeviceLockIcon';
import DeviceChartIcon from '../components/icon/DeviceChartIcon';
import DeviceUserIcon from '../components/icon/DeviceUserIcon';
import Header from '../components/Header';


const features = [
  // {
  //   name: '',
  //   description:
  //     'Whether it’s $1 or $1,000,000, we can put your money to work for you.',
  //   icon: DeviceArrowIcon,
  // },
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
  // {
  //   name: 'Portfolio tracking',
  //   description:
  //     'Watch your investments grow exponentially, leaving other investors in the dust.',
  //   icon: DeviceChartIcon,
  // },
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
      </div>
    </section>
    </>
  )
}

export default Feature;