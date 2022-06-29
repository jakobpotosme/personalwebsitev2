import Image from 'next/image'
import React from 'react'
import arrowDown from '../public/images/arrow-down.svg'
import {
  TiArrowDownOutline
} from 'react-icons/ti';


function Hero() {
    return (
        <>
        <div className='flex flex-col gap-y-6 max-w-7xl  py-72 px-24 xs:text-center xs:pl-56 '>
            
            <h1 className='font-regular text-2xl text-[#00A789]'>Hi, my name is</h1>
            <h1 className='font-bold text-6xl'>Jakob Potosme.</h1>
            <h1 className='font-bold text-6xl text-gray-400'>Using the web to make dreams a reality</h1>
            <p className='font-regular text-xl'>I’m a full stack developer specializing in building exceptional digital experiences. </p>
            
        </div>

        <a href='#aboutme' className='pt-20 pb-32 xs:pl-28' >
            {/* <Image  src={arrowDown} alt='arrow down' className='animate-[bounce_2s_linear_infinite] w-6 h-6 ' /> */}
            <TiArrowDownOutline size={56} className='animate-[bounce_2s_linear_infinite] fill-[#00A789] ' />
        </a>
        
        </>
        
    )
}

export default Hero
