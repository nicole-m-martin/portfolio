import React from "react"
import { projects } from './projectData'
 
function Projects() {
  return (


<div>
{projects.map(({src, name, stack, description, github, deployed}) => (
    
<section>
<img src={src} alt=''/>
<h1>{name}</h1>
<p>{stack}</p>
<p>{description}</p> 
</section>
    ))}
    




</div>
  )}
   
    

export default Projects;