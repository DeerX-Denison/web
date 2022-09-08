import React, {FC} from 'react'
import type { NextPage } from 'next'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Disclosure } from '@headlessui/react'
import ArrowUpIcon from '../components/icon/ArrowUpIcon';

interface Props{
    content:{
        id: number,
        question: string,
        answer: string,
    }
}

const Faq:FC<Props> = (props) => {
  return (
    <>
        <Disclosure>
        {({ open }) => (
            <>
            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                <span className="text-denison-red">{props.content.question}</span>
                <ArrowUpIcon width={16} className={`${open ? "rotate-180 transform" : ""}`}/>
            </Disclosure.Button>
            <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 text-pink">
                {props.content.answer}
            </Disclosure.Panel>
            </>
        )}
        </Disclosure>
    </>
  )
}

export default Faq;