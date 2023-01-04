import React, {FC} from 'react'
import { Disclosure } from '@headlessui/react'
import ArrowUpIcon from '../components/icon/ArrowUpIcon';
import Image from 'next/image';
import Link from "next/link"; 

interface Props{
    content:{
        key: number,
        src: string,
        redir: string,
    }
}

const Member:FC<Props> = (props) => {
  return (
    <div className='flex flex-col items-center'>
        <div className="w-36 h-36" style={{borderRadius: "50%"}}>
            <a href={props.content.redir} target="_blank" rel="noopener noreferrer">
                <Image src={props.content.src}
                    width={152}
                    height={152}
                    style={{borderRadius: "50%"}}
                />
            </a>
        </div>
        <h2>Name</h2>
        <p>Title & Position</p>
    </div>
  )
}

export default Member;