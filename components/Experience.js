import React, {useState} from 'react'
import SweepEnergy from './cards/SweepEnergy'
import Smolpad from './cards/Smolpad'


const Experience = () => {

    const [toggle,setToggle] = useState(1)

    const toggleTab = (index) =>{
        setToggle(index)
    }

  return (
    <div className='flex flex-col gap-y-2  max-w-7xl  py-32 px-24   '>
            
            <div className="relative flex py-5 items-center gap-x-6">
                <span className="flex-shrink text-2xl font-bold">Experience</span>
                <div className="w-1/3 border-t border-white"></div>
            </div>
            

            <div className='flex flex-row gap-x-10'>
                <div>
                    <ul className=''>
                        <li  className={ toggle === 1 ? ` flex flex-row border-l-4 border-[#00A789] bg-[#10223E] p-2` : ` flex flex-row border-l-4 border-slate-700  p-2 `}>
                            {/* <div className='border-l-4 border-slate-700 p-2'></div> */}
                            <button onClick={()=>{toggleTab(1)}} className='w-full p-4  text-[#00A789] '>
                                SweepEnergy
                            </button>
                            
                        </li>
                        <li className={ toggle === 2 ? ` flex flex-row border-l-4 border-[#00A789] bg-[#10223E] p-2` : ` flex flex-row border-l-4 border-slate-700  p-2 `} >
                            <button onClick={()=>{toggleTab(2)}} className='w-full p-4  hover:bg-[#10223E] text-[#00A789]'>
                                Smolpad
                            </button>
                            {/* Smolpad */}
                        </li>
                    </ul>
                </div>
                <div>
                    {toggle === 1 && <SweepEnergy />}
                    {toggle === 2 && <Smolpad />}
                </div>
            </div>
            

           
        </div>
  )
}

export default Experience