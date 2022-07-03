
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
     {/* <div className='mx-auto flex justify-between px-24 pt-12'>
        
        <Link href='/' className='text-xl'>
            <TiArrowLeftOutline size={40} className=' hover:fill-[#00A789]'></TiArrowLeftOutline>
        </Link>

        
        

    </div>
    <div className='flex justify-center items-center h-screen'>Coming soon...</div> */}
    <Header />
    <div className='flex justify-center pt-20'>

        <h1 className='font-semibold text-lg'>Welcome to my blog. This is where I will be writing about things I have learned in my programming journey.</h1>
    </div>

    <div>

      {articles && articles.map(elem =>{
        return(
          <Articles key={elem.id} title={elem.title} description={elem.description} 
          cover_img={elem.cover_image} url={elem.canonical_url} published_at={elem.published_at}
          comments_count={elem.comments_count} page_views_count={elem.page_views_count}
          reading_time_minutes={elem.reading_time_minutes}
          
          />
        )
      })}
      
    </div>
    </>
  )
}

export default Blog