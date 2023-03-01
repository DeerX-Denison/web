import React from 'react';
import { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import internal from 'stream';

interface Props{
  position: number,
  image: StaticImageData,
}

const FeatureContent:FC<Props> = (props) =>{
  return (
    <div className='grid md:grid-cols-2'>
        {props.position % 2 != 0 ? <div className="feature-img">
          <Image src={props.image} alt="Listing Feature"/>
        </div>:null}
        <div className="flex flex-col justify-center">
          <div className="text-denison-red mb-5">Lorem ipsum dolor sit amet.</div>
          <h2 className="text-3xl font-bold mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
          <div className='mb-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Molestiae quasi, fugit nostrum labore sequi officia ex saepe repudiandae 
          vitae quas assumenda dignissimos reprehenderit amet eius quisquam voluptas, quod cumque eum.
          </div>
          <ul className='list-disc pl-4'>
            <li>Ability 1</li>
            <li>Ability 2</li>
            <li>Ability 3</li>
          </ul>
        </div>
        {props.position % 2 == 0 ? <div className="feature-img">
          <Image src={props.image} alt="Listing Feature" />
        </div>:null}
    </div>
  )
}
export default FeatureContent;
