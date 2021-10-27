import React from "react"
import { projects } from './projectData'
 
function Projects() {
  return (


<div>
{projects.map(({src, name, stack, description, github, deployed}) => (
    
<section>
<img src={src} alt=''/>
<h1 className="uppercase tracking-wide text-sm text-indigo-600 font-bold">{name}</h1>
<p className='tracking-wide text-sm text-green-600 font-bold'>{stack}</p>
<p className="">{description}</p> 
<a href={github} className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Github</a>
          <a href={deployed} className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">Deployed Site</a>
</section>
    ))}
    




</div>
  )}
   
    

export default Projects;