import React from "react"
 
function Header() {
  return (
    <div>
      <div>
        <nav className='flex items-center justify-between flex-wrap bg-gray-300 p-2'>
          <h1>Nicole Martin</h1>
         
          <a href="/" className='text-black-200 hover:text-red mr-4'>Home</a>
          <a href="/projects" className=' text-black-200 hover:text-red mr-4'>Projects</a>
          <a href="/about" className='text-black-200 hover:text-red mr-4'>About</a>
          <a href="/contact" className='text-black-200 hover:text-red mr-4'>Contact</a>
        </nav>

      </div>
    </div>
  )
}
 
export default Header;