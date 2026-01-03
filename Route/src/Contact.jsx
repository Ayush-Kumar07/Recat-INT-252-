import React from 'react'

const Contact = () => {
  return (
<>
    <form className='space-y-4 border flex flex-col justify-center items-center' action="">
         <input className='border p-3 text-xl rounded-full' type="text" placeholder='enter your name' />
        <input className='border p-3 text-xl rounded-full' type="email" placeholder='enter your email'  />
        <input className='border p-3 text-xl rounded-full' type="password"   placeholder='enter password'/>
    </form>
</>    
)
}

export default Contact