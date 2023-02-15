import React from 'react'
import {Link} from 'react-router-dom'
import {AiOutlineShoppingCart} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between  items-center shadow-lg  py-5 px-5'>
        <ul className='flex space-x-5'>
            <li >
               <Link  to='/'  >
                   Home
               </Link>
            </li>

               <li>
                <Link  to='/about'>
                   About
               </Link>
               </li>
               

               <li >
               <Link  to='/store'  >
                   Store
               </Link>
            </li>
            
        </ul>

        <button className='flex justify-end relative'>
          <AiOutlineShoppingCart size={30} />
        <span className='bg-red-400 text-sm rounded-full p-1 absolute right-0 bottom-0 translate-x-[25%] translate-y-[45%]'>
            3
        </span>
        </button>
        

        
        
        </div>
  )
}

export default Navbar