import React from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import Faq from '../components/Faq';

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
const Qa:NextPage = () => {
    
  return (
    <>
    <header><Header/></header>
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
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