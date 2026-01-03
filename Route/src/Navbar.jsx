import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex justify-evenly items-center bg-gray-400 h-20'>
      <div className='flex space-x-16'> 
        <p>
        <Link to={'/'} >Home</Link>
        </p>
        <p>
         <Link to={'/contact'} >Contact </Link>
        </p>
        <p>
            <Link to={'/about'} >About</Link>
            </p>
      </div>
      <div className='flex space-x-8 items-center'>
        <img className='w-40 h-20' src="https://easydrawingguides.com/wp-content/uploads/2017/04/how-to-draw-goku-featured-image-1200.png"></img>
      </div>
    </div>
    ) 
        }

export default Navbar