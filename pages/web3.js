import Link from 'next/link'
import React from 'react'
import Header from '../components/Header'
import {
  TiArrowLeftOutline
} from 'react-icons/ti';

function web3() {
  return (
    <>
     <div className='mx-auto flex justify-between px-24 pt-12'>
        
        <Link href='/' className='text-xl'>
            <TiArrowLeftOutline size={40} className=' hover:fill-[#00A789]'></TiArrowLeftOutline>
        </Link>

        
        

    </div>
    <div className='flex justify-center items-center h-screen'>Coming soon...</div>
    </>
    
  )
}

export default web3