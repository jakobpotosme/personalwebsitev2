import Link from 'next/link'
import React from 'react'
// import resume from '../public/files/resume.pdf'

function Header() {
  return (
    <div className='mx-auto max-w-7xl flex justify-between px-10 pt-12 xs:pl-24'>
        
        <Link href='/'>
            <a className='text-xl xs:inline-flex '>Jakob Potosme</a>
        </Link>
        

        <div className='xs:pl-12 flex flex-row gap-x-10 justify-center items-center '>
            <ul className='flex flex-row gap-x-10  '>
                <li >
                    <Link href="/blog"  >Blog</Link>
                </li>
                <li>
                    <Link href="/web3" >Web3</Link>
                </li>
            </ul>
            
            
            <Link href="resume.pdf" >
                <button className=' p-2 border-[#00A789] hover:bg-[#007583]/30 border rounded-md '>
                    Resume
                </button>
            </Link>
            
        </div>
        

    </div>
  )
}

export default Header