import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Member from '../components/Member';
import phineas from '../img/phineas.jpg';
import wilson from '../img/wilson.jpg';

const members = [
  {
    key: 0,
    src: phineas,
    linkedln: "https://www.linkedin.com/in/phineaspham/",
    //add git link
    name: "Phineas Pham",
    title: "Founder"
  },
  {
    key: 1,
    src: phineas,
    linkedln: "https://www.linkedin.com/in/phineaspham/",
    name: "Phineas Pham",
    title: "Founder"
  },
  {
    key: 2,
    src: wilson,
    linkedln: "https://www.linkedin.com/in/wilsonle02/",
    name: "Wilson Le",
    title: "Co-founder & Lead Developer"
  },
  {
    key: 3,
    src: wilson,
    linkedln: "https://www.linkedin.com/in/wilsonle02/",
    name: "Wilson Le",
    title: "Co-founder & Lead Developer"
  },
  {
    key: 4,
    src: wilson,
    linkedln: "https://www.linkedin.com/in/wilsonle02/",
    name: "Wilson Le",
    title: "Co-founder & Lead Developer"
  },
]

const About:NextPage = () => {
  return (
    <>
      <header className='text-center'>
        <Header/>
      </header>
      <div className='bg-about-us bg-cover'>
        <div className="max-w-md mx-auto py-28 px-4 sm:max-w-3xl lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-wide md:text-5xl lg:text-6xl text-center mb-10">Meet our team</h1>
          <section style={{padding: "0 20%"}}>
            <div className='border-denison-red border-4 p-5 text-xl text-blue-gray-300 bg-white bg-opacity-90 font-sans font-light'>
              Welcome to DeerX, the official marketplace app for Denison University! We are a team of students committing 
              to use technologies to solve this pressing problem, and we are excited to introduce this new platform to the 
              Denison community as a way to connect students and make it easier to buy and sell goods and services on campus.
            </div>
          </section>
          <section className='grid md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 p-10 gap-y-3'>
            {members.map(member=>{
              return(
                <>
                  <Member content={member}/>
                </>)
              })}
          </section>
        </div>
      </div>
      <footer>
        <Footer underline={false}/>
      </footer>
    </>
  )
}

export default About;