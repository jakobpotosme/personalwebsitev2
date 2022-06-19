import React from 'react'

function About() {
    return (
        <div className='flex flex-col gap-y-2 justify-left items-left py-32 px-24'>
            
            <div className="relative flex py-5 items-center gap-x-6">
                <span className="flex-shrink mx-4 text-2xl font-semibold">About Me</span>
                <div className="w-1/4 border-t border-white"></div>
            </div>


            <div>

                <div className='w-1/2 flex flex-col gap-y-4'>
                <h3>Hello! My name is Jakob.  My interests in programming stems
from my passion for sneakers. I was amazed by how powerful software can be. </h3>
                <h3>Now, I have had the pleasure of working on numerous projects turning ideas into a reality by designing and creating applications from start to finish. </h3>
                <h3>I am currently seeking opportunities that will allow me to use the skills that I have learned from both university and personal projects, in order to make a difference as a developer.</h3>

                </div>
                
            </div>
           
        </div>
    )
}

export default About
