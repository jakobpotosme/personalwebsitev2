import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import rocket from '../public/images/rocket.gif'
import preview from '../public/images/smolpadPreview.png'
import externalLink from '../public/images/external-link.svg'
import {
  BiLinkExternal
} from 'react-icons/bi';

const Featured = () => {
  return (
    <div className='flex flex-col gap-y-2  max-w-7xl  py-32 px-24  '>
            
            <div className="relative flex py-5 items-center gap-x-6">
                <span className="flex-shrink text-2xl font-semibold">Featured Project</span>
                <div className="w-1/3 border-t border-white"></div>
            </div>

            <div className='flex flex-row items-center  '>
              
              <div className='mr-24'>
                <Image src={rocket} alt='Rocket gif' width={400} height={400} />
              </div>
              

              <div className='flex flex-col gap-y-4'>
                <h1 className='text-2xl font-semibold'>Smolpad</h1>
                <h3  className='text-lg '>A Web3 launchpad built to create high quality experiences while providing security 
                      for the community
                  
                </h3>
                
                <div className='rounded flex items-end'>
                  <a href={'https://www.smolpad.lol/'} passhref='true'>
                  <Image src={preview} alt='preview'  width={800} height={250} className='rounded-xl' ></Image>
                  {/* <Image src={externalLink} alt='link' width={25} height={25} /> */}
                  </a>
                   
                </div>

                <div className='flex gap-x-6 justify-end items-center'>
                  <h1 className='text-xl font-semibold pt-2'>Side Projects</h1>
                  <a href={'https://github.com/jakobpotosme?tab=repositories'} passhref='true' className='pt-2'>
                  {/* <Image src={externalLink} alt='link' width={25} height={25} quality={100} /> 
                  */}
                  <BiLinkExternal size={20} className=' hover:fill-[#00A789]' />
                  </a>
                   
                </div>
                

              </div>
            </div>

            

            
           
        </div>
  )
}

export default Featured