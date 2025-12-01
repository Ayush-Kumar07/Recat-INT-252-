import React from 'react'

const Navbar = () => {
  return (
    <>
    <div className='nav flex justify-between items-center p-4 bg-blue-200'>
      <div>
        <img src=" " alt="" className='w-24' />
      </div>
    <div>
    <button className='p-4 text-2xl bg-blue-400 border space-x-4'>Home</button>
    <button className='p-4 text-2xl bg-blue-400 border space-x-4'>About us</button>
    <button className='p-4 text-2xl bg-blue-400 border space-x-4'>Contac us</button>


    </div>
    <div>
    <button className='p-4 text-2xl bg-blue-400 border space-x-4'>Download App</button>
</div>
</div>
    </>
  )
}

export default Navbar