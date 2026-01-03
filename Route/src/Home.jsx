import React from 'react'

const Home = () => {
  return (
    <>
    <div className=' grid grid-cols-2'>
    <form className='space-y-4 border flex flex-col justify-center items-center' action="">
        <input className='border p-3 text-xl rounded-full' type="text" placeholder='enter your name' />
        <input className='border p-3 text-xl rounded-full' type="email" placeholder='enter your email'  />
        <input className='border p-3 text-xl rounded-full' type="password"   placeholder='enter password'/>
    </form>
    <div className='border p-3'>
        <img className='w-40' src="https://cdn.vectorstock.com/i/1000v/05/68/globe-silhouette-vector-19700568.jpg" alt="" />
    </div>
    </div>
    </>
  )
}

export default Home