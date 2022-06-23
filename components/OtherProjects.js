import React, { useEffect,useState } from 'react'
import { supabase } from '../utils/supabaseClient'
import Projects from './cards/Projects'


function OtherProjects() {

    const [projects, setProjects] = useState([])


    const getProjects = async () =>{
        let { data: Projects, error,status } = await supabase
            .from('projects')
            .select('*')
            
            

            
        if (error && status !== 406) {
                throw error
        }

        if(Projects){
            console.log(Projects)
            setProjects(Projects)
        }
    }

    useEffect(() =>{
        getProjects()
    }, [])

  return (
   <div className='py-24'>
        
        <h1 className='flex items-center justify-center flex-shrink text-2xl font-semibold'>Other Projects</h1>
        {/* {console.log(projects)} */}
        <div className='flex gap-x-10'>
            {projects && projects.map(elem =>{
            return(
                <Projects key={elem.id} name = {elem.name} description = {elem.description} 
                tech = {elem.tech} image = {elem.image} />
            )
        })}
        </div>
        

    </div>
  )
}

export default OtherProjects




// export async function getStaticProps(context) {

//     let { data: Projects, error,status } = await supabase
//             .from('profiles')
//             .select('*')
            

            
//         if (error && status !== 406) {
//                 throw error
//         }

//         if(Projects){
//             console.log(Projects)
//         }

            
            

//     return {
//         props: {Projects}, // will be passed to the page component as props
//     }
// }