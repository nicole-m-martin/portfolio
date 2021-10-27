import React from "react"
 
function Header() {
  return (
    <div>
      <div>
        <nav className='flex justify-start md:justify-evenly flex-row space-x-4 bg-gray-300 p-2'>
          <h1>Nicole Martin</h1>
         
         
          <a href="/projects" className='text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0'>Projects</a>
          <a href="/about" className='text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0'>About</a>
          <a href="/contact" className='text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-yellow-500 mt-4 md:mt-0'>Contact</a>
        </nav>

      </div>
    </div>
  )
}
 
export default Header;