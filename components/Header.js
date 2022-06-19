import Link from 'next/link'
import React from 'react'
// import resume from '../public/files/resume.pdf'

function Header() {
  return (
    <div className='mx-auto flex justify-between px-24'>
        
        <h1>Jakob Potosme</h1>

        <div className='flex flex-row gap-x-10 justify-center items-center '>
            <ul className='flex flex-row gap-x-10  '>
                <li>
                    <Link href="/" >Blog</Link>
                </li>
                <li>
                    <Link href="/" >Web3</Link>
                </li>
            </ul>
            

            <div className=' p-2 border-blue-400 border-2 rounded-md '>
                <Link href="resume.pdf" >Resume</Link>
            </div>
        </div>
        

    </div>
  )
}

export default Header