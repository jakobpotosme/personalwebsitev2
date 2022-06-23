import Link from 'next/link'
import React from 'react'
// import resume from '../public/files/resume.pdf'

function Header() {
  return (
    <div className='mx-auto flex justify-between px-24 pt-12'>
        
        <h1 className='text-xl'>Jakob Potosme</h1>

        <div className='flex flex-row gap-x-10 justify-center items-center '>
            <ul className='flex flex-row gap-x-10  '>
                <li >
                    <Link href="/"  >Blog</Link>
                </li>
                <li>
                    <Link href="/" >Web3</Link>
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