
import Link from 'next/link'
import React, { useEffect } from 'react'
import Header from '../components/Header'
import {
  TiArrowLeftOutline
} from 'react-icons/ti';
import Articles from '../components/Articles';
import useSWR from 'swr'

const fetcher = (url) => fetch(url, {method: 'GET'}).then(res => res.json());

function Blog() {


  const {data: articles ,error} = useSWR('api/articles', fetcher)
  
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

export default Blog