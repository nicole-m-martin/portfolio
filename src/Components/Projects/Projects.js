import React from "react"
import { projects } from './projectData'

 
function Projects() {
  return (


<div>
{projects.map(({image, name, stack, description, github, deployed}) => (
    
<section>
<img src={image} alt='pic' />
<h1>{name}</h1>
<p>{stack}</p>
<p>{description}</p>
<a href={github}>Github</a>
<a href={deployed}>Deployed</a>
</section>
    ))}
    




</div>
  )}
   
    

export default Projects;