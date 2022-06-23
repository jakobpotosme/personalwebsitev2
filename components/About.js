import React, {useState} from 'react'
import Image from 'next/image'
import Me from '../public/images/me.png'
// import Me from '../public/images/test.jpg'
import nextJsIcon from '../public/images/next-js.svg'
import reactIcon from '../public/images/react.svg'
import tailwindIcon from '../public/images/tailwind.svg'
import supabaseIcon from '../public/images/supabase.svg'
import jsIcon from '../public/images/js.svg'
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiJavascript,
  SiSupabase
} from 'react-icons/si';

import {
  Tooltip,
} from 'react-tippy';

function About() {

    const [toggle,setToggle] = useState(1)
    const [isShown, setIsShown] = useState(false);

    const toggleTab = (index) =>{
        setToggle(index)
    }

    return (
        <div className='flex flex-col gap-y-2 justify-left items-left  py-32 px-24 max-w-7xl '>
            
            <div id='aboutme' className="relative flex py-5 items-center gap-x-6">
                <span className="flex-shrink text-2xl font-semibold">About Me</span>
                <div className="w-1/3 border-t border-white"></div>
            </div>


            <div className='flex flex-row justify-between pb-10'>

                <div className='w-1/2 flex flex-col gap-y-4'>
                    <h3>Hello! My name is Jakob.  My interests in programming stems
    from my passion for sneakers. I was amazed by how powerful software can be. </h3>
                    <h3>Now, I have had the pleasure of working on numerous projects turning ideas into a reality by designing and creating applications from start to finish. </h3>
                    <h3>I am currently seeking opportunities that will allow me to use the skills that I have learned from both university and personal projects, in order to make a difference as a developer.</h3>

                </div>

                <div className=' -mt-20 '>
                    <Image src={Me} alt='personal picture' height={350} width={350} className='' />
                </div>
                
                
            </div>

            <div className=' '>
                <h1 className="flex-shrink text-2xl font-semibold pb-10"> Current Favorite Tech Stack</h1>
                {toggle === 2 && 
                <div className='bg-slate-800 z-40 max-w-xs p-4'>
                    <h1>Next js Framework</h1>
                </div>
                    }
                <div className='flex flex-row gap-x-10'>
                    
                    {/* <div onMouseEnter={()=>{toggleTab(2)}} onMouseLeave={()=>{toggleTab(1)}} className='p-2' >
                    
                        <Image src={nextJsIcon} alt='nextjs' width={40} height={40} />
                        
                    </div> */}
                    <Tooltip
                    title="Next.js
, currently my go-to framework because of the static generation, dynamic paths, and built-in api."
                    position="bottom"
                    trigger="mouseenter "
                    >
                        {/* <Image src={nextJsIcon} alt='nextjs' width={40} height={40} /> */}
                        <SiNextdotjs size={42} className=' hover:fill-[#00A789]'/>
                    </Tooltip>
                    
                    <Tooltip
                    title="React
, first frontend framework that I learned, great if you are making an authenticated website."
                    position="bottom"
                    trigger="mouseenter "
                    >
                        {/* <Image src={reactIcon} alt='react'  width={40} height={40}/> */}
                        <SiReact size={42} className=' hover:fill-[#00A789]'/>
                    </Tooltip>
                    <Tooltip
                    title="Tailwind CSS ,
                    easy styling which saving me from a bunch of headaches. Great extension as well."
                    position="bottom"
                    trigger="mouseenter "
                    >
                        {/* <Image src={tailwindIcon} alt='tailwind' width={40} height={40} /> */}
                        <SiTailwindcss size={42} className=' hover:fill-[#00A789]'/>
                    </Tooltip>

                    <Tooltip
                    title="Supabase ,
                    my current go to database, easy setup and reusability based on PostgresSQL
                    ."
                    position="bottom"
                    trigger="mouseenter "
                    
                    >
                        <SiSupabase  size={42} className=' hover:fill-[#00A789]'/>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="img" width="40" height="40" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="white" d="M21.362 9.354H12V.396a.396.396 0 0 0-.716-.233L2.203 12.424l-.401.562a1.04 1.04 0 0 0 .836 1.659H12v8.959a.396.396 0 0 0 .716.233l9.081-12.261l.401-.562a1.04 1.04 0 0 0-.836-1.66z"/></svg> */}
                    </Tooltip>
                    
                    <Tooltip
                    title="JavaScript ,
                    staple language of the world wide web."
                    position="bottom"
                    trigger="mouseenter "
                    
                    
                    >
                        <SiJavascript  size={42} className=' hover:fill-[#00A789]'/>
                       {/* <Image src={jsIcon} alt='js'width={40} height={40} /> */}

                    </Tooltip>
                    
                    
                    
                    
                    
                </div>

            </div>
           
        </div>
    )
}

export default About
