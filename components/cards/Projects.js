import React from 'react'
import Image from 'next/image'


const Projects = ({name, description, tech, image}) => {
  return (
    <div className='w-1/3 flex flex-col bg-slate-700 '>
        <h1 className='text-xl font-semibold pb-4'>{name}</h1>
        <h3>{description}</h3>
        <h3>{tech}</h3>
        <Image src={image} width={500} height={400}  alt='img' />
        
        {console.log(image)}
    </div>
 
 
  )
}

export default Projects