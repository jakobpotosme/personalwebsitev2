import React from 'react'

function Hero() {
    return (
        <div className='flex flex-col gap-y-2 justify-left items-left  py-72 px-24'>
            <h1 className='font-regular text-lg'>Hi, my name is</h1>
            <h1 className='font-bold text-4xl'>Jakob Potosme.</h1>
            <h1 className='font-bold text-4xl text-gray-400'>Using the web to make dreams a reality</h1>
            <p className='font-regular text-sm'>I’m a full stack developer specializing in building exceptional digital experiences. </p>
        </div>
    )
}

export default Hero
