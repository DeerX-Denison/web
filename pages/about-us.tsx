import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Member from '../components/Member';

const members = [
  {
    key: 0,
    src: "https://media.licdn.com/dms/image/D5603AQEIhtJSlQ62og/profile-displayphoto-shrink_400_400/0/1665092210258?e=1678320000&v=beta&t=SLoVT98lhDZL9eBnGxjFszMqGSQOBcvnnALZS1ntfQk",
    redir: "https://www.linkedin.com/in/phineaspham/"
  },
  {
    key: 1,
    src: "https://media.licdn.com/dms/image/D5603AQEIhtJSlQ62og/profile-displayphoto-shrink_400_400/0/1665092210258?e=1678320000&v=beta&t=SLoVT98lhDZL9eBnGxjFszMqGSQOBcvnnALZS1ntfQk",
    redir: "https://www.linkedin.com/in/phineaspham/"
  },
  {
    key: 2,
    src: "https://media.licdn.com/dms/image/C4D03AQH6AYjbzO3SzA/profile-displayphoto-shrink_400_400/0/1611496098054?e=1678320000&v=beta&t=cZNpzDSF_iiBKgD5lw-kq345bJNFU4scpoJ13yu7lCA",
    redir: "https://www.linkedin.com/in/wilsonle02/"
  }
]

const About:NextPage = () => {
  return (
    <>
      <header className='text-center'>
        <Header/>
      </header>
      <body className="max-w-md mx-auto py-20 px-4 sm:py-32 sm:max-w-3xl lg:max-w-7xl lg:px-8">
        <h1 className='text-6xl mb-8 text-center'>Meet our team</h1>
        <section style={{padding: "0 20%"}}>
          <div className='border-2 border-dark-red p-5'>
            Welcome to DeerX, the official marketplace app for Denison University! We are excited to introduce 
            this new platform to the Denison community as a way to connect students and make it easier to buy 
            and sell goods and services on campus. Whether you're looking to sell your old textbooks, dorm utilities, 
            or unused clothing DeerX has you covered. We hope this app will help foster a sense of community and make 
            it easier for everyone to find what they need. Download DeerX today and start exploring all the great things 
            our campus has to offer!
          </div>
        </section>
        <section className='grid md:grid-cols-2 sm:grid-cols-1 2xl:grid-cols-3 p-10'>
          {members.map(member=>{
            return(
              <>
                <Member content={member}/>
              </>)
            })}
        </section>
      </body>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}

export default About;