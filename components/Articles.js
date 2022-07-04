import React from 'react'
import Link from 'next/link'
const Articles = ({title,body_markdown, description, url, cover_img, published_at, comments_count, page_views_count,reading_time_minutes}) => {
  return (
    <div className=' hover:border rounded-md  p-2 mb-5 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-104 duration-300'>
        <div className='flex flex-row justify-between '>
          <h1 className='text-[#14C38E]  text-3xl tracking-wide pb-6 hover:underline'>
            <Link href={url} >{title}</Link>
          </h1>
          
          <div className='flex flex-row gap-x-4'>
            <h1 className='text-[#8996BB]' >{page_views_count} views</h1>
            <h1 className='text-[#8996BB]'>{reading_time_minutes} min to read</h1>
          </div>
          

        </div>
        
        <p className='py-10 text-md text-[#8996BB] w-full'>{description}</p>
        
        {/* <h1>{cover_img}</h1>
        <h1>{published_at}</h1>
        <h1>{comments_count} </h1>
        <h1>{reading_time_minutes}</h1> */}
        {/* <p>{body_markdown}</p> */}
        

    </div>
  )
}

export default Articles