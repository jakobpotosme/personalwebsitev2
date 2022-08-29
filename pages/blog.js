import Link from "next/link";
import React, { useEffect } from "react";
import Header from "../components/Header";
import { TiArrowLeftOutline } from "react-icons/ti";
import Articles from "../components/Articles";
import useSWR from "swr";

const fetcher = (url) =>
  fetch(url, { method: "GET" }).then((res) => res.json());

function Blog() {
  const { data: articles, error } = useSWR("api/articles", fetcher);

  return (
    <>
      {/* <div className='mx-auto flex justify-between px-24 pt-12'>
        
        <Link href='/' className='text-xl'>
            <TiArrowLeftOutline size={40} className=' hover:fill-[#00A789]'></TiArrowLeftOutline>
        </Link>

        
        

    </div>
    <div className='flex justify-center items-center h-screen'>Coming soon...</div> */}
      <Header />
      <div className="flex flex-col px-40  pt-20 max-w-6xl  xs:px-4 xs:w-[32rem]  mx-auto ">
        <h1 className="font-semibold text-lg xs:text-xl text-center">
          Welcome to my blog. This is where I will be writing about things that
          interest me, mainly topics that I have found useful in my programming
          journey. Including anything I find interesting, enjoy!
        </h1>

        <div className=" pt-20">
          {articles &&
            articles.map((elem) => {
              return (
                <Articles
                  key={elem.id}
                  title={elem.title}
                  description={elem.description}
                  cover_img={elem.cover_image}
                  url={elem.canonical_url}
                  published_at={elem.published_at}
                  comments_count={elem.comments_count}
                  page_views_count={elem.page_views_count}
                  reading_time_minutes={elem.reading_time_minutes}
                  body_markdown={elem.body_markdown}
                  body_html={elem.body_html}
                />
              );
            })}
        </div>
      </div>

      {/* <div className='flex justify-center pt-20' >

      {articles && articles.map(elem =>{
        return(
          <Articles key={elem.id} title={elem.title} description={elem.description} 
          cover_img={elem.cover_image} url={elem.canonical_url} published_at={elem.published_at}
          comments_count={elem.comments_count} page_views_count={elem.page_views_count}
          reading_time_minutes={elem.reading_time_minutes} body_markdown={elem.body_markdown}
          
          />
        )
      })}
      
    </div> */}
    </>
  );
}

export default Blog;
